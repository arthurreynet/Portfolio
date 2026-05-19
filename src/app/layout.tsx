import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Arthur Reynet — Développeur full-stack",
    template: "%s — Arthur Reynet",
  },
  description:
    "Développeur full-stack. Next.js & .NET. Apprenti CDA, expérience de production. Disponible en freelance.",
  metadataBase: new URL("https://arthurreynet.com"),
  openGraph: {
    title: "Arthur Reynet — Développeur full-stack",
    description:
      "Développeur full-stack. Next.js & .NET. Apprenti CDA, expérience de production. Disponible en freelance.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${hanken.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="bg-bg text-ink font-body">{children}</body>
    </html>
  );
}
