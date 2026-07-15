import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Left */}
          <div className="space-y-10">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded border border-white text-lg font-bold">
                CA
              </div>

              <div className="leading-tight">
                <h3 className="text-xl font-bold">Catalyst</h3>
                <h3 className="text-xl font-bold">Analytics</h3>
              </div>
            </Link>

            {/* Contact */}
            <div className="flex flex-wrap gap-8 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <span>contact@catalystanalytics.io</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                <span>+1 (469) 712-4672</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-500" />
                <span>5511 Parkcrest Dr, Suite 103, Austin, TX 78731</span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-8">
            {/* Social */}
            <div className="flex gap-4 rounded-2xl border border-white/10 p-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="rounded-xl bg-white/10 p-4 transition hover:bg-blue-600"
              >
                <FaFacebookF size={22} />
              </Link>

              <Link
                href="https://x.com"
                target="_blank"
                className="rounded-xl bg-white/10 p-4 transition hover:bg-blue-600"
              >
                <FaXTwitter size={22} />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="rounded-xl bg-white/10 p-4 transition hover:bg-blue-600"
              >
                <FaLinkedinIn size={22} />
              </Link>
            </div>

            {/* Policy */}
            <div className="flex gap-8 text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>

              <Link href="/terms-of-service" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-14 flex flex-wrap justify-center gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-gray-300 transition hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          © 2025 Catalyst Analytics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}