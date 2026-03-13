'use client';

import { useCardGlow } from '@/app/hooks/useCardGlow';
import type { SkillCategory } from '../types';
import MagneticSkillTag from './MagneticSkillTag';

type SkillBentoCardProps = {
  category: SkillCategory;
  index: number;
  isLarge: boolean;
};

export default function SkillBentoCard({
  category,
  index,
  isLarge,
}: SkillBentoCardProps) {
  const { cardRef, glowRef, handleMouseMove } = useCardGlow<HTMLDivElement>();

  const cardPositionClass =
    index === 0
      ? 'col-[1/2] row-[1/2] max-[768px]:col-[1/2] max-[768px]:row-auto'
      : index === 1
        ? 'col-[2/3] row-[1/2] max-[768px]:col-[1/2] max-[768px]:row-auto'
        : index === 2
          ? 'col-[1/2] row-[2/3] max-[768px]:col-[1/2] max-[768px]:row-auto'
          : index === 3
            ? 'col-[2/3] row-[2/3] max-[768px]:col-[1/2] max-[768px]:row-auto'
            : '';

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-[24px] border border-[rgba(6,182,212,0.1)] bg-transparent [perspective:1000px] [transform-style:preserve-3d] transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] will-change-transform ${cardPositionClass} ${isLarge ? 'col-span-1' : ''}`}
      onMouseMove={handleMouseMove}
    >
      <div
        ref={glowRef}
        className="card-glow"
      />
      <div className="relative z-[2] flex h-full flex-col p-8 max-[768px]:p-6">
        <div className="mb-3 flex items-center gap-4">
          <span className="font-['Graphik',-apple-system,sans-serif] text-[3rem] font-bold leading-none text-[rgba(6,182,212,0.2)] [html.light-mode_&]:text-[rgba(37,99,235,0.2)] max-[768px]:text-[2rem]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="font-['Graphik',-apple-system,sans-serif] text-[1.5rem] tracking-[0.04em] text-[var(--accent)] max-[768px]:text-[1.25rem]">
            {category.title}
          </h3>
        </div>
        <p className="mb-6 font-['Graphik',-apple-system,sans-serif] text-[0.875rem] leading-[1.5] text-[var(--text-secondary)]">
          {category.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-[0.625rem]">
          {category.skills.map((skill, skillIndex) => (
            <MagneticSkillTag key={skill.name} skill={skill} index={skillIndex} />
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-[24px] border border-[rgba(6,182,212,0.1)] transition-colors duration-[400ms] [transition-timing-function:ease] group-hover:border-[rgba(6,182,212,0.4)]" />
    </div>
  );
}
