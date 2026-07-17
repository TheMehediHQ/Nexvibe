"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About Us", href: "/about" },

   { name: "Careers", href: "/careers" },

];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Top Footer */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand & Contact */}
          <div className="space-y-8">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <Image
                src="/logos/logo_nav.png"
                alt="Nexvibe Logo"
                width={180}
                height={48}
                priority
                className="w-[140px] sm:w-[160px] lg:w-[180px]"
              />
            </Link>

            {/* Contact Information */}
            <div className="flex flex-col gap-4 text-sm text-[var(--muted)]">
              <div className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-blue-500" />
                <span>contact.nexvibe@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-blue-500" />
                <span>+880 1607-128338</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="shrink-0 text-blue-500" />
                <span>Fully Remote • Worldwide Team</span>
              </div>
            </div>
          </div>

          {/* Social & Policies */}
          <div className="space-y-8">
            {/* Social Links */}
            <div className="flex w-fit gap-3 rounded-2xl border border-[var(--border)] p-3">
  <Link
    href="https://www.facebook.com/nexvivehq"
    target="_blank"
    aria-label="Facebook"
    className="group flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] transition-all duration-300 hover:-rotate-6 hover:scale-105 hover:border-blue-600 hover:bg-blue-600"
  >
    <FaFacebookF
      size={20}
      className="transition-transform duration-300 group-hover:scale-110"
    />
  </Link>

  <Link
    href="https://github.com/NexvibeHq"
    target="_blank"
    aria-label="Github"
    className="group flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] transition-all duration-300 hover:-rotate-6 hover:scale-105 hover:border-blue-600 hover:bg-blue-600"
  >
    <FaGithub
      size={20}
      className="transition-transform duration-300 group-hover:scale-110"
    />
  </Link>

  <Link
    href="https://www.linkedin.com/company/nexvivehq"
    target="_blank"
    aria-label="LinkedIn"
    className="group flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] transition-all duration-300 hover:-rotate-6 hover:scale-105 hover:border-blue-600 hover:bg-blue-600"
  >
    <FaLinkedinIn
      size={20}
      className="transition-transform duration-300 group-hover:scale-110"
    />
  </Link>
</div>

            {/* Policies */}
            <div className="flex flex-wrap gap-6 text-sm text-[var(--muted)]">
              <Link
                href="/privacy-policy"
                className="transition hover:text-[var(--foreground)]"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-of-service"
                className="transition hover:text-[var(--foreground)]"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 border-t border-[var(--border)] pt-10">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--foreground)]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-[var(--border)] pt-6 text-center text-xs text-[var(--muted)] sm:text-sm">
          © {new Date().getFullYear()} Nexvibe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}