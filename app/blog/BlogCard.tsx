'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

const formatDate = (dateString: string) =>
  new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(new Date(dateString));

type BlogCardProps = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags?: string[];
  index: number;
  animationIndex?: number;
};

export const BlogCard = ({
  slug,
  title,
  excerpt,
  date,
  tags,
  index,
  animationIndex,
}: BlogCardProps) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  void animationIndex;

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current || !glowRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glowRef.current.style.left = `${x}px`;
    glowRef.current.style.top = `${y}px`;
  };

  return (
    <Link
      ref={cardRef}
      href={`/blog/${slug}`}
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[20px] border border-[color-mix(in_srgb,var(--accent)_10%,transparent)] bg-transparent no-underline [perspective:1000px] [transform-style:preserve-3d] transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] will-change-transform hover:border-[color-mix(in_srgb,var(--accent)_30%,transparent)] aspect-square"
      onMouseMove={handleMouseMove}
    >
      <div
        ref={glowRef}
        className="card-glow"
      />

      <span
        className="absolute right-5 top-5 z-[2] grid h-8 w-8 place-items-center rounded-[8px] bg-[var(--accent)] text-[var(--bg)] opacity-0 translate-y-[-8px] scale-[0.85] transition-all duration-300 [transition-timing-function:ease] group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 shadow-lg"
        aria-hidden="true"
      >
        <FiExternalLink size={16} />
      </span>

      <div className="relative flex w-full shrink-0 flex-col gap-3 overflow-hidden px-6 py-5 transition-all duration-300">
        <span className="text-[2.2rem] leading-none font-bold text-[rgba(6,182,212,0.2)] [html.light-mode_&]:text-[rgba(37,99,235,0.2)] select-none">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[0.8rem] font-medium text-[color-mix(in_srgb,var(--text-secondary)_70%,transparent)] uppercase tracking-[0.05em]">
            {formatDate(date)}
          </span>
          {tags?.length ? (
            <div className="flex flex-wrap gap-[0.35rem]">
              {tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="rounded-[16px] border border-[color-mix(in_srgb,var(--accent)_12%,transparent)] bg-[color-mix(in_srgb,var(--accent)_8%,transparent)] px-2.5 py-[0.4rem] text-[0.75rem] font-medium capitalize tracking-[0.02em] text-[color-mix(in_srgb,var(--accent)_80%,transparent)] transition-all duration-250 group-hover:border-[color-mix(in_srgb,var(--accent)_25%,transparent)] group-hover:bg-[color-mix(in_srgb,var(--accent)_15%,transparent)]"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 2 && (
                <span className="rounded-[16px] border border-[color-mix(in_srgb,var(--accent)_12%,transparent)] bg-[color-mix(in_srgb,var(--accent)_8%,transparent)] px-2.5 py-[0.4rem] text-[0.75rem] font-medium tracking-[0.02em] text-[color-mix(in_srgb,var(--accent)_80%,transparent)] transition-all duration-250 group-hover:border-[color-mix(in_srgb,var(--accent)_25%,transparent)] group-hover:bg-[color-mix(in_srgb,var(--accent)_15%,transparent)]">
                  +{tags.length - 2}
                </span>
              )}
            </div>
          ) : null}
        </div>
      </div>

      <div className="relative flex flex-1 flex-col gap-3.5 p-6">
        <h2
          className="m-0 overflow-hidden font-bold tracking-[-0.015em] text-[var(--text)]"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            fontSize: '1.25rem',
            lineHeight: '1.4',
          }}
        >
          {title}
        </h2>
        <p
          className="m-0 flex-grow overflow-hidden text-[0.9rem] leading-[1.6] text-[var(--text-secondary)]"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {excerpt}
        </p>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[20px] border border-[color-mix(in_srgb,var(--accent)_10%,transparent)] transition-colors duration-[400ms] [transition-timing-function:ease] group-hover:border-[color-mix(in_srgb,var(--accent)_30%,transparent)]" />
    </Link>
  );
};
