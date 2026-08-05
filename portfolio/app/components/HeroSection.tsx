"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export function HeroSection() {
  const { dict } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24 text-center"
      style={{
        backgroundImage: "url('/1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dunkles Overlay für bessere Lesbarkeit */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Leichter Verlauf */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        <motion.img
          src="/cv1.jpg"
          alt={dict.hero.name}
          className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover mb-8 shadow-2xl border-4 border-white/30"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.p
          className="mb-4 text-sm md:text-base uppercase tracking-[0.3em] text-blue-300 font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {dict.hero.eyebrow}
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {dict.hero.greetingPrefix}{" "}
          <span className="text-blue-400">{dict.hero.name}</span>
        </motion.h1>

        <motion.p
          className="max-w-3xl text-base md:text-xl text-gray-200 leading-relaxed mb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {dict.hero.paragraph1}
        </motion.p>

        <motion.p
          className="max-w-3xl text-sm md:text-lg text-gray-300 leading-relaxed mb-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          {dict.hero.paragraph2}
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          {dict.hero.skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-white/10 text-white text-sm border border-white/20 backdrop-blur-sm"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          <motion.a
            href="#projects"
            className="px-7 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {dict.hero.ctaProjects}
          </motion.a>

          <motion.a
            href="#contact"
            className="px-7 py-3 bg-white/10 text-white rounded-xl font-semibold border border-white/30 hover:bg-white/20 transition backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {dict.hero.ctaContact}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
