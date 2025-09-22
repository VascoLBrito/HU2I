"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function KeyScroll() {
  // tracking scroll da viewport
  const { scrollYProgress } = useScroll();

  // transformar progresso do scroll em movimento (0 → 100%)
  const translateY = useTransform(scrollYProgress, [0.7, 0.8], [0, 180]); // move 400px
  const translateX = useTransform(scrollYProgress, [0.75, 0.8], [0, 100]); // move 150px
  const rotate = useTransform(scrollYProgress, [0.7, 0.8], [0, 10]); // roda um pouco

  return (
    <section className="relative  z-10 w-full h-full overflow-hidden rounded-4xl">
      {/* Linha tracejada como imagem de fundo */}
      <div className="flex justify-center items-center w-full h-full rounded-full">
        <Image
          src="/dotted.png"
          alt="Linha tracejada"
          width={1000}
          height={1000}
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
        className="absolute top-2 -left-8"
      >
        <Image src="/chive.png" alt="Key" width={380} height={300} />
      </motion.div>
    </section>
  );
}
