"use client";
import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

interface Service {
  img: string;
  title: string;
  desc: string;
  details: {
    tagline: string;
    points: string[];
    technologies: string[];
    exemple: string;
  };
}

const services: Service[] = [
  {
    img: "/images/dev-web-mobile.png",
    title: "Développement Web & Mobile",
    desc: "Applications web modernes et apps mobiles cross-platform, de la conception au déploiement — robustes, scalables et adaptées au marché africain.",
    details: {
      tagline: "Des applications qui fonctionnent partout en Afrique — même avec une connexion lente.",
      points: [
        "Sites web vitrine et e-commerce sur mesure",
        "Applications web progressives (PWA) optimisées mobile",
        "Applications mobiles iOS & Android avec React Native",
        "Intégration Mobile Money — Wave, Orange, MTN, Airtel",
        "Tableaux de bord et interfaces d'administration",
        "APIs REST et microservices scalables",
        "Hébergement, maintenance et support continu",
      ],
      technologies: ["Next.js", "React Native", "Node.js", "TypeScript", "PostgreSQL", "Vercel"],
      exemple: "YourBlog, réseau social professionnel, et plusieurs plateformes SaaS déployées au Sénégal et au Congo.",
    },
  },
  {
    img: "/images/data-science-ia.png",
    title: "Data Science & Intelligence Artificielle",
    desc: "Modèles prédictifs, NLP, Computer Vision et systèmes de recommandation IA. Nous transformons vos données en décisions intelligentes.",
    details: {
      tagline: "Vos données valent de l'or — nous les transformons en avantage compétitif.",
      points: [
        "Analyse exploratoire et nettoyage de données",
        "Modèles de prédiction et de classification",
        "NLP en français et langues locales africaines",
        "Computer Vision — reconnaissance d'images et documents",
        "Systèmes de recommandation personnalisés",
        "Tableaux de bord analytiques temps réel",
        "Intégration IA dans vos applications existantes",
      ],
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "OpenAI", "Power BI"],
      exemple: "MediScan analyse des données cliniques pour aider les professionnels de santé en Afrique.",
    },
  },
  {
    img: "/images/conseil-transformation.png",
    title: "Conseil & Transformation digitale",
    desc: "Audit technique, stratégie numérique et accompagnement dans votre transition digitale — adapté aux enjeux du marché africain.",
    details: {
      tagline: "On ne vend pas du conseil théorique — on vous accompagne jusqu'au résultat.",
      points: [
        "Audit complet de votre infrastructure technique",
        "Définition de la roadmap digitale sur 12-24 mois",
        "Choix et intégration des bons outils SaaS",
        "Formation de vos équipes aux nouveaux outils",
        "Optimisation des processus métier par le digital",
        "Accompagnement à l'adoption de l'IA en entreprise",
        "Suivi mensuel et ajustement de la stratégie",
      ],
      technologies: ["Audit", "Stratégie", "Formation", "Suivi", "Reporting", "Change management"],
      exemple: "Nous avons accompagné des PME à Dakar dans leur transition digitale, réduisant leurs coûts opérationnels de 30%.",
    },
  },
  {
    img: "/images/produits-saas.png",
    title: "Produits SaaS propriétaires",
    desc: "Nos propres plateformes innovantes conçues pour résoudre des défis concrets africains avec des technologies de pointe.",
    details: {
      tagline: "Des solutions 100% Made in Africa, pensées pour les réalités du continent.",
      points: [
        "DataCleaning — nettoyage automatique de fichiers par IA",
        "Cabinet Avocat — gestion juridique pour cabinets africains",
        "YourBlog — réseau social professionnel francophone",
        "MediScan — prédiction médicale par intelligence artificielle",
        "AgriTech Congo — prix des marchés agricoles en temps réel",
        "Pirisoft Academy — plateforme de formation tech en ligne",
      ],
      technologies: ["SaaS", "Cloud", "IA intégrée", "Mobile-first", "API-first", "Multi-pays"],
      exemple: "Nos 5 produits actifs couvrent 3 pays africains : santé, agriculture, juridique et éducation.",
    },
  },
];

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="services" className="py-20 md:py-28 px-6 md:px-12 lg:px-16 xl:px-20 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={ref} className="mb-12">
          <p className={`section-label transition-all duration-500 ${inView ? "opacity-100" : "opacity-0"}`}>
            Ce que nous faisons
          </p>
          <h2
            className={`text-4xl md:text-5xl font-extrabold text-[#0D1B2A] tracking-tight mb-4 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Nos domaines d&apos;expertise
          </h2>
          <p className={`text-gray-500 text-base md:text-lg max-w-xl leading-relaxed transition-all duration-700 delay-100 ${
            inView ? "opacity-100" : "opacity-0"
          }`}>
            Du développement logiciel à l&apos;IA — des solutions pensées pour les réalités africaines.
          </p>
        </div>

        {/* Accordion grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
          {services.map((s, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={s.title}
                className={`transition-all duration-500 group ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${isOpen ? "bg-[#F7FAFF]" : "bg-white hover:bg-[#F7FAFF]"}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Card — toujours visible */}
                <div className="p-8 flex flex-col gap-5">

                  {/* Image */}
                  <div className="relative w-full h-48 rounded-xl overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className={`object-cover transition-transform duration-500 ${
                        isOpen ? "scale-105" : "group-hover:scale-105"
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {isOpen && (
                      <div className="absolute inset-0 bg-[#185FA5]/10" />
                    )}
                  </div>

                  {/* Titre + desc */}
                  <div>
                    <h3
                      className="text-lg font-bold text-[#0D1B2A] mb-2"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>

                  {/* Bouton toggle */}
                  <div className="mt-auto">
                    <button
                      onClick={() => toggle(i)}
                      className="flex items-center gap-2 text-[#185FA5] text-sm font-semibold hover:text-[#0D3D6E] transition-colors"
                    >
                      <span>{isOpen ? "Réduire" : "En savoir plus"}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Panel expandable */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8 border-t border-blue-100 pt-6 space-y-6">

                    {/* Tagline */}
                    <p className="text-sm font-semibold text-[#185FA5] leading-relaxed border-l-4 border-[#185FA5] pl-4 italic">
                      {s.details.tagline}
                    </p>

                    {/* Ce qu'on propose */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                        Ce que nous proposons
                      </h4>
                      <ul className="space-y-2">
                        {s.details.points.map((p, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-sm text-gray-700">
                            <svg
                              className="w-4 h-4 text-[#185FA5] mt-0.5 flex-shrink-0"
                              fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                            </svg>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                        Technologies & outils
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {s.details.technologies.map((t) => (
                          <span
                            key={t}
                            className="bg-[#EBF4FF] text-[#185FA5] text-xs font-semibold px-3 py-1.5 rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Exemple concret */}
                    <div className="bg-white rounded-xl p-4 border border-gray-100 flex gap-3">
                      <div className="w-8 h-8 bg-[#EBF4FF] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-[#185FA5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Exemple concret</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{s.details.exemple}</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href="#contact"
                      onClick={() => setOpenIndex(null)}
                      className="inline-flex items-center gap-2 bg-[#185FA5] hover:bg-[#0D3D6E] text-white text-sm font-bold px-6 py-3 rounded-xl transition-colors"
                    >
                      Discuter de votre projet
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}