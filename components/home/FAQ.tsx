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
    question: "What services does NexVibe provide?",
    answer:
      "NexVibe delivers end-to-end digital solutions including UX/UI design, web development, mobile app development, custom software engineering, product strategy, and brand identity. Our team supports startups, enterprises, and global brands with scalable, high-quality digital products.",
  },
  {
    id: "02",
    question: "Do you operate from a physical office?",
    answer:
      "We operate as a fully remote, globally distributed digital agency. Our team collaborates across multiple time zones, enabling seamless communication, faster delivery, and flexible support without the limitations of a physical office.",
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
      "Project timelines vary depending on the scope and complexity. Most projects are delivered within 4–12 weeks, with clearly defined milestones and consistent progress updates.",
  },
  {
    id: "05",
    question: "How can we get started with NexVibe?",
    answer:
      "Simply contact us through our website or email. We'll schedule a discovery call, discuss your goals, define the project scope, and prepare a tailored proposal that aligns with your business needs.",
  },
];


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 px-6 sm:px-8">
      {/* Decorative Pattern */}
      <div
        className="pointer-events-none absolute right-0 top-12 hidden h-56 w-40 opacity-10 md:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.7) 1.3px, transparent 1.3px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-14 text-center md:mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[var(--muted)]">
            Find answers to the most common questions about our services,
            workflow, timelines, and collaboration process.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className={`rounded-3xl border bg-[var(--card)] transition-all duration-300 ${isOpen
                    ? "border-white/15 shadow-2xl"
                    : "border-[var(--border)] hover:border-white/10"
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center gap-5 p-6 text-left"
                >
                  {/* Number */}
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${isOpen
                        ? "border-blue-500/30 bg-blue-500/10"
                        : "border-[var(--border)] bg-white/[0.03]"
                      }`}
                  >
                    <span
                      className={`text-sm font-bold ${isOpen
                          ? "text-blue-400"
                          : "text-[var(--muted)]"
                        }`}
                    >
                      {faq.id}
                    </span>
                  </div>

                  {/* Question */}
                  <h3
                    className={`flex-1 pr-4 text-base font-medium transition-colors duration-300 ${isOpen
                        ? "text-blue-400"
                        : "text-[var(--foreground)]"
                      }`}
                  >
                    {faq.question}
                  </h3>

                  {/* Icon */}
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${isOpen
                        ? "bg-blue-500/10 text-blue-400"
                        : "bg-white/[0.03] text-[var(--muted)]"
                      }`}
                  >
                    {isOpen ? (
                      <X className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ${isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pl-[92px]">
                      <p className="leading-7 text-[var(--muted)]">
                        {faq.answer}
                      </p>
                    </div>
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