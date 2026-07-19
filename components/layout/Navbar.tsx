"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileMenu from "../ui/MobileMenu";
import Button from "../ui/Button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logos/logo_nav.png"
            alt="Nexvibe Logo"
            width={180}
            height={48}
            priority
            className="w-[130px] sm:w-[160px] lg:w-[180px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 lg:flex xl:gap-12">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`group relative py-2 text-base font-medium transition-colors duration-300 ${
                    isActive
                      ? "font-semibold text-white"
                      : "text-[var(--muted)] hover:text-white"
                  }`}
                >
                  {item.name}
                  {/* Gradient Blue Underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2.5px] w-full rounded-full bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(56,189,248,0.6)] ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link href="/contact" className="hidden lg:block">
          <Button variant="primary" className="rounded-xl px-6 py-2 text-sm">
            Contact Us
          </Button>
        </Link>

        {/* Mobile Menu */}
        <MobileMenu />
      </nav>
    </header>
  );
}