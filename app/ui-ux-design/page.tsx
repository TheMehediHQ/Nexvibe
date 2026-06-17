import type { Metadata } from 'next';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  path: '/ui-ux-design',
  title: 'UI/UX Design Services | Nexvibe',
  description:
    'Design intuitive digital experiences that improve usability, strengthen brand trust, and increase user engagement.',
  keywords: [
    'ui ux design services',
    'product design',
    'user experience design',
    'interface design',
    'nexvibe ui ux',
  ],
});

const offerings = [
  {
    title: 'Web & SaaS Interface Design',
    detail: 'Clean, conversion-focused interfaces tailored for modern web products.',
  },
  {
    title: 'Mobile App UX Design',
    detail: 'Mobile-first journeys that reduce friction and increase retention.',
  },
  {
    title: 'Design Systems',
    detail: 'Scalable component guidelines for consistency across teams and products.',
  },
  {
    title: 'Prototype & Usability Validation',
    detail: 'Interactive prototypes tested with real users before final implementation.',
  },
];

const methodology = [
  {
    number: '01',
    title: 'User Research & Discovery',
    description: 'We study user behavior, business requirements, and product goals.',
  },
  {
    number: '02',
    title: 'Information Architecture',
    description: 'We structure flows, navigation, and content for clarity and usability.',
  },
  {
    number: '03',
    title: 'Wireframing & Visual Design',
    description: 'Low-to-high fidelity design phases ensure both function and aesthetics.',
  },
  {
    number: '04',
    title: 'Testing & Design Handoff',
    description: 'We validate designs and deliver implementation-ready assets for development teams.',
  },
];

const valueProps = [
  'Human-Centered Design',
  'Clear Interaction Patterns',
  'Accessible Interfaces',
  'Brand-Aligned Visual Language',
  'Developer-Friendly Handoff',
  'Outcome-Focused Iteration',
];

export default function UiUxDesignPage() {
  return (
    <main className="relative overflow-hidden bg-(--bg) py-[clamp(4rem,8vw,7rem)] text-(--text)">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(var(--accent-rgb),0.65),transparent)]" />
      <div className="relative z-10 mx-auto flex w-full max-w-300 flex-col gap-16 px-4 sm:px-6 lg:px-10">
        <section className="rounded-3xl border border-[rgba(var(--accent-rgb),0.25)] bg-[linear-gradient(160deg,rgba(var(--accent-rgb),0.16),transparent_70%)] p-7 sm:p-10 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--accent)">UI/UX Design Services</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Create intuitive experiences users trust and enjoy
          </h1>
          <p className="mt-5 max-w-3xl text-[0.98rem] leading-relaxed text-(--text-secondary) sm:text-[1.05rem]">
            We design user journeys and interfaces that blend business goals with real user needs.
          </p>
          <div className="mt-8">
            <Link href="/book-call" className="inline-flex rounded-full bg-(--accent) px-8 py-3 text-sm font-semibold text-(--bg) transition-transform duration-300 hover:scale-105">
              Start Your Project
            </Link>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">What We Design</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {offerings.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.06)] p-6">
                <h3 className="text-lg font-semibold text-(--text)">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">Our UX Methodology</h2>
          <div className="grid gap-4 lg:grid-cols-2">
            {methodology.map((step) => (
              <article key={step.number} className="rounded-2xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.05)] p-6">
                <p className="text-4xl font-bold leading-none text-[rgba(var(--accent-rgb),0.35)]">{step.number}</p>
                <h3 className="mt-3 text-xl font-semibold text-(--text)">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">Why Teams Trust Our Design Process</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {valueProps.map((item) => (
              <div key={item} className="rounded-xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.04)] px-4 py-3 text-sm text-(--text)">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[rgba(var(--accent-rgb),0.25)] bg-[rgba(var(--accent-rgb),0.08)] p-8 text-center sm:p-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">Ready to Improve User Experience?</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-(--text-secondary) sm:text-base">
            Let us design a product experience that feels intuitive, persuasive, and ready for scale.
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
