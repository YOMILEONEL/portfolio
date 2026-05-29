"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { MdAttachEmail, MdLocationOn, MdSend } from "react-icons/md";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 px-6 bg-slate-950 text-white"
    >
      {/* Hintergrund */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute top-20 right-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-blue-400 font-semibold mb-3">
            Kontakt
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-5">
            Lass uns zusammenarbeiten
          </h2>

          <p className="max-w-3xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed">
            Du möchtest mit mir über ein Projekt, eine Werkstudentenstelle,
            eine Zusammenarbeit oder eine technische Idee sprechen? Schreib mir
            gerne eine Nachricht oder kontaktiere mich direkt per E-Mail,
            GitHub oder LinkedIn.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Kontaktinformationen */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">
                Kontaktinformationen
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                Ich bin offen für spannende Softwareprojekte, Fullstack-
                Entwicklung, KI-gestützte Anwendungen, Automatisierungen und
                fachlichen Austausch im Bereich Informatik.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:leonelyomi3@gmail.com"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 hover:bg-white/10 transition"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                    <MdAttachEmail size={24} />
                  </span>
                  <div className="text-left">
                    <p className="text-sm text-gray-400">E-Mail</p>
                    <p className="font-semibold text-white">
                      leonelyomi3@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                    <MdLocationOn size={24} />
                  </span>
                  <div className="text-left">
                    <p className="text-sm text-gray-400">Standort</p>
                    <p className="font-semibold text-white">
                      Clausthal-Zellerfeld, Deutschland
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">
                Profile
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <motion.a
                  href="https://github.com/YOMILEONEL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 font-semibold hover:bg-white/10 transition"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaGithub size={22} />
                  GitHub
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/steve-leonel-yomi-mbiakop-8690a52b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 font-semibold hover:bg-white/10 transition"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <GrLinkedin size={22} />
                  LinkedIn
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Formular */}
          <motion.form
            className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-8 shadow-2xl backdrop-blur-sm"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            onSubmit={(event) => {
              event.preventDefault();

              const form = event.currentTarget;
              const formData = new FormData(form);

              const name = formData.get("name");
              const email = formData.get("email");
              const message = formData.get("message");

              const subject = encodeURIComponent(
                `Kontaktanfrage von ${name}`
              );

              const body = encodeURIComponent(
                `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`
              );

              window.location.href = `mailto:leonelyomi3@gmail.com?subject=${subject}&body=${body}`;
            }}
          >
            <h3 className="text-2xl font-bold mb-6">
              Nachricht senden
            </h3>

            <div className="space-y-5">
              <div className="text-left">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Dein Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Max Mustermann"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
                />
              </div>

              <div className="text-left">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Deine E-Mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="max@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
                />
              </div>

              <div className="text-left">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Deine Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Schreib mir kurz, worum es geht..."
                  rows={6}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
                />
              </div>

              <motion.button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <MdSend size={20} />
                Nachricht vorbereiten
              </motion.button>
            </div>

            <p className="mt-5 text-sm text-gray-400">
              Beim Absenden wird dein E-Mail-Programm geöffnet und die Nachricht
              automatisch vorbereitet.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}