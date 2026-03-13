'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Experience from '../components/Experience';
import type { ExperienceItem } from '@/lib/site-data';

type AboutPageClientProps = {
  experiences: ExperienceItem[];
};

export default function AboutPageClient({ experiences }: AboutPageClientProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphsRef = useRef<HTMLDivElement[]>([]);
  const profileImageRef = useRef<HTMLDivElement>(null);
  const profileBorderRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen pb-12">
      <section
        id="about"
        ref={sectionRef}
        className="relative min-h-screen overflow-hidden py-[clamp(4rem,8vw,8rem)]"
        style={{ background: 'var(--bg)' }}
      >
        <div className="relative z-[2] mx-auto max-w-[1400px] px-[clamp(1rem,4vw,4rem)]">
          <div className="mb-10 overflow-hidden text-center">
            <h1 ref={headingRef} className="sectionTitleGlobal">
              About <span style={{ color: 'var(--accent)' }}>Us</span>
            </h1>
            <p className="mx-auto mt-4 max-w-[760px] text-center text-[0.95rem] leading-relaxed text-[var(--text-secondary)]">
              Vision Studio 23 helps businesses launch and scale high-performing digital products from strategy to execution.
              {' '}Check out our{' '}
              <Link href="/portfolio" className="text-[var(--accent)] underline underline-offset-4 hover:opacity-80">
                work
              </Link>{' '}
              while you&apos;re here.
            </p>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="flex justify-center md:justify-start">
              <div className="relative w-full max-w-[400px]">
                <div
                  ref={profileImageRef}
                  className="relative aspect-[740/820] w-full cursor-pointer overflow-hidden shadow-2xl"
                >
                  <Image
                    src="/profile/about.png"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div
                  ref={profileBorderRef}
                  className="pointer-events-none absolute bottom-[-1.5rem] left-[1.5rem] right-[-1.5rem] top-[1.5rem] z-[-1] border-2 border-[var(--accent)] shadow-[0_0_20px_rgba(var(--accent-rgb,59,130,246),0.3)] transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] before:pointer-events-none before:absolute before:bottom-[-2px] before:left-[-2px] before:right-[-2px] before:top-[-2px] before:z-[-1] before:bg-[linear-gradient(45deg,var(--accent),transparent)] before:opacity-0 before:content-[''] max-[768px]:bottom-[-1rem] max-[768px]:left-[1rem] max-[768px]:right-[-1rem] max-[768px]:top-[1rem] max-[480px]:bottom-[-0.75rem] max-[480px]:left-[0.75rem] max-[480px]:right-[-0.75rem] max-[480px]:top-[0.75rem] max-[480px]:border-[1.5px]"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div
                ref={(el) => {
                  if (el) paragraphsRef.current[0] = el;
                }}
                className="text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                <ul className="list-disc space-y-4 pl-5 text-[clamp(1rem,1.8vw,1.125rem)] leading-[1.7] max-[360px]:text-[0.95rem]">
                  <li className="break-words [overflow-wrap:anywhere]">
                    <strong className="text-[clamp(1.05rem,2.5vw,1.5rem)] font-medium tracking-[0.04em] text-[var(--accent)] max-[480px]:tracking-[0.03em]">
                      Agency:
                    </strong>{' '}
                    <span className="text-[clamp(1.05rem,2.5vw,1.5rem)] text-[var(--text)]">Vision Studio 23</span>
                  </li>
                  <li className="break-words [overflow-wrap:anywhere]">
                    <strong className="text-[clamp(1.05rem,2.5vw,1.5rem)] font-medium tracking-[0.04em] text-[var(--accent)] max-[480px]:tracking-[0.03em]">
                      Base:
                    </strong>{' '}
                    <span className="inline-block whitespace-nowrap bg-[#0FB57E] px-[0.6rem] py-[0.2rem] text-[clamp(1.05rem,2.5vw,1.5rem)] font-semibold text-[var(--bg)] [overflow-wrap:anywhere] max-[768px]:whitespace-normal max-[768px]:px-[0.5rem] max-[768px]:py-[0.18rem] max-[520px]:whitespace-normal max-[480px]:whitespace-normal">
                      Dhaka, Bangladesh
                    </span>
                  </li>
                  <li className="break-words [overflow-wrap:anywhere]">
                    <strong className="text-[clamp(1.05rem,2.5vw,1.5rem)] font-medium tracking-[0.04em] text-[var(--accent)] max-[480px]:tracking-[0.03em]">
                      Focus:
                    </strong>{' '}
                    <span className="text-[clamp(1.05rem,2.5vw,1.5rem)] text-[var(--text)]">
                      Conversion-focused websites, product landing pages, and scalable web apps for startups and growth teams.
                    </span>
                  </li>
                  <li className="list-item whitespace-nowrap max-[768px]:whitespace-normal max-[520px]:whitespace-normal max-[480px]:whitespace-normal">
                    <strong className="text-[clamp(1.05rem,2.5vw,1.5rem)] font-medium tracking-[0.04em] text-[var(--accent)] max-[480px]:tracking-[0.03em]">
                      Core stack:
                    </strong>{' '}
                    <span className="inline-block whitespace-nowrap bg-[var(--accent)] px-[0.6rem] py-[0.2rem] text-[clamp(1.05rem,2.5vw,1.5rem)] font-semibold text-[var(--bg)] [overflow-wrap:anywhere] max-[768px]:whitespace-normal max-[768px]:px-[0.5rem] max-[768px]:py-[0.18rem] max-[520px]:whitespace-normal max-[480px]:whitespace-normal">
                      React, Next.js, TypeScript, Tailwind CSS
                    </span>
                  </li>
                  <li className="break-words [overflow-wrap:anywhere]">
                    <strong className="text-[clamp(1.05rem,2.5vw,1.5rem)] font-medium tracking-[0.04em] text-[var(--accent)] max-[480px]:tracking-[0.03em]">
                      Delivery style:
                    </strong>{' '}
                    <span className="text-[clamp(1.05rem,2.5vw,1.5rem)] text-[var(--text)]">
                      Fast iteration, clear communication, and measurable outcomes.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Experience experiences={experiences} sortByDate />
    </div>
  );
}
