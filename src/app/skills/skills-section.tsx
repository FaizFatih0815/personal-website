import Image from "next/image";

export default function SkillsSection() {
  return (
    <section
      id="SKILLS"
      className="grid w-full min-h-screen place-items-center bg-cream px-6"
    >
      <div className="w-full max-w-6xl h-auto grid grid-rows-[auto_1fr] gap-8">
        <div className="text-center space-y-3">
          <p className="font-montserrat font-black text-black text-5xl sm:text-6xl lg:text-8xl">
            SKILLS
          </p>
          <p className="font-montserrat font-semibold text-black text-xl sm:text-2xl lg:text-3xl">
            This is my skill in Fullstack Developer
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 place-items-center">
          <div className="aspect-square w-[140px] sm:w-[160px] lg:w-[180px] flex flex-col items-center justify-center border-white bg-orange text-white rounded-full font-montserrat font-bold text-xl sm:text-2xl lg:text-3xl border-1 ">
            <Image
              src="html.svg"
              alt="Logo HTML"
              width={50}
              height={50}
              className="pb-1"
            />
            HTML
          </div>
          <div className="aspect-square w-[140px] sm:w-[160px] lg:w-[180px] flex flex-col items-center justify-center border-white bg-orange text-white rounded-full font-montserrat font-bold text-xl sm:text-2xl lg:text-3xl border-1 ">
            <Image
              src="css.svg"
              alt="Logo CSS"
              width={50}
              height={50}
              className="pb-1"
            />
            CSS
          </div>
          <div className="aspect-square w-[140px] sm:w-[160px] lg:w-[180px] flex flex-col items-center justify-center border-white bg-orange text-white rounded-full font-montserrat font-bold text-xl sm:text-2xl lg:text-3xl border-1">
            <Image
              src="javascript.svg"
              alt="Logo JS"
              width={50}
              height={50}
              className="pb-1"
            />
            JS
          </div>
          <div className="aspect-square w-[140px] sm:w-[160px] lg:w-[180px] flex flex-col items-center justify-center border-white bg-orange text-white rounded-full font-montserrat font-bold text-xl sm:text-2xl lg:text-3xl border-1 ">
            <Image
              src="react.svg"
              alt="Logo REACT"
              width={50}
              height={50}
              className="pb-1"
            />
            REACT
          </div>
        </div>
      </div>
    </section>
  );
}
