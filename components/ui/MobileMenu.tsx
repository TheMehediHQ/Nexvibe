"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
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
        <div className="absolute left-0 top-24 w-full border-t border-white/10 bg-black/90 backdrop-blur-xl lg:hidden">

          <ul className="flex flex-col gap-6 px-6 py-8">

            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-white"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-blue-600 px-8 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
            >
              Contact Us
            </Link>

          </ul>

        </div>
      )}
    </>
  );
}