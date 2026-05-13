# Nexvibe Website

Production-focused freelance portfolio built with Next.js App Router and TypeScript.  
It showcases services, projects, experience, recognition, and blog content with route-level SEO metadata and server-side data loading for key content paths.

## Tech Stack

- Next.js `16.1.6` (App Router)
- React `19`
- TypeScript
- Tailwind CSS `v4`
- GSAP + SplitType + Lenis (motion and interactions)
- EmailJS (booking form integration)

## Core Features

- Server-rendered data layer for projects, experience, and recognitions.
- Dynamic project and blog pages with static params where applicable.
- Route-level canonical metadata (no global canonical tag).
- Sitemap and robots alignment for indexable routes.
- `next/image` optimization across portfolio and MDX image rendering.
- Modular feature architecture (`app/features/*`) with shared hooks/services.
- Dashboard data seam with testable GitHub API client abstraction.
- CI quality gates for lint, typecheck, and tests.

## Routes

- `/` Home
- `/about`
- `/portfolio`
- `/projects/[slug]`
- `/certifications`
- `/blog`
- `/blog/[slug]`
- `/dashboard`
- `/freelancing`
- `/links`
- `/robots.txt`
- `/sitemap.xml`

## Project Structure

```txt
app/
  components/                 # Route-level composition and shared UI wrappers
  features/                   # Feature modules (navbar, skills, dashboard, project-details, ...)
  hooks/                      # Shared hooks/primitives
  about/
  blog/
  dashboard/
  freelancing/
  links/
  portfolio/
  projects/[slug]/
  certifications/
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts

content/
  blog/*.mdx                  # Blog posts

public/
  assets/images/              # Project, blog, certificate, profile images
  data/*.json                 # Projects, selected projects, experience, certificates

lib/
  blog.ts                     # MDX post loading
  seo.ts                      # Metadata and canonical helpers
  site-data.ts                # Server-only JSON data access
  services/github-api.ts      # External API seam for tests and dashboard

tests/
  unit/
  smoke/
```

For architectural boundaries, see [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Environment Variables

Create `.env.local` as needed:

```bash
# Optional (fallback exists)
NEXT_PUBLIC_CALENDLY_URL=
NEXT_PUBLIC_WHATSAPP_URL=
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
NEXT_PUBLIC_BING_SITE_VERIFICATION=

# Required for EmailJS booking submissions
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_USER_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

## Local Development

### Prerequisites

- Node.js `20+`
- npm `10+`

### Install and Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev        # Start local dev server
npm run build      # Production build
npm run start      # Run production server
npm run lint       # ESLint
npm run typecheck  # TypeScript checks (no emit)
npm run test       # Node test runner (unit + smoke)
```

## Content Management

- Blog posts: add `.mdx` files in `content/blog`.
  - Include `coverImage` in frontmatter for social previews (`og:image` / `twitter:image`).
- Projects and highlights: edit `public/data/projects.json` and `public/data/selected-projects.json`.
- Experience: edit `public/data/experience.json`.
- Recognition/certificates: edit `public/data/certificates.json`.

## Quality and CI

CI workflow: `.github/workflows/quality.yml`

- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- Tests: `npm run test`

## SEO Notes

- Route-level metadata is generated with `createPageMetadata` in `lib/seo.ts`.
- Canonical URLs are set per route.
- Dynamic URLs for blog/project pages are included in `app/sitemap.ts`.
- `app/robots.ts` points crawlers to `sitemap.xml`.
- Blog detail pages include `BlogPosting` JSON-LD structured data.
- Google/Bing site verification tags are injected from environment variables.

## Deployment

This project is Vercel-ready but can run on any Node host supporting Next.js.

Standard production flow:

```bash
npm ci
npm run build
npm run start
```
