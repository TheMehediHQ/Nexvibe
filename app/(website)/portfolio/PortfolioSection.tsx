"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import PortfolioCard, { PortfolioItem } from "@/components/ui/PortfolioCard";

const portfolioData: PortfolioItem[] = [
  {
    imageSrc: "/projects/test.png",
    title: "MachineLearningProject",
    description: "Built automated deep learning pipelines to detect enterprise logistics patterns and increase anomaly precision indexes.",
    tags: ["Neural Network Pipeline", "Computer Vision Tuning", "Real-time Detection Arrays", "Custom Inference Clusters"],
    
  },
  {
    imageSrc: "/projects/test.png",
    title: "ProjectLoremipsum",
    description: "Architected decentralized immutable ledger bridges supporting zero-knowledge state management across multiple subnets.",
    tags: ["Cross-Chain Relayers", "ZK-Proof Architectures", "Smart Contract Hardening", "DeFi Liquidity Hubs"],
  },
  {
    imageSrc: "/projects/test.png",
    title: "ProjectLoremipsum",
    description: "Engineered sub-millisecond automated order execution systems designed for global market microstructures.",
    tags: ["High-Frequency Routing", "Backtesting Core Engine", "Risk Mitigation Loops", "Multi-Venue Aggregation"],
  },
  {
    imageSrc: "/projects/test.png",
    title: "ProjectLoremipsum",
    description: "Constructed lakehouse architectures scaling telemetry ingest pipelines to process petabyte arrays efficiently.",
    tags: ["Real-time Stream Ingest", "Delta Lake Layouts", "Automated ETL Core", "Data Infrastructure Audits"],
  },
  {
    imageSrc: "/projects/test.png",
    title: "ProjectLoremipsum",
    description: "Designed multi-region cloud governance mesh architectures featuring auto-healing deployment clusters.",
    tags: ["High-Availability Setup", "CI/CD Pipeline Sweeps", "Model Hosting Systems", "Kubernetes Mesh Layers"],
  },
  {
    imageSrc: "/projects/test.png",
    title: "ProjectLoremipsum",
    description: "Developed institutional-grade data control platforms handling encrypted high-throughput enterprise pipelines.",
    tags: ["Zero-Trust Networks", "Automated Compliance", "Secure Data Enclaves", "Identity Access Nodes"],
  },
];

export default function PortfolioSection() {
  // ১. ফিল্টারিং এর জন্য স্টেট (States) ঘোষণা করা হলো
  const [searchQuery, setSearchQuery] = useState("");
  const [category1, setCategory1] = useState("All");
  const [category2, setCategory2] = useState("All");

  // ২. ফিল্টার লজিক (useMemo ব্যবহার করা হয়েছে পারফরম্যান্স অপ্টিমাইজেশনের জন্য)
  const filteredPortfolio = useMemo(() => {
    return portfolioData.filter((project) => {
      // সার্চ ম্যাচ চেক (Title, Description অথবা Tags এর সাথে মিললে)
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      // প্রথম ড্রপডাউন ফিল্টার ম্যাচ চেক
      const matchesCat1 =
        category1 === "All" ||
        project.tags.some((tag) => tag.toLowerCase().includes(category1.toLowerCase())) ||
        project.title.toLowerCase().includes(category1.toLowerCase());

      // দ্বিতীয় ড্রপডাউন ফিল্টার ম্যাচ চেক
      const matchesCat2 =
        category2 === "All" ||
        project.tags.some((tag) => tag.toLowerCase().includes(category2.toLowerCase()));

      return matchesSearch && matchesCat1 && matchesCat2;
    });
  }, [searchQuery, category1, category2]);

  // ৩. ফিল্টার ক্লিয়ার করার ফাংশন
  const handleClearAll = () => {
    setSearchQuery("");
    setCategory1("All");
    setCategory2("All");
  };

  return (
    <section className="text-gray-300 min-h-screen py-12 bg-black selection:bg-blue-500/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">

        {/* ================= Hero Banner ================= */}
        <div className="relative overflow-hidden bg-[#141414] rounded-3xl p-8 md:p-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative z-10 max-w-xl space-y-4 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Our Work, <span className="text-blue-500">Your Future</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Explore a collection of digital experiences we’ve crafted for ambitious brands — from high-performance websites and web applications to innovative solutions designed to solve real business challenges.
            </p>
            <button className="rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              Get In Touch Now
            </button>
          </div>

          <div className="relative flex h-44 w-44 md:h-56 md:w-56 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <Image
                src="/icons/poerfoliyo-hero.png"
                alt="Contact Icon"
                width={220}
                height={220}
                className="h-40 w-40 md:h-52 md:w-52 object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* ================= MIDDLE SECTION HEADER ================= */}
        <div className="text-center space-y-4 max-w-7xl mx-auto pt-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Our Case Studies
          </h2>
          <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
            Explore our engineering milestones. We transform sophisticated technological concepts into bulletproof production architectures built for global industry scale.
          </p>
        </div>

        {/* ================= FILTER & SEARCH BAR CONTROL ================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto bg-transparent pt-2">
          
          {/* Keyword Search Input Field (Connected to value & onChange) */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search by Keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#111112] border border-white/[0.06] rounded-xl pl-4 pr-10 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 rounded-lg bg-blue-600/10 text-blue-500">
              <Search className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Filtering Dropdowns */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-end">
            <select 
              value={category1}
              onChange={(e) => setCategory1(e.target.value)}
              className="bg-[#111112] border border-white/[0.06] rounded-xl px-4 py-2.5 text-xs text-gray-300 focus:outline-none focus:border-blue-500 cursor-pointer min-w-[140px]"
            >
              <option value="All">All Tech Stack</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Blockchain">Blockchain</option>
              <option value="Algorithmic Trading">Algorithmic Trading</option>
            </select>

            <select 
              value={category2}
              onChange={(e) => setCategory2(e.target.value)}
              className="bg-[#111112] border border-white/[0.06] rounded-xl px-4 py-2.5 text-xs text-gray-300 focus:outline-none focus:border-blue-500 cursor-pointer min-w-[140px]"
            >
              <option value="All">All Architecture</option>
              <option value="Data Engineering">Data Engineering</option>
              <option value="Cloud Infrastructure">Cloud Infrastructure</option>
            </select>

            <button 
              onClick={handleClearAll}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-6 py-2.5 rounded-xl transition active:scale-95 shadow-lg shadow-blue-600/10"
            >
              Clear All
            </button>
          </div>
        </div>

        {/* ================= PORTFOLIO GRID (Renders filtered results) ================= */}
        {filteredPortfolio.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto pt-4 justify-items-center items-start w-full">
            {filteredPortfolio.map((project, index) => (
              <PortfolioCard key={index} item={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 text-sm">
            No case studies found matching your criteria.
          </div>
        )}

       

      </div>
    </section>
  );
}