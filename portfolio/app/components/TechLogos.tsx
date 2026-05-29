import {
  SiPython,
  SiTypescript,
  SiReact,
  SiSpring,
  SiMysql,
  SiJetbrains,
  SiPostman,
  SiDocker,
  SiGit,
  SiFigma,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiNginx,
  SiOpenai,
  SiRabbitmq,
  SiVite,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const technologies = [
  {
    name: "Java",
    icon: FaJava,
    category: "Backend",
    color: "text-blue-400",
  },
  {
    name: "Python",
    icon: SiPython,
    category: "Data / AI",
    color: "text-yellow-300",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "Frontend",
    color: "text-blue-400",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: "Frontend",
    color: "text-yellow-300",
  },
  {
    name: "React",
    icon: SiReact,
    category: "Frontend",
    color: "text-cyan-300",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "Frontend",
    color: "text-white",
  },
  {
    name: "Spring Boot",
    icon: SiSpring,
    category: "Backend",
    color: "text-green-400",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    category: "Backend",
    color: "text-green-400",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    category: "Database",
    color: "text-blue-300",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: "Database",
    color: "text-blue-300",
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    category: "Frontend",
    color: "text-orange-400",
  },
  {
    name: "CSS",
    icon: SiCss,
    category: "Frontend",
    color: "text-blue-400",
  },
  {
    name: "VS Code",
    icon: VscVscode,
    category: "Tooling",
    color: "text-blue-400",
  },
  {
    name: "JetBrains",
    icon: SiJetbrains,
    category: "Tooling",
    color: "text-pink-400",
  },
  {
    name: "Postman",
    icon: SiPostman,
    category: "API",
    color: "text-orange-400",
  },
  {
    name: "Docker",
    icon: SiDocker,
    category: "DevOps",
    color: "text-blue-400",
  },
  {
    name: "Git",
    icon: SiGit,
    category: "Versionierung",
    color: "text-orange-400",
  },
  {
    name: "Figma",
    icon: SiFigma,
    category: "Design",
    color: "text-purple-400",
  },
  {
    name: "Vite",
    icon: SiVite,
    category: "Build Tool",
    color: "text-purple-300",
  },
  {
    name: "nginx",
    icon: SiNginx,
    category: "DevOps",
    color: "text-green-400",
  },
  {
    name: "OpenAI API",
    icon: SiOpenai,
    category: "AI",
    color: "text-white",
  },
  {
    name: "RabbitMQ",
    icon: SiRabbitmq,
    category: "Messaging",
    color: "text-orange-400",
  },
];

export function TechLogos() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-3 py-4">
      {technologies.map((tech) => {
        const Icon = tech.icon;

        return (
          <div
            key={tech.name}
            title={tech.name}
            className="group rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-center transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            <div className="mb-2 flex justify-center">
              <Icon
                size={22}
                className={`${tech.color} transition group-hover:scale-105`}
              />
            </div>

            <h4 className="text-xs font-semibold text-white leading-tight">
              {tech.name}
            </h4>

            <p className="mt-1 text-[10px] text-gray-400 leading-tight">
              {tech.category}
            </p>
          </div>
        );
      })}
    </div>
  );
}