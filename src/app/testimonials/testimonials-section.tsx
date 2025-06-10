import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section
      id="TESTIMONI"
      className="grid grid-rows-[auto_1fr] w-full min-h-screen place-items-center bg-deep-cream px-4 py-10"
    >
      <div className="font-montserrat font-black text-black text-4xl sm:text-5xl lg:text-7xl flex justify-center ">
        TESTIMONIALS
      </div>
      <div className="flex flex-col gap-y-8 w-full max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden relative">
            <Image
              src="/user_1.jpg"
              alt="user 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="max-w-md">
            <p className="text-black text-2xl font-montserrat font-black mb-2">
              JOHN
            </p>
            <p className="text-black font-montserrat text-justify">
              Working with Faiz is always a pleasure. He quickly understands
              technical issues and provides efficient solutions. Collaborative
              and responsible.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 text-center md:text-right">
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden relative">
            <Image
              src="/user_2.jpg"
              alt="user 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="max-w-md">
            <p className="text-black text-2xl font-montserrat font-black mb-2">
              ANNA
            </p>
            <p className="text-black font-montserrat text-justify">
              Faiz demonstrates a strong commitment to completing his final
              project. He focuses not only on the outcome but also on the
              process and the quality of his work.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden relative">
            <Image
              src="/user_3.jpg"
              alt="user 3"
              fill
              className="object-cover"
            />
          </div>
          <div className="max-w-md">
            <p className="text-black text-2xl font-montserrat font-black mb-2">
              ASEP
            </p>
            <p className="text-black font-montserrat text-justify">
              The website developed by Faiz is highly responsive, fast, and
              user-friendly. Communication throughout the project was very
              smooth. I am very satisfied with the results of his work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
