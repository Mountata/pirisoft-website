"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    img:   "/images/datacleaning.png",
    tags:  [{ label: "Data",  cls: "tag-blue" }, { label: "IA", cls: "tag-blue" }],
    title: "DataCleaning",
    desc:  "Application intelligente de nettoyage de fichiers (CSV, Excel, JSON…) avec recommandations IA des meilleures options de traitement pour chaque jeu de données.",
    wide:  false,
  },
  {
    img:   "/images/cabinet-avocat.png",
    tags:  [{ label: "Web", cls: "tag-purple" }, { label: "Gestion", cls: "tag-purple" }],
    title: "Gestion Cabinet d'Avocat",
    desc:  "Système de gestion complet pour cabinet juridique — suivi des dossiers, clients, audiences et facturation dans une interface sécurisée et intuitive.",
    wide:  false,
  },
  {
    img:   "/images/yourblog.png",
    tags:  [{ label: "Réseau social", cls: "tag-green" }, { label: "En cours", cls: "tag-wip" }],
    title: "YourBlog",
    desc:  "Réseau social professionnel pensé pour les experts africains — partage de contenus, networking et mise en valeur des compétences locales.",
    wide:  false,
  },
  {
    img:   "/images/mediscan.png",
    tags:  [{ label: "IA", cls: "tag-red" }, { label: "Santé", cls: "tag-red" }],
    title: "MediScan",
    desc:  "Plateforme de prédiction médicale par IA — aide au diagnostic précoce de maladies à partir de données cliniques et d'imagerie médicale.",
    wide:  false,
  },
  {
    img:   "/images/agritech.png",
    tags:  [{ label: "Agritech", cls: "tag-green" }, { label: "Congo Brazzaville", cls: "tag-amber" }],
    title: "AgriTech — Prix du marché en temps réel",
    desc:  "Plateforme qui envoie aux agriculteurs congolais les prix réels de leurs produits sur chaque marché local — pour mieux négocier et maximiser leurs revenus. Une solution ancrée dans les réalités du terrain.",
    wide:  true,
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projets" className="py-20 md:py-28 px-6 md:px-12 lg:px-16 xl:px-20 bg-[#F7FAFF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className="mb-12">
          <p className={`section-label transition-all duration-500 ${inView ? "opacity-100" : "opacity-0"}`}>
            Nos réalisations
          </p>
          <h2
            className={`text-4xl md:text-5xl font-extrabold text-[#0D1B2A] tracking-tight mb-4 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Produits &amp; Projets
          </h2>
          <p className={`text-gray-500 text-base md:text-lg max-w-xl leading-relaxed transition-all duration-700 delay-100 ${
            inView ? "opacity-100" : "opacity-0"
          }`}>
            Des solutions qui créent de la valeur réelle pour nos clients et
            pour le continent.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`bg-white rounded-2xl overflow-hidden border border-gray-200 card-hover ${
                p.wide ? "md:col-span-2" : ""
              } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionDelay: `${i * 100}ms`,
                transition: "opacity 0.6s ease, transform 0.6s ease, box-shadow 0.25s ease",
              }}
            >
              {/* Image */}
              <div className={`relative w-full overflow-hidden ${p.wide ? "h-64 md:h-72" : "h-52"}`}>
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes={p.wide ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                />
              </div>

              {/* Body */}
              <div className={`p-6 ${p.wide ? "md:flex md:gap-12 md:items-start" : ""}`}>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tags.map((t) => (
                      <span key={t.label} className={`tag ${t.cls}`}>
                        {t.label}
                      </span>
                    ))}
                  </div>
                  <h3
                    className="text-xl font-bold text-[#0D1B2A] mb-2"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
                {p.wide && (
                  <div className="mt-4 md:mt-0 flex-shrink-0">
                    <span className="inline-block bg-[#185FA5] text-white text-sm font-semibold px-5 py-2.5 rounded-xl cursor-pointer hover:bg-[#0D3D6E] transition-colors">
                      En savoir plus →
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
