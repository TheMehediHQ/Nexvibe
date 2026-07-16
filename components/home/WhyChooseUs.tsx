"use client";

import React from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Cpu, Users, Award, ShieldCheck, LucideIcon } from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const features: FeatureItem[] = [
  {
    title: "Innovation",
    description:
      "Pushing boundaries in AI, blockchain, and quantitative trading to deliver cutting-edge solutions.",
    icon: Cpu,
  },
  {
    title: "Collaboration",
    description:
      "Working closely with clients to develop tailored solutions that drive measurable success.",
    icon: Users,
  },
  {
    title: "Excellence",
    description:
      "Maintaining the highest standards in code quality, system performance, and client outcomes.",
    icon: Award,
  },
  {
    title: "Integrity",
    description:
      "Operating with transparency and ethical considerations at the forefront of all decisions.",
    icon: ShieldCheck,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function FeatureCard({ feature, index }: { feature: FeatureItem; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Spotlight color is a soft green corresponding to the original style
  const spotlightBg = useMotionTemplate`radial-gradient(140px circle at ${mouseX}px ${mouseY}px, rgba(74, 222, 128, 0.15), transparent 80%)`;

  const Icon = feature.icon;

  return (
    <motion.div
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      whileHover={{
        scale: 1.08,
        y: -12,
        zIndex: 40,
        boxShadow: "0 25px 60px -15px rgba(74, 222, 128, 0.25)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
        group
        relative z-10
        flex flex-col items-center justify-center
        rounded-full
        bg-[#111111]
        border-[10px] border-black

        w-[240px] h-[240px]
        sm:w-[260px] sm:h-[260px]
        md:w-[280px] md:h-[280px]
        lg:w-[290px] lg:h-[290px]

        px-6 text-center
        cursor-pointer
        overflow-hidden
      "
      style={{
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.7)",
      }}
    >
      {/* Interactive Spotlight background */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: spotlightBg,
        }}
      />

      {/* Inner Glow Border */}
      <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none group-hover:border-[#4ade80]/20 transition-colors duration-300" />

      {/* Icon */}
      <motion.div 
        whileHover={{ scale: 1.15, rotate: 10 }}
        className="relative z-10 mb-4 flex items-center justify-center rounded-full border border-[#4ade80]/20 bg-[#1e293b]/30 p-2.5 text-[#4ade80] shadow-[0_0_15px_rgba(74,222,128,0.1)] transition-all duration-300 group-hover:border-[#4ade80]/40 group-hover:bg-[#4ade80]/10 group-hover:shadow-[0_0_20px_rgba(74,222,128,0.25)]"
      >
        <Icon className="h-6 w-6 fill-[#4ade80]/10 transition-transform duration-300 group-hover:scale-110" />
      </motion.div>

      {/* Title */}
      <h3 className="relative z-10 mb-3 text-lg font-semibold text-gray-100 group-hover:text-white transition-colors duration-300">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="relative z-10 max-w-[190px] text-xs leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        {feature.description}
      </p>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-24 px-4 sm:px-6">
      {/* Top Right Pattern */}
      <div className="absolute right-0 top-0 hidden h-48 w-64 opacity-20 md:block" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
          className="mb-12 text-center md:mb-20"
        >
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Why Choose Us
          </h2>
        </motion.div>

        {/* Mobile = Vertical Overlap | Desktop = Horizontal Overlap */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="
            flex flex-col items-center
            -space-y-6
            sm:-space-y-16
            md:-space-y-20
            lg:flex-row
            lg:flex-wrap
            lg:justify-center
            lg:gap-y-12
            lg:-space-y-0
            lg:-space-x-10
            xl:-space-x-12
          "
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}