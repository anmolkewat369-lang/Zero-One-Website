import test from "node:test";
import assert from "node:assert/strict";
import { createRateLimiter, getPhoneHref, getWhatsAppUrl, parseContactPayload } from "../src/lib/contact-utils.mjs";

const validPayload = {
  name: "Anmol Kewat",
  business: "Zero One",
  email: "anmol@example.com",
  phone: "+91 96301 94023",
  need: "Business website",
  message: "A new website please.",
  website: "",
};

test("accepts valid enquiry details and normalizes single-line fields", () => {
  const result = parseContactPayload({ ...validPayload, name: " Anmol\nKewat " });
  assert.equal(result.ok, true);
  if (result.ok && !result.spam) assert.equal(result.value.name, "Anmol Kewat");
});

test("rejects malformed, incomplete, oversized and unsupported enquiry data", () => {
  for (const payload of [null, [], { ...validPayload, email: "bad-address" }, { ...validPayload, need: "Guaranteed sales" }, { ...validPayload, message: "x".repeat(2001) }]) {
    assert.equal(parseContactPayload(payload).ok, false);
  }
});

test("honeypot submissions return a silent spam result", () => {
  assert.deepEqual(parseContactPayload({ website: "bot filled this" }), { ok: true, spam: true });
});

test("builds safe WhatsApp and phone links only for plausible international numbers", () => {
  assert.match(getWhatsAppUrl("+91 96301 94023"), /^https:\/\/wa\.me\/919630194023\?text=/);
  assert.equal(getPhoneHref("+91 96301 94023"), "tel:+919630194023");
  assert.equal(getWhatsAppUrl("123"), null);
  assert.equal(getPhoneHref(undefined), null);
});

test("limits repeated requests within a window and releases the limit afterwards", () => {
  const limiter = createRateLimiter({ limit: 2, windowMs: 60_000 });
  assert.equal(limiter.check("test-ip", 0).limited, false);
  assert.equal(limiter.check("test-ip", 100).limited, false);
  const blocked = limiter.check("test-ip", 200);
  assert.equal(blocked.limited, true);
  assert.ok(blocked.retryAfterSeconds > 0);
  assert.equal(limiter.check("test-ip", 60_001).limited, false);
});
