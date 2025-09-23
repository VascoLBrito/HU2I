"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function KeyScroll() {
  // tracking scroll da viewport
  const { scrollYProgress } = useScroll();

  // Ângulo limitado: 0 → π/2 (90°)
  const angle = useTransform(
    scrollYProgress,
    [0.6, 0.85],
    [Math.PI, Math.PI / 3.4]
  );

  const radius = 190; // controla o tamanho da curva

  // Posição ao longo do arco
  const translateX = useTransform(angle, (a) => Math.cos(a) * 265);
  const translateY = useTransform(angle, (a) => Math.sin(a) * radius);

  // Rotação opcional (acompanha a curva)
  // angle varia de Math.PI até Math.PI/1.6
  const rotate = useTransform(
    angle,
    [Math.PI, Math.PI / 1.8], // range do ângulo
    [45, -60] // rotação em graus
  );

  return (
    <section className="relative z-10 w-[80%] h-[80%] mx-auto overflow-hidden rounded-4xl ">
      {/* Linha tracejada como imagem de fundo */}
      <div className="flex justify-center items-center  rounded-full">
        <Image
          src="/dotted.png"
          alt="Linha tracejada"
          width={1800}
          height={1800}
          className="opacity-100 aspect-square"
        />
      </div>

      {/* Chave animada */}
      <motion.div
        style={{
          x: translateX,
          y: translateY,
          rotate,
        }}
        className="absolute inset-0 -top-96 left-18  flex justify-center items-center translate-x-38 "
      >
        <Image
          src="/chive.png"
          alt="Key"
          width={1800}
          height={1800}
          className=""
        />
      </motion.div>
    </section>
  );
}
