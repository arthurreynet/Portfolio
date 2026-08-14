"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const LINKS: { href: string; label: string }[] = [
  { href: "#services", label: "Services" },
  { href: "#travaux", label: "Travaux" },
  { href: "#methode", label: "Méthode" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  // Le rendu serveur part du sombre ; le script inline du layout a déjà pu
  // appliquer le choix stocké, on se resynchronise après hydratation.
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(document.body.dataset.theme === "light" ? "light" : "dark");
  }, []);

  function apply(next: Theme) {
    document.body.dataset.theme = next;
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // stockage indisponible (navigation privée) — le choix vaut pour la session
    }
  }

  const segButton = (value: Theme, label: string) => (
    <button
      type="button"
      onClick={() => apply(value)}
      aria-pressed={theme === value}
      className={`cursor-pointer rounded-full px-3 py-1.5 text-[13px] font-semibold transition-colors ${
        theme === value
          ? "bg-accent text-accent-ink"
          : "text-text-dim hover:text-text"
      }`}
    >
      {label}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-line-soft bg-[var(--glass)] backdrop-blur-[14px] backdrop-saturate-150">
      <div className="mx-auto w-full max-w-page px-5 sm:px-7">
        <nav className="flex flex-wrap items-center justify-between gap-3.5 py-3.5">
          <span className="flex items-center gap-2.5 text-[18px] font-bold tracking-[-0.01em]">
            <span className="relative size-2.5 rounded-full bg-accent shadow-[0_0_10px_var(--halo)]">
              <span
                aria-hidden
                className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent animate-ping-soft"
              />
            </span>
            Arthur Reynet
          </span>

          <div className="flex flex-wrap items-center gap-2">
            <div className="hidden gap-1 lg:flex">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-[15px] font-medium text-text-muted transition-colors hover:bg-bg-elev hover:text-text focus-visible:bg-bg-elev focus-visible:text-text"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div
              role="group"
              aria-label="Thème"
              className="inline-flex rounded-full border border-line-soft bg-bg-elev p-[3px]"
            >
              {segButton("dark", "Sombre")}
              {segButton("light", "Clair")}
            </div>

            <a
              href="#contact"
              className="rounded-full bg-accent px-5 py-2.5 text-[15px] font-semibold text-accent-ink transition-[background-color,transform] hover:-translate-y-px hover:bg-accent-glow focus-visible:-translate-y-px focus-visible:bg-accent-glow"
            >
              Discuter d&apos;un projet
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
