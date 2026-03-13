'use client';

import { type CSSProperties, useRef } from 'react';
import type { Skill } from '../types';

type MagneticSkillTagProps = {
  skill: Skill;
  index: number;
};

export default function MagneticSkillTag({ skill, index }: MagneticSkillTagProps) {
  const tagRef = useRef<HTMLDivElement>(null);
  void index;

  return (
    <div
      ref={tagRef}
      className="relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-[8px] border border-[rgba(6,182,212,0.15)] bg-[rgba(6,182,212,0.05)] px-4 py-[0.625rem] transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] will-change-transform hover:bg-[rgba(6,182,212,0.08)]"
      style={{ '--skill-color': skill.color } as CSSProperties}
    >
      <span className="text-base opacity-80">{skill.icon}</span>
      <span className="font-['Graphik',-apple-system,sans-serif] text-[0.8125rem] tracking-[0.03em] text-[var(--text)]">
        {skill.name}
      </span>
    </div>
  );
}
