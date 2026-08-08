# Portfolio — Steve Leonel Yomi Mbiakop

Persönliches Portfolio als Next.js-Anwendung mit Sektionen für Vorstellung, Werdegang, Projekte
und Kontakt. Mehrsprachig (Deutsch/Englisch/Französisch) mit sprachspezifischem Lebenslauf-Download.

**Live:** _(hier ggf. die Deploy-URL ergänzen)_

## Tech-Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4
- Framer Motion für Scroll-/Hover-Animationen
- react-icons für Technologie-Logos

## Struktur

```
app/
├── components/
│   ├── Navbar.tsx          Navigation inkl. Sprachumschalter
│   ├── HeroSection.tsx     Einstieg mit Kurzvorstellung und Skill-Badges
│   ├── AboutMe.tsx         Über mich, Motivation, Tech-Übersicht
│   ├── TechLogos.tsx       Technologie-Logo-Grid
│   ├── Experience.tsx      Berufserfahrung & Engagement (Zeitleiste)
│   ├── Projects.tsx        Projektkarten mit Features, Technologien, GitHub-Link
│   └── Contact.tsx         Kontaktformular (öffnet vorbereitete E-Mail) + Profile
└── i18n/
    ├── LanguageContext.tsx Sprachkontext (de/en/fr) mit Umschaltung zur Laufzeit
    └── dictionaries/       Ein Dictionary pro Sprache, typisiert über types.ts
```

Alle Texte kommen aus den Dictionaries in `app/i18n/dictionaries/`; neue Inhalte (z. B. ein
weiteres Projekt oder eine neue Station im Werdegang) werden dort für alle drei Sprachen ergänzt.

## Entwicklung

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # Produktions-Build
npm run lint    # ESLint
```

## Deployment

Statische Next.js-App, geeignet für Vercel (`vercel.com/new`) oder jeden anderen Node-fähigen Host.
