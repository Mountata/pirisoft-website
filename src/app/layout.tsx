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
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Pirisoft — Leaders du numérique en Afrique",
    description:
      "Génie Logiciel · Data Science · IA — des solutions numériques pensées pour l'Afrique.",
    url: "https://pirisoft.tech",
    siteName: "Pirisoft",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "https://pirisoft.tech/images/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pirisoft — Leaders du numérique en Afrique",
    description: "Génie Logiciel · Data Science · IA — des solutions numériques pensées pour l'Afrique.",
    images: ["https://pirisoft.tech/images/logo.png"],
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}