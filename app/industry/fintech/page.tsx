import type { Metadata } from 'next';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  path: '/industry/fintech',
  title: 'FinTech Solutions | Nexvibe',
  description:
    'Professional FinTech product development for secure digital experiences, compliant workflows, and scalable financial platforms.',
  keywords: [
    'fintech development',
    'financial platform ui ux',
    'secure fintech apps',
    'fintech product engineering',
    'nexvibe fintech',
  ],
});

const capabilities = [
  {
    title: 'Secure Product Interfaces',
    description:
      'User-centric financial interfaces with clear data hierarchy, trust signals, and accessible interaction design.',
  },
  {
    title: 'Onboarding and KYC Flow Design',
    description:
      'Streamlined onboarding journeys that reduce friction while respecting compliance requirements.',
  },
  {
    title: 'Transaction and Dashboard Systems',
    description:
      'Responsive transaction experiences and operational dashboards for customers and internal teams.',
  },
  {
    title: 'Integration-Ready Architecture',
    description:
      'Scalable frontend and backend systems prepared for payments, banking APIs, and reporting tools.',
  },
];

const process = [
  {
    step: '01',
    title: 'Requirement and Compliance Discovery',
    detail:
      'We align product goals, regulatory context, and technical priorities before implementation starts.',
  },
  {
    step: '02',
    title: 'System Design and Risk Planning',
    detail:
      'We define architecture, security posture, and user flow structure for critical financial interactions.',
  },
  {
    step: '03',
    title: 'Build and Validation',
    detail:
      'Our team develops core features with quality checks focused on reliability, accuracy, and usability.',
  },
  {
    step: '04',
    title: 'Launch and Continuous Improvement',
    detail:
      'Post-launch, we monitor behavior and improve both product clarity and operational performance.',
  },
];

const outcomes = [
  'Higher user trust across critical financial journeys',
  'Reduced onboarding abandonment rates',
  'Improved operational visibility through dashboards',
  'Faster release cycles with scalable architecture',
  'Better decision-making from actionable product data',
  'Security-minded user experience foundation',
];

export default function FintechIndustryPage() {
  return (
    <main className="relative overflow-hidden bg-(--bg) py-[clamp(4rem,8vw,7rem)] text-(--text)">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(var(--accent-rgb),0.6),transparent)]" />
      <div className="pointer-events-none absolute -left-20 bottom-14 h-72 w-72 rounded-full bg-[rgba(var(--accent-rgb),0.09)] blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-300 flex-col gap-14 px-4 sm:px-6 lg:px-10">
        <section className="rounded-3xl border border-[rgba(var(--accent-rgb),0.2)] bg-[linear-gradient(145deg,rgba(var(--accent-rgb),0.16),rgba(var(--accent-rgb),0.04)_45%,transparent_80%)] p-8 sm:p-10 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--accent)">
            Industry Solutions
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Finance and FinTech
          </h1>
          <p className="mt-5 max-w-3xl text-[0.98rem] leading-relaxed text-(--text-secondary) sm:text-[1.05rem]">
            Build secure, scalable financial products with user experience and regulatory awareness at the core.
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
          <h2 className="text-2xl font-semibold sm:text-3xl">How We Support FinTech Products</h2>
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
          <h2 className="text-2xl font-semibold sm:text-3xl">Looking for a Reliable FinTech Delivery Partner?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-(--text-secondary)">
            Collaborate with a team that understands product quality, user trust, and long-term platform scalability.
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
