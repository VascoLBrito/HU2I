export default function Hero() {
  return (
    <section className="h-[60vh] bg-[#faf8f5] py-8">
      <div className="w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-24 justify-between items-center h-full">
        {/* Coluna Esquerda */}
        <div className="relative grid grid-rows-[auto_.55fr] mr-0 ml-auto h-full self-end ">
          <div className="flex flex-col gap-2 w-full self-end">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#000]">
              QUEM SOMOS?
            </h2>
            <p className="text-base md:text-lg text-gray-700 text-justify leading-6">
              Somos uma PME focada em apoiar os seus investimentos, captando
              financiamento para concretizar projetos com o menor esforço
              financeiro.
            </p>
          </div>
          <div className=" w-full h-full"></div>
        </div>

        {/* Coluna Direita */}
        <div className="relative grid grid-rows-[.6fr_auto] mr-0 ml-auto h-full self-end ">
          <div className=" w-full h-full"></div>
          <div className="flex flex-col gap-0">
            <div className=" flex items-center justify-start">
              <img
                src="./logofade.webp"
                alt="HU2i Logo"
                className="w-[12rem] -ml-2.5"
              />
              <div className="-ml-8">
                <h1 className="text-4xl md:text-5xl text-[#0f172a] leading-tight flex flex-col mt-6 ">
                  <span className="font-bold tracking-wide">SEMPRE</span>
                  <span className="font-extralight text-4xl tracking-wider">
                    CONSIGO...
                  </span>
                </h1>
              </div>
            </div>
            {/* Conteúdo principal */}
            <div className="relative z-10">
              <p className=" text-base md:text-lg text-gray-700 text-justify leading-6">
                Na HU2i acreditamos que a comunicação próxima é a chave do
                sucesso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
