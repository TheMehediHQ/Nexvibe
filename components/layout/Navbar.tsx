import Link from "next/link";
import Image from "next/image";
import MobileMenu from "../ui/MobileMenu";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
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
        <ul className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-base font-medium text-gray-300 transition-colors duration-300 hover:text-white"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>


        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="
            hidden
            rounded-xl
            bg-blue-600
            px-8
            py-3
            text-sm
            font-semibold
            text-white
            transition
            duration-300
            hover:bg-blue-700
            lg:block
          "
        >
          Contact Us
        </Link>


        {/* Mobile Menu Button */}
      <MobileMenu />

      </nav>
    </header>
  );
}