"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const allImages = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo6.png",
  "/logos/logo7.png",
  "/logos/logo8.png",
  // adiciona quantas quiseres
];

export function Parceiros() {
  const [gridImages, setGridImages] = useState<string[]>([]);

  // inicia com 4 imagens únicas
  useEffect(() => {
    const shuffled = [...allImages].sort(() => 0.5 - Math.random());
    setGridImages(shuffled.slice(0, 4));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGridImages((prev) => {
        // pega nas imagens que não estão no grid atual
        const available = allImages.filter((img) => !prev.includes(img));

        // escolhe uma posição aleatória para trocar
        const pos = Math.floor(Math.random() * prev.length);

        // escolhe uma nova imagem aleatória (não usada no grid atual)
        const newImage =
          available[Math.floor(Math.random() * available.length)];

        // cria novo estado
        const newGrid = [...prev];
        newGrid[pos] = newImage;
        return newGrid;
      });
    }, 3000); // muda a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#fdfcf9] py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="text-xl font-semibold tracking-wide text-[#1a1a1a] mb-10">
          PARCEIROS
        </h2>

        <div className="grid grid-cols-2">
          <div></div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            {gridImages.map((src, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-xl bg-white shadow-md flex items-center justify-center p-4 transition"
              >
                <Image
                  src={src}
                  alt={`Parceiro ${i + 1}`}
                  width={150}
                  height={100}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
