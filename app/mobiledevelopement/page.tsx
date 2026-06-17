import type { Metadata } from 'next';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  path: '/mobiledevelopement',
  title: 'Mobile Development Services | Nexvibe',
  description:
    'Create powerful, user-friendly mobile applications that engage your audience and drive business growth.',
  keywords: [
    'mobile development',
    'android app development',
    'ios app development',
    'cross-platform app development',
    'nexvibe mobile services',
  ],
});

type Platform = {
  title: string;
  subtitle: string;
  points: string[];
};

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  points: string[];
};

const platforms: Platform[] = [
  {
    title: 'Android Development',
    subtitle: 'Native Android apps using Kotlin and Java',
    points: [
      'Material Design',
      'Google Play Store',
      'Firebase Integration',
      'Performance Optimization',
    ],
  },
  {
    title: 'iOS Development',
    subtitle: 'Native iOS apps using Swift and Objective-C',
    points: [
      'Human Interface Guidelines',
      'App Store Distribution',
      'Core Data',
      'Push Notifications',
    ],
  },
];

const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Requirements Analysis & UI/UX Design',
    description:
      'We start by understanding your business goals, target audience, and technical requirements. Our design team creates intuitive user interfaces and seamless user experiences.',
    points: [
      'Project Scope Document',
      'User Journey Maps',
      'Wireframes & Mockups',
      'Technical Architecture',
    ],
  },
  {
    number: '02',
    title: 'Platform Selection & Architecture Planning',
    description:
      'Based on your requirements, we recommend the best platform approach and design a scalable architecture that ensures optimal performance and maintainability.',
    points: [
      'Platform Recommendation',
      'Technical Architecture',
      'Database Design',
      'API Specifications',
    ],
  },
  {
    number: '03',
    title: 'Development & Testing',
    description:
      'Our experienced developers build your app using industry best practices, while our QA team ensures quality through comprehensive testing at every stage.',
    points: [
      'MVP Development',
      'Feature Implementation',
      'Quality Assurance',
      'Performance Testing',
    ],
  },
  {
    number: '04',
    title: 'App Store Deployment & Maintenance',
    description:
      'We handle the complete deployment process and provide ongoing maintenance, updates, and support to ensure your app stays current and performs optimally.',
    points: [
      'App Store Submission',
      'Launch Support',
      'Monitoring Setup',
      'Maintenance Plan',
    ],
  },
];

const highlights = [
  {
    title: 'Clean Code',
    description: 'Maintainable and scalable code architecture',
  },
  {
    title: 'Modern UI/UX',
    description: 'Beautiful and intuitive user interfaces',
  },
  {
    title: 'High Performance',
    description: 'Optimized for speed and efficiency',
  },
  {
    title: 'Security First',
    description: 'Built with security best practices',
  },
  {
    title: 'User-Centric',
    description: 'Designed with user experience in mind',
  },
  {
    title: 'Timely Delivery',
    description: 'On-time project completion',
  },
];

export default function MobileDevelopmentPage() {
  return (
    <main className="relative overflow-hidden bg-(--bg) py-[clamp(4rem,8vw,7rem)] text-(--text)">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(var(--accent-rgb),0.6),transparent)]" />
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-[rgba(var(--accent-rgb),0.08)] blur-3xl" />
      <div className="pointer-events-none absolute -right-12 bottom-20 h-72 w-72 rounded-full bg-[rgba(var(--accent-rgb),0.12)] blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-300 flex-col gap-16 px-4 sm:px-6 lg:px-10">
        <section className="rounded-3xl border border-[rgba(var(--accent-rgb),0.22)] bg-[linear-gradient(150deg,rgba(var(--accent-rgb),0.16),rgba(var(--accent-rgb),0.04)_40%,transparent_75%)] p-7 sm:p-10 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-(--accent)">
            Mobile Development Services
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Mobile Development Services
          </h1>
          <p className="mt-5 max-w-3xl text-[0.98rem] leading-relaxed text-(--text-secondary) sm:text-[1.05rem]">
            Create powerful, user-friendly mobile applications that engage your audience and drive business growth
          </p>
          <div className="mt-8">
            <Link
              href="/book-call"
              className="inline-flex items-center justify-center rounded-full bg-(--accent) px-8 py-3 text-sm font-semibold text-(--bg) transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              Start Your Project
            </Link>
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">Mobile Platforms We Master</h2>
            <p className="mx-auto max-w-3xl text-[0.95rem] leading-relaxed text-(--text-secondary) sm:text-base">
              From native iOS and Android apps to cross-platform solutions, we deliver exceptional mobile experiences
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {platforms.map((platform) => (
              <article
                key={platform.title}
                className="group rounded-2xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.06)] p-6 transition-colors duration-300 hover:border-[rgba(var(--accent-rgb),0.42)]"
              >
                <h3 className="text-xl font-semibold text-(--text)">{platform.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">{platform.subtitle}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {platform.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full border border-[rgba(var(--accent-rgb),0.28)] bg-[rgba(var(--accent-rgb),0.08)] px-3 py-1.5 text-xs font-medium text-(--text) sm:text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">Our Development Process</h2>
            <p className="mx-auto max-w-3xl text-[0.95rem] leading-relaxed text-(--text-secondary) sm:text-base">
              A proven methodology that ensures successful project delivery from concept to launch
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.05)] p-6"
              >
                <p className="text-4xl font-bold leading-none text-[rgba(var(--accent-rgb),0.35)]">{step.number}</p>
                <h3 className="mt-4 text-xl font-semibold text-(--text)">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-(--text-secondary)">{step.description}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {step.points.map((point) => (
                    <li key={point} className="text-sm text-(--text)">
                      • {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">Why Choose Our Mobile Development</h2>
            <p className="mx-auto max-w-3xl text-[0.95rem] leading-relaxed text-(--text-secondary) sm:text-base">
              We combine technical expertise with creative design to deliver mobile apps that users love
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.04)] p-5"
              >
                <h3 className="text-lg font-semibold text-(--text)">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[rgba(var(--accent-rgb),0.25)] bg-[linear-gradient(120deg,rgba(var(--accent-rgb),0.16),rgba(var(--accent-rgb),0.02))] p-7 text-center sm:p-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">Ready to Build Your Mobile App?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-(--text-secondary) sm:text-base">
            Let&apos;s discuss your mobile app idea and create a solution that drives your business forward
          </p>
          <div className="mt-7">
            <Link
              href="/book-call"
              className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-(--accent) px-8 py-3 text-sm font-semibold text-(--bg) transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get Started Today
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
