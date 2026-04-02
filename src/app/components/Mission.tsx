"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const points = [
  "Basé à Dakar · Actif au Congo, en Afrique et au-delà",
  "Master Data Science & IA · Génie Logiciel",
  "Leaders du numérique africain en construction",
];

export default function Mission() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative overflow-hidden h-96 md:h-[460px]">
      {/* Background Image */}
      <Image
        src="/images/mission-africa.png"
        alt="Pirisoft — Réseau digital africain"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/92 via-[#0D1B2A]/70 to-[#0D1B2A]/20" />

      {/* Content */}
      <div
        ref={ref}
        className="absolute inset-0 flex items-center px-6 md:px-16 xl:px-24"
      >
        <div className="max-w-xl">
          <p className={`section-label text-[#4fc3f7] transition-all duration-500 ${inView ? "opacity-100" : "opacity-0"}`}>
            Notre mission
          </p>
          <h2
            className={`text-3xl md:text-4xl xl:text-5xl font-extrabold text-white mb-5 tracking-tight leading-tight transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Bâtir le futur digital de l&apos;Afrique
          </h2>
          <p
            className={`text-white/75 text-sm md:text-base leading-relaxed mb-7 transition-all duration-700 delay-100 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
          >
            Pirisoft est né de la conviction que l&apos;Afrique mérite des
            solutions numériques conçues par des Africains, ancrées dans ses
            réalités et propulsées par l&apos;intelligence artificielle.
          </p>
          <div className="flex flex-col gap-3">
            {points.map((p, i) => (
              <div
                key={p}
                className={`flex items-center gap-3 transition-all duration-500 ${
                  inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <span className="w-2 h-2 rounded-full bg-[#4fc3f7] flex-shrink-0" />
                <span className="text-white/80 text-sm font-medium">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
