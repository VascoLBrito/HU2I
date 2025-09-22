// app/components/Servicos.tsx
import Image from "next/image";
import KeyScroll from "./KeyScroll";

export default function Servicos() {
  return (
    <section className="relative bg-[#4C5323] text-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <p className="text-sm font-medium uppercase tracking-wide mb-12">
          SERVIÇOS “CHAVE NA MÃO”
        </p>

        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Coluna esquerda (key + arrow) */}
          <div className="flex w-[25rem] h-[25rem] justify-end items-end self-end">
            <KeyScroll></KeyScroll>
          </div>

          {/* Coluna direita (texto numerado) */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">1. Planeamento</h3>
              <p className="mt-2 text-base text-gray-100 leading-relaxed">
                Agendamos uma reunião inicial para conhecer em detalhe as
                necessidades do cliente. A partir daí, delineamos um plano
                global de investimentos, adaptado à sua realidade e aos
                objetivos do negócio.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold">2. Execução</h3>
              <p className="mt-2 text-base text-gray-100 leading-relaxed">
                Avançamos para a aquisição dos investimentos definidos.
                Trabalhamos com parceiros de confiança em todas as áreas de
                atuação, assegurando a qualidade, eficiência e rapidez na
                implementação.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold">3. Avaliação</h3>
              <p className="mt-2 text-base text-gray-100 leading-relaxed">
                No final, avaliamos se todos os objetivos foram cumpridos.
                Elaboramos um relatório de execução e medimos os principais
                indicadores de desempenho (KPIs), garantindo transparência e
                resultados mensuráveis.
              </p>
            </div>
          </div>
        </div>

        {/* Texto final */}
        <p className="mt-16 text-center text-sm md:text-base text-gray-100 max-w-4xl mx-auto leading-relaxed">
          Na HU2i acreditamos que o empresário deve concentrar-se no que faz de
          melhor: <span className="font-bold">crescer o seu negócio</span>. Por
          isso, tratamos de toda a parte burocrática, da candidatura à execução,
          articulando com os nossos parceiros em todas as áreas de atuação.
          Assim, simplificamos o processo e asseguramos que cada projeto decorre
          de forma tranquila, eficiente e sem complicações.
        </p>
      </div>
    </section>
  );
}
