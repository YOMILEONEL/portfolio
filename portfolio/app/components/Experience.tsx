"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export function Experience() {
  const { dict } = useLanguage();
  const { experience } = dict;

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 px-6 bg-slate-950 text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute top-24 left-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute bottom-24 right-0 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-blue-400 font-semibold mb-3">
            {experience.eyebrow}
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-5">
            {experience.title}
          </h2>

          <p className="max-w-3xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed">
            {experience.intro}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-white/10" />

          <div className="space-y-10">
            {experience.items.map((item, index) => (
              <motion.article
                key={`${item.role}-${item.company}`}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div
                  className={`relative ml-10 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-10" : "md:pl-10"
                  }`}
                >
                  <span className="absolute -left-[2.55rem] md:left-auto md:-right-[2.8rem] top-8 h-4 w-4 rounded-full border-4 border-slate-950 bg-blue-400 shadow-lg shadow-blue-500/40" />

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur-sm transition hover:bg-white/10">
                    <div className="mb-5">
                      <span className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4">
                        {item.type}
                      </span>

                      <h3 className="text-2xl font-bold text-white mb-2">
                        {item.role}
                      </h3>

                      <p className="text-blue-300 font-semibold">
                        {item.company}
                      </p>

                      <p className="mt-1 text-sm text-gray-400">
                        {item.period}
                      </p>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-5">
                      {item.description}
                    </p>

                    <ul className="space-y-2 text-left text-gray-300 mb-6">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-blue-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
