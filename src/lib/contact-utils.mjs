const NEEDS = new Set(["Business website", "Landing page", "Website redesign", "Something else"]);

const singleLine = (value) => value.replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim();

export function parseContactPayload(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return { ok: false, error: "Please check the form and try again." };
  }

  const data = payload;
  if (typeof data.website === "string" && data.website.trim()) return { ok: true, spam: true };

  const raw = [data.name, data.business, data.email, data.phone, data.need, data.message];
  const limits = [100, 120, 254, 32, 100, 2000];
  if (raw.some((value, index) => typeof value !== "string" || value.length > limits[index])) {
    return { ok: false, error: "Please check the form fields and try again." };
  }

  const name = singleLine(data.name);
  const business = singleLine(data.business);
  const email = singleLine(data.email);
  const phone = singleLine(data.phone);
  const need = singleLine(data.need);
  const message = data.message.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").replace(/\r\n?/g, "\n").trim();
  const phoneDigits = phone.replace(/\D/g, "").length;

  if (!name || !business || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      || !/^\+?[0-9][0-9\s().-]{5,30}$/.test(phone) || phoneDigits < 7 || phoneDigits > 15
      || !NEEDS.has(need)) {
    return { ok: false, error: "Please fill in the required fields with valid contact details." };
  }

  return { ok: true, spam: false, value: { name, business, email, phone, need, message } };
}

export function getWhatsAppUrl(number, message = "Hi Zero One, I would like to discuss a website for my business.") {
  const digits = typeof number === "string" ? number.replace(/\D/g, "") : "";
  if (!/^\d{8,15}$/.test(digits)) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function getPhoneHref(number) {
  const digits = typeof number === "string" ? number.replace(/\D/g, "") : "";
  if (!/^\d{8,15}$/.test(digits)) return null;
  return `tel:+${digits}`;
}

export function createRateLimiter({ limit, windowMs }) {
  const entries = new Map();
  let lastCleanup = 0;

  return {
    check(key, now = Date.now()) {
      if (now - lastCleanup > 60_000) {
        for (const [entryKey, timestamps] of entries) {
          if (!timestamps.some((timestamp) => now - timestamp < windowMs)) entries.delete(entryKey);
        }
        lastCleanup = now;
      }

      const timestamps = (entries.get(key) ?? []).filter((timestamp) => now - timestamp < windowMs);
      if (timestamps.length >= limit) {
        entries.set(key, timestamps);
        return { limited: true, retryAfterSeconds: Math.max(1, Math.ceil((windowMs - (now - timestamps[0])) / 1000)) };
      }
      if (!entries.has(key) && entries.size >= 10_000) entries.delete(entries.keys().next().value);
      timestamps.push(now);
      entries.set(key, timestamps);
      return { limited: false, retryAfterSeconds: 0 };
    },
  };
}
