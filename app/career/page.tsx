import Link from 'next/link';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  path: '/career',
  title: 'Career | Nexvibe',
  description:
    'Explore open positions at Nexvibe and apply to join our team of builders, designers, and problem-solvers.',
  keywords: ['career', 'jobs', 'open positions', 'nexvibe hiring'],
});

const openRoles = [
  {
    title: 'Frontend Engineer',
    type: 'Full-time',
    location: 'Remote',
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-time',
    location: 'Hybrid',
  },
  {
    title: 'Project Manager',
    type: 'Full-time',
    location: 'Remote',
  },
];

export default function CareerPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <div className="rounded-3xl border border-[rgba(var(--accent-rgb),0.2)] bg-[linear-gradient(160deg,rgba(var(--accent-rgb),0.08),transparent_45%)] p-8 md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--accent)">
          Careers at Nexvibe
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-(--text) md:text-5xl">
          Build meaningful products with us
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-(--text-secondary)">
          We are looking for curious people who care deeply about product quality,
          collaboration, and continuous growth.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {openRoles.map((role) => (
            <article
              key={role.title}
              className="rounded-2xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.05)] p-5"
            >
              <h2 className="text-lg font-semibold text-(--text)">{role.title}</h2>
              <p className="mt-2 text-sm text-(--text-secondary)">{role.type}</p>
              <p className="text-sm text-(--text-secondary)">{role.location}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://www.apexiumstechnologies.com/careers"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-(--accent) px-8 py-3 text-sm font-semibold text-(--bg) transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Apply Now
          </a>
          <Link
            href="/team"
            className="inline-flex items-center justify-center rounded-full border border-[rgba(var(--accent-rgb),0.3)] px-8 py-3 text-sm font-semibold text-(--text) transition-all duration-300 hover:bg-[rgba(var(--accent-rgb),0.08)]"
          >
            Back to Team
          </Link>
        </div>
      </div>
    </section>
  );
}
