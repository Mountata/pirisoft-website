"use client";
import { useInView } from "react-intersection-observer";

const stats = [
  { n: "5",    label: "Produits actifs"              },
  { n: "3+",   label: "Pays couverts"               },
  { n: "IA",   label: "Intégrée dans chaque solution"},
  { n: "100%", label: "Made in Africa"              },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="bg-[#0D1B2A] grid grid-cols-2 md:grid-cols-4">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`px-8 py-7 text-center border-r border-white/10 last:border-r-0
            transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          <div
            className="text-3xl md:text-4xl font-extrabold text-white mb-1"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {s.n}
          </div>
          <div className="text-xs text-white/50 font-medium uppercase tracking-wide">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
