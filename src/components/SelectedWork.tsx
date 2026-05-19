"use client";

import { motion, useReducedMotion, type Transition } from "motion/react";

const EASE: Transition["ease"] = [0.2, 0, 0.2, 1];

type Project = {
  number: string;
  year: string;
  statusLabel: string;
  isPreparation: boolean;
  stack: string | null;
  title: string;
  description: string;
};

const PROJECTS: Project[] = [
  {
    number: "01",
    year: "2024–2025",
    statusLabel: "Production · Anonymisé",
    isPreparation: false,
    stack: "Vue 2 / .NET FW → Next.js / .NET 8",
    title: "Migration d'un portail client B2B",
    description:
      "Refonte d'un portail B2B en production dans le secteur logistique. Migration complète de la stack legacy vers Next.js et .NET 8, montées de version majeures (React 18 → 19, Next 14 → 16, MUI 5 → 7), gains de perf et de maintenabilité. Du front à l'infra.",
  },
  {
    number: "02",
    year: "2025",
    statusLabel: "En ligne · Open source",
    isPreparation: false,
    stack: "Next.js · App Router · Tailwind",
    title: "Regex Playground",
    description:
      "Outil web pour tester, expliquer et documenter des expressions régulières. Surlignage des matches en temps réel, explication pas à pas du pattern, partage par URL.",
  },
  {
    number: "03",
    year: "Été 2026",
    statusLabel: "En préparation",
    isPreparation: true,
    stack: null,
    title: "Habit Tracker",
    description:
      "Suivi d'habitudes minimaliste avec visualisation type contribution graph. Sans compte requis, synchro multi-device. Stack visée : Next.js + SQLite.",
  },
  {
    number: "04",
    year: "Fin 2026",
    statusLabel: "En préparation",
    isPreparation: true,
    stack: null,
    title: "Freelance Tracker",
    description:
      "Application fullstack de suivi de missions freelance : facturation, dépenses, déclarations URSSAF, dashboard temps. Stack visée : Next.js + .NET 8 + PostgreSQL.",
  },
];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.li
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: EASE,
      }}
      className="group border-t border-rule"
    >
      <article className="py-10 transition-colors md:py-14">
        {/* Metadata strip */}
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-mute md:text-xs">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-ink-faint tabular-nums">
              {project.number}
            </span>
            <span className="text-ink-faint" aria-hidden>
              ·
            </span>
            <span>{project.year}</span>
            <span className="text-ink-faint" aria-hidden>
              ·
            </span>
            <span
              className={
                project.isPreparation ? "text-accent" : "text-ink-mute"
              }
            >
              {project.statusLabel}
            </span>
          </div>
          {project.stack && (
            <span className="text-ink-faint">{project.stack}</span>
          )}
        </div>

        {/* Title */}
        <h3 className="mt-5 font-display font-medium leading-[0.98] text-ink text-[clamp(2rem,5.5vw,4.5rem)]">
          {project.title}
        </h3>

        {/* Description — always visible on mobile (touch, no hover), hover-deploy on desktop */}
        <div
          className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.2,0,0.2,1)] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] md:group-focus-within:grid-rows-[1fr]"
        >
          <div className="overflow-hidden">
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-mute md:text-lg">
              {project.description}
            </p>
          </div>
        </div>
      </article>
    </motion.li>
  );
}

export function SelectedWork() {
  const reduce = useReducedMotion();

  return (
    <section
      id="travaux"
      className="px-6 py-32 md:px-12 md:py-48 scroll-mt-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.header
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12 flex items-baseline justify-between border-b border-rule pb-6 md:mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.12em]">
            <span className="text-accent">02</span>{" "}
            <span className="text-ink-faint">—</span>{" "}
            <span className="text-ink-mute">Travaux</span>
          </p>
          <p className="hidden font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint md:block">
            Sélection · 4 entrées
          </p>
        </motion.header>

        {/* Project list */}
        <ul>
          {PROJECTS.map((project, index) => (
            <ProjectRow
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </ul>

        {/* Closing rule */}
        <div className="mt-0 border-t border-rule" />
      </div>
    </section>
  );
}
