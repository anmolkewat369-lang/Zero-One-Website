# Deploying Zero One

The site is ready to be connected to a hosting provider. Deployment has not been performed.

## Runtime and build

- Use Node.js 22 LTS (`.nvmrc`); the package also accepts Node 22–26.
- Install dependencies with `npm ci`.
- Run `npm run lint`, `npm test` and `npm run build` before release.
- Configure the host to use `npm run build` and `npm start` (or its native Next.js deployment integration).

## Environment variables

Set these in the hosting provider's encrypted environment-variable settings. Do not commit `.env.local` or any secret.

| Variable | Value / purpose |
| --- | --- |
| `RESEND_API_KEY` | Secret API key from the Zero One Resend account. |
| `CONTACT_EMAIL` | `anmolkewat369@gmail.com` |
| `RESEND_FROM_EMAIL` | Sender address on a domain verified in Resend. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `919630194023` (digits only, country code included). |
| `NEXT_PUBLIC_PHONE_NUMBER` | `+919630194023` |
| `NEXT_PUBLIC_SITE_URL` | The actual HTTPS deployment origin, including the temporary preview host until a permanent domain is selected. |
| `NEXT_PUBLIC_ALLOW_INDEXING` | Keep `false` on previews; set `true` only when the public production site is ready to appear in search. |

Public variables are embedded in the client bundle at build time. Set them before building the production deployment. The canonical origin must be HTTPS, without a path or trailing slash. HTTP is accepted only for localhost development.

## Email delivery

1. Create or select the Zero One Resend account.
2. Verify a sending domain there, then set `RESEND_FROM_EMAIL` to a sender on that verified domain.
3. Add `RESEND_API_KEY` only in the hosting provider's secret settings and set the destination inbox.
4. Deploy a preview and submit one real enquiry. Confirm receipt and reply-to behavior before sharing the URL.

Without complete Resend settings, the form safely reports that email delivery is unavailable; WhatsApp and phone remain available.

## Before sharing the site

- Set `NEXT_PUBLIC_SITE_URL` to the real preview origin. `robots.txt`, `sitemap.xml`, canonical metadata and Open Graph URLs use that configured origin.
- Keep `NEXT_PUBLIC_ALLOW_INDEXING=false` on the temporary preview; turn it on only for the public production deployment.
- Check `/privacy`, `/terms`, `/robots.txt`, `/sitemap.xml` and the generated `/opengraph-image` on the deployed preview.
- Test the contact form on desktop and mobile, including invalid input and the direct contact fallbacks.
- When a permanent domain is selected, update `NEXT_PUBLIC_SITE_URL`, configure DNS and HTTPS at the host, then rebuild and check canonical metadata again.

## Rate limiting note

The API applies a small in-memory per-process rate limit and an 8 KB request cap. In-memory counters reset when an instance restarts and are not shared across serverless instances. If the selected host runs multiple instances, enable its edge/WAF rate limit for `POST /api/contact` as an additional deployment setting.
