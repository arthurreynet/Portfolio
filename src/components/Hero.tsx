"use client";

import { motion, useReducedMotion, type Transition } from "motion/react";

const EASE: Transition["ease"] = [0.2, 0, 0.2, 1];

const FACTS: { label: string; value: string }[] = [
  { label: "Rôle", value: "Développeur full-stack" },
  { label: "Stack", value: "Next.js · .NET 8" },
  { label: "Formation", value: "Bachelor CDA — CESI Rouen" },
  { label: "Basé à", value: "Rouen, France" },
  { label: "Langues", value: "Français · Anglais technique" },
];

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: EASE },
  });

  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col px-6 py-8 md:px-12 md:py-10"
    >
      {/* Top editorial strip */}
      <motion.header
        {...rise(0.05)}
        className="flex items-center justify-between border-b border-rule pb-4 font-mono text-[11px] uppercase tracking-[0.12em] md:text-xs"
      >
        <span className="text-ink-mute">Portfolio · 2026</span>
        <span className="text-ink-mute">
          Statut · <span className="text-accent">Disponible</span>
        </span>
      </motion.header>

      {/* Hero masthead — text left, fact index right */}
      <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-center gap-12 pt-16 lg:grid-cols-12 lg:gap-16 lg:pt-24">
        {/* Text column */}
        <div className="lg:col-span-7">
          <motion.h1
            {...rise(0.2)}
            className="font-display font-medium leading-[0.92] text-ink"
            style={{
              fontSize: "var(--text-display)",
              letterSpacing: "var(--tracking-display)",
              fontVariationSettings: '"opsz" 144, "SOFT" 50',
            }}
          >
            Arthur Reynet
          </motion.h1>

          <motion.p
            {...rise(0.4)}
            className="mt-6 max-w-2xl text-lg leading-snug text-ink md:mt-8 md:text-2xl"
          >
            Développeur full-stack — Next.js &amp; .NET 8.
          </motion.p>

          <motion.p
            {...rise(0.55)}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-mute md:mt-8 md:text-lg"
          >
            Apprenti CDA en alternance, équipe IT d&apos;une entreprise de
            logistique. J&apos;interviens sur des applications en production —
            refontes de stacks legacy, du front à l&apos;infra.
          </motion.p>
        </div>

        {/* Fact index — editorial masthead */}
        <motion.dl
          {...rise(0.45)}
          className="max-w-md lg:col-span-4 lg:col-start-9 lg:max-w-none"
        >
          {FACTS.map((fact) => (
            <div
              key={fact.label}
              className="grid grid-cols-[6rem_1fr] items-baseline gap-3 border-t border-rule py-3 font-mono text-[11px] uppercase tracking-[0.12em]"
            >
              <dt className="text-ink-faint">{fact.label}</dt>
              <dd className="text-ink">{fact.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Bottom scroll cue */}
      <motion.footer
        {...rise(0.75)}
        className="flex items-center justify-between border-t border-rule pt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-mute md:text-xs"
      >
        <a
          href="#a-propos"
          className="group inline-flex items-center gap-2 transition-colors hover:text-accent focus-visible:text-accent"
        >
          <span
            aria-hidden
            className="inline-block transition-transform duration-300 group-hover:translate-y-0.5"
          >
            ↓
          </span>
          Continuer
        </a>
        <span>Rouen, FR</span>
      </motion.footer>
    </section>
  );
}
