export type ContactValues = {
  name: string;
  business: string;
  email: string;
  phone: string;
  need: string;
  message: string;
};

export type ContactParseResult =
  | { ok: false; error: string }
  | { ok: true; spam: true }
  | { ok: true; spam: false; value: ContactValues };

export function parseContactPayload(payload: unknown): ContactParseResult;
export function getWhatsAppUrl(number: string | undefined, message?: string): string | null;
export function getPhoneHref(number: string | undefined): string | null;
export function createRateLimiter(options: { limit: number; windowMs: number }): {
  check(key: string, now?: number): { limited: boolean; retryAfterSeconds: number };
};
