"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export function Projects() {
  const { dict } = useLanguage();
  const { projects } = dict;

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
            {projects.eyebrow}
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-5">
            {projects.title}
          </h2>

          <p className="max-w-3xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed">
            {projects.intro}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.items.map((project, index) => (
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
                  {projects.coreFeaturesLabel}
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
                  {projects.technologiesLabel}
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
                {projects.viewProjectLabel}
              </motion.a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
