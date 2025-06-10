"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    const saved = localStorage.getItem("contactForm");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "6282121869515";
    const text = `Halo, saya ${formData.name} ${formData.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };
  return (
    <section
      id="CONTACT"
      className="grid w-full min-h-screen place-items-center bg-cream px-4 py-10"
    >
      <div className="max-w-[600px] w-full text-center space-y-6">
        <h2 className="text-4xl font-montserrat font-bold text-black">
          Let’s Connect
        </h2>

        <form onSubmit={handleSubmit} className="grid gap-4 w-full">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border p-2 rounded w-full"
          />

          <textarea
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="border p-2 rounded w-full"
          />
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 w-full"
          >
            Send via WhatsApp
          </button>
        </form>

        <div className="flex flex-wrap justify-center gap-6 mt-6 text-black text-lg">
          <Link
            href="https://linkedin.com/in/muhammadfaizalfatih"
            target="_blank"
            className="flex flex-col items-center hover:underline gap-1"
          >
            <Image src="/linkedin.svg" alt="LinkedIn" width={40} height={40} />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/FaizFatih0815"
            target="_blank"
            className="flex flex-col items-center hover:underline gap-1"
          >
            <Image src="/github.svg" alt="GitHub" width={40} height={40} />
            GitHub
          </Link>
          <Link
            href="https://instagram.com/Faiz.Fatih0815"
            target="_blank"
            className="flex flex-col items-center hover:underline gap-1"
          >
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={40}
              height={40}
            />
            Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}
