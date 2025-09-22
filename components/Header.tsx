// app/components/Header.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-[#faf8f5]">
      <div className="max-w-[90%] mx-auto flex items-center justify-between px-12 lg:px-12 py-4">
        <div className="flex flex-row justify-center items-center gap-12">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/hu2ilogo.webp"
              alt="HU2i Logo"
              className="h-14 w-auto"
              width={400}
              height={400}
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <Link href="#areas" className="hover:text-gray-900">
              ÁREAS DE ATUAÇÃO
            </Link>
            <Link href="#servicos" className="hover:text-gray-900">
              SERVIÇOS
            </Link>
            <Link href="#incentivos" className="hover:text-gray-900">
              INCENTIVOS
            </Link>
            <Link href="#help" className="hover:text-gray-900">
              HelpU2Invest
            </Link>
          </nav>
        </div>

        {/* CTA */}
        <Link
          href="#contacto"
          className="group hover:bg-[#2D6073] ml-6 grid grid-cols-[1fr_auto] items-center justify-center gap-0 text-white bg-transparent shadow-md  transition rounded-lg "
        >
          <span
            className=" bg-[#316380] rounded-lg rounded-r-none px-3 pr-1
         py-1 font-medium text-base group-hover:opacity-80 transition"
          >
            ENTRE EM CONTACTO
          </span>
          <span className="bg-[#565A60] group-hover:bg-[#316480]  h-full p-1 pl-1 pr-2 rounded-lg rounded-l-none text-center flex items-center transition">
            <ArrowRight
              size={18}
              className="text-white group-hover:translate-x-1 transition"
            />
          </span>
        </Link>
      </div>
    </header>
  );
}
