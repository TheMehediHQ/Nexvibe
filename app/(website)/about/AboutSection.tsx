"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="text-gray-300 min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Hero Banner */}
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
              className="rounded-xl bg-[var(--primary)] px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Get In Touch Now
            </button>

          </div>

          {/* Chat Icon */}
          <div className="relative flex h-44 w-44 md:h-56 md:w-56 items-center justify-center">

            {/* Glow Background */}
            <div className="
    absolute inset-0 
    rounded-full 
    bg-blue-500/20 
    blur-3xl 
    animate-pulse
  " />

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

        {/* Main Content */}


      </div>
    </section>
  );
}
