"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const services = [
  {
    img:   "/images/dev-web-mobile.png",
    title: "Développement Web & Mobile",
    desc:  "Applications web modernes et apps mobiles cross-platform, de la conception au déploiement — robustes, scalables et adaptées au marché africain.",
  },
  {
    img:   "/images/data-science-ia.png",
    title: "Data Science & Intelligence Artificielle",
    desc:  "Modèles prédictifs, NLP, Computer Vision et systèmes de recommandation IA. Nous transformons vos données en décisions intelligentes.",
  },
  {
    img:   "/images/conseil-transformation.png",
    title: "Conseil & Transformation digitale",
    desc:  "Audit technique, stratégie numérique et accompagnement dans votre transition digitale — adapté aux enjeux du marché africain.",
  },
  {
    img:   "/images/produits-saas.png",
    title: "Produits SaaS propriétaires",
    desc:  "Nos propres plateformes innovantes conçues pour résoudre des défis concrets africains avec des technologies de pointe.",
  },
];

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

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
            Du développement logiciel à l&apos;IA — des solutions pensées pour les
            réalités africaines.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`bg-white hover:bg-[#F7FAFF] p-8 flex flex-col gap-5 transition-all duration-500 group ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative w-full h-48 rounded-xl overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h3
                  className="text-lg font-bold text-[#0D1B2A] mb-2"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
              <div className="mt-auto">
                <span className="text-[#185FA5] text-sm font-semibold group-hover:underline">
                  En savoir plus →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
