import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#fdfcf9] text-[#1a1a1a] border-t border-gray-300 pt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-6 grid md:grid-cols-2 gap-12">
        {/* Contactos */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold">CONTACTOS</h2>

          <div className="flex items-center gap-6">
            <Phone className="w-10 h-10 text-[#193240]" />
            <div>
              <h3 className="text-lg uppercase font-bold">Telefone</h3>
              <p className="block">(+351) 911 172 566</p>
              <p className="text-sm text-gray-500">
                (Chamada para rede fixa nacional)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Mail className="w-10 h-10 text-[#193240]" />
            <div>
              <h3 className="text-lg uppercase font-bold">Mail</h3>
              <p>geral@hu2i.pt</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <MapPin className="w-10 h-10 text-[#193240]" />
            <div>
              <h3 className="text-lg uppercase font-bold">Criar Tec</h3>
              <p>
                Rua do Cais, nº 25 <br />
                9940-355 São Roque do Pico
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Clock className="w-10 h-10 text-[#193240]" />
            <p>
              HORÁRIO DE FUNCIONAMENTO <br />
              09:00 às 18:00 (AZOST)
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 mt-12">
            <a href="#">
              <Facebook className="w-8 h-8 text-[#193240] hover:text-[#1f7a8c]" />
            </a>
            <a href="#">
              <Instagram className="w-8 h-8 text-[#193240] hover:text-[#1f7a8c]" />
            </a>
            <a href="#">
              <Linkedin className="w-8 h-8 text-[#193240] hover:text-[#1f7a8c]" />
            </a>
          </div>
        </div>

        {/* Formulário */}
        <div>
          <h2 className="text-4xl font-semibold mb-6">
            DÊ VIDA ÀS SUAS IDEIAS...
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="O SEU NOME"
              className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none focus:border-[#193240]"
            />
            <input
              type="email"
              placeholder="O SEU ENDEREÇO DE EMAIL"
              className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none focus:border-[#193240]"
            />
            <textarea
              placeholder="MENSAGEM"
              rows={3}
              className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none focus:border-[#193240]"
            />
            <button type="submit">
              <Link
                href="#contacto"
                className="group hover:bg-[#2D6073] ml-6 grid grid-cols-[1fr_auto] items-center justify-center gap-0 text-white bg-transparent shadow-md  transition rounded-lg "
              >
                <span className=" bg-[#316380] rounded-lg rounded-r-none px-6 py-3 font-medium text-base group-hover:opacity-80 transition">
                  ENTRE EM CONTACTO
                </span>
                <span className="bg-[#565A60] group-hover:bg-[#316480]  h-full p-1 pl-1 pr-2 rounded-lg rounded-l-none text-center flex items-center transition">
                  <ArrowRight
                    size={18}
                    className="text-white group-hover:translate-x-1 transition"
                  />
                </span>
              </Link>
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 mt-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-gray-700">
          {/* Logo + direitos */}
          <div className="flex flex-col gap-3">
            <Image
              src="/logohu2i.webp" // substitui pelo teu logo
              alt="HU2i"
              width={130}
              height={70}
            />
            <p className="text-xs">© 2025 All rights reserved.</p>
          </div>

          {/* Coluna 1 */}
          <div>
            <h3 className="font-semibold mb-2">ÁREAS DE ATUAÇÃO</h3>
            <ul className="space-y-1 transition flex flex-col">
              <Link href={"/   "} className="hover:text-gray-400">
                Mar e Pesca
              </Link>
              <Link href={"/   "} className="hover:text-gray-400">
                Agricultura
              </Link>
              <Link href={"/   "} className="hover:text-gray-400">
                Transição Digital
              </Link>
              <Link href={"/   "} className="hover:text-gray-400">
                Transição Climática
              </Link>
            </ul>
          </div>

          {/* Coluna 2 */}
          <div>
            <h3 className="font-semibold mb-2">SERVIÇOS</h3>
            <ul className="space-y-1 flex flex-col">
              <Link href={"/   "} className="hover:text-gray-400">
                Estudos de Mercado
              </Link>
              <Link href={"/   "} className="hover:text-gray-400">
                Gestão de Candidaturas
              </Link>
              <Link href={"/   "} className="hover:text-gray-400">
                Gestão de Projetos
              </Link>
              <Link href={"/   "} className="hover:text-gray-400">
                Análise de Programas de Apoio ao Investimento
              </Link>
            </ul>
          </div>

          {/* Coluna 3 */}
          <div>
            <h3 className="font-semibold mb-2">INCENTIVOS</h3>
            <ul className="space-y-1 flex flex-col cursor-pointer">
              <Link href={"/"} className="hover:text-gray-400">
                HelpU2Invest
              </Link>
              <Link href={"/"} className="hover:text-gray-400">
                Política de Privacidade
              </Link>
              <Link href={"/"} className="hover:text-gray-400">
                Termos e Condições
              </Link>
            </ul>
          </div>
        </div>

        {/* Logos parceiros finais */}
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-6 flex flex-wrap items-center justify-center gap-6">
          <Image
            src="/barralogos.webp"
            alt="barra de logos"
            width={1700}
            height={900}
          />
        </div>
      </div>
    </footer>
  );
}
