"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Über mich", href: "#aboutme" },
  { label: "Erfahrung", href: "#experience" },
  { label: "Projekte", href: "#projects" },
  { label: "Kontakt", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="group">
          <div className="text-sm md:text-lg font-extrabold tracking-wide text-white">
            Steve Leonel
            <span className="text-blue-400"> Portfolio</span>
          </div>

          <div className="hidden text-xs text-gray-400 sm:block">
            Fullstack Developer · KI-Enthusiast
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/lebenslauf_v2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
          >
            Lebenslauf
          </a>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Navigation öffnen oder schließen"
          aria-expanded={isOpen}
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/lebenslauf_v2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="rounded-xl bg-blue-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              Lebenslauf herunterladen
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}