"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "01",
    question: "What services does Catalyst Analytics provide?",
    answer:
      "Catalyst Analytics delivers end‑to‑end digital solutions including UX/UI design, web development, mobile app development, custom software engineering, product strategy, and brand identity. Our team supports startups, enterprises, and global brands with scalable, high‑quality digital products.",
  },
  {
    id: "02",
    question: "Do you operate from a physical office?",
    answer:
      "We are a fully remote, globally distributed software agency. Our team collaborates across multiple time zones, allowing us to provide seamless support and faster delivery without the limitations of a physical office.",
  },
  {
    id: "03",
    question: "How does your remote collaboration process work?",
    answer:
      "We follow a structured remote workflow using modern tools for communication, project tracking, and version control. Clients receive regular updates, milestone reviews, and transparent progress tracking throughout the entire project lifecycle.",
  },
  {
    id: "04",
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. Most design and development projects range from 4 to 12 weeks. After reviewing your requirements, we provide a detailed timeline with clear milestones and delivery phases.",
  },
  {
    id: "05",
    question: "How can we get started with Catalyst Analytics?",
    answer:
      "Simply reach out through our contact form or email. We’ll schedule a discovery call to understand your goals, define the project scope, and prepare a tailored proposal aligned with your business objectives.",
  },
];


export default function FAQ() {
  // Set the first item open by default to perfectly match the screenshot state
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-24 px-6 sm:px-8">
    
        
      
      


         <div className="relative mx-auto max-w-3xl flex flex-col items-center">
        
    

        <div className="text-center mb-20 space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-snug max-w-2xl mx-auto">
            Frequently Asked Questions
            
          </h2>
        </div>

        {/* Accordion List */}
        <div className="w-full space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-[#0D0D0D] border border-white/[0.03] rounded-2xl p-5 md:p-6 transition-all duration-300"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center gap-5 text-left focus:outline-none group"
                >
                  {/* Number Badge Container */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#141414] border border-white/[0.02] shadow-inner shrink-0">
                    <span
                      className={`text-sm font-bold tracking-wide transition-colors duration-300 ${
                        isOpen ? "text-[#0070f3]" : "text-gray-400"
                      }`}
                    >
                      {faq.id}
                    </span>
                  </div>

                  {/* Question Text */}
                  <span
                    className={`flex-1 text-sm md:text-base font-medium transition-colors duration-300 tracking-wide pr-4 ${
                      isOpen ? "text-[#0070f3]" : "text-gray-200 group-hover:text-white"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Toggle Icon */}
                  <div className="shrink-0 text-gray-400 group-hover:text-white transition-colors">
                    {isOpen ? (
                      <X className="w-5 h-5 text-[#0070f3]" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Expanding Answer Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    {/* Padding-left matches the offset alignment of the question text */}
                    <p className="pl-16 text-xs md:text-sm font-light text-gray-400 leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    
    
    </section>
  );
}