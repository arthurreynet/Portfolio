"use client";

import { motion, useReducedMotion, type Transition } from "motion/react";

const EASE: Transition["ease"] = [0.2, 0, 0.2, 1];

export function About() {
  const reduce = useReducedMotion();

  const reveal = (delay: number) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.6, delay, ease: EASE },
  });

  return (
    <section
      id="a-propos"
      aria-labelledby="a-propos-title"
      className="px-6 py-20 md:px-12 md:py-32 scroll-mt-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-12 md:gap-x-16">
          {/* Sticky section label */}
          <motion.aside
            {...reveal(0)}
            className="md:col-span-3"
          >
            <div className="md:sticky md:top-24">
              <h2
                id="a-propos-title"
                className="font-mono text-xs uppercase tracking-[0.12em]"
              >
                <span className="text-accent" aria-hidden>
                  01
                </span>{" "}
                <span className="text-ink-faint" aria-hidden>
                  —
                </span>{" "}
                <span className="text-ink-mute">À propos</span>
              </h2>
              <p className="mt-4 hidden font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint md:block">
                Le contexte
              </p>
            </div>
          </motion.aside>

          {/* Editorial body */}
          <div className="md:col-span-8 md:col-start-5">
            <motion.p
              {...reveal(0.05)}
              className="dropcap text-lg leading-[1.55] text-ink md:text-xl"
            >
              Je conçois et développe des applications web modernes — du front
              React et Next.js au back .NET — et j&apos;accompagne les
              entreprises dans la modernisation de leurs outils existants.
            </motion.p>

            <motion.p
              {...reveal(0.12)}
              className="mt-8 text-base leading-[1.65] text-ink-mute md:text-lg"
            >
              Mon parcours s&apos;est construit en école (titre Concepteur
              Développeur d&apos;Applications, CESI Rouen) et en alternance dans
              le service informatique d&apos;une entreprise de logistique.
              C&apos;est là que j&apos;ai pris l&apos;habitude des applications
              métier en production réelle : utilisateurs réels, données réelles,
              contraintes réelles.
            </motion.p>

            <motion.p
              {...reveal(0.18)}
              className="mt-8 text-base leading-[1.65] text-ink-mute md:text-lg"
            >
              Concrètement, j&apos;ai participé à la migration complète
              d&apos;un portail client — Vue 2 / .NET Framework vers Next.js
              / .NET 8 —, à des montées de version majeures (React 18 → 19,
              Next 14 → 16, MUI 5 → 7), et je tiens l&apos;infra autant que le
              front : Docker, self-hosting, CI/CD.
            </motion.p>

            <motion.p
              {...reveal(0.24)}
              className="mt-8 text-base leading-[1.65] text-ink md:text-lg"
            >
              Ce qui me motive : résoudre des problèmes concrets, et construire
              des outils qui font gagner du temps à ceux qui les utilisent.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
