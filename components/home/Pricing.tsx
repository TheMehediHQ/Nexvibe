"use client";

import React, { useState, useRef, MouseEvent } from "react";
import Button from "@/components/ui/Button";

interface PricingItem {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  price: string;
  priceNote: string;
  description: string;
  accentColor: string;
  spotlightColor: string;
  glowShadow: string;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
}

const pricingPlans: PricingItem[] = [
  {
    id: "starter",
    name: "STARTER",
    price: "৳5,000+",
    priceNote: "Starting investment / One-time",
    description:
      "Ideal for personal brands, small businesses, and startups wanting a swift, high-impact digital presence.",
    accentColor: "#3B82F6", // Electric Blue
    spotlightColor: "rgba(59, 130, 246, 0.4)",
    glowShadow: "rgba(59, 130, 246, 0.25)",
    features: [
      "Custom Modern Landing Page / Business Website",
      "Fully Responsive Design (Mobile, Tablet & Desktop)",
      "High-Speed Performance & Fast Page Load",
      "Basic SEO & Social Media Integration",
      "Contact Form & Direct WhatsApp Integration",
      "1 Month Free Bug Support & Maintenance",
    ],
    ctaText: "Get Started",
    whatsappMessage:
      "Hello Nexvibe! I am interested in the STARTER package (৳5,000+). I would like to discuss my project requirements.",
  },
  {
    id: "professional",
    name: "PROFESSIONAL",
    badge: "Most Popular",
    isPopular: true,
    price: "৳15,000+",
    priceNote: "Starting investment / One-time",
    description:
      "Designed for scaling businesses needing dynamic web applications, interactive UX, and custom features.",
    accentColor: "#A855F7", // Purple
    spotlightColor: "rgba(168, 85, 247, 0.4)",
    glowShadow: "rgba(168, 85, 247, 0.35)",
    features: [
      "Everything in Starter, plus:",
      "Full-Featured Dynamic CMS or Web Application",
      "Advanced UI/UX with Custom Interactive Animations",
      "Database Integration & Secure Authentication",
      "RESTful API & Third-Party Service Integration",
      "Advanced On-Page SEO & Speed Optimization",
      "3 Months Priority Maintenance & Technical Support",
    ],
    ctaText: "Choose Professional",
    whatsappMessage:
      "Hello Nexvibe! I want to choose the PROFESSIONAL package (৳15,000+). Let\x27s schedule a discussion.",
  },
  {
    id: "premium",
    name: "PREMIUM",
    badge: "Enterprise",
    price: "৳30,000+",
    priceNote: "Starting investment / Custom scope",
    description:
      "Tailored for established enterprises requiring full-stack platforms, mobile apps, or custom AI solutions.",
    accentColor: "#10B981", // Emerald / Green
    spotlightColor: "rgba(16, 185, 129, 0.4)",
    glowShadow: "rgba(16, 185, 129, 0.25)",
    features: [
      "Everything in Professional, plus:",
      "Custom Full-Stack Web App, Mobile App, or AI Solution",
      "Scalable Cloud Architecture & High-Traffic Handling",
      "Payment Gateway Integration (bKash, Nagad, Stripe)",
      "Role-Based Access Control & Admin Dashboard",
      "Dedicated Project Manager & Priority Delivery",
      "6 Months Dedicated 24/7 Priority Support",
    ],
    ctaText: "Get Enterprise Plan",
    whatsappMessage:
      "Hello Nexvibe! I am looking for the PREMIUM package (৳30,000+) for a large-scale project. Please share consultation details.",
  },
];

const WHATSAPP_NUMBER = "8801747874773";

