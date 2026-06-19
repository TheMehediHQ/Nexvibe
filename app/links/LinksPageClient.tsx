'use client';

import { useRef } from 'react';
import {
  FiFileText,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi';
import {
  FaBehance,
  FaCodepen,
  FaDiscord,
  FaDribbble,
  FaFigma,
  FaMedium,
  FaPinterest,
  FaStackOverflow,
  FaTelegramPlane,
  FaWhatsapp,
  FaYoutube,
  FaDev,
  FaFacebookF,
} from 'react-icons/fa';
import { FaThreads, FaXTwitter } from 'react-icons/fa6';
import {
  SiBluesky,
  SiHackerrank,
  SiHashnode,
  SiPeerlist,
  SiQuora,
} from 'react-icons/si';

type SocialLink = {
  icon: React.ComponentType<{ size?: number }>;
  href: string;
  label: string;
  handle: string;
};

type SocialSection = {
  title: string;
  links: SocialLink[];
};

const SOCIAL_SECTIONS: SocialSection[] = [
  {
    title: 'Developer',
    links: [
      { icon: FiGithub, href: 'https://github.com/mehedi-hasan1102', label: 'GitHub', handle: '@mehedi-hasan1102' },
      { icon: FaDev, href: 'https://dev.to/mehedihasan1102', label: 'Dev.to', handle: '@mehedihasan1102' },
      { icon: SiHashnode, href: 'https://hashnode.com/@mehedi-hasan1102', label: 'Hashnode', handle: '@mehedi-hasan1102' },
      { icon: FaStackOverflow, href: 'https://stackoverflow.com/users/31918992/mehedi-hasan', label: 'Stack Overflow', handle: '@mehedi-hasan' },
      { icon: SiHackerrank, href: 'https://www.hackerrank.com/profile/mehedi_hasan1102', label: 'HackerRank', handle: '@mehedi_hasan1102' },
      { icon: FaCodepen, href: 'https://codepen.io/mehedihasan1102', label: 'CodePen', handle: '@mehedihasan1102' },
    ],
  },
  {
    title: 'Professional',
    links: [
      { icon: FiLinkedin, href: 'https://www.linkedin.com/in/mehedi-hasan1102/', label: 'LinkedIn', handle: '@mehedi-hasan1102' },
      { icon: SiPeerlist, href: 'https://peerlist.io/mehedihasan', label: 'Peerlist', handle: '@mehedihasan' },
      { icon: FiFileText, href: '/Resume_of_Mehedi_Hasan.pdf', label: 'Resume', handle: 'Resume PDF' },
      { icon: FiMail, href: 'mailto:contact.nexvibe@gmail.com', label: 'Email', handle: 'contact.nexvibe@gmail.com' },
    ],
  },
  {
    title: 'Designer',
    links: [
      { icon: FaBehance, href: 'https://www.behance.net/mehedihasan1102', label: 'Behance', handle: '@mehedihasan1102' },
      { icon: FaDribbble, href: 'https://dribbble.com/mehedi-hasan1102', label: 'Dribbble', handle: '@mehedi-hasan1102' },
      { icon: FaFigma, href: 'https://www.figma.com/files/team/1546370570397248215/user/1546370568436002861?fuid=1546370568436002861', label: 'Figma', handle: '@mehedihasan1102' },
      { icon: FaMedium, href: 'https://medium.com/@mehedihasan1102', label: 'Medium', handle: '@mehedihasan1102' },
      { icon: FaPinterest, href: 'https://www.pinterest.com/mehedihasan11023/', label: 'Pinterest', handle: '@mehedihasan11023' },
    ],
  },
  {
    title: 'Social',
    links: [
      { icon: FaFacebookF, href: 'https://facebook.com/mehedi.hasan1102', label: 'Facebook', handle: '@mehedi.hasan1102' },
      { icon: FiInstagram, href: 'https://instagram.com/mehedi.hasan1102', label: 'Instagram', handle: '@mehedi.hasan1102' },
      { icon: FaThreads, href: 'https://www.threads.com/@mehedi.hasan1102', label: 'Threads', handle: '@mehedi.hasan1102' },
      { icon: FaXTwitter, href: 'https://x.com/mehedihasan1102', label: 'Twitter/X', handle: '@mehedihasan1102' },
      { icon: SiBluesky, href: 'https://bsky.app/profile/mehedihasan1102.bsky.social', label: 'Bluesky', handle: '@mehedihasan1102' },
      { icon: SiQuora, href: 'https://www.quora.com/profile/Mehedi-Hasan-19347-1', label: 'Quora', handle: '@Mehedi-Hasan-19347-1' },
      { icon: FaYoutube, href: 'https://www.youtube.com/@MehediHasan11023', label: 'YouTube', handle: '@MehediHasan11023' },
    ],
  },
  {
    title: 'Messaging',
    links: [
      { icon: FaWhatsapp, href: 'https://wa.me/8801747874773', label: 'WhatsApp', handle: '+880 1747 874773' },
      { icon: FaTelegramPlane, href: 'https://t.me/+8801747874773', label: 'Telegram', handle: '+880 1747 874773' },
      { icon: FaDiscord, href: 'https://discord.gg/QMmdb8nusc', label: 'Discord', handle: 'QMmdb8nusc' },
    ],
  },
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
            <span style={{ color: 'var(--accent)' }}>Links</span>
          </h1>

          <p className="mx-auto mt-4 max-w-[760px] text-center text-[0.95rem] leading-relaxed text-[var(--text-secondary)]">
            All my official profiles, writing platforms, and social channels in one place for quick contact and collaboration.
          </p>
        </div>

        <div className="space-y-10 md:space-y-12">
          {SOCIAL_SECTIONS.map((section) => (
            <section key={section.title}>
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="m-0 uppercase tracking-[0.14em] text-[var(--text)]"
                  style={{ fontSize: '0.58rem', fontWeight: 600, lineHeight: 1.15 }}
                >
                  {section.title}
                  
                </span>
                <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--text)_16%,transparent)]" />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:gap-6">
                {section.links.map((link) => (
                  <SocialCard key={`${section.title}-${link.label}`} link={link} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
