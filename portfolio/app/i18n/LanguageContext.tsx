"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { de } from "./dictionaries/de";
import { en } from "./dictionaries/en";
import { fr } from "./dictionaries/fr";
import type { Dictionary } from "./dictionaries/types";

export type Language = "de" | "en" | "fr";

export const languages: Language[] = ["de", "en", "fr"];

const dictionaries: Record<Language, Dictionary> = { de, en, fr };

const STORAGE_KEY = "portfolio-language";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  dict: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start at "de" so the client's first render matches the
  // server-rendered HTML (which has no access to localStorage), then
  // sync the persisted preference right after mount. Reading
  // localStorage in the initializer instead would make the client's
  // first render diverge from the server output and trigger a React
  // hydration-mismatch error for any visitor who previously chose
  // en/fr.
  const [language, setLanguageState] = useState<Language>("de");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "de" || stored === "en" || stored === "fr") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync of persisted preference on mount, required to avoid an SSR hydration mismatch (see comment above)
      setLanguageState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, dict: dictionaries[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
