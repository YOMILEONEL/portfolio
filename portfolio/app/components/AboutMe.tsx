import { motion } from "framer-motion";
import { TechLogos } from "./TechLogos";

export function AboutMe() {
  return (
    <section
      id="aboutme"
      className="max-w-2xl mx-auto py-16 px-4 text-center"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Über mich
      </motion.h2>
      <motion.p
        className="text-gray-300 text-lg mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Mein Name ist <span className="font-semibold">Steve Leonel Yomi Mbiakop</span>.
        Ich studiere Informatik (B.Sc.) im 5. Semester an der Technischen Universität Clausthal
        und arbeite dort als <span className="font-semibold">Tutor für Informatik&nbsp;III</span>
        (Automatentheorie, formale Sprachen, Grammatiken) sowie als
        <span className="font-semibold"> Tutor für Informatikwerkstatt – Anwendungssysteme</span>.
        Parallel bin ich <span className="font-semibold">Programmiertutor bei Coding Giants GmbH</span>,
        wo ich Kinder und Jugendliche in Scratch, Python, Java und C# unterrichte.
      </motion.p>
      <motion.p
        className="text-gray-400 text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <span className="font-semibold">Technologien:</span> Java, Python, TypeScript, React, Spring Boot, MySQL, u.v.m.<br />
       
        <span className="font-semibold">Tools:</span> VS Code, IntelliJ, PyCharm, Postman, Docker, Git, Figma<br />
        <span className="font-semibold">Sprachen:</span> Französisch (Muttersprache), Deutsch (verhandlungssicher), Englisch (gut)
      </motion.p>
       <TechLogos/>
       <a
       href="/lebenslauf_v2.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
      >
        Lebenslauf herunterladen
      </a>
    </section>
  );
}