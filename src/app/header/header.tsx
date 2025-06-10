"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "HERO",
        "ABOUT",
        "SKILLS",
        "PORTFOLIO",
        "EXPERIENCE",
        "TESTIMONI",
        "CONTACT",
      ];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-orange text-white z-50 shadow-md ">
      <div className="flex justify-between items-center px-6 py-3 font-ibm ">
        <a href="#HERO" className="relative w-[115px] h-[30px] ">
          <Image
            src="/group3.png"
            alt="Image header"
            fill
            className="object-contain object-left "
          />
        </a>

        <nav className="hidden lg:flex gap-6 text-m items-center">
          <a
            href="#ABOUT"
            className={`hover:text-black ${
              activeSection === "ABOUT" ? "font-bold underline" : ""
            }`}
          >
            About
          </a>
          <a
            href="#SKILLS"
            className={`hover:text-black ${
              activeSection === "SKILLS" ? "font-bold underline" : ""
            }`}
          >
            Skills
          </a>
          <a
            href="#PORTFOLIO"
            className={`hover:text-black ${
              activeSection === "PORTFOLIO" ? "font-bold underline" : ""
            }`}
          >
            Portfolio
          </a>
          <a
            href="#EXPERIENCE"
            className={`hover:text-black ${
              activeSection === "EXPERIENCE" ? "font-bold underline" : ""
            }`}
          >
            Experience
          </a>
          <a
            href="#TESTIMONI"
            className={`hover:text-black ${
              activeSection === "TESTIMONI" ? "font-bold underline" : ""
            }`}
          >
            Testimoni
          </a>
          <a
            href="#CONTACT"
            className={`hover:text-black ${
              activeSection === "CONTACT" ? "font-bold underline" : ""
            }`}
          >
            Contact
          </a>
        </nav>

        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <Image
              src="/hamburger.svg"
              alt="Hamburger Menu"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden flex flex-col bg-orange text-white px-6 py-4 space-y-2">
            <Link
              href="#ABOUT"
              onClick={() => setIsOpen(false)}
              className="hove:text-black"
            >
              About
            </Link>
            <Link
              href="#SKILLS"
              onClick={() => setIsOpen(false)}
              className="hove:text-black"
            >
              Skills
            </Link>
            <Link
              href="#PORTFOLIO"
              onClick={() => setIsOpen(false)}
              className="hove:text-black"
            >
              Portfolio
            </Link>
            <Link
              href="#EXPERIENCE"
              onClick={() => setIsOpen(false)}
              className="hove:text-black"
            >
              Experience
            </Link>
            <Link
              href="#TESTIMONI"
              onClick={() => setIsOpen(false)}
              className="hove:text-black"
            >
              Testimoni
            </Link>
            <Link
              href="#CONTACT"
              onClick={() => setIsOpen(false)}
              className="hove:text-black"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
