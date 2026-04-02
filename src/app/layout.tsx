import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pirisoft — Leaders du numérique en Afrique",
  description:
    "Pirisoft conçoit des logiciels sur mesure, des plateformes IA et des solutions data pour transformer les entreprises africaines. Génie Logiciel, Data Science & Intelligence Artificielle.",
  keywords: [
    "développement logiciel Afrique",
    "Data Science Sénégal",
    "Intelligence Artificielle Dakar",
    "startup tech Afrique",
    "Pirisoft",
  ],
  authors: [{ name: "Pirisoft", url: "https://pirisoft.tech" }],
  openGraph: {
    title: "Pirisoft — Leaders du numérique en Afrique",
    description:
      "Génie Logiciel · Data Science · IA — des solutions numériques pensées pour l'Afrique.",
    url: "https://pirisoft.tech",
    siteName: "Pirisoft",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pirisoft — Leaders du numérique en Afrique",
    description: "Génie Logiciel · Data Science · IA — des solutions numériques pensées pour l'Afrique.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
