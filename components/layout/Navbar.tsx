import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded border border-white text-lg font-bold text-white">
            CA
          </div>

          <div className="leading-tight">
            <h2 className="text-2xl font-bold text-white">
              Catalyst
            </h2>
            <p className="text-2xl font-bold text-white">
              Analytics
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <ul className="hidden items-center gap-12 lg:flex">
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

        {/* CTA Button */}
        <Link
          href="/contact"
          className="rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-blue-700"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
}