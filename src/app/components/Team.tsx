"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const team = [
  {
    initials: "RM",
    name:     "René Mount",
    badge:    "Fondateur & CEO",
    role:     "Génie Logiciel & Data Science — Architecture des systèmes, stratégie produit, vision technologique et leadership de Pirisoft.",
    skills:   ["Génie Logiciel", "Data Science", "IA / ML", "Leadership", "Architecture"],
    color:    "#185FA5",
    isCeo:    true,
  },
  {
    initials: "AI",
    name:     "André Ibrahima Sene",
    badge:    "Génie Logiciel orienté gestion des systèmes, modélisation des données et développement de solutions IA.",
    role:     "Systèmes de gestion, modélisation des données, développement logiciel et implémentation de solutions IA.",
    skills:   ["Gestion SI", "Data Science", "IA", "Dev Full Stack"],
    color:    "#1a7a4a",
    isCeo:    false,
  },
  {
    initials: "CK",
    name:     "Colombe Kokolo",
    badge:    "Économiste d'Entreprise & Responsable Business",
    role:     "Stratégie commerciale, analyse des marchés africains, développement business et gestion financière.",
    skills:   ["Économie", "Stratégie", "Business Dev", "Marchés africains"],
    color:    "#5b3eb5",
    isCeo:    false,
  },
];

export default function Team() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="equipe" className="py-20 md:py-28 px-6 md:px-12 lg:px-16 xl:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className="mb-12">
          <p className={`section-label transition-all duration-500 ${inView ? "opacity-100" : "opacity-0"}`}>
            L&apos;équipe fondatrice
          </p>
          <h2
            className={`text-4xl md:text-5xl font-extrabold text-[#0D1B2A] tracking-tight mb-4 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Des experts, une vision
          </h2>
          <p className={`text-gray-500 text-base md:text-lg max-w-xl leading-relaxed transition-all duration-700 delay-100 ${
            inView ? "opacity-100" : "opacity-0"
          }`}>
            Trois profils complémentaires réunis pour bâtir les solutions
            numériques de demain.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Photo */}
          <div
            className={`relative rounded-2xl overflow-hidden shadow-2xl shadow-[#185FA5]/15 transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <Image
              src="/images/equipe.png"
              alt="L'équipe Pirisoft"
              width={700}
              height={500}
              className="w-full h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Dakar label */}
            <div className="absolute bottom-5 right-5 bg-white/90 backdrop-blur-sm text-xs font-semibold text-[#0D1B2A] px-3 py-1.5 rounded-full shadow">
              📍 Dakar, Sénégal || Brazzaville, Congo 
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-4">
            {team.map((m, i) => (
              <div
                key={m.name}
                className={`rounded-2xl p-5 flex gap-4 items-start transition-all duration-700 ${
                  m.isCeo
                    ? "border-2 bg-[#F7FAFF]"
                    : "border border-gray-200 bg-white"
                } card-hover ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                style={{
                  borderColor: m.isCeo ? m.color : undefined,
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                {/* Avatar */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: m.color }}
                >
                  {m.initials}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <span
                      className="font-bold text-[#0D1B2A] text-sm"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {m.name}
                    </span>
                    {m.isCeo && (
                      <span className="text-[10px] font-bold bg-[#185FA5] text-white px-2.5 py-0.5 rounded-full">
                        Fondateur & CEO
                      </span>
                    )}
                  </div>
                  <div
                    className="text-xs font-semibold mb-1.5"
                    style={{ color: m.color }}
                  >
                    {m.badge}
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">
                    {m.role}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {m.skills.map((sk) => (
                      <span
                        key={sk}
                        className="text-[11px] px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200 font-medium"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* ADN box */}
            <div className="rounded-2xl border border-gray-200 bg-[#F7FAFF] p-5 mt-1">
              <p className="text-xs font-bold text-[#0D1B2A] mb-2 uppercase tracking-wide" style={{ fontFamily: "Syne, sans-serif" }}>
                Notre ADN
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Nous combinons rigueur académique (Master IA, Génie Logiciel) et
                expertise terrain pour livrer des produits qui changent la donne
                sur le continent africain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
