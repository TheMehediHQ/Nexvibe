export const projectDetailsStyles = `
  .projectDetailsPage {
    min-height: 100vh;
    background: var(--bg);
    color: var(--text);
    padding: 2.5rem 0 5rem;
    position: relative;
    overflow: hidden;
  }

  .projectDetailsPage .backSection,
  .projectDetailsPage .heroSection,
  .projectDetailsPage .techSection,
  .projectDetailsPage .screenshotsSection,
  .projectDetailsPage .bottomSection {
    max-width: 1400px;
    margin: 0 auto;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .projectDetailsPage .backSection {
    margin-bottom: 2rem;
  }

  .projectDetailsPage .heroSection {
    padding-bottom: 4rem;
  }

  .projectDetailsPage .heroContainer {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
    gap: clamp(2rem, 4vw, 4rem);
    align-items: center;
  }

  .projectDetailsPage .heroLeft {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  .projectDetailsPage .categoryLabel {
    display: inline-flex;
    width: fit-content;
    margin: 0 0 0.2rem;
    font-size: 0.73rem;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--accent);
    border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
    background: color-mix(in srgb, var(--accent) 12%, transparent);
    border-radius: 999px;
    padding: 0.42rem 0.82rem;
  }

  .projectDetailsPage .heroTitle {
    font-family: 'Graphik', -apple-system, sans-serif;
    font-size: clamp(2.3rem, 5vw, 3.7rem);
    font-weight: 700;
    line-height: 1.06;
    margin: 0;
    letter-spacing: -0.02em;
    text-wrap: balance;
  }

  .projectDetailsPage .heroDescription {
    margin: 0;
    color: var(--text-muted);
    font-size: 1.02rem;
    line-height: 1.8;
    max-width: 58ch;
  }

  .projectDetailsPage .heroMetaGrid {
    margin: 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.85rem;
  }

  .projectDetailsPage .heroMetaItem {
    margin: 0;
    padding: 0.85rem 0.95rem;
    border-radius: 14px;
    border: 1px solid color-mix(in srgb, var(--text) 14%, transparent);
    background: color-mix(in srgb, var(--surface) 78%, transparent);
    min-height: 88px;
  }

  .projectDetailsPage .heroMetaItem dt {
    font-size: 0.68rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 0.45rem;
    color: var(--text-muted);
    font-weight: 600;
  }

  .projectDetailsPage .heroMetaItem dd {
    margin: 0;
    font-size: 0.97rem;
    line-height: 1.45;
    color: var(--text);
    font-weight: 600;
  }

  .projectDetailsPage .heroButtons {
    display: flex;
    flex-wrap: nowrap;
    gap: 0.75rem;
    margin-top: 0.5rem;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .projectDetailsPage .heroButtons::-webkit-scrollbar {
    display: none;
  }

  .projectDetailsPage .heroButtons .btn-primary,
  .projectDetailsPage .heroButtons .btn-secondary {
    flex: 0 0 auto;
    padding: 0.68rem 1rem;
    font-size: 0.88rem;
    font-weight: 600;
    gap: 0.4rem;
    white-space: nowrap;
  }

  .projectDetailsPage .heroButtons .btn-primary svg,
  .projectDetailsPage .heroButtons .btn-secondary svg {
    width: 0.82rem;
    height: 0.82rem;
  }

  .projectDetailsPage .heroRight {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .projectDetailsPage .projectPreview {
    width: 100%;
    aspect-ratio: 16 / 9;
    max-height: 470px;
    position: relative;
    overflow: hidden;
    border-radius: 0;
    border: 1px solid color-mix(in srgb, var(--text) 16%, transparent);
    background: color-mix(in srgb, var(--surface) 74%, transparent);
    box-shadow: none;
  }

  .projectDetailsPage .projectPreview::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(185deg, rgba(8, 47, 73, 0.22), rgba(2, 6, 23, 0));
    z-index: 1;
  }

  .projectDetailsPage .previewImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.45s ease;
  }

  .projectDetailsPage .projectPreview:hover .previewImage {
    transform: scale(1.035);
  }

  .projectDetailsPage .previewBadge {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.42rem 0.7rem;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    background: rgba(2, 6, 23, 0.58);
    color: #f8fafc;
    font-size: 0.68rem;
    letter-spacing: 0.12em;
    font-weight: 700;
    text-transform: uppercase;
    backdrop-filter: blur(10px);
  }

  .projectDetailsPage .techSection,
  .projectDetailsPage .screenshotsSection,
  .projectDetailsPage .bottomSection {
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
    border-top: 1px solid color-mix(in srgb, var(--text) 12%, transparent);
  }

  .projectDetailsPage .bottomSection {
    padding-bottom: 5rem;
  }

  .projectDetailsPage .sectionHeader {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.75rem;
  }

  .projectDetailsPage .techTitle,
  .projectDetailsPage .sectionTitle {
    margin: 0;
    font-size: 0.74rem;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: var(--accent);
    font-weight: 700;
  }

  .projectDetailsPage .sectionMeta {
    margin: 0;
    font-size: 0.76rem;
    letter-spacing: 0.17em;
    text-transform: uppercase;
    color: color-mix(in srgb, var(--text-muted) 88%, transparent);
    font-weight: 600;
  }

  .projectDetailsPage .sectionIntro {
    margin: 0 0 1.4rem;
    max-width: 68ch;
    color: var(--text-muted);
    font-size: 0.96rem;
    line-height: 1.7;
  }

  .projectDetailsPage .techGrid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.78rem;
  }

  .projectDetailsPage .techBadge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    border: 1px solid color-mix(in srgb, var(--accent) 34%, transparent);
    background: color-mix(in srgb, var(--accent) 12%, transparent);
    color: var(--accent);
    padding: 0.47rem 0.86rem;
    font-size: 0.76rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
    font-family: 'Graphik', -apple-system, sans-serif;
  }

  .projectDetailsPage .techBadge:hover {
    transform: translateY(-2px);
    border-color: color-mix(in srgb, var(--accent) 52%, transparent);
    background: color-mix(in srgb, var(--accent) 18%, transparent);
  }

  .projectDetailsPage .screenshotsGrid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.2rem;
  }

  .projectDetailsPage .screenshot {
    margin: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 0;
    border: 1px solid color-mix(in srgb, var(--text) 14%, transparent);
    background: color-mix(in srgb, var(--surface) 74%, transparent);
    box-shadow: none;
    transition: border-color 0.22s ease, box-shadow 0.22s ease;
  }

  .projectDetailsPage .screenshot:hover {
    border-color: color-mix(in srgb, var(--accent) 46%, transparent);
    box-shadow: none;
  }

  .projectDetailsPage .screenshotMedia {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
  }

  .projectDetailsPage .screenshotImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .projectDetailsPage .screenshotCaption {
    padding: 0.72rem 0.9rem;
    font-size: 0.77rem;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: var(--text-muted);
    font-weight: 600;
    border-top: 1px solid color-mix(in srgb, var(--text) 12%, transparent);
  }

  .projectDetailsPage .bottomGrid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.2rem;
  }

  .projectDetailsPage .bottomCard {
    padding: 1.55rem;
    border-radius: 20px;
    border: 1px solid color-mix(in srgb, var(--text) 14%, transparent);
    background: color-mix(in srgb, var(--surface) 74%, transparent);
    transition: border-color 0.24s ease;
    position: relative;
    overflow: hidden;
  }

  .projectDetailsPage .bottomCard::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    border: 1px solid color-mix(in srgb, var(--accent) 0%, transparent);
    pointer-events: none;
    transition: border-color 0.25s ease;
    z-index: 2;
  }

  .projectDetailsPage .bottomCard:hover {
    border-color: color-mix(in srgb, var(--accent) 40%, transparent);
  }

  .projectDetailsPage .bottomCard:hover::before {
    border-color: color-mix(in srgb, var(--accent) 32%, transparent);
  }

  .projectDetailsPage .bottomGlow {
    position: absolute;
    width: 104px;
    height: 104px;
    background: radial-gradient(
      circle,
      rgba(var(--accent-rgb), 0.34) 0%,
      rgba(var(--accent-rgb), 0.16) 42%,
      transparent 74%
    );
    border-radius: 50%;
    pointer-events: none;
    filter: blur(24px) saturate(1.02);
    opacity: 0;
    mix-blend-mode: normal;
    transition: opacity 0.25s ease, filter 0.25s ease;
    will-change: left, top, opacity;
    top: 0;
    left: 0;
    z-index: 0;
  }

  html.light-mode .projectDetailsPage .bottomGlow {
    filter: blur(20px) saturate(1);
  }

  .projectDetailsPage .bottomCard > *:not(.bottomGlow) {
    position: relative;
    z-index: 1;
  }

  .projectDetailsPage .cardIcon {
    width: 2.3rem;
    height: 2.3rem;
    border-radius: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.85rem;
    color: var(--accent);
    border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
    background: color-mix(in srgb, var(--accent) 10%, transparent);
    font-size: 1rem;
  }

  .projectDetailsPage .cardTitle {
    margin: 0 0 0.5rem;
    font-size: 1.07rem;
    font-weight: 650;
    letter-spacing: -0.01em;
  }

  .projectDetailsPage .cardSummary {
    margin: 0 0 0.9rem;
    color: var(--text-muted);
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .projectDetailsPage .cardList {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  .projectDetailsPage .cardList li {
    padding-left: 1.15rem;
    position: relative;
    color: var(--text-muted);
    line-height: 1.58;
    font-size: 0.9rem;
  }

  .projectDetailsPage .cardList li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.58rem;
    width: 0.38rem;
    height: 0.38rem;
    border-radius: 50%;
    background: color-mix(in srgb, var(--accent) 72%, transparent);
  }

  @media (max-width: 1140px) {
    .projectDetailsPage .screenshotsGrid,
    .projectDetailsPage .bottomGrid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 1024px) {
    .projectDetailsPage .backSection,
    .projectDetailsPage .heroSection,
    .projectDetailsPage .techSection,
    .projectDetailsPage .screenshotsSection,
    .projectDetailsPage .bottomSection {
      padding-left: 2rem;
      padding-right: 2rem;
    }

    .projectDetailsPage .heroContainer {
      grid-template-columns: 1fr;
    }

    .projectDetailsPage .projectPreview {
      max-height: 400px;
    }
  }

  @media (max-width: 760px) {
    .projectDetailsPage {
      padding-top: 1.75rem;
    }

    .projectDetailsPage .backSection,
    .projectDetailsPage .heroSection,
    .projectDetailsPage .techSection,
    .projectDetailsPage .screenshotsSection,
    .projectDetailsPage .bottomSection {
      padding-left: 1.3rem;
      padding-right: 1.3rem;
    }

    .projectDetailsPage .backSection {
      margin-bottom: 1.5rem;
    }

    .projectDetailsPage .heroMetaGrid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .projectDetailsPage .heroContainer {
      gap: 1.35rem;
    }

    .projectDetailsPage .heroRight {
      order: -1;
      margin-bottom: 0.25rem;
    }

    .projectDetailsPage .heroButtons {
      flex-wrap: wrap;
      overflow-x: visible;
    }

    .projectDetailsPage .screenshotsGrid,
    .projectDetailsPage .bottomGrid {
      grid-template-columns: 1fr;
    }

    .projectDetailsPage .projectPreview {
      max-height: 320px;
      border-radius: 0;
    }
  }

  @media (max-width: 520px) {
    .projectDetailsPage .heroTitle {
      font-size: clamp(1.82rem, 8.6vw, 2.25rem);
      line-height: 1.14;
    }

    .projectDetailsPage .heroDescription {
      font-size: 0.94rem;
      line-height: 1.65;
    }

    .projectDetailsPage .heroMetaGrid {
      grid-template-columns: 1fr;
    }

    .projectDetailsPage .heroMetaItem {
      min-height: 0;
      padding: 0.75rem 0.85rem;
    }

    .projectDetailsPage .heroButtons {
      display: grid;
      grid-template-columns: 1fr;
      gap: 0.55rem;
    }

    .projectDetailsPage .heroButtons .btn-primary,
    .projectDetailsPage .heroButtons .btn-secondary {
      justify-content: center;
      width: 100%;
      padding: 0.68rem 0.84rem;
      font-size: 0.79rem;
    }

    .projectDetailsPage .previewBadge {
      top: 0.65rem;
      left: 0.65rem;
      font-size: 0.6rem;
      letter-spacing: 0.08em;
      padding: 0.35rem 0.56rem;
    }

    .projectDetailsPage .sectionIntro {
      font-size: 0.9rem;
      line-height: 1.58;
      margin-bottom: 1.1rem;
    }

    .projectDetailsPage .screenshotCaption {
      font-size: 0.68rem;
      letter-spacing: 0.08em;
      padding: 0.62rem 0.72rem;
    }

    .projectDetailsPage .bottomCard {
      padding: 1.15rem;
    }

    .projectDetailsPage .sectionHeader {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.45rem;
    }

    .projectDetailsPage .projectPreview {
      max-height: 260px;
    }
  }
`;
