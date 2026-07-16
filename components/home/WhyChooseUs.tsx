"use client";

import React from "react";
import { Award } from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    title: "Innovation",
    description:
      "Pushing boundaries in AI, blockchain, and quantitative trading to deliver cutting-edge solutions.",
  },
  {
    title: "Collaboration",
    description:
      "Working closely with clients to develop tailored solutions that drive measurable success.",
  },
  {
    title: "Excellence",
    description:
      "Maintaining the highest standards in code quality, system performance, and client outcomes.",
  },
  {
    title: "Integrity",
    description:
      "Operating with transparency and ethical considerations at the forefront of all decisions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-24 px-4 sm:px-6">
      {/* Top Right Pattern */}
      <div className="absolute right-0 top-0 hidden h-48 w-64 opacity-20 md:block" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center md:mb-20">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Why Choose Us
          </h2>
        </div>

        {/* Mobile = Vertical Overlap | Desktop = Horizontal Overlap */}
        <div
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
            <div
              key={index}
              className="
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
                shadow-2xl
                transition-all duration-300
                hover:z-20 hover:scale-105
              "
              style={{
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.7)",
              }}
            >
              {/* Icon */}
              <div className="mb-4 flex items-center justify-center rounded-full border border-[#4ade80]/20 bg-[#1e293b]/30 p-2 text-[#4ade80]">
                <Award className="h-6 w-6 fill-[#4ade80]/20" />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-semibold text-gray-100">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="max-w-[190px] text-xs leading-relaxed text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}