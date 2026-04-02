import Image from "next/image";

const WA_ICON = (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-green-400 flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.107 1.523 5.83L0 24l6.338-1.499A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.732.882.935-3.618-.235-.372A9.818 9.818 0 1112 21.818z"/>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D1B2A] text-white px-6 md:px-16 xl:px-24 py-12">
      <div className="max-w-7xl mx-auto">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">

          {/* Brand */}
          <div>
            <div className="mb-4">
                <Image
                src="/images/logo.png"
                alt="Pirisoft"
                width={100}
                height={32}
                className="object-contain"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Leaders du numérique en Afrique — Génie Logiciel, Data Science &amp;
              Intelligence Artificielle.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-4">Navigation</p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Services", href: "#services" },
                { label: "Produits", href: "#projets"  },
                { label: "Équipe",   href: "#equipe"   },
                { label: "Contact",  href: "#contact"  },
              ].map((l) => (
                <a key={l.href} href={l.href}
                  className="text-sm text-white/60 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-4">Contact</p>
            <div className="flex flex-col gap-3 text-sm text-white/60">

              <span>📍 Dakar, Sénégal &amp; Brazzaville, Congo</span>

              <a href="mailto:contact@pirisoft.tech"
                className="hover:text-white transition-colors">
                contact@pirisoft.tech
              </a>

              <a href="https://wa.me/221787337135" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors">
                {WA_ICON}
                +221 78 733 71 35 — Dakar
              </a>

              <a href="https://wa.me/242065677626" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors">
                {WA_ICON}
                +242 06 567 76 26 — Brazzaville
              </a>

              <div className="flex gap-4 mt-1">
                {["LinkedIn", "GitHub", "Twitter/X"].map((s) => (
                  <a key={s} href="#"
                    className="text-xs hover:text-white transition-colors">
                    {s}
                  </a>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">
            © {year} Pirisoft — Building Africa&apos;s digital future
          </p>
          <p className="text-white/20 text-xs">
            Made with ♥ in Dakar &amp; Brazzaville
          </p>
        </div>

      </div>
    </footer>
  );
}