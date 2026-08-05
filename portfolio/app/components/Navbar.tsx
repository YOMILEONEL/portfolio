"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { languages, useLanguage } from "../i18n/LanguageContext";

const languageLabels: Record<string, string> = {
  de: "DE",
  en: "EN",
  fr: "FR",
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, dict } = useLanguage();

  const navLinks = [
    { label: dict.nav.home, href: "#home" },
    { label: dict.nav.about, href: "#aboutme" },
    { label: dict.nav.experience, href: "#experience" },
    { label: dict.nav.projects, href: "#projects" },
    { label: dict.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="group">
          <div className="text-sm md:text-lg font-extrabold tracking-wide text-white">
            Steve Leonel
            <span className="text-blue-400"> Portfolio</span>
          </div>

          <div className="hidden text-xs text-gray-400 sm:block">
            {dict.nav.subtitle}
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

          <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1">
            {languages.map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                aria-pressed={language === lang}
                className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                  language === lang
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {languageLabels[lang]}
              </button>
            ))}
          </div>

          <a
            href={dict.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
          >
            {dict.nav.cvButton}
          </a>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={dict.nav.menuAria}
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

            <div className="flex items-center justify-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1">
              {languages.map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  aria-pressed={language === lang}
                  className={`flex-1 rounded-lg px-2.5 py-2 text-sm font-semibold transition ${
                    language === lang
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {languageLabels[lang]}
                </button>
              ))}
            </div>

            <a
              href={dict.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="rounded-xl bg-blue-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              {dict.nav.cvButtonMobile}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
