"use client";

import { motion, useReducedMotion, type Transition } from "motion/react";

const EASE: Transition["ease"] = [0.22, 0.61, 0.36, 1];

type Props = {
  /** Numéro et nom de section, ex. « 01 — Services » */
  eyebrow: string;
  title: string;
  /** Identifiant du titre, cible du aria-labelledby de la section */
  titleId: string;
  lede?: string;
};

export function SectionHeader({ eyebrow, title, titleId, lede }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="mb-13"
    >
      <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-accent">
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className="mt-2.5 text-[clamp(1.7rem,3vw,2.3rem)] font-extrabold tracking-tight"
      >
        {title}
      </h2>
      {lede ? (
        <p className="mt-3.5 max-w-[56ch] text-[1.02rem] text-text-muted">
          {lede}
        </p>
      ) : null}
    </motion.div>
  );
}
