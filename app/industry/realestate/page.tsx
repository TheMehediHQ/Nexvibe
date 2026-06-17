import type { Metadata } from 'next';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  path: '/industry/realestate',
  title: 'Real Estate Solutions | Nexvibe',
  description:
    'Professional real estate digital solutions for property discovery, lead capture, and high-conversion client experiences.',
  keywords: [
    'real estate digital solutions',
    'property portal development',
    'real estate lead generation',
    'real estate ux',
    'nexvibe real estate',
  ],
});

const capabilities = [
  {
    title: 'Property Discovery Experiences',
    description:
      'Search-first interfaces with filters, map views, and listing detail layouts for faster decision-making.',
  },
  {
    title: 'Lead Capture and Qualification',
    description:
      'High-intent inquiry flows and qualification structures that improve sales pipeline quality.',
  },
  {
    title: 'Agent and Team Dashboards',
    description:
      'Operational dashboards for lead tracking, listing management, and performance oversight.',
  },
  {
    title: 'Marketing and CRM Integrations',
    description:
      'Connected systems for campaign tracking, follow-up automation, and CRM-driven workflows.',
  },
];

const process = [
  {
    step: '01',
    title: 'Market and Funnel Discovery',
    detail:
      'We analyze audience behavior, listing strategy, and conversion funnel challenges before execution.',
  },
  {
    step: '02',
    title: 'Experience and Platform Blueprint',
    detail:
      'We define the product structure, listing flow, and technical approach for scalable growth.',
  },
  {
    step: '03',
    title: 'Build and Quality Delivery',
    detail:
      'Our team implements features with quality assurance across user paths and device contexts.',
  },
  {
    step: '04',
    title: 'Launch and Optimization',
    detail:
      'We monitor conversion metrics and iterate continuously to improve lead and listing performance.',
  },
];

const outcomes = [
  'Higher quality inbound lead volume',
  'Better listing engagement and dwell time',
  'Improved funnel conversion across key stages',
  'Operational clarity for agents and teams',
  'Scalable digital foundation for expansion',
  'More predictable marketing-to-sales performance',
];

export default function RealEstateIndustryPage() {
  return (
    <main className="relative overflow-hidden bg-(--bg) py-[clamp(4rem,8vw,7rem)] text-(--text)">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(var(--accent-rgb),0.6),transparent)]" />
      <div className="pointer-events-none absolute -left-16 bottom-8 h-72 w-72 rounded-full bg-[rgba(var(--accent-rgb),0.08)] blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-300 flex-col gap-14 px-4 sm:px-6 lg:px-10">
        <section className="rounded-3xl border border-[rgba(var(--accent-rgb),0.2)] bg-[linear-gradient(145deg,rgba(var(--accent-rgb),0.16),rgba(var(--accent-rgb),0.04)_45%,transparent_80%)] p-8 sm:p-10 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--accent)">
            Industry Solutions
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Real Estate
          </h1>
          <p className="mt-5 max-w-3xl text-[0.98rem] leading-relaxed text-(--text-secondary) sm:text-[1.05rem]">
            Build high-conversion real estate platforms that connect listings, leads, and sales execution.
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
          <h2 className="text-2xl font-semibold sm:text-3xl">How We Support Real Estate Teams</h2>
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
          <h2 className="text-2xl font-semibold sm:text-3xl">Need Better Real Estate Lead Performance?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-(--text-secondary)">
            Let&apos;s build a digital experience that improves lead quality, conversion consistency, and team productivity.
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
