"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="ABOUT"
      className="grid min-h-screen w-full place-items-stretch bg-deep-cream px-4 sm:px-6 lg:px-12 py-8 "
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1fr] gap-8 items-center max-w-7xl mx-auto w-full">
        <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] relative">
          <Image
            src="/about-me.jpg"
            alt="About Me Image"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col items-center justify-center text-center lg:text-left ">
          <div className="mb-5">
            <p className="font-montserrat font-black text-4xl sm:text-5xl text-orange">
              ABOUT ME
            </p>
          </div>
          <div className="bg-black p-6 rounded-2xl text-white space-y-4 text-justify ">
            <p className="font-montserrat ">
              I’m a passionate Full Stack Developer with a strong interest in
              building intuitive, efficient, and scalable web applications. My
              journey in development began with a deep curiosity about how
              systems work—from designing clean user interfaces to building
              solid backend logic. I have hands-on experience using technologies
              such as {}
              <strong className="font-extrabold">
                JavaScript, React, Node.js, MySQL, and MongoDB
              </strong>
              , and enjoy working on projects that challenge both my creative
              and analytical thinking.
            </p>
            <p className="font-montserrat ">
              <strong className="font-extrabold ">Core Skills :</strong>{" "}
              JavaScript, React, Node.js, Express, HTML, CSS, MySQL, MongoDB,
              Git
            </p>
            <p className="font-montserrat ">
              <strong className="font-extrabold ">Key Values :</strong> I
              prioritize clear communication, attention to detail, and
              delivering work on time. I believe in writing clean, maintainable
              code and continuously improving through collaboration and
              learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
