"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`group relative inline-block py-1 text-base font-medium transition-colors ${
                      isActive
                        ? "font-semibold text-white"
                        : "text-[var(--muted)] hover:text-white"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-400 transition-all duration-300 shadow-[0_0_8px_rgba(56,189,248,0.6)] ${
                        isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}

            <Link href="/contact" onClick={() => setOpen(false)}>
              <Button variant="primary" className="px-6 py-2 text-sm">
                Contact Us
              </Button>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}