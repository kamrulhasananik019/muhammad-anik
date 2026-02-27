"use client"
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <HeroSection/> 
  <AboutSection/>
  <SkillsSection/>
  <ExperienceSection/>
  <ProjectsSection />
  <ContactSection/>
  </>
  );
}
