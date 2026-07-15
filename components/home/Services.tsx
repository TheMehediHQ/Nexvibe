"use client";

import Image from "next/image";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const services: ServiceCardProps[] = [
  {
    imageSrc: "/icons/icons8-laptop-coding-1500.png",
    title: "Custom Software Development",
    description: "Scalable, high‑performance software tailored to your business needs.",
  },
  {
    imageSrc: "/icons/icons8-world-wide-web-blue-globe-1500.png",
    title: "Web Development",
    description: "Modern, responsive websites built for speed, conversion, and brand impact.",
  },
  {
    imageSrc: "/icons/icons8-smartphone-tablet-1500.png",
    title: "Mobile App Development",
    description: "iOS and Android apps engineered for seamless performance and great UX.",
  },
  {
    imageSrc: "/icons/icons8-chatbot-1500.png",
    title: "AI & Machine Learning Solutions",
    description: "Intelligent systems that automate workflows and enhance decision‑making.",
  },
  {
    imageSrc: "/icons/icons8-paint-palette-1500.png",
    title: "Graphics & Creative Design",
    description: "Branding, UI/UX, and visual design that elevate your digital identity.",
  },
  {
    imageSrc: "/icons/icons8-digital-marketing-1500.png",
    title: "Digital Marketing",
    description: "SEO, social media, and paid campaigns that boost visibility and growth.",
  },
];


export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 px-6 sm:px-8 lg:px-12">
      
      {/* Top Left Decorative Plus/Cross Pattern */}
      <div 
        className="absolute left-0 top-12 w-32 h-64 opacity-25 hidden md:block select-none pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)`,
          backgroundSize: '16px 16px'
        }}
      />

      {/* Bottom Right Decorative Plus/Cross Pattern */}
      <div 
        className="absolute right-0 bottom-4 w-40 h-72 opacity-25 hidden md:block select-none pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)`,
          backgroundSize: '16px 16px'
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-snug max-w-2xl mx-auto">
            Our Ultimate Set of Services for Your <br />
            <span className="text-white">Ideas Implementation</span>
          </h2>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-[#0F0F0F] border border-white/[0.04] rounded-[36px] p-8 lg:p-10 shadow-2xl transition-all duration-300 hover:border-white/[0.08] hover:-translate-y-1"
            >
              {/* Illustration Container */}
            <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
  <Image
    src={service.imageSrc}
    alt={service.title}
    width={120}
    height={120}
    className="object-contain"
    priority
  />
</div>


              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm font-light text-gray-400 leading-relaxed max-w-[260px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}