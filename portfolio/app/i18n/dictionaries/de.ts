import type { Dictionary } from "./types";

export const de: Dictionary = {
  meta: {
    title: "Steve Leonel Portfolio",
    description:
      "Portfolio von Steve Leonel Yomi Mbiakop – Fullstack Developer, KI-Enthusiast und Informatikstudent.",
  },
  resumeUrl: "/lebenslauf_v2.pdf",
  nav: {
    home: "Home",
    about: "Über mich",
    experience: "Erfahrung",
    projects: "Projekte",
    contact: "Kontakt",
    subtitle: "Fullstack Developer · KI-Enthusiast",
    cvButton: "Lebenslauf",
    cvButtonMobile: "Lebenslauf herunterladen",
    menuAria: "Navigation öffnen oder schließen",
  },
  hero: {
    eyebrow: "Fullstack Developer · KI-Enthusiast · Informatikstudent",
    greetingPrefix: "Hallo, ich bin",
    name: "Steve Leonel Yomi Mbiakop",
    paragraph1:
      "Ich studiere Informatik an der Technischen Universität Clausthal und entwickle moderne, skalierbare Softwarelösungen mit Fokus auf Fullstack-Webentwicklung, künstliche Intelligenz und saubere Softwarearchitektur.",
    paragraph2:
      "Meine Schwerpunkte liegen in Java, Spring Boot, React, Next.js, TypeScript, Datenbanken, Docker und REST-APIs. Zusätzlich beschäftige ich mich mit Automatisierung, n8n, OpenAI-API und intelligenten Systemen für reale Anwendungsfälle.",
    skills: [
      "Next.js",
      "TypeScript",
      "React",
      "Spring Boot",
      "Java",
      "Python",
      "Docker",
      "KI",
    ],
    ctaProjects: "Zu meinen Projekten",
    ctaContact: "Kontakt aufnehmen",
  },
  aboutMe: {
    eyebrow: "Wer ich bin",
    title: "Über mich",
    intro:
      "Ich bin Steve Leonel Yomi Mbiakop, Informatikstudent, Fullstack-Entwickler und KI-Enthusiast aus Deutschland. Ich entwickle Softwarelösungen, die technische Präzision, moderne Architektur und praktische Anwendbarkeit verbinden.",
    motivationTitle: "Meine Motivation",
    motivation1:
      "Mein Ziel ist es, robuste und benutzerfreundliche Anwendungen zu entwickeln, die echte Probleme lösen. Besonders spannend finde ich die Verbindung von klassischer Softwareentwicklung mit künstlicher Intelligenz, Automatisierung und skalierbarer Webarchitektur.",
    motivation2:
      "Durch meine Tätigkeit als Tutor vermittle ich komplexe Informatikthemen verständlich und strukturiert. Diese Erfahrung hilft mir auch in der Softwareentwicklung: Ich denke analytisch, kommuniziere klar und lege Wert auf sauberen, wartbaren Code.",
    motivation3:
      "Praktische Erfahrung sammle ich unter anderem in Projekten mit Spring Boot, Next.js, TypeScript, Docker, REST-APIs, MySQL, PostgreSQL sowie Automatisierungen mit n8n und der OpenAI-API.",
    highlights: [
      {
        title: "Informatikstudent",
        text: "B.Sc. Informatik an der Technischen Universität Clausthal mit Fokus auf Softwaretechnik, Algorithmen, Datenbanken und verteilte Systeme.",
      },
      {
        title: "Fullstack-Entwicklung",
        text: "Entwicklung moderner Webanwendungen mit Java, Spring Boot, React, Next.js, TypeScript, REST-APIs und relationalen Datenbanken.",
      },
      {
        title: "Tutor & Mentor",
        text: "Erfahrung als Tutor für Logik, Verifikation, Automatentheorie, formale Sprachen, Python, Java und C#.",
      },
      {
        title: "KI & Automatisierung",
        text: "Interesse an intelligenten Systemen, OpenAI-API, n8n-Automatisierungen und datengetriebenen Softwarelösungen.",
      },
    ],
    techTitle: "Technologien & Tools",
    techText:
      "Ich arbeite mit modernen Technologien aus Backend, Frontend, DevOps, Datenbanken und KI-gestützter Automatisierung.",
    programmingLanguagesLabel: "Sprachen:",
    frameworksLabel: "Frameworks:",
    toolsLabel: "Tools:",
    langSectionTitle: "Sprachen",
    langSectionText:
      "Französisch: Muttersprache · Deutsch: verhandlungssicher · Englisch: gute Kenntnisse",
    cvDownload: "Lebenslauf herunterladen",
  },
  experience: {
    eyebrow: "Erfahrung",
    title: "Berufserfahrung & Engagement",
    intro:
      "Neben meinen Projekten sammle ich praktische Erfahrung in der Fullstack-Entwicklung, technischen Lehre, Softwarearchitektur, Automatisierung und Community-Arbeit.",
    items: [
      {
        role: "Werkstudent Softwareentwicklung",
        company: "Mariana Service GmbH",
        period: "Dezember 2025 – heute",
        type: "Fullstack · E-Commerce · Automatisierung",
        description:
          "Mitarbeit an der Konzeption und Entwicklung einer B2C-E-Commerce-Plattform sowie an Automatisierungen zur Entlastung des IT-Supports.",
        points: [
          "Requirements Engineering als Grundlage für Systemarchitektur und technische Umsetzung",
          "Entwicklung eines B2C-Online-Shops mit Spring Boot, Next.js und TypeScript",
          "Implementierung von Produktverwaltung, Kassensystemen und Admin-Dashboards",
          "Integration externer Dienste wie Stripe, AWS S3/Supabase Storage, Resend und RabbitMQ",
          "Deployment auf VPS mit Docker, nginx und HTTPS-Konfiguration über Let’s Encrypt",
          "Aufbau einer CI/CD-Pipeline mit GitHub Actions für automatisierte Tests, Builds und Docker-basiertes Deployment",
          "Automatisierung von Support-Prozessen mit n8n, OpenAI API, REST APIs und Webhooks",
        ],
        technologies: [
          "Java",
          "Spring Boot",
          "Next.js",
          "TypeScript",
          "PostgreSQL",
          "Docker",
          "nginx",
          "RabbitMQ",
          "OpenAI API",
          "n8n",
          "GitHub Actions",
        ],
      },
      {
        role: "Tutor für Logik und Verifikation",
        company: "Technische Universität Clausthal – Institut für Informatik",
        period: "April 2026 – heute",
        type: "Lehre · Formale Methoden",
        description:
          "Betreuung von Studierenden in Aussagenlogik, Prädikatenlogik und Verifikation mit Fokus auf strukturierte Erklärungen und Klausurvorbereitung.",
        points: [
          "Unterstützung bei Übungen, Tutorien und fachlichen Fragen",
          "Vermittlung formaler Beweistechniken und logischer Konzepte",
          "Strukturierte Vorbereitung auf Klausuren und Übungsaufgaben",
        ],
        technologies: ["Logik", "Verifikation", "Formale Methoden", "Didaktik"],
      },
      {
        role: "Tutor für Informatik III",
        company: "Technische Universität Clausthal – Institut für Informatik",
        period: "Oktober 2025 – März 2026",
        type: "Lehre · Theoretische Informatik",
        description:
          "Vermittlung komplexer Inhalte aus Automatentheorie, formalen Sprachen und Grammatiken in Übungen und Lerngruppen.",
        points: [
          "Erklärung von Automaten, Grammatiken und formalen Sprachen",
          "Unterstützung bei Übungsaufgaben und Klausurvorbereitung",
          "Aufbereitung abstrakter Inhalte durch verständliche Beispiele",
        ],
        technologies: [
          "Automatentheorie",
          "Formale Sprachen",
          "Grammatiken",
          "Lehre",
        ],
      },
      {
        role: "Tutor für Informatikwerkstatt – Anwendungssysteme",
        company: "Technische Universität Clausthal – Institut für Informatik",
        period: "Oktober 2025 – März 2026",
        type: "Python · Teamarbeit · Softwaretechnik",
        description:
          "Unterstützung von Studierenden bei der Umsetzung von Anwendungen in Python unter Einsatz agiler Methoden und kollaborativer Entwicklung.",
        points: [
          "Betreuung von Python-Projekten mit Pygame",
          "Unterstützung bei Git, Scrum, Taiga und Projektorganisation",
          "Vermittlung von Best Practices in Softwaretechnik und Teamarbeit",
        ],
        technologies: ["Python", "Pygame", "Git", "Scrum", "Taiga"],
      },
      {
        role: "Programmiertutor",
        company: "Coding Giants GmbH",
        period: "März 2025 – März 2026",
        type: "Programmierung · Mentoring",
        description:
          "Durchführung von Programmierkursen für Kinder und Jugendliche mit Fokus auf verständliche und praxisnahe Vermittlung technischer Inhalte.",
        points: [
          "Unterricht in Scratch, Python, Java und C#",
          "Vermittlung von Algorithmen und Datenstrukturen auf einfache Weise",
          "Förderung von Problemlösekompetenz und technischem Verständnis",
        ],
        technologies: ["Scratch", "Python", "Java", "C#", "Algorithmen"],
      },
      {
        role: "Ehrenamtlicher Mitarbeiter",
        company: "Clausthaler Studenten aus Kamerun e. V. / CSK",
        period: "April 2026 – heute",
        type: "Engagement · Community · Webplattform",
        description:
          "Unterstützung neuer Studierender und Mitarbeit an digitalen sowie kulturellen Vereinsaktivitäten.",
        points: [
          "Unterstützung neuer Studierender bei der Orientierung in Clausthal",
          "Fachliche Hilfe in ausgewählten Studienfächern",
          "Mitwirkung an der Entwicklung der digitalen Vereinsplattform",
          "Mitorganisation kultureller und sozialer Aktivitäten",
        ],
        technologies: ["Community", "Webentwicklung", "Organisation", "Mentoring"],
      },
    ],
  },
  projects: {
    eyebrow: "Portfolio",
    title: "Meine Projekte",
    intro:
      "Eine Auswahl meiner Projekte aus Fullstack-Entwicklung, Softwarearchitektur, Machine Learning und Natural Language Processing. Jedes Projekt zeigt einen anderen technischen Schwerpunkt — von REST-APIs bis KI-gestützter Datenanalyse.",
    coreFeaturesLabel: "Kernfunktionen",
    technologiesLabel: "Technologien",
    viewProjectLabel: "Zum Projekt",
    items: [
      {
        title: "Wetteranwendung",
        subtitle: "React + TypeScript",
        icon: "🌦",
        category: "Frontend / API",
        description:
          "Eine responsive Webanwendung zur Anzeige von Echtzeit-Wetterdaten auf Basis der OpenWeatherMap-API. Nutzer können Städte suchen und erhalten aktuelle Informationen zu Temperatur, Luftfeuchtigkeit, Wind und Wetterlage.",
        features: [
          "Stadtsuche mit dynamischer Wetteranzeige",
          "API-Anbindung über OpenWeatherMap",
          "Fehlerbehandlung bei ungültigen Eingaben",
          "Responsives UI mit Wetter-Icons",
          "Modularer Aufbau mit React Hooks",
        ],
        technologies: [
          "React",
          "TypeScript",
          "Axios",
          "CSS",
          "HTML",
          "Git",
          "React Icons",
        ],
        github: "https://github.com/YOMILEONEL/weather_app",
      },
      {
        title: "Damespiel mit Mehrspielermodus",
        subtitle: "Spring Boot + Swing",
        icon: "♟",
        category: "Fullstack / Game Development",
        description:
          "Ein Client-Server-Damespiel mit Spring Boot im Backend und Java Swing im Frontend. Das Projekt kombiniert Spiellogik, REST-API-Kommunikation, Datenpersistenz und Echtzeitsynchronisation.",
        features: [
          "REST-API für Spieler, Spielstatus und Spielzüge",
          "Echtzeitsynchronisation über Long Polling",
          "Spiellogik mit OOP, Algorithmen und Datenstrukturen",
          "MVC-Struktur im Frontend",
          "Systemkonzeption mit UML und Figma",
        ],
        technologies: ["Java", "Swing", "Spring Boot", "MySQL", "UML", "Figma", "Git"],
        github: "https://github.com/YOMILEONEL/damespiel",
      },
      {
        title: "Spacio",
        subtitle: "Fullstack-Buchungsplattform",
        icon: "🏢",
        category: "Fullstack / Enterprise App",
        description:
          "Eine Plattform zur Buchung von Besprechungs-, Veranstaltungs- und Schulungsräumen für Privatpersonen und Organisationen, mit rollenbasierter Autorisierung und sauberer Trennung zwischen Frontend, Backend und Datenbank.",
        features: [
          "Raumsuche und -filterung nach Stadt, Name und Beschreibung",
          "Automatischer Organisationsrabatt und rollenbasierte Preislogik pro Tag",
          "JWT-Authentifizierung mit Access-/Refresh-Token und Passwort-Reset",
          "Admin-Dashboard mit Raumverwaltung, Fotos und PDF-Rechnungserzeugung",
          "Dockerisiertes Deployment mit CI/CD über GitHub Actions",
        ],
        technologies: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "PostgreSQL",
          "Supabase",
          "Docker",
          "GitHub Actions",
        ],
        github: "https://github.com/YOMILEONEL/room_booking_system",
      },
      {
        title: "LMS Risk Prediction",
        subtitle: "Big Data & Machine Learning",
        icon: "📊",
        category: "Data Science / Machine Learning",
        description:
          "Ein Machine-Learning-Projekt zur Vorhersage von Studienerfolgsrisiken anhand umfangreicher LMS-Interaktionsdaten mit mehr als 230.000 Datensätzen.",
        features: [
          "Datenbereinigung und Feature Engineering",
          "Skalierung und Modellvorbereitung",
          "Training verschiedener ML-Modelle",
          "Vergleich von Decision Tree, Random Forest, AdaBoost und MLP",
          "Evaluation mit Confusion-Matrix, Accuracy, Precision und Recall",
        ],
        technologies: ["Python", "pandas", "scikit-learn", "Matplotlib", "Machine Learning"],
        github: "https://github.com/YOMILEONEL/Big-Data-Analytics",
      },
      {
        title: "Twitter Sentiment Analysis",
        subtitle: "NLP & Machine Learning",
        icon: "💬",
        category: "Natural Language Processing",
        description:
          "Ein NLP-Projekt zur Analyse und Klassifikation von Tweets in positive, negative und neutrale Stimmungen. Klassische Machine-Learning-Verfahren werden mit BERT-basierten Ansätzen verglichen.",
        features: [
          "Textvorverarbeitung und Label-Mapping",
          "TF-IDF-Vektorisierung",
          "Logistic Regression und LinearSVC",
          "BERT-basierte Sprachrepräsentationen",
          "Visualisierung mit WordCloud und Matplotlib",
        ],
        technologies: [
          "Python",
          "scikit-learn",
          "spaCy",
          "Transformers",
          "BERT",
          "WordCloud",
          "Matplotlib",
        ],
        github:
          "https://github.com/YOMILEONEL/Twitter-Sentiment-Analysis.-Vergleich-von-TF-IDF-LinearSVC-und-Bert",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Lass uns zusammenarbeiten",
    intro:
      "Du möchtest mit mir über ein Projekt, eine Werkstudentenstelle, eine Zusammenarbeit oder eine technische Idee sprechen? Schreib mir gerne eine Nachricht oder kontaktiere mich direkt per E-Mail, GitHub oder LinkedIn.",
    contactInfoTitle: "Kontaktinformationen",
    contactInfoText:
      "Ich bin offen für spannende Softwareprojekte, Fullstack-Entwicklung, KI-gestützte Anwendungen, Automatisierungen und fachlichen Austausch im Bereich Informatik.",
    emailLabel: "E-Mail",
    locationLabel: "Standort",
    locationValue: "Clausthal-Zellerfeld, Deutschland",
    profilesTitle: "Profile",
    formTitle: "Nachricht senden",
    nameLabel: "Dein Name",
    namePlaceholder: "Max Mustermann",
    emailFieldLabel: "Deine E-Mail",
    emailPlaceholder: "max@example.com",
    messageLabel: "Deine Nachricht",
    messagePlaceholder: "Schreib mir kurz, worum es geht...",
    submitButton: "Nachricht vorbereiten",
    submitNote:
      "Beim Absenden wird dein E-Mail-Programm geöffnet und die Nachricht automatisch vorbereitet.",
    mailSubjectPrefix: "Kontaktanfrage von",
    mailBodyNameLabel: "Name",
    mailBodyEmailLabel: "E-Mail",
    mailBodyMessageLabel: "Nachricht",
  },
};
