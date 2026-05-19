"use client";

import { motion, useReducedMotion, type Transition } from "motion/react";

const EASE: Transition["ease"] = [0.2, 0, 0.2, 1];

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
        <span className="text-ink-mute">Portfolio · 2026 · N°01</span>
        <span className="text-ink-mute">
          Statut · <span className="text-accent">Disponible</span>
        </span>
      </motion.header>

      {/* Hero masthead */}
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center pt-16 md:pt-24">
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
          className="mt-8 max-w-3xl text-lg leading-snug text-ink md:text-2xl"
        >
          Développeur full-stack — Next.js &amp; .NET 8.
        </motion.p>

        <motion.p
          {...rise(0.55)}
          className="mt-8 max-w-xl text-base leading-relaxed text-ink-mute md:text-lg"
        >
          Apprenti CDA en alternance, équipe IT d&apos;une entreprise de
          logistique. J&apos;interviens sur des applications en production —
          refontes de stacks legacy, du front à l&apos;infra.
        </motion.p>
      </div>

      {/* Bottom scroll cue */}
      <motion.footer
        {...rise(0.75)}
        className="flex items-center justify-between border-t border-rule pt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-mute md:text-xs"
      >
        <a
          href="#travaux"
          className="group inline-flex items-center gap-2 transition-colors hover:text-accent focus-visible:text-accent"
        >
          <span
            aria-hidden
            className="inline-block transition-transform duration-300 group-hover:translate-y-0.5"
          >
            ↓
          </span>
          Travaux sélectionnés
        </a>
        <span>Rouen, FR</span>
      </motion.footer>
    </section>
  );
}