function PricingCard({ plan }: { plan: PricingItem }) {
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

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    plan.whatsappMessage
  )}`;

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex flex-col justify-between rounded-[32px] p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 ${
        plan.isPopular ? "border-blue-500/20 shadow-2xl" : ""
      }`}
      style={{
        boxShadow: isHovered
          ? `0 12px 40px ${plan.glowShadow}`
          : plan.isPopular
          ? `0 10px 35px ${plan.glowShadow}`
          : "none",
      }}
    >
      {/* Outer Border Layer & Animated Border Beam (Identical to Services.tsx) */}
      <div className="absolute inset-0 rounded-[32px] p-[1.5px] overflow-hidden pointer-events-none">
        {/* Base Static Border */}
        <div
          className={`absolute inset-0 rounded-[32px] border transition-colors duration-300 ${
            plan.isPopular
              ? "border-purple-500/40"
              : "border-[var(--border)] group-hover:border-transparent"
          }`}
        />

        {/* Spinning Border Beam Light */}
        <div
          className={`absolute -inset-[150%] animate-[spin_4s_linear_infinite] transition-opacity duration-500 ${
            plan.isPopular
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100"
          }`}
          style={{
            background: `conic-gradient(from 0deg, transparent 0 280deg, ${plan.accentColor} 340deg, #ffffff 360deg)`,
          }}
        />

        {/* Inner Card Background Mask */}
        <div
          className={`absolute inset-[1.5px] rounded-[30.5px] transition-colors duration-300 ${
            plan.isPopular
              ? "bg-[#151515] group-hover:bg-[#1C1C1C]"
              : "bg-[#121212] group-hover:bg-[#1A1A1A]"
          }`}
        />
      </div>

      {/* Compact Cursor Spotlight (130px radius, matching Services.tsx) */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-[32px] z-10 overflow-hidden"
        style={{
          opacity: isHovered ? 1 : plan.isPopular ? 0.25 : 0,
          background: `radial-gradient(130px circle at ${mousePos.x}px ${mousePos.y}px, ${plan.spotlightColor}, transparent 80%)`,
        }}
      />

      {/* Card Content Layer */}
      <div className="relative z-20 flex flex-col flex-1">
        {/* Header row: Title & Optional Badge */}
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-2xl font-bold tracking-wide text-[var(--foreground)] group-hover:text-white transition-colors duration-300">
            {plan.name}
          </h3>

          {plan.badge && (
            <span className="rounded-full bg-blue-600/20 border border-blue-500/30 px-3.5 py-1 text-xs font-semibold text-blue-400">
              {plan.badge}
            </span>
          )}
        </div>

        {/* Price Tag */}
        <div className="mb-4">
          <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            {plan.price}
          </div>
          <p className="mt-1 text-xs font-light text-[var(--muted)]">
            {plan.priceNote}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm font-light leading-relaxed text-[var(--muted)] group-hover:text-[var(--foreground)]/90 transition-colors duration-300 mb-8">
          {plan.description}
        </p>

        {/* Bullets List (Matching ServiceCard bullet style) */}
        <div className="space-y-3 border-t border-white/[0.06] pt-6 mb-8 flex-1">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <span
                className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                style={{ backgroundColor: plan.accentColor }}
              />
              <span
                className={`text-[13px] leading-relaxed transition-colors duration-200 ${
                  feature.startsWith("Everything in")
                    ? "font-semibold text-white"
                    : "font-light text-gray-300 group-hover:text-white"
                }`}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Action Button using the site\x27s Button component */}
        <div className="mt-auto pt-2">
          <Button
            variant={plan.isPopular ? "primary" : "secondary"}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full justify-center text-center"
          >
            {plan.ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 px-6 sm:px-8 lg:px-12">
      {/* Top Left Pattern (Matching Services.tsx) */}
      <div
        className="pointer-events-none absolute left-0 top-12 hidden h-64 w-32 select-none opacity-10 md:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.7) 1.3px, transparent 1.3px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Bottom Right Pattern (Matching Services.tsx) */}
      <div
        className="pointer-events-none absolute bottom-4 right-0 hidden h-72 w-40 select-none opacity-10 md:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.7) 1.3px, transparent 1.3px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header (Matching Services.tsx & FAQ.tsx exact style) */}
        <div className="mb-16 text-center md:mb-20">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[var(--foreground)] md:text-4xl">
            Flexible Pricing Plans for Your
            <br />
            <span className="text-[var(--foreground)]">
              Ideas Implementation
            </span>
          </h2>

        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 items-stretch">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
