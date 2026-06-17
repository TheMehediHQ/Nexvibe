import type { Metadata } from 'next';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  path: '/industry/education',
  title: 'Education Solutions | Nexvibe',
  description:
    'Professional education technology solutions for learning platforms, student engagement workflows, and scalable academic operations.',
  keywords: [
    'education technology solutions',
    'learning platform development',
    'edtech ux design',
    'student engagement systems',
    'nexvibe education',
  ],
});

const capabilities = [
  {
    title: 'Learning Experience Design',
    description:
      'Intuitive course journeys and learner interfaces designed to improve completion and engagement.',
  },
  {
    title: 'Student and Faculty Portals',
    description:
      'Role-based portal systems for communication, tracking, and resource management.',
  },
  {
    title: 'Assessment and Progress Systems',
    description:
      'Digital evaluation workflows with progress visibility for learners, instructors, and institutions.',
  },
  {
    title: 'Scalable Academic Platforms',
    description:
      'Architecture built for growth, multi-program support, and long-term academic operations.',
  },
];

const process = [
  {
    step: '01',
    title: 'Program and User Discovery',
    detail:
      'We define learner profiles, academic workflows, and platform priorities for clear implementation direction.',
  },
  {
    step: '02',
    title: 'Experience and System Planning',
    detail:
      'We design the product structure, journey flow, and feature roadmap for adoption and scale.',
  },
  {
    step: '03',
    title: 'Build and Quality Assurance',
    detail:
      'Our team develops features with testing focused on usability, accessibility, and reliability.',
  },
  {
    step: '04',
    title: 'Launch and Continuous Iteration',
    detail:
      'We monitor outcomes and optimize the platform to improve learning engagement and delivery efficiency.',
  },
];

const outcomes = [
  'Improved learner engagement and retention',
  'Better visibility into academic progress',
  'Reduced administrative process overhead',
  'Scalable platform for program expansion',
  'Consistent user experience across roles',
  'Data-informed product improvements',
];

export default function EducationIndustryPage() {
  return (
    <main className="relative overflow-hidden bg-(--bg) py-[clamp(4rem,8vw,7rem)] text-(--text)">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(var(--accent-rgb),0.6),transparent)]" />
      <div className="pointer-events-none absolute -right-14 bottom-10 h-72 w-72 rounded-full bg-[rgba(var(--accent-rgb),0.08)] blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-300 flex-col gap-14 px-4 sm:px-6 lg:px-10">
        <section className="rounded-3xl border border-[rgba(var(--accent-rgb),0.2)] bg-[linear-gradient(145deg,rgba(var(--accent-rgb),0.16),rgba(var(--accent-rgb),0.04)_45%,transparent_80%)] p-8 sm:p-10 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--accent)">
            Industry Solutions
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Education
          </h1>
          <p className="mt-5 max-w-3xl text-[0.98rem] leading-relaxed text-(--text-secondary) sm:text-[1.05rem]">
            Build modern education experiences that improve learner outcomes and support institutional growth.
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
          <h2 className="text-2xl font-semibold sm:text-3xl">How We Support Education Platforms</h2>
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
          <h2 className="text-2xl font-semibold sm:text-3xl">Planning to Upgrade Your Education Platform?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-(--text-secondary)">
            Work with a team that combines user-centered design and dependable product engineering.
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
