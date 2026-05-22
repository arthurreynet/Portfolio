import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site";
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

const DESCRIPTION =
  "Développeur full-stack — Next.js & .NET 8. Apprenti CDA, expérience de production réelle : migration de portail client, modernisation de stacks legacy, du front à l'infra. Disponible en freelance et pour un poste.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Arthur Reynet — Développeur full-stack",
    template: "%s — Arthur Reynet",
  },
  description: DESCRIPTION,
  applicationName: "Arthur Reynet — Portfolio",
  authors: [{ name: "Arthur Reynet", url: SITE_URL }],
  creator: "Arthur Reynet",
  keywords: [
    "développeur full-stack",
    "Next.js",
    "React",
    "TypeScript",
    ".NET 8",
    "C#",
    "freelance",
    "Rouen",
    "Concepteur Développeur d'Applications",
    "CDA",
    "portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Arthur Reynet — Portfolio",
    title: "Arthur Reynet — Développeur full-stack",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur Reynet — Développeur full-stack",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#faf5ea",
  colorScheme: "light",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arthur Reynet",
  jobTitle: "Développeur full-stack",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rouen",
    addressCountry: "FR",
  },
  sameAs: [
    "https://github.com/arthurreynet",
    "https://www.linkedin.com/in/arthur-reynet",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    ".NET 8",
    "C#",
    "PostgreSQL",
    "Docker",
  ],
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
      <body className="bg-bg text-ink font-body">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border focus:border-rule-strong focus:bg-bg focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-[0.12em] focus:text-ink"
        >
          Aller au contenu
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
