"use client";

import { motion, useReducedMotion, type Transition } from "motion/react";
import { SectionWatermark } from "./SectionWatermark";

const EASE: Transition["ease"] = [0.2, 0, 0.2, 1];

const INTERESTS = ["Piano", "Jeux de société", "Gaming"];

export function HorsClavier() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hors-clavier"
      className="relative px-6 py-20 md:px-12 md:py-32 scroll-mt-12"
    >
      <SectionWatermark>05</SectionWatermark>
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.header
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex items-baseline justify-between border-b border-rule pb-6"
        >
          <p className="font-mono text-xs uppercase tracking-[0.12em]">
            <span className="text-accent">05</span>{" "}
            <span className="text-ink-faint">—</span>{" "}
            <span className="text-ink-mute">Hors du clavier</span>
          </p>
          <p className="hidden font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint md:block">
            Une touche perso
          </p>
        </motion.header>

        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="py-12 md:py-20"
        >
          <p className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm uppercase tracking-[0.14em] text-ink md:text-base">
            {INTERESTS.map((item, i) => (
              <span key={item} className="flex items-center gap-5">
                {item}
                {i < INTERESTS.length - 1 && (
                  <span aria-hidden className="text-ink-faint">
                    ·
                  </span>
                )}
              </span>
            ))}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
