// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function ServicesSection() {
//   return (
//     <section className="text-gray-300 min-h-screen py-12">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">

//         {/* Hero Banner */}
//         <div className="relative overflow-hidden bg-[#141414] rounded-3xl p-8 md:p-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">

//           <div
//             className="absolute inset-0 opacity-[0.03] pointer-events-none"
//             style={{
//               backgroundImage:
//                 "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
//               backgroundSize: "20px 20px",
//             }}
//           />

//           <div className="relative z-10 max-w-xl space-y-4 text-center md:text-left">

//             <h1 className="text-3xl md:text-4xl font-bold text-white">
//   Our Comprehensive <span className="text-blue-500">Digital Solutions</span>
// </h1>


//             <p className="text-gray-400 text-sm md:text-base leading-relaxed">
//           We create powerful digital solutions that help businesses thrive online. From stunning websites and scalable web applications to custom software and modern digital experiences, our team delivers technology-driven solutions designed for growth, performance, and success.
//  </p>

//             <button
//               className="rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
//             >
//               Get In Touch Now
//             </button>

//           </div>

//           {/* Chat Icon */}
//        <div className="relative flex h-44 w-44 md:h-56 md:w-56 items-center justify-center">

//   {/* Glow Background */}
//   <div className="
//     absolute inset-0 
//     rounded-full 
//     bg-blue-500/20 
//     blur-3xl 
//     animate-pulse
//   " />

//   <motion.div
//     animate={{ y: [0, -15, 0] }}
//     transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
//     className="relative"
//   >
//     <Image
//       src="/icons/service-hero.png"
//       alt="Contact Icon"
//       width={220}
//       height={220}
//       className="h-40 w-40 md:h-52 md:w-52 object-contain"
//     />
//   </motion.div>

// </div>


         

//         </div>

//         {/* Main Content */}
       

//       </div>
//     </section>
//   );
// }



"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ServiceCard, { CardItem } from "@/components/ui/ServiceCard"; // পাথ আপনার ফোল্ডার স্ট্রাকচার অনুযায়ী দিন

// 1. Services Data
const servicesData: CardItem[] = [
  {
    imageSrc: "/icons/icons8-laptop-coding-1500.png",
    title: "Custom Software Development",
    description:
      "Scalable, high‑performance software engineered to match your business goals and operational needs.",
    bullets: [
      "Enterprise‑grade Architecture",
      "API & Microservices Development",
      "Workflow Automation Systems",
      "Cross‑platform Software Solutions",
    ],
  },
  {
    imageSrc: "/icons/icons8-world-wide-web-blue-globe-1500.png",
    title: "Web Development",
    description:
      "Modern, responsive websites built for speed, conversion, and long‑term brand impact.",
    bullets: [
      "Next.js / React Development",
      "SEO‑optimized Architecture",
      "High‑performance UI/UX",
      "Custom CMS & Dashboard Systems",
    ],
  },
  {
    imageSrc: "/icons/icons8-smartphone-tablet-1500.png",
    title: "Mobile App Development",
    description:
      "iOS and Android applications crafted for seamless performance, intuitive UX, and scalable growth.",
    bullets: [
      "Cross‑platform App Development",
      "Native iOS & Android Builds",
      "Real‑time Sync & Cloud Integration",
      "User‑centric Interface Design",
    ],
  },
  {
    imageSrc: "/icons/icons8-chatbot-1500.png",
    title: "AI & Machine Learning Solutions",
    description:
      "Intelligent systems that automate workflows, enhance decision‑making, and unlock predictive insights.",
    bullets: [
      "Custom ML Model Development",
      "AI‑powered Automation",
      "Natural Language Processing",
      "Predictive Analytics Pipelines",
    ],
  },
  {
    imageSrc: "/icons/icons8-paint-palette-1500.png",
    title: "Graphics & Creative Design",
    description:
      "Branding, UI/UX, and visual design that elevate your digital identity with premium aesthetics.",
    bullets: [
      "Brand Identity & Logo Design",
      "UI/UX Wireframing & Prototyping",
      "Marketing & Social Media Graphics",
      "Product & Web Interface Design",
    ],
  },
  {
    imageSrc: "/icons/icons8-digital-marketing-1500.png",
    title: "Digital Marketing",
    description:
      "SEO, social media, and paid campaigns designed to boost visibility, engagement, and business growth.",
    bullets: [
      "Search Engine Optimization (SEO)",
      "Social Media Strategy",
      "Paid Ads & Campaign Management",
      "Content & Brand Positioning",
    ],
  },
];


