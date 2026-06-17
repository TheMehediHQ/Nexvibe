import type { Metadata } from 'next';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  path: '/webdevelopement',
  title: 'Web Development Services | Nexvibe',
  description:
    'Build high-performance, scalable websites and web applications designed for growth, conversion, and long-term maintainability.',
  keywords: [
    'web development services',
    'nextjs development',
    'react development',
    'custom web applications',
    'nexvibe web development',
  ],
});

const serviceAreas = [
  {
    title: 'Custom Website Development',
    detail: 'Business websites focused on speed, clarity, and lead generation.',
  },
  {
    title: 'Web Application Engineering',
    detail: 'Scalable applications with secure architecture and clean code standards.',
  },
  {
    title: 'E-commerce Development',
    detail: 'Conversion-focused storefronts with seamless checkout experiences.',
  },
  {
    title: 'API & Integrations',
    detail: 'Reliable third-party integrations and internal system connectivity.',
  },
];

const process = [
  {
    number: '01',
    title: 'Discovery & Technical Planning',
    description:
      'We define goals, user flows, system requirements, and project roadmap before development begins.',
  },
  {
    number: '02',
    title: 'UI Implementation & Backend Setup',
    description:
      'Our team builds responsive interfaces and robust backend services with clear code conventions.',
  },
  {
    number: '03',
    title: 'Testing & Performance Optimization',
    description:
      'We run cross-device testing, improve performance metrics, and verify accessibility and SEO fundamentals.',
  },
  {
    number: '04',
    title: 'Deployment & Ongoing Support',
    description:
      'We launch with confidence and continue with updates, monitoring, and iterative improvements.',
  },
];

const strengths = [
  'Modern Architecture',
  'SEO-Ready Codebase',
  'Scalable Components',
  'High Security Standards',
  'Fast Load Performance',
  'Long-Term Maintainability',
];

export default function WebDevelopmentPage() {
  return (
    <main className="relative overflow-hidden bg-(--bg) py-[clamp(4rem,8vw,7rem)] text-(--text)">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(var(--accent-rgb),0.65),transparent)]" />
      <div className="relative z-10 mx-auto flex w-full max-w-300 flex-col gap-16 px-4 sm:px-6 lg:px-10">
        <section className="rounded-3xl border border-[rgba(var(--accent-rgb),0.25)] bg-[linear-gradient(160deg,rgba(var(--accent-rgb),0.16),transparent_70%)] p-7 sm:p-10 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--accent)">Web Development Services</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Build robust digital platforms that perform at scale
          </h1>
          <p className="mt-5 max-w-3xl text-[0.98rem] leading-relaxed text-(--text-secondary) sm:text-[1.05rem]">
            We create high-quality web solutions that balance design, performance, and business outcomes.
          </p>
          <div className="mt-8">
            <Link href="/book-call" className="inline-flex rounded-full bg-(--accent) px-8 py-3 text-sm font-semibold text-(--bg) transition-transform duration-300 hover:scale-105">
              Start Your Project
            </Link>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">Core Web Solutions We Deliver</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {serviceAreas.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.06)] p-6">
                <h3 className="text-lg font-semibold text-(--text)">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">Our Development Process</h2>
          <div className="grid gap-4 lg:grid-cols-2">
            {process.map((step) => (
              <article key={step.number} className="rounded-2xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.05)] p-6">
                <p className="text-4xl font-bold leading-none text-[rgba(var(--accent-rgb),0.35)]">{step.number}</p>
                <h3 className="mt-3 text-xl font-semibold text-(--text)">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">Why Businesses Choose Nexvibe</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((item) => (
              <div key={item} className="rounded-xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.04)] px-4 py-3 text-sm text-(--text)">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[rgba(var(--accent-rgb),0.25)] bg-[rgba(var(--accent-rgb),0.08)] p-8 text-center sm:p-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">Ready to Launch Your Next Web Product?</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-(--text-secondary) sm:text-base">
            Let us transform your idea into a web experience that is fast, reliable, and conversion-focused.
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
