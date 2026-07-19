import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-blue-500/30 selection:text-white">
      <Navbar />

      <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden py-24 sm:py-32 px-6 sm:px-8">
        {/* Ambient Dark Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <div className="h-[350px] w-[500px] rounded-full bg-blue-600/15 blur-[140px] sm:h-[450px] sm:w-[700px]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--card)]/80 px-4 py-1.5 text-xs font-medium text-[var(--muted)] backdrop-blur-xl">
            Page not found
          </div>

          {/* Headline */}
          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.1]">
            AI Couldn&apos;t Predict This One!
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base text-[var(--muted)] sm:text-lg max-w-lg mx-auto leading-relaxed">
            Even AI isn&apos;t perfect—this page seems to be missing! Let&apos;s get you back on track. Head back home.
          </p>

          {/* CTA Button */}
          <div className="mt-10 flex items-center justify-center">
            <Button variant="primary" href="/" rel="noopener noreferrer">
              Go Back Home
            </Button>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
