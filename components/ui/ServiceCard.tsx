"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export interface CardItem {
  imageSrc: string;
  title: string;
  description: string;
  bullets: string[];
}

interface ServiceCardProps {
  item: CardItem;
}

export default function ServiceCard({ item }: ServiceCardProps) {
  return (
    <div className="group flex flex-col bg-[#0F0F0F] border border-white/[0.06] rounded-[40px] p-8 md:p-10 transition-all duration-300 hover:border-white/[0.12] shadow-2xl items-center text-center">
      
      {/* 3D Asset Illustration Container */}
      <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
        <Image
          src={item.imageSrc}
          alt={item.title}
          width={180}
          height={180}
          className="object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Heading Title */}
      <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
        {item.title}
      </h3>

      {/* Paragraph Description */}
      <p className="text-sm font-light text-gray-400 leading-relaxed max-w-md mb-8">
        {item.description}
      </p>

      {/* Alternate 2-Column Bullet List Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-left w-full max-w-md mb-10 border-t border-white/[0.04] pt-8">
        {item.bullets.map((bullet, index) => (
          <div key={index} className="flex items-center gap-2.5">
            {/* Bright Blue Dot Indicator */}
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shrink-0" />
            <span className="text-[13px] text-gray-300 font-light truncate" title={bullet}>
              {bullet}
            </span>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <div className="mt-auto">
        <Button variant="primary">Book a Call</Button>
      </div>

    </div>
  );
}