"use client";

import React from "react";
import { motion } from "framer-motion";

const logos = [
  { name: "Zapier", src: "/logos/amazon.png" },
  { name: "Spotify", src: "/logos/amazon.png" },
  { name: "Zoom", src: "/logos/amazon.png" },
  { name: "Slack", src: "/logos/amazon.png" },
  { name: "Amazon", src: "/logos/amazon.png" },
  { name: "Adobe", src: "/logos/amazon.png" },
];

export default function LogoMarquee() {
  // ইনফিনিট স্ক্রলিং লুপ ঠিক রাখার জন্য লোগোর অ্যারেকে ডুপ্লিকেট করা হয়েছে
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="relative w-full bg-[#050505] py-8 border-y border-white/[0.04] overflow-hidden select-none">
      
      {/* দুই পাশে আবছা ছায়া (Fade Effect) তৈরি করার জন্য ব্লার মাস্ক */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex w-max items-center">
        <motion.div
          className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24"
          animate={{
            x: ["0%", "-33.33%"], // ডুপ্লিকেট করা অ্যারের সাইজ অনুযায়ী ৩ ভাগের ১ ভাগ স্ক্রল হবে
          }}
          transition={{
            ease: "linear",
            duration: 20, // স্পিড কন্ট্রোল করার জন্য (বেশি দিলে আস্তে চলবে, কম দিলে জোরে)
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index} 
              className="h-6 md:h-7 w-auto flex items-center justify-center opacity-40 hover:opacity-80 transition-opacity duration-200 grayscale invert"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-full object-contain pointer-events-none"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}