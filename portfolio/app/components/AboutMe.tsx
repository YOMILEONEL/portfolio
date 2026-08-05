"use client";

import { motion } from "framer-motion";
import { TechLogos } from "./TechLogos";
import { useLanguage } from "../i18n/LanguageContext";

export function AboutMe() {
  const { dict } = useLanguage();
  const { aboutMe } = dict;

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
            {aboutMe.eyebrow}
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-5">
            {aboutMe.title}
          </h2>

          <p className="max-w-3xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed">
            {aboutMe.intro}
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
              {aboutMe.motivationTitle}
            </h3>

            <p className="text-gray-300 leading-relaxed mb-5">
              {aboutMe.motivation1}
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              {aboutMe.motivation2}
            </p>

            <p className="text-gray-300 leading-relaxed">
              {aboutMe.motivation3}
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
            {aboutMe.highlights.map((item) => (
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
              {aboutMe.techTitle}
            </h3>

            <p className="max-w-3xl mx-auto text-gray-300">
              {aboutMe.techText}
            </p>
          </div>

          <TechLogos />

          <div className="mt-8 grid md:grid-cols-3 gap-5 text-sm text-gray-300">
            <div className="rounded-2xl bg-black/20 border border-white/10 p-5">
              <span className="font-semibold text-white">
                {aboutMe.programmingLanguagesLabel}
              </span>
              <p className="mt-2">
                Java, Python, JavaScript, TypeScript, HTML, CSS, MySQL, C
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 border border-white/10 p-5">
              <span className="font-semibold text-white">
                {aboutMe.frameworksLabel}
              </span>
              <p className="mt-2">
                Spring Boot, Next.js, React, Vite, Pygame
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 border border-white/10 p-5">
              <span className="font-semibold text-white">
                {aboutMe.toolsLabel}
              </span>
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
              {aboutMe.langSectionTitle}
            </h3>
            <p className="text-gray-300">{aboutMe.langSectionText}</p>
          </div>

          <a
            href={dict.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            {aboutMe.cvDownload}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
