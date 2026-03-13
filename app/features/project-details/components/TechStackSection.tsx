'use client';

import type { Project } from '@/lib/site-data';

type TechStackSectionProps = {
  techStack: Project['tech'];
};

export default function TechStackSection({ techStack }: TechStackSectionProps) {
  return (
    <section className="techSection" data-reveal-section>
      <div className="sectionHeader">
        <h2 className="techTitle">Tech stack</h2>
        <p className="sectionMeta">{techStack.length} tools</p>
      </div>
      <p className="sectionIntro">
        Primary frameworks, services, and tooling used to ship this project.
      </p>
      <div className="techGrid">
        {techStack.map((tech) => (
          <div key={tech} className="techBadge">
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}
