"use client";

import Button from "@/components/ui/Button";

export default function ReadyToDiscussCard() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <div
          className="
            relative
            overflow-hidden
            rounded-[32px] sm:rounded-[48px] lg:rounded-[80px]
            border border-white/10
            bg-[#09090A]
            px-6 py-12
            sm:px-10 sm:py-16
            lg:px-16 lg:py-20
            text-center
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_25px_60px_-15px_rgba(0,0,0,0.9)]
          "
        >
          {/* Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
              maskImage:
                "radial-gradient(circle at center, black 70%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 70%, transparent 100%)",
            }}
          />

          {/* Ambient Reflection */}
          <div
            className="
              absolute
              left-1/2 top-0
              h-12 w-48
              -translate-x-1/2
              rounded-full
              bg-white/[0.03]
              blur-xl
              sm:h-16 sm:w-72
            "
          />

          {/* Content */}
          <div className="relative z-10 space-y-5">
            <h2 className="mx-auto max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              Ready to Discuss
            </h2>

            <p className="mx-auto max-w-xl text-sm font-light leading-7 text-gray-300 sm:text-base">
              Your Product Needs With{" "}
              <span className="font-semibold text-[#0070f3]">
                NexVibe
              </span>{" "}
              Experts?
            </p>

            <div className="pt-2 flex justify-center">
              <Button
                variant="secondary"
                onClick={() => console.log("Get In Touch clicked")}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}