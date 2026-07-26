"use client";

import { motion } from "framer-motion";

const row1 = [
  "DESIGN FLEXIBILITY",
  "CREATIVE DESIGN",
  "DEDICATED SUPPORT",
  "CODING FLEXIBILITY",
  "SPEED OPTIMIZED",
  "WEB DEVELOPMENT",
];

const row2 = [
  "PUT YOUR BEST FOOT FORWARD",
  "FOR YOUR SUCCESS",
  "DEVELOPMENT",
  "STRATEGY",
  "CREATIVE UI/UX DESIGN",
];

function SparkleIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 fill-white text-white"
      viewBox="0 0 24 24"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

export default function GradientMarquee() {
  const duplicatedRow1 = [...row1, ...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <div className="flex flex-col select-none font-sans overflow-hidden">
      {/* Top Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#6366f1] via-[#06b6d4] to-[#10b981] py-3.5">
        <motion.div
          className="flex w-max items-center gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 90, // 👈 স্পিড অনেক স্লো করা হয়েছে
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedRow1.map((item, index) => (
            <div key={`r1-${index}`} className="flex items-center gap-8">
              <span className="text-base sm:text-lg font-black tracking-wider text-white uppercase drop-shadow-sm whitespace-nowrap">
                {item}
              </span>
              <SparkleIcon />
            </div>
          ))}
        </motion.div>
      </section>

      {/* Bottom Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#f97316] via-[#ec4899] to-[#8b5cf6] py-3.5 border-t border-white/10">
        <motion.div
          className="flex w-max items-center gap-8"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 100, // 👈 স্পিড অনেক স্লো করা হয়েছে
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedRow2.map((item, index) => (
            <div key={`r2-${index}`} className="flex items-center gap-8">
              <span className="text-base sm:text-lg font-black tracking-wider text-white uppercase drop-shadow-sm whitespace-nowrap">
                {item}
              </span>
              <SparkleIcon />
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}