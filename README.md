 ESEnergy

Next.js website for **ES Energy** — engineered solar solutions for residential, commercial, and industrial projects in Pakistan.

## Stack

- **Next.js 15** (App Router)
- **Supabase** — leads, newsletter, calculator quote inquiries
- **Pure CSS** design system aligned to ES Energy brand (navy · lime green · solar orange)

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> **Important:** Always use `npm run dev` (not multiple terminals). It auto-clears cache and frees port 3000 to prevent 500 errors.

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp Business number (e.g. `923001234567`) |
| `NEXT_PUBLIC_PHONE_NUMBER` | Display / call number |
| `NEXT_PUBLIC_OFFICE_ADDRESS` | Office address in footer & contact |
| `NEXT_PUBLIC_SITE_URL` | Production URL for SEO |

## Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. Add URL and anon key to `.env.local`.
3. In the Supabase SQL editor, run `supabase/schema.sql`.
4. Restart `npm run dev`.

**What saves to Supabase:**
- Contact form → `leads` table (`POST /api/leads`)
- Newsletter signup → `newsletter_subscribers` (`POST /api/newsletter`)
- Solar calculator CTA → `quote_inquiries` (`POST /api/quotes`)

Until Supabase keys are added, forms return a clear configuration error — no fake success states.

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## Brand assets

- Logo: `public/logo.jpg`
- Hero: `public/hero_solar_architecture.webp`
- Sector images: `public/images/`
