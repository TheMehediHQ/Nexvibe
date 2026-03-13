'use client';

import { useRef } from 'react';
import { FiBriefcase } from 'react-icons/fi';
import { SiFiverr, SiFreelancer, SiUpwork } from 'react-icons/si';

type SocialLink = {
  icon: React.ComponentType<{ size?: number }>;
  href: string;
  label: string;
  handle: string;
};

const MARKETPLACE_LINKS: SocialLink[] = [
  { icon: SiUpwork, href: 'https://www.upwork.com/freelancers/~01a06e52efb30467a7', label: 'Upwork', handle: '@mehedi_hasan1102' },
  { icon: SiFiverr, href: 'https://www.fiverr.com/mehedihub', label: 'Fiverr', handle: '@mehedihub' },
  { icon: SiFreelancer, href: 'https://www.freelancer.com/u/mehedihasan1102', label: 'Freelancer.com', handle: '@mehedihasan1102' },
  { icon: FiBriefcase, href: 'https://www.peopleperhour.com/freelancer/mehedi-hasan-zxyvvmjx', label: 'PeoplePerHour', handle: '@mehedi-hasan' },
  { icon: FiBriefcase, href: 'https://contra.com/mehedi_hasan_568rmm1d', label: 'Contra', handle: '@mehedi_hasan_568rmm1d' },
];

const SocialCard = ({ link }: { link: SocialLink }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const Icon = link.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !glowRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowRef.current.style.left = `${x}px`;
    glowRef.current.style.top = `${y}px`;
  };

  const isExternal = link.href.startsWith('http');

  return (
    <a
      href={link.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="block h-full rounded-[12px] no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
      aria-label={`${link.label} link`}
    >
      <div
        ref={cardRef}
        className="group relative flex h-full cursor-pointer items-center gap-4 overflow-hidden rounded-[12px] border border-[rgba(6,182,212,0.1)] px-6 py-4 transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--text) 3%, transparent)',
        } as React.CSSProperties}
        onMouseMove={handleMouseMove}
      >
        <div ref={glowRef} className="card-glow " />

        <div
          className="relative z-[2] flex h-14 w-14 shrink-0 items-center justify-center rounded-[8px] border transition-all duration-300"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--text) 5%, transparent)',
            borderColor: 'color-mix(in srgb, var(--text) 16%, transparent)',
            color: 'var(--text)',
          } as React.CSSProperties}
        >
          <Icon size={30} />
        </div>

        <div className="relative z-[2] flex min-w-0 flex-1 flex-col justify-center gap-[2px]">
          <h3
            className="m-0 truncate font-semibold tracking-[-0.01em] text-[var(--text)]"
            style={{ margin: 0, fontSize: '1rem', lineHeight: 1.05 }}
          >
            {link.label}
          </h3>
          <p
            className="m-0 truncate text-[var(--text-secondary)]"
            style={{ margin: 0, marginTop: '1px', fontSize: '0.9rem', lineHeight: 1.05 }}
          >
            {link.handle}
          </p>
        </div>

        <div
          className="pointer-events-none absolute inset-0 rounded-[12px] border border-[rgba(6,182,212,0.1)] transition-colors duration-[400ms] [transition-timing-function:ease] group-hover:border-[rgba(6,182,212,0.4)]"
        />
      </div>
    </a>
  );
};

export default function SocialCorner() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg)] py-[clamp(4rem,8vw,8rem)] transition-colors duration-[600ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)]">
      <div
        ref={containerRef}
        className="relative z-[1] mx-auto max-w-[700px] px-[clamp(1rem,4vw,2rem)]"
      >
        <div className="relative mx-auto mb-10 max-w-[800px] overflow-hidden text-center">
          <h1 className="sectionTitleGlobal">
            <span style={{ color: 'var(--accent)' }}>Marketplace</span>
          </h1>

          <p className="mx-auto mt-4 max-w-[760px] text-center text-[0.95rem] leading-relaxed text-[var(--text-secondary)]">
            Find all my active freelance marketplace profiles in one place for quick hiring and project discussion.
          </p>
        </div>

        <section>
          <div className="mb-4 flex items-center gap-3">
            <span
              className="m-0 uppercase tracking-[0.14em] text-[var(--text)]"
              style={{ fontSize: '0.58rem', fontWeight: 600, lineHeight: 1.15 }}
            >
              Marketplace
            </span>
            <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--text)_16%,transparent)]" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:gap-6">
            {MARKETPLACE_LINKS.map((link) => (
              <SocialCard key={link.label} link={link} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
