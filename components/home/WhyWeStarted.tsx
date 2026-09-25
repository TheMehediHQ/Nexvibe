"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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

function useWindowSize() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default function WhyWeStarted() {
  const [activeIndex, setActiveIndex] = useState(1);
  const width = useWindowSize();

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024; // 640px to 1023px is tablet

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

  const getCardStyles = (index: number) => {
    let diff = index - activeIndex;
    const total = testimonials.length;
    
    // Handle infinite wrap-around
    if (diff < -total / 2) diff += total;
    if (diff > total / 2) diff -= total;

    if (isMobile) {
      if (diff === 0) {
        return { 
          x: "0%", 
          opacity: 1, 
          scale: 1, 
          zIndex: 20, 
          rotateY: 0,
          pointerEvents: "auto" as const 
        };
      }
      return { 
        x: diff > 0 ? "120%" : "-120%", 
        opacity: 0, 
        scale: 0.8, 
        zIndex: 10, 
        rotateY: 0,
        pointerEvents: "none" as const 
      };
    } else if (isTablet) {
      // Shows 2 cards side-by-side: prev (left) and active (right)
      if (diff === 0) {
        return { 
          x: "55%", 
          opacity: 1, 
          scale: 1, 
          zIndex: 20, 
          rotateY: 0,
          pointerEvents: "auto" as const 
        };
      }
      if (diff === -1) {
        return { 
          x: "-55%", 
          opacity: 0.8, 
          scale: 0.9, 
          zIndex: 10, 
          rotateY: 10,
          pointerEvents: "auto" as const 
        };
      }
      return { 
        x: diff > 0 ? "160%" : "-160%", 
        opacity: 0, 
        scale: 0.8, 
        zIndex: 5, 
        rotateY: 0,
        pointerEvents: "none" as const 
      };
    } else {
      // Desktop: Shows 3 cards: prev (left), active (center), next (right)
      if (diff === 0) {
        return { 
          x: "0%", 
          opacity: 1, 
          scale: 1.05, 
          zIndex: 20, 
          rotateY: 0,
          pointerEvents: "auto" as const 
        };
      }
      if (diff === -1) {
        return { 
          x: "-108%", 
          opacity: 0.65, 
          scale: 0.9, 
          zIndex: 10, 
          rotateY: 18,
          pointerEvents: "auto" as const 
        };
      }
      if (diff === 1) {
        return { 
          x: "108%", 
          opacity: 0.65, 
          scale: 0.9, 
          zIndex: 10, 
          rotateY: -18,
          pointerEvents: "auto" as const 
        };
      }
      return { 
        x: diff > 0 ? "200%" : "-200%", 
        opacity: 0, 
        scale: 0.75, 
        zIndex: 5, 
        rotateY: 0,
        pointerEvents: "none" as const 
      };
    }
  };

  return (
    // <section className="bg-[#050505] text-white py-24 px-4 relative overflow-hidden select-none">

    <section className="bg-background text-foreground py-24 px-4 relative overflow-hidden select-none">
     
     
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Section Title */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-snug max-w-2xl mx-auto">
            Why We Started
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative w-full flex items-center justify-center px-4 md:px-12">

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-4 z-30 flex items-center justify-center w-12 h-12 rounded-full bg-[#111111]/80 backdrop-blur-md border border-white/5 text-blue-500 hover:bg-[#161616] hover:text-blue-400 transition active:scale-95 shadow-lg cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Cards Area */}
          <div className="relative w-full max-w-5xl h-[380px] sm:h-[350px] flex items-center justify-center overflow-hidden" style={{ perspective: "1200px" }}>
            {testimonials.map((item, index) => {
              const styles = getCardStyles(index);
              
              return (
                <motion.div
                  key={index}
                  animate={styles}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 22,
                  }}
                  className="absolute w-[280px] sm:w-[300px] md:w-[310px] h-[310px] p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#121212] to-[#0a0a0a] border border-white/5 flex flex-col justify-between items-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:border-blue-500/20 transition-colors duration-300"
                  style={{ 
                    transformStyle: "preserve-3d", 
                    backfaceVisibility: "hidden" 
                  }}
                >
                  {/* Divider + Quote Icon */}
                  <div className="w-full flex items-center justify-center gap-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                    <span className="text-3xl font-serif text-blue-500 italic drop-shadow-[0_0_12px_rgba(59,130,246,0.5)] leading-none select-none">
                      “
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                  </div>

                  {/* Quote Text */}
                  <p className="text-xs sm:text-sm text-gray-100 leading-relaxed font-light max-w-sm flex-grow flex items-center justify-center px-1">
                    {item.quote}
                  </p>

                  {/* Identity Section */}
                  <div className="w-full space-y-3 mt-4">
                    <div className="h-px w-full bg-white/5" />
                    <div className="space-y-0.5">
                      <h4 className="text-blue-500 font-semibold text-xs sm:text-sm tracking-wide">
                        {item.name}
                      </h4>
                      <p className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-wider font-medium">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-4 z-30 flex items-center justify-center w-12 h-12 rounded-full bg-[#111111]/80 backdrop-blur-md border border-white/5 text-blue-500 hover:bg-[#161616] hover:text-blue-400 transition active:scale-95 shadow-lg cursor-pointer"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* CTA */}
        {/* <button className="mt-12 rounded-xl bg-[#0070f3] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-[var(--primary)] active:scale-95 cursor-pointer">
          Learn More
        </button> */}
      </div>
    </section>
  );
}
