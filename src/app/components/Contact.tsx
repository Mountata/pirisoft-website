"use client";
import { useState } from "react";

const WA_ICON = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.107 1.523 5.83L0 24l6.338-1.499A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.732.882.935-3.618-.235-.372A9.818 9.818 0 1112 21.818z"/>
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    backgroundColor: "rgba(255,255,255,0.15)",
    border: "1px solid rgba(255,255,255,0.25)",
  };

  return (
    <section id="contact" style={{ backgroundColor: "#185FA5" }} className="py-20 px-6 md:px-16 xl:px-24">
      <div className="max-w-2xl mx-auto text-center">

        <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-3">
          Travaillons ensemble
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
          Parlons de votre projet
        </h2>

        <p className="text-white/70 text-base mb-10">
          Partagez-nous votre besoin — réponse sous 24h garantie.
        </p>

        {status === "sent" ? (
          <div className="bg-white/20 rounded-2xl px-8 py-10 text-white text-center">
            <div className="text-5xl mb-4">✓</div>
            <p className="font-bold text-xl mb-2" style={{ fontFamily: "Syne, sans-serif" }}>Message envoyé !</p>
            <p className="text-white/70 text-sm">L&apos;équipe Pirisoft vous répondra sous 24h.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">

            <input name="name" type="text" required placeholder="Votre nom complet"
              value={form.name} onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl text-white placeholder-white/50 text-sm focus:outline-none"
              style={inputStyle} />

            <input name="email" type="email" required placeholder="Email professionnel"
              value={form.email} onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl text-white placeholder-white/50 text-sm focus:outline-none"
              style={inputStyle} />

            <input name="company" type="text" placeholder="Entreprise ou organisation"
              value={form.company} onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl text-white placeholder-white/50 text-sm focus:outline-none"
              style={inputStyle} />

            <textarea name="message" required placeholder="Décrivez votre projet..."
              rows={5} value={form.message} onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl text-white placeholder-white/50 text-sm focus:outline-none resize-none"
              style={inputStyle} />

            <button type="submit" disabled={status === "sending"}
              className="w-full py-4 bg-white font-bold rounded-xl text-sm hover:bg-gray-100 transition-colors disabled:opacity-60"
              style={{ color: "#185FA5" }}>
              {status === "sending" ? "Envoi en cours…" : "Envoyer à l'équipe Pirisoft"}
            </button>

            {/* Boutons WhatsApp */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://wa.me/221787337135" target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#25D366" }}>
                {WA_ICON}
                WhatsApp Dakar
              </a>
              <a href="https://wa.me/242065677626" target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#25D366" }}>
                {WA_ICON}
                WhatsApp Brazzaville
              </a>
            </div>

            {status === "error" && (
              <p className="text-red-300 text-xs text-center mt-1">
                Une erreur est survenue. Réessayez ou contactez-nous sur WhatsApp.
              </p>
            )}

          </form>
        )}
      </div>
    </section>
  );
}