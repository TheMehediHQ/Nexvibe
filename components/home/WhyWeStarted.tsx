"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface TestimonialCard {
  quote: string;
  name: string;
  role: string;
  isActive?: boolean;
}

const testimonials: TestimonialCard[] = [
  {
    quote: "That's when we knew there had to be a better way — a smarter, faster, more intuitive solution.",
    name: "John Doe",
    role: "Founder & CEO",
  },
  {
    quote: "So we built a platform that empowers companies to transform raw data into real-time decisions using the power of AI.",
    name: "John Doe",
    role: "Founder & CEO",
    isActive: true, // Center highlighted card
  },
  {
    quote: "We're here to make intelligent systems accessible, actionable, and aligned with real business goals.",
    name: "John Doe",
    role: "Founder & CEO",
  },
];

export default function WhyWeStarted() {
  return (
    <section className="bg-[#050505] text-white py-24 px-4 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Title */}
      
        

 <div className="relative mx-auto max-w-7xl flex flex-col items-center">
        
    

        <div className="text-center mb-20 space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-snug max-w-2xl mx-auto">
            Why We Started
            
          </h2>
        </div>







        

        

        {/* Slider Area container */}
        <div className="relative w-full flex items-center justify-center px-4 md:px-16">
          
          {/* Left Arrow Button */}
          <button className="absolute left-0 md:left-4 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-[#111111] border border-white/5 text-blue-500 hover:bg-[#161616] hover:text-blue-400 transition active:scale-95 shadow-lg">
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Testimonial Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center w-full max-w-5xl">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center text-center px-6 py-10 transition-all duration-300 ${
                  item.isActive 
                    ? "opacity-100 scale-100 z-10" 
                    : "opacity-25 scale-95 pointer-events-none hidden md:flex"
                }`}
              >
                {/* Custom Divider Lines with Blue Quote Marks */}
                <div className="w-full flex items-center justify-center gap-4 mb-6">
                  <div className={`h-[1px] flex-1 ${index === 0 ? "bg-gradient-to-r from-transparent to-white/20" : "bg-white/20"}`} />
                  
                  {/* Glowing Blue Quote mark */}
                  <span className="text-3xl font-serif text-blue-500 font-black italic select-none leading-none drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]">
                    ““
                  </span>
                  
                  <div className={`h-[1px] flex-1 ${index === 2 ? "bg-gradient-to-l from-transparent to-white/20" : "bg-white/20"}`} />
                </div>

                {/* Quote Text */}
                <p className="text-sm md:text-base text-gray-300 leading-relaxed font-light min-h-[80px] max-w-sm mb-8">
                  {item.quote}
                </p>

                {/* Profile Identity */}
                <div className="space-y-1">
                  <h4 className="text-blue-500 font-semibold text-sm tracking-wide">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button className="absolute right-0 md:right-4 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-[#111111] border border-white/5 text-blue-500 hover:bg-[#161616] hover:text-blue-400 transition active:scale-95 shadow-lg">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* "Learn More" Action Button */}
        <button className="mt-16 rounded-xl bg-[#0070f3] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-600 active:scale-95">
          Learn More
        </button>

      </div>
    
     </div>
     </section>
  );
}