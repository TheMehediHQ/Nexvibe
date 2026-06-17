import type { Metadata } from 'next';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  path: '/industry/ecommerce',
  title: 'E-commerce Solutions | Nexvibe',
  description:
    'Professional e-commerce solutions for brands that need faster storefronts, better conversions, and scalable growth operations.',
  keywords: [
    'ecommerce development',
    'shop optimization',
    'conversion rate optimization',
    'ecommerce growth',
    'nexvibe ecommerce',
  ],
});

const capabilities = [
  {
    title: 'Storefront Engineering',
    description:
      'Modern, fast-loading storefronts with clear navigation and mobile-first user journeys.',
  },
  {
    title: 'Conversion Optimization',
    description:
      'Product page, cart, and checkout improvements designed to reduce drop-offs and increase sales.',
  },
  {
    title: 'Catalog and Merchandising',
    description:
      'Scalable catalog structures, filtering systems, and content organization for better product discovery.',
  },
  {
    title: 'Retention and Lifecycle',
    description:
      'Post-purchase automations, remarketing flows, and customer lifecycle tactics that improve repeat revenue.',
  },
];

const process = [
  {
    step: '01',
    title: 'Audit and Opportunity Mapping',
    detail:
      'We review conversion funnel performance, user friction points, and technical constraints.',
  },
  {
    step: '02',
    title: 'Experience and Architecture Planning',
    detail:
      'We define UX improvements, technical roadmap, and platform-level implementation priorities.',
  },
  {
    step: '03',
    title: 'Implementation and QA',
    detail:
      'Our team ships improvements with structured testing across key devices and commerce flows.',
  },
  {
    step: '04',
    title: 'Performance Tracking and Iteration',
    detail:
      'We monitor key metrics and continuously optimize for conversion, retention, and growth.',
  },
];

const outcomes = [
  'Higher conversion rates across key funnels',
  'Faster storefront performance and reduced bounce',
  'Stronger mobile shopping experience',
  'Improved average order value opportunities',
  'Reliable integration with marketing stack',
  'Scalable foundation for long-term growth',
];

export default function EcommerceIndustryPage() {
  return (
    <main className="relative overflow-hidden bg-(--bg) py-[clamp(4rem,8vw,7rem)] text-(--text)">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(var(--accent-rgb),0.6),transparent)]" />
      <div className="pointer-events-none absolute -right-12 top-16 h-72 w-72 rounded-full bg-[rgba(var(--accent-rgb),0.08)] blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-300 flex-col gap-14 px-4 sm:px-6 lg:px-10">
        <section className="rounded-3xl border border-[rgba(var(--accent-rgb),0.2)] bg-[linear-gradient(145deg,rgba(var(--accent-rgb),0.16),rgba(var(--accent-rgb),0.04)_45%,transparent_80%)] p-8 sm:p-10 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--accent)">
            Industry Solutions
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            E-commerce
          </h1>
          <p className="mt-5 max-w-3xl text-[0.98rem] leading-relaxed text-(--text-secondary) sm:text-[1.05rem]">
            Build high-performing shopping experiences that convert consistently and support sustainable revenue growth.
          </p>
          <div className="mt-8">
            <Link
              href="/book-call"
              className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-(--accent) px-8 py-3 text-sm font-semibold text-(--bg) transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold sm:text-3xl">What We Deliver for E-commerce Teams</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.05)] p-6"
              >
                <h3 className="text-lg font-semibold text-(--text)">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold sm:text-3xl">Delivery Framework</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {process.map((item) => (
              <article key={item.step} className="rounded-2xl border border-[rgba(var(--accent-rgb),0.2)] p-6">
                <p className="text-4xl font-bold leading-none text-[rgba(var(--accent-rgb),0.35)]">{item.step}</p>
                <h3 className="mt-3 text-xl font-semibold text-(--text)">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold sm:text-3xl">Expected Business Outcomes</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.04)] px-4 py-3 text-sm text-(--text)"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[rgba(var(--accent-rgb),0.25)] bg-[rgba(var(--accent-rgb),0.08)] p-8 text-center sm:p-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">Ready to Scale Your E-commerce Performance?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-(--text-secondary)">
            Align product, experience, and growth strategy with a delivery team focused on measurable outcomes.
          </p>
          <div className="mt-7">
            <Link
              href="/book-call"
              className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-(--accent) px-8 py-3 text-sm font-semibold text-(--bg) transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
