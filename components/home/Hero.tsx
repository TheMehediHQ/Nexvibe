"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React, { useCallback, useRef } from "react";
import gsap from "gsap";
import Button from "@/components/ui/Button";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const container = containerRef.current;
      const robot = robotRef.current;
      if (!container || !robot) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;

      // Follow the cursor up to 35% of the distance, capping the maximum translation to 65px
      const targetX = Math.max(-65, Math.min(65, distX * 0.35));
      const targetY = Math.max(-65, Math.min(65, distY * 0.35));

      gsap.to(robot, {
        x: targetX,
        y: targetY,
        duration: 0.4,
        ease: "power3.out",
        overwrite: "auto",
      });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    const robot = robotRef.current;
    if (!robot) return;

    gsap.to(robot, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.3)",
      overwrite: "auto",
    });
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden bg-[var(--background)] py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Background Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left Content */}
        <div className="z-10 flex flex-col items-center space-y-8 text-center lg:items-start lg:text-left">
          {/* Heading */}
          <h1
            className="
              text-4xl
              font-extrabold
              leading-[1.2]
              tracking-tight
              text-[var(--foreground)]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Transforming{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
              Data
            </span>{" "}
            into{" "}
            <span className="text-blue-400">
              Intelligent
            </span>{" "}
            <span
              className="
                inline-block
                rounded-2xl
                border border-blue-500/20
                bg-blue-600/20
                px-4
                py-1
                shadow-[0_0_30px_rgba(0,112,243,0.25)]
                backdrop-blur-sm
                sm:px-5
              "
            >
              Decisions
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="text-[15px] max-w-xl leading-8 text-[var(--muted)] sm:text-base lg:text-lg
            "
          >
            Empower your business with AI-driven insights that accelerate
            growth and unlock smarter decision-making.
          </p>

          {/* CTA + Social Proof */}
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
              <Button
                variant="primary"
                href="https://cal.com/TheMehediHQ/15min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Meeting
              </Button>

              <Button
                variant="secondary"
                href="/Nexvibe.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Company Profile
              </Button>
            </div>


            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <div className="flex -space-x-3">
                {["/images/s.png", "/images/n.png", "/images/h.png"].map(
                  (src, index) => (
                    <Image
                      key={index}
                      src={src}
                      alt="client avatar"
                      width={36}
                      height={36}
                      className="h-9 w-9 rounded-full border-2 border-[var(--background)] object-cover"
                    />
                  )
                )}
              </div>

              <p className="text-xs font-medium text-[var(--muted)]">
                Trusted by{" "}
                <span className="font-semibold text-[var(--foreground)]">
                  100+ clients
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative flex min-h-[280px] items-center justify-center sm:min-h-[360px] lg:min-h-[520px]"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[240px] w-[240px] rounded-full bg-blue-600/15 blur-[120px] sm:h-[320px] sm:w-[320px] lg:h-[420px] lg:w-[420px]" />
          </div>

          {/* Robot */}
          <div
            ref={robotRef}
            className="relative z-10 w-full max-w-[240px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[480px]"
          >
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full"
            >
              <Image
                src="/icons/robot.png"
                alt="AI Robot"
                width={500}
                height={500}
                priority
                className="object-contain drop-shadow-[0_0_45px_rgba(0,112,243,0.25)]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}