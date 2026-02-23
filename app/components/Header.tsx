"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Forside" },
  { href: "/services", label: "Ydelser" },
/*   { href: "/kontakt", label: "Kontakt" },
 */];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 lg:px-12">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight"
        >
          Frisør Vivian
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm uppercase tracking-widest transition-colors duration-200 ${
                  active ? "text-black" : "text-gray-500 hover:text-black"
                }`}
              >
                {link.label}

                {/* Underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

          <Link
            href="/book"
            className="px-5 py-2 text-sm bg-black text-white rounded-md hover:bg-gray-800 transition duration-300"
          >
            Book tid
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 border-b border-gray-200" : "max-h-0"
        } bg-white`}
      >
        <div className="flex flex-col items-center gap-6 py-6">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm uppercase tracking-widest transition-colors ${
                  active ? "text-black" : "text-gray-500 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="px-6 py-2 text-sm bg-black text-white rounded-md hover:bg-gray-800 transition duration-300"
          >
            Book tid
          </Link>
        </div>
      </div>
    </header>
  );
}