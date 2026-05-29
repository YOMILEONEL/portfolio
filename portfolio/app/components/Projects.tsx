"use client";

import { motion } from "framer-motion";

const projects = [
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
    technologies: ["React", "TypeScript", "Axios", "CSS", "HTML", "Git", "React Icons"],
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
    title: "RoomBookingApp",
    subtitle: "Fullstack-Webanwendung",
    icon: "🏢",
    category: "Fullstack / Enterprise App",
    description:
      "Ein Raumbuchungssystem mit sicherer Benutzeranmeldung, rollenbasierter Autorisierung und sauberer Trennung zwischen Frontend, Backend und Datenbank.",
    features: [
      "Benutzer-, Raum- und Buchungsverwaltung",
      "CRUD-Funktionalitäten über REST-API",
      "Authentifizierung und Autorisierung mit Spring Security",
      "React-Frontend mit Material UI",
      "MySQL-Datenbank mit Hibernate JPA",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React",
      "TypeScript",
      "Material UI",
      "MySQL",
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
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 px-6 bg-slate-950 text-white"
    >
      {/* Hintergrund */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-blue-400 font-semibold mb-3">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-5">
            Meine Projekte
          </h2>

          <p className="max-w-3xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed">
            Eine Auswahl meiner Projekte aus Fullstack-Entwicklung,
            Softwarearchitektur, Machine Learning und Natural Language
            Processing. Jedes Projekt zeigt einen anderen technischen
            Schwerpunkt — von REST-APIs bis KI-gestützter Datenanalyse.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 md:p-8 shadow-2xl backdrop-blur-sm hover:bg-white/10 transition"
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500" />

              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <span className="inline-block mb-3 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-300">
                    {project.category}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    <span className="mr-2">{project.icon}</span>
                    {project.title}
                  </h3>

                  <p className="text-blue-300 font-medium">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-3">
                  Kernfunktionen
                </h4>

                <ul className="space-y-2 text-left text-gray-300">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-blue-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-7">
                <h4 className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-3">
                  Technologien
                </h4>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                Zum Projekt
              </motion.a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}