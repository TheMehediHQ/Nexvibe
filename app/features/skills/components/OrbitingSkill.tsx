'use client';

import { useRef } from 'react';

type OrbitingSkillProps = {
  skill: string;
  index: number;
  total: number;
};

export default function OrbitingSkill({ skill, index, total }: OrbitingSkillProps) {
  const skillRef = useRef<HTMLDivElement>(null);
  const angle = (index / total) * 360;
  const radius = 140;

  return (
    <div
      ref={skillRef}
      className="absolute left-1/2 top-1/2 ml-[-50px] mt-[-15px] w-[100px] text-center"
      style={{
        transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
      }}
    >
      <span className="inline-block whitespace-nowrap rounded-[6px] border border-[rgba(6,182,212,0.2)] bg-[rgba(6,182,212,0.1)] px-3 py-2 font-['Graphik',-apple-system,sans-serif] text-[0.75rem] tracking-[0.04em] text-[var(--text)] max-[768px]:px-2 max-[768px]:py-1.5 max-[768px]:text-[0.7rem]">
        {skill}
      </span>
    </div>
  );
}
