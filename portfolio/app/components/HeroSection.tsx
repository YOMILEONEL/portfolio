import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20"
    style={{ backgroundImage: "url('/1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <motion.img
        src="/cv1.jpg"
        alt="Steve Leonel Yomi Mbiakop"
        className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-6 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hallo, ich bin Steve Leonel Yomi Mbiakop
      </motion.h1>
      <motion.p
        className="text-base md:text-lg md:text-6xl font-bold text-white mb-2 "
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
🌟 Fullstack-Entwickler | KI-Enthusiast | Informatikstudent 🌟 👨‍💻 Informatikstudent an der Technischen Universität Clausthal mit einer Leidenschaft für die Entwicklung von Software und innovativen Lösungen..</motion.p>
      <motion.p
        className="text-base md:text-lg md:text-6xl font-bold text-white mb-2 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Fullstack-entwickler und Data Scientist aus Deutschland
      </motion.p>
      <motion.a
        href="#projects"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        Zu meinen Projekten
      </motion.a>
    </section>
    
  );
}