// 2. Industries Data
const industriesData: CardItem[] = [
  {
    imageSrc: "/icons/72355892508 1 (1).png",
    title: "Financial Services",
    description:
      "Building secure, compliant, and high‑performance digital systems for banks, fintech platforms, and investment firms.",
    bullets: [
      "Digital Banking Solutions",
      "Risk & Compliance Systems",
      "Portfolio Management Tools",
      "Payment Gateway Integration",
    ],
  },
  {
    imageSrc: "/icons/72355892508 1 (3).png",
    title: "Healthcare & Life Sciences",
    description:
      "Developing privacy‑focused digital solutions that streamline patient care, diagnostics, and medical data workflows.",
    bullets: [
      "Electronic Health Records (EHR)",
      "Telemedicine Platforms",
      "Clinical Data Processing",
      "AI‑assisted Diagnostics",
    ],
  },
  {
    imageSrc: "/icons/72355892508 1 (2).png",
    title: "Retail & E‑commerce",
    description:
      "Enhancing customer experience and operational efficiency with intelligent commerce platforms and automation.",
    bullets: [
      "Recommendation Engines",
      "Inventory & Order Automation",
      "Dynamic Pricing Systems",
      "Search Optimization",
    ],
  },
  {
    imageSrc: "/icons/72355892508 1 (4).png",
    title: "Manufacturing & Industrial",
    description:
      "Creating smart factory solutions that reduce downtime, optimize production, and improve operational visibility.",
    bullets: [
      "Predictive Maintenance",
      "IoT Monitoring Dashboards",
      "Supply Chain Optimization",
      "Quality Control Automation",
    ],
  },
  {
    imageSrc: "/icons/icons8-student-male-1500.png",
    title: "Education & EdTech",
    description:
      "Empowering institutions with digital learning platforms, analytics, and interactive student engagement systems.",
    bullets: [
      "Learning Management Systems",
      "Student Analytics",
      "Assessment Automation",
      "Virtual Classroom Tools",
    ],
  },
  {
    imageSrc: "/icons/icons8-real-estate-1500.png",
    title: "Real Estate & Property Tech",
    description:
      "Delivering modern digital tools for property management, customer engagement, and real‑time market insights.",
    bullets: [
      "Property Listing Platforms",
      "Virtual Tour Integration",
      "CRM for Agents",
      "Market Analytics Dashboards",
    ],
  },
];


export default function ServicesSection() {
  return (
    <section className="text-gray-300 min-h-screen py-12 bg-background selection:bg-blue-500/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Hero Banner */}
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
              Our Comprehensive <span className="text-blue-500">Digital Solutions</span>
            </h1>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              We create powerful digital solutions that help businesses thrive online. From stunning websites and scalable web applications to custom software and modern digital experiences, our team delivers technology-driven solutions designed for growth, performance, and success.
            </p>

            <button
              className="rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Get In Touch Now
            </button>
          </div>

          {/* Chat Icon */}
          <div className="relative flex h-44 w-44 md:h-56 md:w-56 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <Image
                src="/icons/service-hero.png"
                alt="Contact Icon"
                width={220}
                height={220}
                className="h-40 w-40 md:h-52 md:w-52 object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* ----------------- SERVICES GRID ----------------- */}
        <div className="space-y-16">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Our Services</h2>
            <p className="text-xs md:text-sm text-white max-w-md mx-auto leading-relaxed font-light">
              High-performance system architecture and custom interfaces built to scale your workflow efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {servicesData.map((service, idx) => (
              <ServiceCard key={idx} item={service} />
            ))}
          </div>
        </div>

        {/* ----------------- INDUSTRIES GRID ----------------- */}
        {/* <div className="space-y-16 pt-8 border-t border-white/[0.03]">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Industries We Serve</h2>
            <p className="text-xs md:text-sm text-white max-w-md mx-auto leading-relaxed font-light">
              Integrating specialized engineering models and architectures into targeted market domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {industriesData.map((industry, idx) => (
              <ServiceCard key={idx} item={industry} />
            ))}
          </div>
        </div> */}

      </div>
    </section>
  );
}