import type { Metadata } from 'next';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  path: '/ai-automation',
  title: 'AI Automation Services | Nexvibe',
  description:
    'Automate repetitive operations and unlock faster decision-making with practical AI systems tailored to your workflows.',
  keywords: [
    'ai automation services',
    'business workflow automation',
    'ai chatbot development',
    'intelligent process automation',
    'nexvibe ai services',
  ],
});

const automationSolutions = [
  {
    title: 'Workflow Automation',
    detail: 'Reduce manual effort with automated task routing, approvals, and notifications.',
  },
  {
    title: 'AI Assistants & Chatbots',
    detail: 'Deploy conversational systems that support sales, service, and internal operations.',
  },
  {
    title: 'Document Intelligence',
    detail: 'Extract, classify, and process business documents with higher speed and accuracy.',
  },
  {
    title: 'Predictive Insights',
    detail: 'Use data models to forecast trends and improve operational planning.',
  },
];

const implementationPath = [
  {
    number: '01',
    title: 'Process Assessment',
    description: 'We identify high-impact automation opportunities and define measurable outcomes.',
  },
  {
    number: '02',
    title: 'Solution Design',
    description: 'We map technical architecture, integration points, and governance requirements.',
  },
  {
    number: '03',
    title: 'Build & Validation',
    description: 'Our team develops and tests automation flows to ensure reliability and accuracy.',
  },
  {
    number: '04',
    title: 'Deployment & Improvement',
    description: 'We deploy safely, monitor performance, and refine continuously for business value.',
  },
];

const benefits = [
  'Reduced Operational Costs',
  'Faster Process Cycles',
  'Improved Accuracy',
  'Scalable Automation Design',
  'Actionable Data Insights',
  'Reliable Integration Support',
];

export default function AIAutomationPage() {
  return (
    <main className="relative overflow-hidden bg-(--bg) py-[clamp(4rem,8vw,7rem)] text-(--text)">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(var(--accent-rgb),0.65),transparent)]" />
      <div className="relative z-10 mx-auto flex w-full max-w-300 flex-col gap-16 px-4 sm:px-6 lg:px-10">
        <section className="rounded-3xl border border-[rgba(var(--accent-rgb),0.25)] bg-[linear-gradient(160deg,rgba(var(--accent-rgb),0.16),transparent_70%)] p-7 sm:p-10 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--accent)">AI Automation Services</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Transform repetitive work into intelligent workflows
          </h1>
          <p className="mt-5 max-w-3xl text-[0.98rem] leading-relaxed text-(--text-secondary) sm:text-[1.05rem]">
            We design practical AI automation systems that improve efficiency, quality, and decision speed.
          </p>
          <div className="mt-8">
            <Link href="/book-call" className="inline-flex rounded-full bg-(--accent) px-8 py-3 text-sm font-semibold text-(--bg) transition-transform duration-300 hover:scale-105">
              Start Your Project
            </Link>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">Automation Solutions We Provide</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {automationSolutions.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.06)] p-6">
                <h3 className="text-lg font-semibold text-(--text)">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">Implementation Roadmap</h2>
          <div className="grid gap-4 lg:grid-cols-2">
            {implementationPath.map((step) => (
              <article key={step.number} className="rounded-2xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.05)] p-6">
                <p className="text-4xl font-bold leading-none text-[rgba(var(--accent-rgb),0.35)]">{step.number}</p>
                <h3 className="mt-3 text-xl font-semibold text-(--text)">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">Business Outcomes You Can Expect</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <div key={item} className="rounded-xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.04)] px-4 py-3 text-sm text-(--text)">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[rgba(var(--accent-rgb),0.25)] bg-[rgba(var(--accent-rgb),0.08)] p-8 text-center sm:p-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">Ready to Automate Critical Workflows?</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-(--text-secondary) sm:text-base">
            Partner with us to implement AI solutions that are secure, practical, and aligned with your operations.
          </p>
          <div className="mt-7">
            <Link href="/book-call" className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-semibold text-[var(--bg)] transition-all duration-300 hover:scale-105 active:scale-95">
              Get Started Today
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
