import Image from "next/image";

export default function HomeSection() {
  return (
    <section
      id="HERO"
      className="grid min-h-screen place-items-center bg-cream px-6 md:px-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.5fr_0.75fr] items-center gap-8 pt-6">
        <div className="w-full flex justify-center">
          <Image
            src="/Group4.png"
            alt="Foto Profile"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col items-center text-center md:items-start md:text-left justify-center pb-6">
          <h2 className="font-montserrat font-bold bg-orange w-fit p-3 pr-5 pl-5 rounded-full text-xl sm:text-2xl text-white mb-3">
            Full Stack Developer
          </h2>
          <h1 className="text-2xl sm:text-3xl text-black font-montserrat font-extrabold mb-2">
            MUHAMMAD FAIZ ALFATIH
          </h1>
          <p className="font-montserrat font-normal text-black text-justify text-sm sm:text-base">
            I am a Full Stack Developer experienced in building applications
            from both the frontend and backend. I have a strong understanding of
            creating responsive user interfaces as well as designing and
            managing server architecture and databases. I am proficient in
            technologies such as HTML, CSS, JavaScript (React/Next.js), Node.js,
            and databases like MySQL and MongoDB.
          </p>
          <a
            href="/portfolio.pdf"
            download
            className="flex items-center gap-2 rounded-full bg-black text-white font-ibm font-semibold mt-4 px-4 py-2 hover:bg-gray-800 transition"
          >
            <div>
              <Image
                src="/download.png"
                alt="Icon Download"
                width={20}
                height={20}
                className="pt-[2px]"
              />
            </div>
            My Portofolio
          </a>
        </div>
      </div>
    </section>
  );
}
