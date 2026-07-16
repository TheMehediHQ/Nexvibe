"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface TestimonialCard {
  quote: string;
  name: string;
  role: string;
}

const testimonials: TestimonialCard[] = [
  {
    quote:
      "We started with a simple belief — Bangladeshi businesses deserve world‑class digital solutions without global barriers.",
    name: "Mehedi Rahman",
    role: "Founder & CEO, Dhaka",
  },
  {
    quote:
      "Our journey began when we realized companies were struggling to turn raw data into meaningful, real‑time decisions.",
    name: "Ayesha Karim",
    role: "Chief Data Strategist, Chattogram",
  },
  {
    quote:
      "We wanted to build technology that feels intuitive, fast, and accessible — something every Bangladeshi business can rely on.",
    name: "Tanvir Hasan",
    role: "CTO, Sylhet",
  },
  {
    quote:
      "From small startups to large enterprises, we saw the same challenge: digital transformation was too slow and too complicated.",
    name: "Nusrat Jahan",
    role: "Product Lead, Dhaka",
  },
  {
    quote:
      "Our mission became clear — create intelligent systems that empower teams to work smarter, not harder.",
    name: "Rafiul Islam",
    role: "AI Engineer, Rajshahi",
  },
  {
    quote:
      "Bangladesh is moving fast, and we wanted to build solutions that match that speed with automation and intelligence.",
    name: "Sadia Chowdhury",
    role: "Innovation Manager, Khulna",
  },
  {
    quote:
      "We believe technology should solve real problems, improve real workflows, and create real impact for businesses across the country.",
    name: "Farhan Mahmud",
    role: "Operations Director, Dhaka",
  },
];


export default function WhyWeStarted() {
  const [activeIndex, setActiveIndex] = useState(1);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  /* ⭐ Auto Slide Logic */
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="bg-[#050505] text-white py-24 px-4 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Section Title */}
        <div className="text-center mb-20 space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-snug max-w-2xl mx-auto">
            Why We Started
          </h2>
        </div>

        {/* Slider */}
        <div className="relative w-full flex items-center justify-center px-4 md:px-16">

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-4 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-[#111111] border border-white/5 text-blue-500 hover:bg-[#161616] hover:text-blue-400 transition active:scale-95 shadow-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Cards */}
          <div className="
  grid 
  grid-cols-1 
  sm:grid-cols-2 
  md:grid-cols-3 
  gap-8 md:gap-4 
  items-center 
  w-full 
  max-w-5xl
">
            {testimonials.map((item, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === (activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1);
              const isNext = index === (activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1);

              // ⭐ Visibility logic
              const showMobile = isActive;
              const showTablet = isActive || isPrev;
              const showDesktop = isActive || isPrev || isNext;

              return (
                <div
                  key={index}
                  className={`
          relative flex flex-col items-center text-center px-6 py-10
          transition-all duration-700 ease-out

          /* Mobile */
          ${showMobile ? "block" : "hidden"} 

          /* Tablet */
          sm:${showTablet ? "block" : "hidden"}

          /* Desktop */
          md:${showDesktop ? "block" : "hidden"}

          ${isActive ? "scale-100 rotate-0 z-20" : ""}
          ${isPrev ? "md:scale-90 md:-rotate-y-6 md:translate-x-4 md:opacity-80" : ""}
          ${isNext ? "md:scale-90 md:rotate-y-6 md:-translate-x-4 md:opacity-80" : ""}
        `}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Divider + Quote Icon */}
                  <div className="w-full flex items-center justify-center gap-4 mb-6">
                    <div className="h-[1px] flex-1 bg-white/20" />
                    <span className="text-3xl font-serif text-blue-500 italic drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]">
                      ““
                    </span>
                    <div className="h-[1px] flex-1 bg-white/20" />
                  </div>

                  {/* Quote */}
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed font-light min-h-[80px] max-w-sm mb-8">
                    {item.quote}
                  </p>

                  {/* Identity */}
                  <div className="space-y-1">
                    <h4 className="text-blue-500 font-semibold text-sm tracking-wide">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>



          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-4 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-[#111111] border border-white/5 text-blue-500 hover:bg-[#161616] hover:text-blue-400 transition active:scale-95 shadow-lg"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* CTA */}
        <button className="mt-16 rounded-xl bg-[#0070f3] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-[var(--primary)] active:scale-95">
          Learn More
        </button>
      </div>
    </section>
  );
}
