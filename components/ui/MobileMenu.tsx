"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About Us", href: "/about" },
  // { name: "Careers", href: "/careers" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--foreground)] lg:hidden"
        aria-label="Toggle Menu"
      >
        {open ? (
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute left-0 top-24 w-full border-t border-[var(--border)] bg-[var(--background)] lg:hidden">
          <ul className="flex flex-col gap-6 px-6 py-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <Link href="/contact" onClick={() => setOpen(false)} className="block">
              <Button variant="primary" className="w-full px-8 py-3 text-sm">
                Contact Us
              </Button>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}