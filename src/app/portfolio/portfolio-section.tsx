import Image from "next/image";

export default function PortfolioSection() {
  return (
    <section
      id="PORTFOLIO"
      className="grid w-full min-h-screen place-items-center bg-deep-cream px-40 py-20"
    >
      <div className="w-full max-w-6xl space-y-8">
        <div className="font-montserrat font-black text-black text-4xl sm:text-5xl lg:text-7xl flex justify-center lg:justify-center pb-6">
          <p>PORTFOLIO</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full h-fit rounded-3xl overflow-hidden bg-white shadow-md">
        <div className="relative w-full lg:w-1/2 h-[250px] sm:h-[400px] lg:h-auto">
          <Image
            src="/tugas_akhir.webp"
            alt="Foto Tugas Akhir"
            fill
            className="object-cover object-left"
          />
        </div>
        <div className="grid grid-rows-[auto_1fr] w-full lg:w-1/2 p-6 sm:p-8">
          <div className="flex flex-col mb-4 font-montserrat text-black space-y-2">
            <p className="font-black uppercase text-xl sm:text-2xl">
              Website Monitoring System <br />
              for Automatic Transfer Switch (ATS)
            </p>
            <p className="font-normal text-lg sm:text-xl">
              Laravel, MySQL, Bootstrap, JavaScript
            </p>
          </div>

          <div className="space-y-3 font-montserrat text-sm sm:text-base text-justify">
            <p>
              <span className="font-bold">Situation:</span> Monitoring kondisi
              ATS di laboratorium kampus masih dilakukan secara manual, sehingga
              respons terhadap perpindahan sumber daya listrik sering terlambat.
            </p>
            <p>
              <span className="font-bold">Task:</span> Membangun sistem berbasis
              web yang mampu menampilkan status ATS secara real-time dan
              mencatat histori perpindahan daya.
            </p>
            <p>
              <span className="font-bold">Action:</span> Menggunakan Laravel dan
              MySQL untuk backend serta Bootstrap untuk frontend. Sistem
              terhubung dengan mikrokontroler yang mengirimkan data secara
              berkala ke server, lalu ditampilkan dalam dashboard interaktif
              dengan grafik dan indikator status.
            </p>
            <p>
              <span className="font-bold">Result:</span> Sistem berhasil
              mempercepat deteksi gangguan switching hingga 40%. Website ini
              mempermudah teknisi dalam memantau ATS secara jarak jauh dan
              menjadi referensi pengembangan sistem serupa di kampus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
