"use client";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { Contact } from "./components/Contact";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar/>
      <HeroSection/>
      <AboutMe/>
      <Projects />
      <Contact/>
      </div>
  );
}
