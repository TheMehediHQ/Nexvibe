

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-16 sm:py-20 md:py-24 lg:py-32">
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
            className="
              max-w-xl
              text-[15px]
              leading-8
              text-[var(--muted)]
              sm:text-base
              lg:text-lg
            "
          >
            Empower your business with AI-driven insights that accelerate
            growth and unlock smarter decision-making.
          </p>

          {/* CTA + Social Proof */}
          <div className="space-y-6">
            <button
              className="
                w-full
                rounded-xl
                bg-blue-600
                px-7
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-blue-600/20
                transition
                hover:bg-blue-700
                active:scale-95
                sm:w-auto
              "
            >
              Book a Meeting
            </button>

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
        <div className="relative flex min-h-[280px] items-center justify-center sm:min-h-[360px] lg:min-h-[520px]">
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[240px] w-[240px] rounded-full bg-blue-600/15 blur-[120px] sm:h-[320px] sm:w-[320px] lg:h-[420px] lg:w-[420px]" />
          </div>

          {/* Robot */}
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 w-full max-w-[240px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[480px]"
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
    </section>
  );
}