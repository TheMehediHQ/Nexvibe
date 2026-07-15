"use client";

import React from "react";
import { Award } from "lucide-react"; // Custom badge icon matching the screenshot

interface FeatureItem {
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    title: "Innovation",
    description: "Pushing boundaries in AI, blockchain, and quantitative trading to deliver cutting-edge solutions.",
  },
  {
    title: "Collaboration",
    description: "Working closely with clients to develop tailored solutions that drive measurable success.",
  },
  {
    title: "Excellence",
    description: "Maintaining the highest standards in code quality, system performance, and client outcomes.",
  },
  {
    title: "Integrity",
    description: "Operating with transparency and ethical considerations at the forefront of all decisions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-black text-white py-24 px-6 sm:px-8">
      
      {/* Top Right Cross/Plus Grid Pattern */}
      <div 
        className="absolute right-0 top-0 w-64 h-48 opacity-20 hidden md:block select-none pointer-events-none" 
        
      />

      <div className="relative mx-auto max-w-7xl flex flex-col items-center">
        
    

        <div className="text-center mb-20 space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-snug max-w-2xl mx-auto">
            Why Choose Us
            
          </h2>
        </div>

        {/* Overlapping Circles Grid Layout */}
        <div className="flex flex-wrap items-center justify-center gap-y-12 md:-space-x-10 lg:-space-x-12 w-full max-w-6xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center text-center 
                         w-[260px] h-[260px] sm:w-[280px] sm:h-[280px] lg:w-[290px] lg:h-[290px] 
                         rounded-full bg-[#111111] border-[10px] border-black shadow-2xl 
                         transition-transform duration-300 hover:scale-105 hover:z-20 z-10 
                         px-6 sm:px-8"
              style={{
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.7)"
              }}
            >
              {/* Green Badge Icon */}
              <div className="mb-4 text-[#4ade80] flex items-center justify-center bg-[#1e293b]/30 p-2 rounded-full border border-[#4ade80]/10">
                <Award className="w-6 h-6 fill-[#4ade80]/20" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-100 mb-3 tracking-wide">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-xs font-light text-gray-400 leading-relaxed max-w-[200px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}