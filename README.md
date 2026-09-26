# Zero One

The Zero One agency homepage, built with Next.js App Router, React, TypeScript, Tailwind CSS, Motion and Lucide.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Before launch

Copy `.env.example` to `.env.local`. The WhatsApp number and destination inbox are prefilled with the supplied Zero One contact details. Set:

- `RESEND_API_KEY` — API key for the Resend account that will deliver project inquiries.
- `RESEND_API_KEY` — secret API key for the Resend account that delivers project inquiries.
- `RESEND_FROM_EMAIL` — sender address on a domain verified in Resend.
- `NEXT_PUBLIC_SITE_URL` — actual deployed origin (temporary preview URL is fine), with scheme and no path.

The contact form returns a clear setup message until the email settings are present. WhatsApp and phone links use the supplied Zero One number. Search metadata, Open Graph image, robots and sitemap use the canonical URL when it is set. Read [DEPLOYMENT.md](./DEPLOYMENT.md) before launch.

## Checks

```bash
npm run lint
npm test
npm run build
```

The build script runs the TypeScript check before the optimized Next.js build.
