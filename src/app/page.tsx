"use client";

import React from "react";
import HomeSection from "./home/page";
import AboutSection from "./about/about-section";
import SkillsSection from "./skills/skills-section";
import PortfolioSection from "./portfolio/portfolio-section";
import ExperienceSection from "./experience/experience-section";
import TestimonialsSection from "./testimonials/testimonials-section";
import ContactSection from "./contact/contact-section";
import Header from "./header/header";

export default function HomePage() {
  return (
    <div>
      <main className="grid min-h-screen place-items-center  w-full">
        <Header />
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
}
