'use client';

import Image from 'next/image';

type ScreenshotsSectionProps = {
  title: string;
  screenshots: [string, string, string];
};

export default function ScreenshotsSection({
  title,
  screenshots,
}: ScreenshotsSectionProps) {
  return (
    <section className="screenshotsSection" data-reveal-section>
      <div className="sectionHeader">
        <h2 className="sectionTitle">Screenshots</h2>
        <p className="sectionMeta">{screenshots.length} views</p>
      </div>
      <p className="sectionIntro">
        Selected screens that show the core user journey and visual system.
      </p>
      <div className="screenshotsGrid">
        {screenshots.map((src, index) => (
          <figure className="screenshot" key={`${src}-${index}`}>
            <div className="screenshotMedia">
              <Image
                src={src}
                alt={`${title} screenshot ${index + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                loading="lazy"
                className="screenshotImage"
              />
            </div>
            <figcaption className="screenshotCaption">Screen {index + 1}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
