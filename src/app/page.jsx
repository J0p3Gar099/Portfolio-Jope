"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Homepage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }} // Añadido y: -50 para mover el div hacia arriba
      animate={{ opacity: 1, y: 0 }} // y: 0 para traer el div a su posición original
      transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      className="flex h-full lg:flex-row flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"
    >
      {/* Imagen Home */}
      <div className="h-1/2 relative lg:h-full lg:w-1/2">
        <Image src="/hero.png" alt="" fill className="object-contain" />
      </div>

      {/* Text Home */}
      <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
        {/* TITLE */}
        <h1 className="text-4xl font-bold md:text-7xl lg:text-8xl 2xl:text-9xl">
          Jose Pedro Garcia Rojas
        </h1>
        {/* DES */}
        <p className="md:text-2xl text-xl lg:text-3xl">
          Bienvenid@ a mi portafolio digital, tengo 24 años y soy de México.
          Tengo 2 años de experiencia en el desarrollo de páginas web y sistemas
          de compras utilizando Java y JavaScript. Estudié la carrera de
          Ingeniería en Sistemas Computacionales. Soy una persona competitiva y
          siempre estoy dispuesto a enfrentar nuevos retos y aprender
          continuamente.
        </p>
        {/* botton */}
        <div className="flex gap-4 w-full md:text-xl lg:text-2xl">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            Ver mi trabajo
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Contactame
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
