import { NextRequest, NextResponse } from "next/server";
import { createRateLimiter, parseContactPayload } from "@/lib/contact-utils.mjs";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 8 * 1024;
const rateLimiter = createRateLimiter({ limit: 5, windowMs: 10 * 60 * 1000 });

async function readBody(request: NextRequest): Promise<string | null> {
  const contentLength = request.headers.get("content-length");
  if (contentLength && (!/^\d+$/.test(contentLength) || Number(contentLength) > MAX_BODY_BYTES)) return null;
  if (!request.body) return "";

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY_BYTES) {
        await reader.cancel();
        return null;
      }
      chunks.push(value);
    }
    const body = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) {
      body.set(chunk, offset);
      offset += chunk.byteLength;
    }
    return new TextDecoder("utf-8", { fatal: true }).decode(body);
  } catch {
    return null;
  } finally {
    reader.releaseLock();
  }
}

function getClientKey(request: NextRequest) {
  // Use common host-provided forwarding headers; configure the hosting proxy to overwrite them.
  return request.headers.get("cf-connecting-ip")
    || request.headers.get("x-real-ip")
    || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || "unknown";
}

function isEmail(value: string) {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function safeError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

export async function POST(request: NextRequest) {
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return safeError("Please send the enquiry using the form.", 415);
  }

  const rate = rateLimiter.check(getClientKey(request));
  if (rate.limited) {
    return NextResponse.json(
      { error: "Too many enquiries have been sent. Please wait a little and try again." },
      { status: 429, headers: { "Retry-After": String(rate.retryAfterSeconds) } },
    );
  }

  const body = await readBody(request);
  if (body === null) return safeError("Your enquiry is too large or could not be read. Please shorten it and try again.", 413);

  let payload: unknown;
  try {
    payload = JSON.parse(body) as unknown;
  } catch {
    return safeError("Please check the form and try again.", 400);
  }

  const parsed = parseContactPayload(payload);
  if (!parsed.ok) return safeError(parsed.error, 400);
  if (parsed.spam) return NextResponse.json({ ok: true });
  const { name, business, email, phone, need, message } = parsed.value;

  const apiKey = process.env.RESEND_API_KEY;
  const destination = process.env.CONTACT_EMAIL;
  const sender = process.env.RESEND_FROM_EMAIL;
  const senderAddress = sender?.match(/<([^<>]+)>/)?.[1] ?? sender ?? "";
  if (!apiKey || !destination || !sender || /[\r\n]/.test(sender) || !isEmail(destination) || !isEmail(senderAddress)) {
    return safeError("The enquiry form is not available right now. Please use one of the direct contact options.", 503);
  }

  let response: Response | null = null;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: sender,
        to: [destination],
        reply_to: email,
        subject: `New Zero One project enquiry from ${name}`,
        text: [`Name: ${name}`, `Business: ${business}`, `Email: ${email}`, `Phone / WhatsApp: ${phone}`, `Need: ${need}`, "", "Project details:", message || "(not provided)"].join("\n"),
      }),
      signal: AbortSignal.timeout(8000),
    });
  } catch {
    response = null;
  }

  if (!response?.ok) return safeError("We couldn’t send your message just now. Please use one of the direct contact options.", 502);
  return NextResponse.json({ ok: true }, { status: 200 });
}
