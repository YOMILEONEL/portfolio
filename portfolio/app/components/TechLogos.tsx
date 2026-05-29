import {
  SiPython,
  SiTypescript,
  SiReact,
  SiSpring,
  SiMysql,
  SiVsco,
  SiJetbrains,
  SiPostman,
  SiDocker,
  SiGit,
  SiFigma,
  SiJavascript,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export function TechLogos() {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-6">
      <FaJava size={36} title="Java" color="#007396" />
      <SiPython size={36} title="Python" color="#3776AB" />
      <SiTypescript size={36} title="TypeScript" color="#3178C6" />
      <SiJavascript size={36} title="JavaScript" color="#F7DF1E" />
      <SiReact size={36} title="React" color="#61DAFB" />
      <SiSpring size={36} title="Spring Boot" color="#6DB33F" />
      <SiMysql size={36} title="MySQL" color="#4479A1" />
      <SiHtml5 size={36} title="HTML5" color="#E34F26" />
      <SiCss size={36} title="CSS3" color="#1572B6" />
      <SiVsco size={36} title="VS Code" color="#007ACC" />
      <SiJetbrains size={36} title="IntelliJ/PyCharm" color="#000000" />
      <SiPostman size={36} title="Postman" color="#FF6C37" />
      <SiDocker size={36} title="Docker" color="#2496ED" />
      <SiGit size={36} title="Git" color="#F05032" />
      <SiFigma size={36} title="Figma" color="#F24E1E" />
    </div>
  );
}