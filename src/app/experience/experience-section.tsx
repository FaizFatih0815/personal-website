import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section
      id="EXPERIENCE"
      className="grid w-full min-h-screen place-items-center bg-cream px-4 py-10"
    >
      <div className="w-full max-w-6xl space-y-8">
        <div className="font-montserrat font-black text-black text-4xl sm:text-5xl lg:text-7xl flex justify-center lg:justify-center">
          EXPERIENCE
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full rounded-2xl shadow-lg grid grid-rows-[200px_1fr] overflow-hidden bg-white">
            <div className="relative w-full h-[200px]">
              <Image
                src="/KerjaPraktek.webp"
                alt="Foto Tugas Akhir"
                fill
                className="object-cover object-left"
              />
            </div>

            <div className="p-5 grid grid-rows-[auto_1fr]">
              <div className="mb-2">
                <p className="font-montserrat font-black uppercase text-lg text-black">
                  Service Monitoring & QA <br /> Icon Plus
                </p>
                <p className="text-sm text-gray-600">Februari - Maret 2022</p>
              </div>

              <div className="space-y-2 text-sm font-montserrat text-justify">
                <p>
                  <span className="font-bold">Responsibilities:</span>
                </p>
                <ul className="list-disc list-inside">
                  <li>Quality control web development & feature testing</li>
                  <li>User Acceptance Testing & bug reporting</li>
                  <li>Team collaboration for system reliability</li>
                  <li>Documentation feedback for improvements</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full rounded-2xl shadow-lg grid grid-rows-[200px_1fr] overflow-hidden bg-white">
            <div className="relative w-full h-[200px]">
              <Image
                src="/RoccaSpace.jpeg"
                alt="Foto Tugas Akhir"
                fill
                className="object-cover object-left"
              />
            </div>
            <div className="p-5 grid grid-rows-[auto_1fr]">
              <div className="mb-2">
                <p className="font-montserrat font-black uppercase text-lg text-black">
                  Content Creator <br />
                  RoccaSpace
                </p>
                <p className="text-sm text-gray-600">
                  Januari 2024 - Maret 2025
                </p>
              </div>

              <div className="space-y-2 text-sm font-montserrat text-justify">
                <p>
                  <span className="font-bold">Responsibilities:</span>
                </p>
                <ul className="list-disc list-inside">
                  <li>
                    Created and published digital content for social media
                  </li>
                  <li>
                    Executed content strategies aligned with brand objectives.
                  </li>
                  <li>
                    Coordinated with marketing teams to ensure content
                    consistency.
                  </li>
                  <li>
                    Monitored content performance and optimized for engagement.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
