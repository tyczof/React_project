"use client";

import Image from "next/image";
import Logo from "../NavBar/Logo";

export default function GeneralDescription() {
  return (
    <section className="bg-white px-6 py-20 md:py-32 md:px-20 lg:px-32 flex flex-col md:flex-row items-center gap-12">
      {/* Tekst po lewej */}
      <div className="flex-1 text-zinc-800 max-w-xl">
        <div className="mb-6">
          <Image
            src="/logo-okragle.png"
            alt="Logo Strużka Kaszuby"
            width={100}
            height={100}
            className="mb-4"
          />
        </div>

        <h2 className="font-manrope mb-4 leading-tight text-3xl md:text-5xl text-bedge-40">
          <em className="font-cormornat-gar font-semibold text-5xl md:text-7xl">
            Leśna historia,
          </em>
          <br />
          która wciąż żyje
        </h2>

        <p className="text-base md:text-lg leading-relaxed text-bedge-80 mb-8">
          Nasza starannie odrestaurowana, ponad stuletnia kaszubska leśniczówka
          „Strużka” stoi nieopodal rzeki, od której wzięła swą historyczną
          nazwę. Opleciona wiekowym lasem Borów Tucholskich, jest jedynym
          domostwem w tej części parku narodowego.
        </p>

        <button className="bg-zinc-900 text-white px-6 py-2 rounded-full hover:bg-bedge-80 transition">
          Zarezerwuj pobyt
        </button>
      </div>

      {/* Obraz po prawej */}
      <div className="flex-1">
        <Image
          src="/dom-lesniczowka.png"
          alt="Leśniczówka Strużka"
          width={640}
          height={480}
          className="shadow-lg w-full h-auto object-cover"
        />
        <div className="relative text-sm text-right text-white">
          <Logo />
        </div>
      </div>
    </section>
  );
}
