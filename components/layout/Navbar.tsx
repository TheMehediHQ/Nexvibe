import Link from "next/link";
import Image from "next/image";
import MobileMenu from "../ui/MobileMenu";
import Button from "../ui/Button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About Us", href: "/about" },
  // { name: "Careers", href: "/careers" },
];

export default function Navbar() {
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
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-base font-medium text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)]"
              >
                {item.name}
              </Link>
            </li>
          ))}
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