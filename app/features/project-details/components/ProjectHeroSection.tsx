'use client';

import Image from 'next/image';
import { FiArrowUpRight, FiLayers } from 'react-icons/fi';
import type { Project } from '@/lib/site-data';

type ProjectHeroSectionProps = {
  project: Project;
};

export default function ProjectHeroSection({ project }: ProjectHeroSectionProps) {
  const highlights = [
    { label: 'Project type', value: project.category },
    { label: 'Release year', value: project.year || 'N/A' },
    { label: 'Core stack', value: `${project.tech.length} tools` },
  ];

  return (
    <section className="heroSection">
      <div className="heroContainer">
        <div className="heroLeft">
          <p className="categoryLabel" data-hero-animate>
            Featured case study
          </p>
          <h1 className="heroTitle" data-hero-animate>
            {project.title.split('').map((char, index) => (
              <span key={index} className="hero-title-char" style={{ display: 'inline-block' }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          <p className="heroDescription" data-hero-animate>
            {project.description}
          </p>

          <dl className="heroMetaGrid" data-hero-animate>
            {highlights.map((highlight) => (
              <div key={highlight.label} className="heroMetaItem">
                <dt>{highlight.label}</dt>
                <dd>{highlight.value}</dd>
              </div>
            ))}
          </dl>

          <div className="heroButtons">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Live Demo</span>
                <FiArrowUpRight size={16} aria-hidden="true" />
              </a>
            ) : null}
            {project.frontendUrl ? (
              <a
                href={project.frontendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <span>Frontend Code</span>
                <FiArrowUpRight size={16} aria-hidden="true" />
              </a>
            ) : null}
            {project.backendUrl ? (
              <a
                href={project.backendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <span>Backend Code</span>
                <FiArrowUpRight size={16} aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>

        <div className="heroRight" data-hero-animate>
          <div className="projectPreview">
            <div className="previewBadge">
              <FiLayers size={14} aria-hidden="true" />
              <span>{project.category}</span>
            </div>
            <Image
              src={project.image}
              alt={project.title}
              width={1600}
              height={900}
              className="previewImage"
              data-parallax-image
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
