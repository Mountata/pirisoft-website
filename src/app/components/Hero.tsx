"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex overflow-hidden bg-white">
      <div className="flex flex-col justify-center w-full lg:w-1/2 px-8 md:px-16 pt-28 pb-16 lg:pt-24 z-10 bg-white">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full w-fit mb-6 uppercase tracking-wide">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          Genie Logiciel · Data Science · IA
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-4">
          Nous codons<br />
          <span className="text-blue-600">lavenir digital</span><br />
          de lAfrique
        </h1>
        <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-lg mb-8">
          Pirisoft concoit des logiciels sur mesure, des plateformes IA et des
          solutions data pour transformer les entreprises africaines.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#projets" className="bg-blue-600 hover:bg-blue-800 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-colors">
            Decouvrir nos produits
          </a>
          <a href="#contact" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-7 py-3.5 rounded-xl text-sm transition-colors">
            Nous contacter
          </a>
        </div>
        <div className="flex gap-8 mt-10 pt-8 border-t border-gray-100">
          <div><div className="text-2xl font-extrabold text-blue-600">5</div><div className="text-xs text-gray-400 mt-0.5">Produits actifs</div></div>
          <div><div className="text-2xl font-extrabold text-blue-600">3+</div><div className="text-xs text-gray-400 mt-0.5">Pays couverts</div></div>
          <div><div className="text-2xl font-extrabold text-blue-600">100%</div><div className="text-xs text-gray-400 mt-0.5">Made in Africa</div></div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image src="/images/equipe.png" alt="Equipe Pirisoft" fill className="object-cover object-center" priority sizes="50vw" />
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute bottom-8 left-8 z-20 bg-white rounded-2xl px-5 py-3.5 shadow-xl border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white text-lg">💡</div>
            <div>
              <div className="text-xs font-bold text-gray-900">IA integree</div>
              <div className="text-xs text-gray-400">Dans chaque solution</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
