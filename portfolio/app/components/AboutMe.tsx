"use client";

import { motion } from "framer-motion";
import { TechLogos } from "./TechLogos";

export function AboutMe() {
  const highlights = [
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
  ];

  return (
    <section
      id="aboutme"
      className="relative overflow-hidden py-24 px-6 bg-slate-950 text-white"
    >
      {/* Hintergrund-Effekte */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-blue-400 font-semibold mb-3">
            Wer ich bin
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-5">
            Über mich
          </h2>

          <p className="max-w-3xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed">
            Ich bin Steve Leonel Yomi Mbiakop, Informatikstudent,
            Fullstack-Entwickler und KI-Enthusiast aus Deutschland. Ich
            entwickle Softwarelösungen, die technische Präzision, moderne
            Architektur und praktische Anwendbarkeit verbinden.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Linke Textkarte */}
          <motion.div
            className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-9 shadow-2xl backdrop-blur-sm"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-5">
              Meine Motivation
            </h3>

            <p className="text-gray-300 leading-relaxed mb-5">
              Mein Ziel ist es, robuste und benutzerfreundliche Anwendungen zu
              entwickeln, die echte Probleme lösen. Besonders spannend finde ich
              die Verbindung von klassischer Softwareentwicklung mit
              künstlicher Intelligenz, Automatisierung und skalierbarer
              Webarchitektur.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              Durch meine Tätigkeit als Tutor vermittle ich komplexe
              Informatikthemen verständlich und strukturiert. Diese Erfahrung
              hilft mir auch in der Softwareentwicklung: Ich denke analytisch,
              kommuniziere klar und lege Wert auf sauberen, wartbaren Code.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Praktische Erfahrung sammle ich unter anderem in Projekten mit
              Spring Boot, Next.js, TypeScript, Docker, REST-APIs, MySQL,
              PostgreSQL sowie Automatisierungen mit n8n und der OpenAI-API.
            </p>
          </motion.div>

          {/* Rechte Highlights */}
          <motion.div
            className="grid sm:grid-cols-2 gap-5"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
              >
                <h4 className="text-lg font-bold text-blue-300 mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Technologie-Bereich */}
        <motion.div
          className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-7 md:p-9 backdrop-blur-sm"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Technologien & Tools
            </h3>

            <p className="max-w-3xl mx-auto text-gray-300">
              Ich arbeite mit modernen Technologien aus Backend, Frontend,
              DevOps, Datenbanken und KI-gestützter Automatisierung.
            </p>
          </div>

          <TechLogos />

          <div className="mt-8 grid md:grid-cols-3 gap-5 text-sm text-gray-300">
            <div className="rounded-2xl bg-black/20 border border-white/10 p-5">
              <span className="font-semibold text-white">Sprachen:</span>
              <p className="mt-2">
                Java, Python, JavaScript, TypeScript, HTML, CSS, MySQL, C
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 border border-white/10 p-5">
              <span className="font-semibold text-white">Frameworks:</span>
              <p className="mt-2">
                Spring Boot, Next.js, React, Vite, Pygame
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 border border-white/10 p-5">
              <span className="font-semibold text-white">Tools:</span>
              <p className="mt-2">
                VS Code, IntelliJ, PyCharm, Postman, Docker, Git, Figma, nginx
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sprache + CV */}
        <motion.div
          className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              Sprachen
            </h3>
            <p className="text-gray-300">
              Französisch: Muttersprache · Deutsch: verhandlungssicher ·
              Englisch: gute Kenntnisse
            </p>
          </div>

          <a
            href="/lebenslauf_v2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            Lebenslauf herunterladen
          </a>
        </motion.div>
      </div>
    </section>
  );
}