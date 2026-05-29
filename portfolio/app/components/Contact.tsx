import { motion } from "framer-motion";
import {FaGithub} from "react-icons/fa";
import {GrLinkedin} from "react-icons/gr";
import { MdAttachEmail } from "react-icons/md";
export function Contact() {
  return (
    <section id="contact" className="max-w-xl mx-auto py-16 px-4 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Kontakt
      </motion.h2>
      <motion.p
        className="text-gray-300 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Du möchtest mit mir in Kontakt treten? Schreib mir gerne eine E-Mail oder nutze das Formular!
      </motion.p>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Dein Name"
          className="p-3 rounded bg-gray-700 text-white focus:outline-none"
        />
        <input
          type="email"
          placeholder="Deine E-Mail"
          className="p-3 rounded bg-gray-700 text-white focus:outline-none"
        />
        <textarea
          placeholder="Deine Nachricht"
          className="p-3 rounded bg-gray-700 text-white focus:outline-none"
          rows={5}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Absenden
        </button>
      </form>
      <div className="mt-8 text-gray-400 flex items-center justify-center gap-6">
        <div>
        <a
          href="mailto:leonelyomi3@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 underline hover:text-white">
            <MdAttachEmail /> leonelyomi3@gmail.com
          </a>
        </div>
        <div>
        <span>Links zu meinen Profilen:</span>
        <a
            href="https://github.com/YOMILEONEL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 underline hover:text-white">
    <FaGithub size={20} />
    GitHub
  </a>
  <a
    href="https://www.linkedin.com/in/steve-leonel-yomi-mbiakop-8690a52b8/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 underline hover:text-white"
  >
    <GrLinkedin size={20} />
    LinkedIn
  </a>
  </div>
</div>
    </section>
  );
}