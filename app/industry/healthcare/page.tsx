import type { Metadata } from 'next';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  path: '/industry/healthcare',
  title: 'Healthcare Solutions | Nexvibe',
  description:
    'Professional healthcare digital solutions focused on patient experience, operational clarity, and secure data-driven workflows.',
  keywords: [
    'healthcare digital solutions',
    'patient portal development',
    'healthcare ux',
    'medical workflow platform',
    'nexvibe healthcare',
  ],
});

const capabilities = [
  {
    title: 'Patient-Focused Experience Design',
    description:
      'Accessible interfaces for appointment flow, care communication, and treatment visibility.',
  },
  {
    title: 'Operational Dashboard Systems',
    description:
      'Clear dashboards for admin teams to monitor utilization, service performance, and capacity.',
  },
  {
    title: 'Digital Intake and Scheduling',
    description:
      'Structured intake and scheduling workflows that reduce wait time and process friction.',
  },
  {
    title: 'Secure Integration Architecture',
    description:
      'Scalable systems prepared for EHR, communication tools, and healthcare process integrations.',
  },
];

const process = [
  {
    step: '01',
    title: 'Clinical and Operational Discovery',
    detail:
      'We map stakeholder needs, patient journeys, and operational priorities for digital transformation.',
  },
  {
    step: '02',
    title: 'System and Experience Blueprint',
    detail:
      'We define product structure, access patterns, and workflow architecture for dependable usage.',
  },
  {
    step: '03',
    title: 'Implementation and Validation',
    detail:
      'Our team ships features with quality testing focused on reliability, usability, and responsiveness.',
  },
  {
    step: '04',
    title: 'Optimization and Scale Support',
    detail:
      'We track usage insights and continuously improve both care-side and operations-side experiences.',
  },
];

const outcomes = [
  'Improved patient experience quality',
  'Reduced operational process friction',
  'Higher scheduling and intake efficiency',
  'Better internal visibility through dashboards',
  'Scalable digital foundation for care delivery',
  'Reliable support for continuous improvement',
];

export default function HealthcareIndustryPage() {
  return (
    <main className="relative overflow-hidden bg-(--bg) py-[clamp(4rem,8vw,7rem)] text-(--text)">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(var(--accent-rgb),0.6),transparent)]" />
      <div className="pointer-events-none absolute -left-16 top-16 h-72 w-72 rounded-full bg-[rgba(var(--accent-rgb),0.08)] blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-300 flex-col gap-14 px-4 sm:px-6 lg:px-10">
        <section className="rounded-3xl border border-[rgba(var(--accent-rgb),0.2)] bg-[linear-gradient(145deg,rgba(var(--accent-rgb),0.16),rgba(var(--accent-rgb),0.04)_45%,transparent_80%)] p-8 sm:p-10 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--accent)">
            Industry Solutions
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Healthcare
          </h1>
          <p className="mt-5 max-w-3xl text-[0.98rem] leading-relaxed text-(--text-secondary) sm:text-[1.05rem]">
            Build trustworthy digital healthcare experiences that support both patient outcomes and operational excellence.
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
          <h2 className="text-2xl font-semibold sm:text-3xl">How We Support Healthcare Teams</h2>
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
          <h2 className="text-2xl font-semibold sm:text-3xl">Need a Trusted Healthcare Product Partner?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-(--text-secondary)">
            Collaborate with a team that prioritizes clarity, usability, and dependable product delivery.
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
