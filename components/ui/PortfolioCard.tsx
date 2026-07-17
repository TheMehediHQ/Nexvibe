"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export interface PortfolioItem {
  imageSrc: string;
  title: string;
  description: string;
  tags: string[];
}

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <div className="flex flex-col bg-[#121212] rounded-[28px] p-7 text-left w-full max-w-[440px] shadow-2xl">
      
      {/* Aspect Ratio Balanced Project Image Container */}
      <div className="relative w-full aspect-[4/3] mb-7 rounded-[20px] overflow-hidden bg-neutral-900">
        <Image
          src={item.imageSrc}
          alt={item.title}
          fill
          sizes="(max-w-md) 100vw, 440px"
          className="object-cover"
          priority
        />
      </div>

      {/* Header Row: Title & Action Circle Arrow Button */}
      <div className="flex items-center justify-between gap-4 mb-5">
        <h3 className="text-2xl font-semibold text-white tracking-wide">
          {item.title}
        </h3>
        
        {/* Exact circular blue arrow button matching the screen */}
        <button 
          className="flex items-center justify-center w-11 h-11 rounded-full bg-[#4ba3f5] text-white shrink-0 transition-transform hover:scale-105 active:scale-95"
          aria-label={`View details for ${item.title}`}
        >
          <ArrowRight className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>

      {/* Project Short Description Paragraph */}
      <p className="text-[14px] text-gray-300 font-normal leading-relaxed mb-6 opacity-80">
        {item.description}
      </p>

      {/* Core Technical Keypoints Grid */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-left">
        {item.tags.map((tag, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="text-[#3b82f6] text-[14px] leading-tight select-none">•</span>
            <span className="text-[13px] text-gray-300 font-normal leading-tight">
              {tag}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}