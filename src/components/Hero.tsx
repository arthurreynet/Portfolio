"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion, type Transition } from "motion/react";

const EASE: Transition["ease"] = [0.2, 0, 0.2, 1];

export function Hero() {
  const reduce = useReducedMotion();
  const [imgError, setImgError] = useState(false);

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

      {/* Hero masthead — text left, portrait right on desktop */}
      <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-center gap-10 pt-16 md:grid-cols-12 md:gap-12 md:pt-24">
        {/* Text column */}
        <div className="md:col-span-7">
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

        {/* Portrait column */}
        <motion.figure
          {...rise(0.3)}
          className="md:col-span-5 md:col-start-8"
        >
          <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden border border-rule-strong bg-bg-elev md:ml-auto">
            {!imgError ? (
              <Image
                src="/portrait.jpg"
                alt="Portrait d'Arthur Reynet"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
                priority
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-center font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
                  Portrait
                  <br />à venir
                </p>
              </div>
            )}
          </div>
          <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-mute md:ml-auto md:max-w-sm md:text-right md:text-xs">
            Rouen · 2026
          </figcaption>
        </motion.figure>
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
