import type { Metadata } from 'next';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  path: '/graphicsdesign',
  title: 'Graphics Design Services | Nexvibe',
  description:
    'Strengthen your brand with strategic graphics design for digital campaigns, social media, and marketing communication.',
  keywords: [
    'graphics design services',
    'brand design',
    'social media design',
    'marketing design assets',
    'nexvibe graphics design',
  ],
});

const designServices = [
  {
    title: 'Brand Identity Design',
    detail: 'Logo systems, color direction, and visual identity assets for consistent branding.',
  },
  {
    title: 'Social Media Creative Design',
    detail: 'Platform-ready visuals that improve engagement and brand recognition.',
  },
  {
    title: 'Marketing Collateral',
    detail: 'Brochures, pitch decks, ad creatives, and campaign-ready visual materials.',
  },
  {
    title: 'Visual Content Systems',
    detail: 'Reusable templates that keep your communication coherent across channels.',
  },
];

const workflow = [
  {
    number: '01',
    title: 'Brand Discovery',
    description: 'We align on business goals, audience profile, and visual communication objectives.',
  },
  {
    number: '02',
    title: 'Creative Direction',
    description: 'Our team prepares style references and concept routes tailored to your brand voice.',
  },
  {
    number: '03',
    title: 'Design Production',
    description: 'We craft polished graphics with attention to hierarchy, clarity, and usability.',
  },
  {
    number: '04',
    title: 'Delivery & Iteration',
    description: 'Final files are delivered in organized formats with support for future updates.',
  },
];

const reasons = [
  'Strategic Visual Thinking',
  'Brand Consistency',
  'Fast Turnaround',
  'Campaign-Ready Assets',
  'Cross-Platform Adaptability',
  'Professional Quality Control',
];

export default function GraphicsDesignPage() {
  return (
    <main className="relative overflow-hidden bg-(--bg) py-[clamp(4rem,8vw,7rem)] text-(--text)">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(var(--accent-rgb),0.65),transparent)]" />
      <div className="relative z-10 mx-auto flex w-full max-w-300 flex-col gap-16 px-4 sm:px-6 lg:px-10">
        <section className="rounded-3xl border border-[rgba(var(--accent-rgb),0.25)] bg-[linear-gradient(160deg,rgba(var(--accent-rgb),0.16),transparent_70%)] p-7 sm:p-10 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--accent)">Graphics Design Services</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Design visuals that elevate your brand presence
          </h1>
          <p className="mt-5 max-w-3xl text-[0.98rem] leading-relaxed text-(--text-secondary) sm:text-[1.05rem]">
            We create compelling design assets that communicate clearly and strengthen your business identity.
          </p>
          <div className="mt-8">
            <Link href="/book-call" className="inline-flex rounded-full bg-(--accent) px-8 py-3 text-sm font-semibold text-(--bg) transition-transform duration-300 hover:scale-105">
              Start Your Project
            </Link>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">Design Capabilities</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {designServices.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.06)] p-6">
                <h3 className="text-lg font-semibold text-(--text)">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">Our Creative Workflow</h2>
          <div className="grid gap-4 lg:grid-cols-2">
            {workflow.map((step) => (
              <article key={step.number} className="rounded-2xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.05)] p-6">
                <p className="text-4xl font-bold leading-none text-[rgba(var(--accent-rgb),0.35)]">{step.number}</p>
                <h3 className="mt-3 text-xl font-semibold text-(--text)">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">Why Clients Partner With Us</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item) => (
              <div key={item} className="rounded-xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.04)] px-4 py-3 text-sm text-(--text)">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[rgba(var(--accent-rgb),0.25)] bg-[rgba(var(--accent-rgb),0.08)] p-8 text-center sm:p-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">Need High-Impact Creative Assets?</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-(--text-secondary) sm:text-base">
            Work with our team to build a visual system that drives trust, engagement, and growth.
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
