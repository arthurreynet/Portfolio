import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  display: "swap",
});

const DESCRIPTION =
  "Développeur full-stack freelance à Rouen. Connecteurs et synchronisation de données, applications métier sur mesure, migration et modernisation d'applications existantes, mise en production. De la première ligne de code jusqu'au déploiement.";

/**
 * Thème sombre par défaut, choix de l'utilisateur restauré avant peinture
 * pour éviter le flash. Le script tourne en tête de <body> : il agit sur
 * l'attribut data-theme que ThemeToggle pilote ensuite.
 */
const THEME_SCRIPT = `try{var t=localStorage.getItem("theme");document.body.dataset.theme=t==="light"?"light":"dark"}catch(e){}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Arthur Reynet — Développeur full-stack",
    template: "%s — Arthur Reynet",
  },
  description: DESCRIPTION,
  applicationName: "Arthur Reynet — Développeur full-stack freelance",
  authors: [{ name: "Arthur Reynet", url: SITE_URL }],
  creator: "Arthur Reynet",
  keywords: [
    "développeur full-stack freelance",
    "freelance Rouen",
    "intégration de systèmes",
    "connecteurs API",
    "synchronisation de données",
    "application métier sur mesure",
    "migration applicative",
    "modernisation legacy",
    "mise en production",
    "Next.js",
    "React",
    "TypeScript",
    ".NET 8",
    "Docker",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Arthur Reynet — Développeur full-stack",
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
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0F1311" },
    { media: "(prefers-color-scheme: light)", color: "#F1F4EF" },
  ],
  colorScheme: "dark light",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arthur Reynet",
  jobTitle: "Développeur full-stack indépendant",
  description:
    "Développeur full-stack freelance : connecteurs et synchronisation de données, applications métier sur mesure, migration et modernisation, mise en production.",
  url: SITE_URL,
  email: "contact@arthurreynet.dev",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rouen",
    addressCountry: "FR",
  },
  sameAs: [
    "https://github.com/arthurreynet",
    "https://www.linkedin.com/in/arthurreynet",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    ".NET 8",
    "C#",
    "PostgreSQL",
    "Oracle",
    "SQL Server",
    "Docker",
    "CI/CD",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${schibsted.variable} antialiased`}>
      <body
        data-theme="dark"
        suppressHydrationWarning
        className="bg-bg text-text font-sans"
      >
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-accent-ink"
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
