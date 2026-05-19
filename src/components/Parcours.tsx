"use client";

import { motion, useReducedMotion, type Transition } from "motion/react";
import { SectionWatermark } from "./SectionWatermark";

const EASE: Transition["ease"] = [0.2, 0, 0.2, 1];

type Entry = {
  dateRange: string;
  status: string;
  isCurrent: boolean;
  title: string;
  org: string;
  description: string;
};

const ENTRIES: Entry[] = [
  {
    dateRange: "2025 → 2026",
    status: "En cours · Alternance",
    isCurrent: true,
    title: "Bachelor Concepteur Développeur d'Applications",
    org: "CESI Rouen · équipe IT, secteur logistique",
    description:
      "Applications métier en production. Du front à l'infra : refontes de stacks legacy, montées de version majeures, modernisation d'outils internes.",
  },
  {
    dateRange: "2023 — 2025",
    status: "Diplômé",
    isCurrent: false,
    title: "Bac+2 Développeur informatique",
    org: "CESI Rouen",
    description:
      "Fondamentaux du développement, premiers projets web et logiciel, premières expériences en équipe.",
  },
];

function TimelineEntry({ entry, index }: { entry: Entry; index: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.li
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: EASE }}
      className="grid gap-4 border-t border-rule py-10 md:grid-cols-[160px_1fr] md:gap-12 md:py-14"
    >
      {/* Date column */}
      <div className="font-mono text-[11px] uppercase tracking-[0.12em] md:text-xs">
        <p className="text-ink-mute">{entry.dateRange}</p>
        <p
          className={`mt-2 ${
            entry.isCurrent ? "text-accent" : "text-ink-faint"
          }`}
        >
          {entry.status}
        </p>
      </div>

      {/* Content */}
      <div>
        <h3 className="font-display text-2xl font-medium leading-tight text-ink md:text-3xl">
          {entry.title}
        </h3>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint md:text-xs">
          {entry.org}
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-mute md:text-lg">
          {entry.description}
        </p>
      </div>
    </motion.li>
  );
}

export function Parcours() {
  const reduce = useReducedMotion();

  return (
    <section
      id="parcours"
      className="relative px-6 py-20 md:px-12 md:py-32 scroll-mt-12"
    >
      <SectionWatermark>03</SectionWatermark>
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.header
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12 flex items-baseline justify-between border-b border-rule pb-6 md:mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.12em]">
            <span className="text-accent">03</span>{" "}
            <span className="text-ink-faint">—</span>{" "}
            <span className="text-ink-mute">Parcours</span>
          </p>
          <p className="hidden font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint md:block">
            Formation &amp; alternance
          </p>
        </motion.header>

        <ul>
          {ENTRIES.map((entry, i) => (
            <TimelineEntry key={entry.dateRange} entry={entry} index={i} />
          ))}
        </ul>

        <div className="border-t border-rule" />
      </div>
    </section>
  );
}
