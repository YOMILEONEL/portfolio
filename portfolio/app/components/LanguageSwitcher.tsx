"use client";

import { useEffect, useRef, useState } from "react";
import { HiCheck, HiChevronUpDown } from "react-icons/hi2";
import { languages, useLanguage, type Language } from "../i18n/LanguageContext";

const languageLabels: Record<Language, string> = {
  en: "EN",
  de: "DE",
  fr: "FR",
};

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-white/10"
      >
        {languageLabels[language]}
        <HiChevronUpDown size={16} className="text-gray-400" />
      </button>

      {isOpen && (
        <div
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 w-28 overflow-hidden rounded-xl border border-white/10 bg-slate-900/95 py-1 shadow-xl backdrop-blur-md"
        >
          {languages.map((lang) => (
            <button
              key={lang}
              type="button"
              role="option"
              aria-selected={language === lang}
              onClick={() => {
                setLanguage(lang);
                setIsOpen(false);
              }}
              className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-gray-200 transition hover:bg-white/10"
            >
              <span className="w-4 text-blue-400">
                {language === lang && <HiCheck size={16} />}
              </span>
              {languageLabels[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
