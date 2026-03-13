'use client';

import type { IconType } from 'react-icons';
import { FiTarget, FiTool, FiTrendingUp } from 'react-icons/fi';
import type { CaseStudyContent } from '../case-study';

type CaseStudySectionProps = {
  content: CaseStudyContent;
};

type CaseStudyCard = {
  title: string;
  icon: IconType;
  summary: string;
  items: string[];
};

export default function CaseStudySection({ content }: CaseStudySectionProps) {
  const cards: CaseStudyCard[] = [
    {
      title: 'Problem',
      icon: FiTarget,
      summary: 'Product and UX constraints that blocked performance or usability.',
      items: content.problemPoints,
    },
    {
      title: 'Solution',
      icon: FiTool,
      summary: 'Architecture and implementation decisions that addressed the blockers.',
      items: content.solutionPoints,
    },
    {
      title: 'Result',
      icon: FiTrendingUp,
      summary: 'Outcomes delivered and the measurable direction for future releases.',
      items: content.resultPoints,
    },
  ];

  return (
    <section className="bottomSection" data-reveal-section>
      <div className="sectionHeader">
        <h2 className="sectionTitle">Case study</h2>
        <p className="sectionMeta">Delivery breakdown</p>
      </div>
      <p className="sectionIntro">
        End-to-end view of what was solved, how it was solved, and what it delivered.
      </p>
      <div className="bottomGrid">
        {cards.map((card) => (
          <div className="bottomCard" key={card.title}>
            <div className="bottomGlow" />
            <div className="cardIcon">
              <card.icon aria-hidden="true" />
            </div>
            <h3 className="cardTitle">{card.title}</h3>
            <p className="cardSummary">{card.summary}</p>
            <ul className="cardList">
              {card.items.map((item) => (
                <li key={`${card.title}-${item}`} data-challenge-item>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
