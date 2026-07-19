"use client";

import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";

interface ServiceItem {
  imageSrc: string;
  title: string;
  description: string;
  accentColor: string;
  spotlightColor: string;
  glowShadow: string;
}

const services: ServiceItem[] = [
  {
    imageSrc: "/icons/icons8-laptop-coding-1500.png",
    title: "Custom Software Development",
    description:
      "Scalable, high-performance software tailored to your business needs.",
    accentColor: "#3B82F6", // Electric Blue
    spotlightColor: "rgba(59, 130, 246, 0.4)",
    glowShadow: "rgba(59, 130, 246, 0.25)",
  },
  {
    imageSrc: "/icons/icons8-world-wide-web-blue-globe-1500.png",
    title: "Web Development",
    description:
      "Modern, responsive websites built for speed, conversion, and brand impact.",
    accentColor: "#A855F7", // Purple
    spotlightColor: "rgba(168, 85, 247, 0.4)",
    glowShadow: "rgba(168, 85, 247, 0.25)",
  },
  {
    imageSrc: "/icons/icons8-smartphone-tablet-1500.png",
    title: "Mobile App Development",
    description:
      "iOS and Android apps engineered for seamless performance and great UX.",
    accentColor: "#10B981", // Emerald
    spotlightColor: "rgba(16, 185, 129, 0.4)",
    glowShadow: "rgba(16, 185, 129, 0.25)",
  },
  {
    imageSrc: "/icons/icons8-chatbot-1500.png",
    title: "AI & Machine Learning Solutions",
    description:
      "Intelligent systems that automate workflows and enhance decision-making.",
    accentColor: "#F97316", // Amber / Orange
    spotlightColor: "rgba(249, 115, 22, 0.4)",
    glowShadow: "rgba(249, 115, 22, 0.25)",
  },
  {
    imageSrc: "/icons/icons8-paint-palette-1500.png",
    title: "Graphics & Creative Design",
    description:
      "Branding, UI/UX, and visual design that elevate your digital identity.",
    accentColor: "#EC4899", // Rose / Pink
    spotlightColor: "rgba(236, 72, 153, 0.4)",
    glowShadow: "rgba(236, 72, 153, 0.25)",
  },
  {
    imageSrc: "/icons/icons8-digital-marketing-1500.png",
    title: "Digital Marketing",
    description:
      "SEO, social media, and paid campaigns that boost visibility and growth.",
    accentColor: "#06B6D4", // Cyan
    spotlightColor: "rgba(6, 182, 212, 0.4)",
    glowShadow: "rgba(6, 182, 212, 0.25)",
  },
];

function ServiceCard({
  imageSrc,
  title,
  description,
  accentColor,
  spotlightColor,
  glowShadow,
}: ServiceItem) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-[32px] p-8 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
      style={{
        boxShadow: isHovered ? `0 12px 40px ${glowShadow}` : "none",
      }}
    >
      {/* Outer Border Layer & Animated Border Beam */}
      <div className="absolute inset-0 rounded-[32px] p-[1.5px] overflow-hidden pointer-events-none">
        {/* Base Static Border */}
        <div className="absolute inset-0 rounded-[32px] border border-[var(--border)] group-hover:border-transparent transition-colors duration-300" />

        {/* Spinning Border Beam Light */}
        <div
          className="absolute -inset-[150%] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `conic-gradient(from 0deg, transparent 0 280deg, ${accentColor} 340deg, #ffffff 360deg)`,
          }}
        />

        {/* Inner Card Background Mask */}
        <div className="absolute inset-[1.5px] rounded-[30.5px] bg-[#121212] group-hover:bg-[#1A1A1A] transition-colors duration-300" />
      </div>

      {/* Compact Cursor Spotlight (Small 130px radius) */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-[32px] z-10 overflow-hidden"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(130px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />

      {/* Card Content Layer */}
      <div className="relative z-20">
        {/* Icon */}
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-2xl">
          <Image
            src={imageSrc}
            alt={title}
            width={80}
            height={80}
            priority
            className="object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>

        {/* Title */}
        <h3 className="mb-4 text-xl font-semibold leading-snug text-[var(--foreground)] group-hover:text-white transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-7 text-[var(--muted)] group-hover:text-[var(--foreground)]/90 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 px-6 sm:px-8 lg:px-12">
      {/* Top Left Pattern */}
      <div
        className="pointer-events-none absolute left-0 top-12 hidden h-64 w-32 select-none opacity-10 md:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.7) 1.3px, transparent 1.3px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Bottom Right Pattern */}
      <div
        className="pointer-events-none absolute bottom-4 right-0 hidden h-72 w-40 select-none opacity-10 md:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.7) 1.3px, transparent 1.3px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center md:mb-20">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[var(--foreground)] md:text-5xl">
            Our Ultimate Set of Services for Your
            <br />
            <span className="text-[var(--foreground)]">
              Ideas Implementation
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}