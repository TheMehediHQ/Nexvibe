"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="text-gray-300 min-h-screen py-12 bg-background selection:bg-blue-500/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">

        {/* ================= HERO BANNER (Animation Remains Active Here) ================= */}
        <div className="relative overflow-hidden bg-[#141414] rounded-3xl p-8 md:p-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative z-10 max-w-xl space-y-4 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              We’re Engineers of <span className="text-blue-500">Intelligent Change</span>
            </h1>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Pioneering the intersection of AI, blockchain, and quantitative finance to deliver innovative solutions that drive business transformation
            </p>

            <button
              className="rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Get In Touch Now
            </button>
          </div>

          {/* Chat Icon (With Animation) */}
          <div className="relative flex h-44 w-44 md:h-56 md:w-56 items-center justify-center">
            {/* Glow Background */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <Image
                src="/icons/about-hero.png"
                alt="Contact Icon"
                width={220}
                height={220}
                className="h-40 w-40 md:h-52 md:w-52 object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* ================= CONTENT MARGIN WRAPPER ================= */}
        <div className="relative space-y-28 md:space-y-36 max-w-6xl mx-auto px-2">
          
          {/* Subtle Background Micro Dot Grid for Story/Mission Blocks */}
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none" 
            style={{
              backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
              backgroundSize: '24px 24px'
            }}
          />

          {/* ROW 1: Our Story (Text Left, Image Right - Static Image) */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Side Content */}
            <div className="space-y-5 order-1">
              <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-white">
                Our Story
              </h2>
              <div className="space-y-4 text-xs md:text-sm text-gray-400 font-light leading-relaxed tracking-wide">
                <p>
                  Nexvibe started with a simple yet powerful vision: to bridge the gap between complex technological engineering and intuitive user experiences. As a forward-thinking software agency, we recognized that the digital landscape was evolving faster than ever, requiring more than just standard templates.
                </p>
                <p>
                  We gathered a team of passionate developers, creative designers, and data strategists dedicated to building high-performance architectures. From custom enterprise software to decentralized web applications, we focused on delivering scalable digital solutions that drive measurable business acceleration worldwide.
                </p>
                <p>
                  Over the years, we have evolved from a small tech collective into a full-scale digital innovation hub, turning ambitious software ideas into production-ready platforms that sustain market growth.
                </p>
              </div>
            </div>

            {/* Right Side Image (3D Globe Asset - Static) */}
            <div className="flex items-center justify-center order-2">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/icons/Rectangle 33.png" 
                  alt="Nexvibe Global Footprint Illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* ROW 2: Our Mission (Image Left, Text Right - Static Image) */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Side Image (3D Target Asset - Static) */}
            <div className="flex items-center justify-center order-2 md:order-1">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/icons/Rectangle 34.png" 
                  alt="Nexvibe Mission Target Illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right Side Content */}
            <div className="space-y-5 order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-white">
                Our Mission
              </h2>
              <div className="space-y-4 text-xs md:text-sm text-gray-400 font-light leading-relaxed tracking-wide">
                <p>
                  At Nexvibe, our mission is to empower enterprises, fast-growing startups, and industry leaders by engineering bulletproof software solutions that maximize operational value. We strive to clear technical roadblocks and provide product clarity through superior code craftsmanship.
                </p>
                <p>
                  We are committed to maintaining the highest benchmarks in performance optimization, cloud security, and algorithmic integrity. Our priority is to build sustainable, secure tech infrastructures that serve as the backbones for long-term operational scaling.
                </p>
                <p>
                  Ultimately, we aim to shape the next vibration of digital environments, making complex software systems accessible, actionable, and precisely aligned with real-world business goals.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>


      

<div className="w-full max-w-5xl mx-auto pt-12">
      <div
        className="
          relative 
          rounded-[50px] md:rounded-[80px] 
          bg-[#09090A] 
          border border-white/[0.08] 
          px-6 py-14 md:py-16 
          text-center 
          space-y-6 
          overflow-hidden 
          shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_25px_60px_-15px_rgba(0,0,0,0.9)]
        "
      >
        {/* 1px Fine Square Grid Background (more prominent like screenshot) */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(circle at center, black 70%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 70%, transparent 100%)",
          }}
        />

        {/* Light ambient top-center radial gradient reflection */}
        <div
          className="
            absolute 
            top-0 left-1/2 -translate-x-1/2 
            w-[300px] h-[60px] 
            bg-white/[0.02] blur-md rounded-full 
            pointer-events-none
          "
        />

        {/* Main Text Elements */}
        <div className="relative z-10 space-y-4">
          <h3 className="text-3xl md:text-4xl font-bold tracking-normal text-white max-w-2xl mx-auto">
            Ready to Discuss
          </h3>
          <h3 className="text-sm md:text-base text-gray-300 font-light tracking-wide">
            Your Product Needs With{" "}
            <span className="text-[#0070f3] font-semibold">NexVibe</span> Experts?
          </h3>
        </div>

        {/* Custom Rounded Pill Button */}
        <div className="relative z-10 pt-2 flex justify-center">
          <button
            type="button"
            className="
              rounded-xl 
              bg-[#0080FF] hover:bg-[#0070E0] 
              text-white font-medium text-xs md:text-sm tracking-wide 
              px-10 py-3.5 
              transition active:scale-95 
              shadow-[0_4px_20px_rgba(0,128,255,0.25)]
              border border-white/10
            "
            onClick={() => {
              // Replace with your actual contact logic
              console.log("Get In Touch clicked");
            }}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>













    </section>
  );
}