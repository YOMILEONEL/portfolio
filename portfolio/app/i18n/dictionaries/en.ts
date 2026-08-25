import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Steve Leonel Portfolio",
    description:
      "Portfolio of Steve Leonel Yomi Mbiakop – Fullstack Developer, AI Enthusiast and Computer Science Student.",
  },
  resumeUrl: "/resume_en.pdf",
  nav: {
    home: "Home",
    about: "About Me",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    subtitle: "Fullstack Developer · AI Enthusiast",
    cvButton: "Resume",
    cvButtonMobile: "Download Resume",
    menuAria: "Open or close navigation",
  },
  hero: {
    eyebrow: "Fullstack Developer · AI Enthusiast · Computer Science Student",
    greetingPrefix: "Hi, I'm",
    name: "Steve Leonel Yomi Mbiakop",
    paragraph1:
      "I'm studying Computer Science at Clausthal University of Technology, building modern, scalable software solutions with a focus on fullstack web development, artificial intelligence and clean software architecture.",
    paragraph2:
      "My main focus areas are Java, Spring Boot, React, Next.js, TypeScript, databases, Docker and REST APIs. I'm also interested in automation, n8n, the OpenAI API and intelligent systems for real-world use cases.",
    skills: [
      "Next.js",
      "TypeScript",
      "React",
      "Spring Boot",
      "Java",
      "Python",
      "Docker",
      "AI",
    ],
    ctaProjects: "View my projects",
    ctaContact: "Get in touch",
  },
  aboutMe: {
    eyebrow: "Who I Am",
    title: "About Me",
    intro:
      "I'm Steve Leonel Yomi Mbiakop, a Computer Science student, fullstack developer and AI enthusiast based in Germany. I build software solutions that combine technical precision, modern architecture and practical usability.",
    motivationTitle: "My Motivation",
    motivation1:
      "My goal is to build robust, user-friendly applications that solve real problems. I find it especially exciting to combine classic software development with artificial intelligence, automation and scalable web architecture.",
    motivation2:
      "As a tutor, I explain complex computer science topics in a clear and structured way. This experience also helps me in software development: I think analytically, communicate clearly and value clean, maintainable code.",
    motivation3:
      "I gain hands-on experience in projects using Spring Boot, Next.js, TypeScript, Docker, REST APIs, MySQL and PostgreSQL, as well as automations with n8n and the OpenAI API.",
    highlights: [
      {
        title: "Computer Science Student",
        text: "B.Sc. Computer Science at Clausthal University of Technology, focused on software engineering, algorithms, databases and distributed systems.",
      },
      {
        title: "Fullstack Development",
        text: "Building modern web applications with Java, Spring Boot, React, Next.js, TypeScript, REST APIs and relational databases.",
      },
      {
        title: "Tutor & Mentor",
        text: "Experience tutoring logic, verification, automata theory, formal languages, Python, Java and C#.",
      },
      {
        title: "AI & Automation",
        text: "Interest in intelligent systems, the OpenAI API, n8n automations and data-driven software solutions.",
      },
    ],
    techTitle: "Technologies & Tools",
    techText:
      "I work with modern technologies across backend, frontend, DevOps, databases and AI-powered automation.",
    programmingLanguagesLabel: "Languages:",
    frameworksLabel: "Frameworks:",
    toolsLabel: "Tools:",
    langSectionTitle: "Languages",
    langSectionText:
      "French: native speaker · German: business fluent · English: good working knowledge",
    cvDownload: "Download Resume",
  },
  experience: {
    eyebrow: "Experience",
    title: "Work Experience & Involvement",
    intro:
      "Alongside my projects, I gain hands-on experience in fullstack development, technical teaching, software architecture, automation and community work.",
    items: [
      {
        role: "Working Student Software Development",
        company: "Mariana Service GmbH",
        period: "December 2025 – present",
        type: "Fullstack · E-Commerce · Automation",
        description:
          "Contributing to the design and development of a B2C e-commerce platform, as well as automations that reduce the workload of IT support.",
        points: [
          "Requirements engineering as the foundation for system architecture and technical implementation",
          "Development of a B2C online shop with Spring Boot, Next.js and TypeScript",
          "Implementation of product management, point-of-sale systems and admin dashboards",
          "Integration of external services such as Stripe, AWS S3/Supabase Storage, Resend and RabbitMQ",
          "Deployment on a VPS with Docker, nginx and HTTPS configuration via Let's Encrypt",
          "Building a CI/CD pipeline with GitHub Actions for automated tests, builds and Docker-based deployment",
          "Automating support processes with n8n, the OpenAI API, REST APIs and webhooks",
        ],
        technologies: [
          "Java",
          "Spring Boot",
          "Next.js",
          "TypeScript",
          "PostgreSQL",
          "Docker",
          "nginx",
          "RabbitMQ",
          "OpenAI API",
          "n8n",
          "GitHub Actions",
        ],
      },
      {
        role: "Tutor for Logic and Verification",
        company: "Clausthal University of Technology – Institute for Computer Science",
        period: "April 2026 – present",
        type: "Teaching · Formal Methods",
        description:
          "Supporting students in propositional logic, predicate logic and verification, with a focus on structured explanations and exam preparation.",
        points: [
          "Support during exercises, tutorials and subject-related questions",
          "Teaching formal proof techniques and logical concepts",
          "Structured preparation for exams and exercise sheets",
        ],
        technologies: ["Logic", "Verification", "Formal Methods", "Didactics"],
      },
      {
        role: "Tutor for Computer Science III",
        company: "Clausthal University of Technology – Institute for Computer Science",
        period: "October 2025 – March 2026",
        type: "Teaching · Theoretical Computer Science",
        description:
          "Teaching complex topics in automata theory, formal languages and grammars in exercise sessions and study groups.",
        points: [
          "Explaining automata, grammars and formal languages",
          "Support with exercises and exam preparation",
          "Breaking down abstract content into understandable examples",
        ],
        technologies: [
          "Automata Theory",
          "Formal Languages",
          "Grammars",
          "Teaching",
        ],
      },
      {
        role: "Tutor for Computer Science Workshop – Application Systems",
        company: "Clausthal University of Technology – Institute for Computer Science",
        period: "October 2025 – March 2026",
        type: "Python · Teamwork · Software Engineering",
        description:
          "Supporting students in building applications in Python using agile methods and collaborative development.",
        points: [
          "Supervising Python projects with Pygame",
          "Support with Git, Scrum, Taiga and project organization",
          "Teaching best practices in software engineering and teamwork",
        ],
        technologies: ["Python", "Pygame", "Git", "Scrum", "Taiga"],
      },
      {
        role: "Programming Tutor",
        company: "Coding Giants GmbH",
        period: "March 2025 – March 2026",
        type: "Programming · Mentoring",
        description:
          "Running programming courses for children and teenagers, focused on explaining technical content in an accessible, hands-on way.",
        points: [
          "Teaching Scratch, Python, Java and C#",
          "Explaining algorithms and data structures in a simple way",
          "Fostering problem-solving skills and technical understanding",
        ],
        technologies: ["Scratch", "Python", "Java", "C#", "Algorithms"],
      },
      {
        role: "Volunteer",
        company: "Clausthaler Studenten aus Kamerun e. V. / CSK",
        period: "April 2026 – present",
        type: "Volunteering · Community · Web Platform",
        description:
          "Supporting new students and contributing to the association's digital and cultural activities.",
        points: [
          "Helping new students get oriented in Clausthal",
          "Subject-specific help in selected fields of study",
          "Contributing to the development of the association's digital platform",
          "Co-organizing cultural and social activities",
        ],
        technologies: ["Community", "Web Development", "Organization", "Mentoring"],
      },
    ],
  },
  projects: {
    eyebrow: "Portfolio",
    title: "My Projects",
    intro:
      "A selection of my projects in fullstack development, software architecture, machine learning and natural language processing. Each project highlights a different technical focus — from REST APIs to AI-powered data analysis.",
    coreFeaturesLabel: "Core Features",
    technologiesLabel: "Technologies",
    viewProjectLabel: "View Project",
    items: [
      {
        title: "CVforYou",
        subtitle: "Resume Builder",
        icon: "📄",
        category: "Fullstack / AI-Powered App",
        description:
          "A free, multilingual resume builder: pick a template, fill in your details in a live-preview editor, and export an ATS-friendly PDF. A built-in AI assistant can also match the resume against a job posting on request.",
        features: [
          "14 ATS-friendly templates with a live preview in the editor",
          "AI-powered job-match check (Google Gemini) with a match score and improvement suggestions",
          "Server-side PDF export via Puppeteer/Chromium",
          "Fully multilingual interface (German, English, French)",
          "Auth, data storage and photo storage via Supabase with row-level security",
        ],
        technologies: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Supabase",
          "PostgreSQL",
          "Google Gemini API",
          "Puppeteer",
          "Vercel",
        ],
        github: "https://cvforyou.vercel.app",
      },
      {
        title: "Weather App",
        subtitle: "React + TypeScript",
        icon: "🌦",
        category: "Frontend / API",
        description:
          "A responsive web application that displays real-time weather data using the OpenWeatherMap API. Users can search for cities and get up-to-date information on temperature, humidity, wind and weather conditions.",
        features: [
          "City search with dynamic weather display",
          "API integration via OpenWeatherMap",
          "Error handling for invalid input",
          "Responsive UI with weather icons",
          "Modular structure using React Hooks",
        ],
        technologies: [
          "React",
          "TypeScript",
          "Axios",
          "CSS",
          "HTML",
          "Git",
          "React Icons",
        ],
        github: "https://github.com/YOMILEONEL/weather_app",
      },
      {
        title: "Checkers Game with Multiplayer Mode",
        subtitle: "Spring Boot + Swing",
        icon: "♟",
        category: "Fullstack / Game Development",
        description:
          "A client-server checkers game with Spring Boot on the backend and Java Swing on the frontend. The project combines game logic, REST API communication, data persistence and real-time synchronization.",
        features: [
          "REST API for players, game state and moves",
          "Real-time synchronization via long polling",
          "Game logic built with OOP, algorithms and data structures",
          "MVC structure on the frontend",
          "System design with UML and Figma",
        ],
        technologies: ["Java", "Swing", "Spring Boot", "MySQL", "UML", "Figma", "Git"],
        github: "https://github.com/YOMILEONEL/damespiel",
      },
      {
        title: "Spacio",
        subtitle: "Fullstack Booking Platform",
        icon: "🏢",
        category: "Fullstack / Enterprise App",
        description:
          "A platform for booking meeting, event and training rooms for private customers and organisations, with role-based authorization and a clean separation between frontend, backend and database.",
        features: [
          "Room search and filtering by city, name and description",
          "AI assistant (Google Gemini, function calling) answers customers' questions about their own bookings and room availability using real, live data",
          "Automatic organisation discount and role-based per-day pricing",
          "JWT authentication with access/refresh tokens and password reset",
          "Admin dashboard with room management, photos and PDF invoice generation",
          "Dockerized deployment with CI/CD via GitHub Actions",
        ],
        technologies: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "Gemini API",
          "Next.js",
          "React",
          "TypeScript",
          "NextAuth.js",
          "Tailwind CSS",
          "PostgreSQL",
          "Supabase",
          "Docker",
          "GitHub Actions",
        ],
        github: "https://github.com/YOMILEONEL/room_booking_system",
      },
      {
        title: "LMS Risk Prediction",
        subtitle: "Big Data & Machine Learning",
        icon: "📊",
        category: "Data Science / Machine Learning",
        description:
          "A machine learning project that predicts academic risk based on extensive LMS interaction data with more than 230,000 records.",
        features: [
          "Data cleaning and feature engineering",
          "Scaling and model preparation",
          "Training of various ML models",
          "Comparison of Decision Tree, Random Forest, AdaBoost and MLP",
          "Evaluation using confusion matrix, accuracy, precision and recall",
        ],
        technologies: ["Python", "pandas", "scikit-learn", "Matplotlib", "Machine Learning"],
        github: "https://github.com/YOMILEONEL/Big-Data-Analytics",
      },
      {
        title: "Twitter Sentiment Analysis",
        subtitle: "NLP & Machine Learning",
        icon: "💬",
        category: "Natural Language Processing",
        description:
          "An NLP project that analyzes and classifies tweets as positive, negative or neutral. Classic machine learning methods are compared against BERT-based approaches.",
        features: [
          "Text preprocessing and label mapping",
          "TF-IDF vectorization",
          "Logistic Regression and LinearSVC",
          "BERT-based language representations",
          "Visualization with WordCloud and Matplotlib",
        ],
        technologies: [
          "Python",
          "scikit-learn",
          "spaCy",
          "Transformers",
          "BERT",
          "WordCloud",
          "Matplotlib",
        ],
        github:
          "https://github.com/YOMILEONEL/Twitter-Sentiment-Analysis.-Vergleich-von-TF-IDF-LinearSVC-und-Bert",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's Work Together",
    intro:
      "Want to talk to me about a project, a working student position, a collaboration or a technical idea? Feel free to send me a message or reach out directly via email, GitHub or LinkedIn.",
    contactInfoTitle: "Contact Information",
    contactInfoText:
      "I'm open to exciting software projects, fullstack development, AI-powered applications, automations and professional exchange in computer science.",
    emailLabel: "Email",
    locationLabel: "Location",
    locationValue: "Clausthal-Zellerfeld, Germany",
    profilesTitle: "Profiles",
    formTitle: "Send a Message",
    nameLabel: "Your Name",
    namePlaceholder: "John Doe",
    emailFieldLabel: "Your Email",
    emailPlaceholder: "john@example.com",
    messageLabel: "Your Message",
    messagePlaceholder: "Briefly tell me what this is about...",
    submitButton: "Prepare Message",
    submitNote:
      "Submitting this form opens your email client with the message pre-filled.",
    mailSubjectPrefix: "Contact request from",
    mailBodyNameLabel: "Name",
    mailBodyEmailLabel: "Email",
    mailBodyMessageLabel: "Message",
  },
};
