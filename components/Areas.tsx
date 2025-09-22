import Image from "next/image";

// app/components/Areas.tsx
export default function Areas() {
  const areas = [
    { title: "MAR E PESCA", image: "/areas/marepesca.webp" },
    { title: "AGRICULTURA", image: "/areas/agricultura.webp" },
    { title: "TRANSIÇÃO CLIMÁTICA", image: "/areas/transiçaodigital.webp" },
    { title: "TRANSIÇÃO DIGITAL", image: "/areas/transiçaoclimatica.webp" },
  ];

  return (
    <section className="bg-[#faf8f5] py-20 p-4">
      <div className="max-w-6xl mx-auto lg:px-12 grid md:grid-cols-1 gap-8">
        {/* Texto à direita */}
        <div className="md:col-span-1 w-full flex flex-row justify-between">
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-4">
            ÁREAS DE ATUAÇÃO
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] leading-snug">
            CONSULTORIA
            <span className="font-extralight">
              {" "}
              E <br /> GESTÃO DE PROJETOS
            </span>
          </h2>
        </div>

        {/* Grid especial */}
        <div className=" grid grid-cols-5 gap-6 w-full mx-auto auto-rows-[400px] md:auto-rows-[400px]">
          {areas.map((it, idx) => (
            <>
              <article
                key={it.title}
                className={`relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl/30 hover:-translate-y-1.5 transition 
                ${idx === 1 || idx === 2 ? "col-span-3 " : "col-span-2"}`}
              >
                <Image
                  src={it.image}
                  alt={it.title}
                  fill
                  priority={false}
                  className={`object-cover ${
                    idx === 1 || idx === 2 ? "object-center" : "object-top"
                  }`}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 z-1 pb-4">
                  <h3 className="text-lg font-extrabold uppercase tracking-wide text-white md:text-xl">
                    {it.title}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D6073] from-10% to-transparent to-45% opacity-80 "></div>
              </article>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
