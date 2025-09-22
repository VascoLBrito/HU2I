import { Fullscreen } from "lucide-react";
import Image from "next/image";

// app/components/Stats.tsx
export default function Stats() {
  return (
    <section className="relative w-full h-[75vh] grid justify-center items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/bg-metrics.webp"
          alt="Paisagem agrícola"
          className="w-full h-full object-cover object-center"
          width={2900}
          height={1900}
        />
        {/* Overlay para contraste */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white font-montserrat">
          {/* Stat 1 */}
          <div>
            <p className="text-4xl md:text-5xl font-bold">99%</p>
            <p className="mt-2 text-lg leading-6">taxa de aprovação</p>
          </div>

          {/* Stat 2 */}
          <div className="">
            <p className="text-4xl md:text-5xl font-bold">+6M</p>
            <p className="mt-2 text-lg leading-6">
              milhões de euros de financiamento <br /> não reembolsável
              garantido
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <p className="text-4xl md:text-5xl font-bold">+500</p>
            <p className="mt-2 text-lg leading-6">projetos aprovados</p>
          </div>
        </div>
      </div>
    </section>
  );
}
