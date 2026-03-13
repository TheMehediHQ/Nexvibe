import type { Metadata } from "next";
import SmoothScroll from "./components/SmoothScroll";
import Hero from "./components/Hero";
import Skills2 from "./components/Skills2";
import Projects from "./components/Projects";
import DiagonalMarquee from "./components/DiagonalMarquee";
import WhatIDo from "./components/WhatIDo";
import TrustSection from "./components/TrustSection";
import { createPageMetadata } from "@/lib/seo";
import { getSelectedProjects } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  path: "/",
  title: "Vision Studio 23 | Web Agency Portfolio",
  description:
    "Explore Vision Studio 23 projects, services, and proven delivery in design, development, and web performance.",
  keywords: [
    "Vision Studio 23",
    "Web agency portfolio",
    "Next.js agency",
    "React development agency",
  ],
});

export default function Home() {
  const selectedProjects = getSelectedProjects();

  return (
    <SmoothScroll>
      <main>
        <Hero />
        <DiagonalMarquee />
        <WhatIDo />
        <Skills2 />
        <Projects projects={selectedProjects} />
        <TrustSection />
      </main>
    </SmoothScroll>
  );
}
