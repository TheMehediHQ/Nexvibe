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
    description:
      "Scalable, high-performance software tailored to your business needs.",
  },
  {
    imageSrc: "/icons/icons8-world-wide-web-blue-globe-1500.png",
    title: "Web Development",
    description:
      "Modern, responsive websites built for speed, conversion, and brand impact.",
  },
  {
    imageSrc: "/icons/icons8-smartphone-tablet-1500.png",
    title: "Mobile App Development",
    description:
      "iOS and Android apps engineered for seamless performance and great UX.",
  },
  {
    imageSrc: "/icons/icons8-chatbot-1500.png",
    title: "AI & Machine Learning Solutions",
    description:
      "Intelligent systems that automate workflows and enhance decision-making.",
  },
  {
    imageSrc: "/icons/icons8-paint-palette-1500.png",
    title: "Graphics & Creative Design",
    description:
      "Branding, UI/UX, and visual design that elevate your digital identity.",
  },
  {
    imageSrc: "/icons/icons8-digital-marketing-1500.png",
    title: "Digital Marketing",
    description:
      "SEO, social media, and paid campaigns that boost visibility and growth.",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 px-6 sm:px-8 lg:px-12">
      {/* Top Left Pattern */}
      <div
        className="pointer-events-none absolute left-0 top-12 hidden h-64 w-32 select-none opacity-10 md:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.7) 1.3px, transparent 1.3px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Bottom Right Pattern */}
      <div
        className="pointer-events-none absolute bottom-4 right-0 hidden h-72 w-40 select-none opacity-10 md:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.7) 1.3px, transparent 1.3px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center md:mb-20">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[var(--foreground)] md:text-5xl">
            Our Ultimate Set of Services for Your
            <br />
            <span className="text-[var(--foreground)]">
              Ideas Implementation
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[var(--muted)]">
            We help startups, enterprises, and growing businesses build
            scalable digital products with modern technologies, exceptional
            design, and measurable business results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/15 hover:bg-[#1A1A1A] hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-white/[0.03]">
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  width={80}
                  height={80}
                  priority
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3 className="mb-4 text-xl font-semibold leading-snug text-[var(--foreground)]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-7 text-[var(--muted)]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}