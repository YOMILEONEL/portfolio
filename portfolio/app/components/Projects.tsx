import {motion} from "framer-motion";
export function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Meine Projekte</h2>
      <div className="space-y-8">
        {/* Wetteranwendung */}
        <motion.div
        className="bg-gray-800 rounded-lg p-6 shadow-md" style={{ backgroundImage: "url('https://www.thegeographeronline.net/uploads/2/6/6/2/26629356/9836802_orig.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }} >
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">🌦 Wetteranwendung (React + TypeScript)</h3>
          <ul className="text-gray-300 text-left list-disc list-inside mb-2">
            <li>Webanwendung zur Anzeige von Echtzeit-Wetterdaten mit OpenWeatherMap-API</li>
            <li>Dynamische Wetterdaten (Temperatur, Luftfeuchtigkeit, Wind) nach Stadteingabe</li>
            <li>Responsives Design, Wetter-Icons, Fehlerbehandlung</li>
            <li>React Hooks (useState), modularer und wartbarer Code</li>
            <li><span className="font-semibold">Technologien:</span> React, TypeScript, Axios, CSS, HTML, Git, React Icons</li>
          </ul>
          <a
            href="https://github.com/YOMILEONEL/weather_app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
             Zum Projekt
          </a>
        </motion.div>
        {/* Damespiel */}
        <motion.div className="bg-gray-800 rounded-lg p-6 shadow-md" style={{ backgroundImage: "url('https://www.spielen.de/cache/uploads/image/65388/5de10408d7e3f_large.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}>
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">♟ Damespiel mit Mehrspielermodus (Spring Boot + Swing)</h3>
          <ul className="text-gray-300 text-left list-disc list-inside mb-2">
            <li>Client-Server-Damespiel mit Spring Boot (Backend) und Swing (Frontend)</li>
            <li>RESTful API zur Verwaltung von Spielern, Spielstatus und Spielzügen (Long Polling)</li>
            <li>Spiellogik, Statusermittlung, Datenpersistenz mit OOP und klassischen Algorithmen</li>
            <li>Frontend mit MVC-Muster für Echtzeit-Visualisierung</li>
            <li><span className="font-semibold">Technologien:</span> Java, Swing, Spring Boot, MySQL, UML, Figma, Git</li>
          </ul>
          <a
            href="https://github.com/YOMILEONEL/damespiel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
             Zum Projekt
          </a>
        </motion.div>
        {/* RoomBookingApp */}
        <motion.div className="bg-gray-800 rounded-lg p-6 shadow-md" 
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}>
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">🏢 RoomBookingApp (Fullstack-Webanwendung)</h3>
          <ul className="text-gray-300 text-left list-disc list-inside mb-2">
            <li>Raumbuchungssystem mit sicherer Benutzeranmeldung und rollenbasierter Autorisierung</li>
            <li>REST-API für Benutzer-, Raum- und Buchungsverwaltung (CRUD)</li>
            <li>Benutzerfreundliches Frontend mit React und Material-UI</li>
            <li>MySQL-Datenbank mit Hibernate JPA für ORM und Transaktionsverwaltung</li>
            <li>Saubere Trennung von Frontend, Backend und Datenhaltung</li>
            <li><span className="font-semibold">Technologien:</span> Java, Spring Boot, Spring Security, React, TypeScript, Material-UI, MySQL, CSS, HTML</li>
          </ul>
          <a
            href="https://github.com/YOMILEONEL/room_booking_system"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
             Zum Projekt
          </a>
        </motion.div>
        {/* LMS Risk Prediction */}
        <motion.div className="bg-gray-800 rounded-lg p-6 shadow-md"
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}>
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">📊 LMS Risk Prediction (Big Data & Machine Learning)</h3>
          <ul className="text-gray-300 text-left list-disc list-inside mb-2">
            <li>Vorhersagesystem für Studienerfolgsrisiken basierend auf &gt;230.000 LMS-Interaktionsdatensätzen</li>
            <li>Datenbereinigung, Feature Engineering und Skalierung mit pandas & scikit-learn</li>
            <li>Training von ML-Modellen: Decision Tree, Random Forest, AdaBoost, MLP</li>
            <li>Evaluation mit Confusion-Matrix und Metriken wie Accuracy, Precision, Recall</li>
            <li><span className="font-semibold">Technologien:</span> Python, pandas, scikit-learn, Matplotlib</li>
          </ul>
          <a
            href="https://github.com/YOMILEONEL/Big-Data-Analytics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
             Zum Projekt
          </a>
        </motion.div>
        {/* Twitter Sentiment Analysis */}
        <motion.div className="bg-gray-800 rounded-lg p-6 shadow-md"
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}>
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">💬 Twitter Sentiment Analysis (NLP & Machine Learning)</h3>
          <ul className="text-gray-300 text-left list-disc list-inside mb-2">
            <li>Analyse und Klassifikation von Tweets (positiv, negativ, neutral) aus Kaggle-Datensatz</li>
            <li>Textvorverarbeitung und Label-Mapping für Sentiment-Analyse</li>
            <li>Anwendung von TF-IDF-Vektorisierung und Logistic Regression</li>
            <li>Einsatz von BERT für tiefere Sprachrepräsentationen und Vergleich der Modelle</li>
            <li>Visualisierung der Ergebnisse mit WordCloud & Matplotlib</li>
            <li><span className="font-semibold">Technologien:</span> Python, scikit-learn, spaCy, Transformers (BERT), WordCloud, Matplotlib</li>
          </ul>
          <a
            href="https://github.com/YOMILEONEL/Twitter-Sentiment-Analysis.-Vergleich-von-TF-IDF-LinearSVC-und-Bert"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
             Zum Projekt
          </a>
        </motion.div>
      </div>
    </section>
  );
}
