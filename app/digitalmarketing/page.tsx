import type { Metadata } from 'next';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  path: '/digitalmarketing',
  title: 'Digital Marketing Services | Nexvibe',
  description:
    'Accelerate growth with data-driven digital marketing strategies across SEO, paid media, social campaigns, and lifecycle communication.',
  keywords: [
    'digital marketing services',
    'seo services',
    'paid ads management',
    'social media marketing',
    'nexvibe digital marketing',
  ],
});

const channels = [
  {
    title: 'Search Engine Optimization',
    detail: 'Technical and content-led SEO to improve visibility and qualified traffic.',
  },
  {
    title: 'Performance Advertising',
    detail: 'ROI-focused paid campaigns on Google, Meta, and other high-intent channels.',
  },
  {
    title: 'Social Media Marketing',
    detail: 'Consistent brand communication that grows reach and engagement.',
  },
  {
    title: 'Email & Retention Campaigns',
    detail: 'Automated lifecycle funnels that convert leads and increase repeat revenue.',
  },
];

const framework = [
  {
    number: '01',
    title: 'Audit & Goal Definition',
    description: 'We evaluate your current funnel, market positioning, and growth opportunities.',
  },
  {
    number: '02',
    title: 'Strategy & Campaign Planning',
    description: 'We create a channel-specific execution plan with clear KPIs and budgets.',
  },
  {
    number: '03',
    title: 'Execution & Optimization',
    description: 'Campaigns are launched, measured, and improved continuously for better performance.',
  },
  {
    number: '04',
    title: 'Reporting & Scale',
    description: 'Transparent reporting and strategic iteration help you scale with confidence.',
  },
];

const advantages = [
  'Data-Backed Decisions',
  'Conversion-Focused Strategy',
  'Transparent Reporting',
  'Cross-Channel Coordination',
  'Cost-Efficient Campaigns',
  'Growth-Oriented Execution',
];

export default function DigitalMarketingPage() {
  return (
    <main className="relative overflow-hidden bg-(--bg) py-[clamp(4rem,8vw,7rem)] text-(--text)">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(var(--accent-rgb),0.65),transparent)]" />
      <div className="relative z-10 mx-auto flex w-full max-w-300 flex-col gap-16 px-4 sm:px-6 lg:px-10">
        <section className="rounded-3xl border border-[rgba(var(--accent-rgb),0.25)] bg-[linear-gradient(160deg,rgba(var(--accent-rgb),0.16),transparent_70%)] p-7 sm:p-10 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--accent)">Digital Marketing Services</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Drive measurable growth through strategic digital marketing
          </h1>
          <p className="mt-5 max-w-3xl text-[0.98rem] leading-relaxed text-(--text-secondary) sm:text-[1.05rem]">
            We blend performance data, content strategy, and campaign optimization to generate results you can measure.
          </p>
          <div className="mt-8">
            <Link href="/book-call" className="inline-flex rounded-full bg-(--accent) px-8 py-3 text-sm font-semibold text-(--bg) transition-transform duration-300 hover:scale-105">
              Start Your Project
            </Link>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">Marketing Channels We Manage</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {channels.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.06)] p-6">
                <h3 className="text-lg font-semibold text-(--text)">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">Our Marketing Framework</h2>
          <div className="grid gap-4 lg:grid-cols-2">
            {framework.map((step) => (
              <article key={step.number} className="rounded-2xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.05)] p-6">
                <p className="text-4xl font-bold leading-none text-[rgba(var(--accent-rgb),0.35)]">{step.number}</p>
                <h3 className="mt-3 text-xl font-semibold text-(--text)">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">Why Teams Choose Our Approach</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item) => (
              <div key={item} className="rounded-xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.04)] px-4 py-3 text-sm text-(--text)">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[rgba(var(--accent-rgb),0.25)] bg-[rgba(var(--accent-rgb),0.08)] p-8 text-center sm:p-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">Ready to Scale Your Digital Presence?</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-(--text-secondary) sm:text-base">
            Let us build a practical growth engine tailored to your market, audience, and business goals.
          </p>
          <div className="mt-7">
            <Link href="/book-call" className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-(--accent) px-8 py-3 text-sm font-semibold text-(--bg) transition-all duration-300 hover:scale-105 active:scale-95">
              Get Started Today
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
