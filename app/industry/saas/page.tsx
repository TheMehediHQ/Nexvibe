import type { Metadata } from 'next';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  path: '/industry/saas',
  title: 'SaaS and Startup Solutions | Nexvibe',
  description:
    'Professional SaaS product solutions focused on activation, retention, and scalable growth for startup and product teams.',
  keywords: [
    'saas product development',
    'startup product design',
    'saas growth engineering',
    'product onboarding optimization',
    'nexvibe saas',
  ],
});

const capabilities = [
  {
    title: 'Product UX for Activation',
    description:
      'Onboarding and feature discovery experiences designed to move users to first value quickly.',
  },
  {
    title: 'SaaS Dashboard Engineering',
    description:
      'Modular dashboard systems for analytics, workflows, and account management at scale.',
  },
  {
    title: 'Feature Rollout Architecture',
    description:
      'Structured delivery approach for roadmap execution, experimentation, and progressive feature launches.',
  },
  {
    title: 'Retention and Expansion Flows',
    description:
      'Lifecycle and in-product experiences that improve stickiness, upsell potential, and account health.',
  },
];

const process = [
  {
    step: '01',
    title: 'Product Discovery and Prioritization',
    detail:
      'We align user needs, business goals, and roadmap priorities with clear release milestones.',
  },
  {
    step: '02',
    title: 'System and Experience Design',
    detail:
      'We define architecture, component strategy, and interaction patterns for speed and consistency.',
  },
  {
    step: '03',
    title: 'Iterative Build and QA',
    detail:
      'Features are delivered in focused iterations with quality checks across devices and user paths.',
  },
  {
    step: '04',
    title: 'Measurement and Optimization',
    detail:
      'We track activation, engagement, and retention signals to guide practical product improvements.',
  },
];

const outcomes = [
  'Faster time-to-value for new users',
  'Improved product adoption of core features',
  'Higher retention through better UX patterns',
  'Scalable frontend system for roadmap velocity',
  'Clearer product metrics for team decisions',
  'Stronger foundation for growth-stage execution',
];

export default function SaasIndustryPage() {
  return (
    <main className="relative overflow-hidden bg-(--bg) py-[clamp(4rem,8vw,7rem)] text-(--text)">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(var(--accent-rgb),0.6),transparent)]" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-[rgba(var(--accent-rgb),0.08)] blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-300 flex-col gap-14 px-4 sm:px-6 lg:px-10">
        <section className="rounded-3xl border border-[rgba(var(--accent-rgb),0.2)] bg-[linear-gradient(145deg,rgba(var(--accent-rgb),0.16),rgba(var(--accent-rgb),0.04)_45%,transparent_80%)] p-8 sm:p-10 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--accent)">
            Industry Solutions
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            SaaS and Startups
          </h1>
          <p className="mt-5 max-w-3xl text-[0.98rem] leading-relaxed text-(--text-secondary) sm:text-[1.05rem]">
            Build product experiences that improve activation, accelerate iteration, and support sustainable SaaS growth.
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
          <h2 className="text-2xl font-semibold sm:text-3xl">How We Help SaaS Teams Scale</h2>
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
          <h2 className="text-2xl font-semibold sm:text-3xl">Planning Your Next SaaS Release Cycle?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-(--text-secondary)">
            Partner with a delivery team that balances product quality, speed, and measurable customer outcomes.
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
