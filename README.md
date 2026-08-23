# Nexvibe

AI-driven data solutions agency website — built with [Next.js 16](https://nextjs.org), [React 19](https://react.dev), and [Tailwind CSS 4](https://tailwindcss.com).

## Pages

| Route              | Description                        |
|--------------------|------------------------------------|
| `/`                | Home — hero, services, portfolio, FAQ, testimonials |
| `/about`           | About the team and mission         |
| `/services`        | Service offerings                  |
| `/portfolio`       | Case studies and project showcase  |
| `/careers`         | Open positions + application form  |
| `/contact`         | Contact form                       |
| `/privacy-policy`  | Privacy policy                     |
| `/terms-of-service`| Terms of service                   |

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4, CSS variables for theming
- **Animation:** GSAP, Framer Motion, AOS
- **Email:** Resend + React Email (contact & career forms with confirmation emails)
- **Rate Limiting:** Upstash Redis + `@upstash/ratelimit`
- **Bot Protection:** Cloudflare Turnstile
- **Validation:** Zod
- **Icons:** Lucide React, React Icons

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (or npm)
- Accounts: [Resend](https://resend.com), [Upstash](https://upstash.com), [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/)

### Install & Run

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable                       | Purpose                          |
|--------------------------------|----------------------------------|
| `RESEND_API_KEY`               | Resend API key for sending emails|
| `RESEND_FROM_EMAIL`            | Sender address for emails        |
| `CONTACT_TO_EMAIL`             | Recipient for contact form submissions |
| `CAREERS_TO_EMAIL`             | Recipient for job applications   |
| `UPSTASH_REDIS_REST_URL`       | Upstash Redis REST URL           |
| `UPSTASH_REDIS_REST_TOKEN`     | Upstash Redis REST token         |
| `TURNSTILE_SECRET_KEY`         | Cloudflare Turnstile secret key  |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY`| Cloudflare Turnstile site key   |

## Project Structure

```
app/
  (website)/          # Page routes (home, about, services, etc.)
  api/                # API routes (contact, careers)
components/
  common/             # Shared components (WhatsApp button)
  home/               # Home page sections (Hero, FAQ, Portfolio, etc.)
  layout/             # Navbar, Footer
  ui/                 # Reusable UI components (Button, Cards, Forms)
emails/               # React Email templates (contact & career notifications)
lib/                  # Utilities (validation, rate limiting, Turnstile)
```

## Scripts

| Command          | Description              |
|------------------|--------------------------|
| `bun run dev`    | Start development server |
| `bun run build`  | Production build         |
| `bun run start`  | Start production server  |
| `bun run lint`   | Run ESLint               |

## Deploy

Deploy on [Vercel](https://vercel.com):

```bash
vercel
```

Make sure to add all environment variables in the Vercel project settings.
