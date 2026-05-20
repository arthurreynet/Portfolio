"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion, type Transition } from "motion/react";
import { SectionWatermark } from "./SectionWatermark";

const EASE: Transition["ease"] = [0.2, 0, 0.2, 1];

type Project = {
  number: string;
  year: string;
  statusLabel: string;
  isPreparation: boolean;
  stack: string | null;
  title: string;
  description: string;
  image: string | null;
  imageNote: string;
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
    image: null,
    imageNote: "Visuel anonymisé",
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
    image: "/projets/regex-playground.png",
    imageNote: "Capture à venir",
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
    image: null,
    imageNote: "En préparation",
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
    image: null,
    imageNote: "En préparation",
  },
];

function ProjectThumbnail({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false);
  const showImage = project.image && !imgError;

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden border border-rule bg-bg-elev">
      {showImage ? (
        <Image
          src={project.image as string}
          alt={`Aperçu du projet ${project.title}`}
          fill
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
            {project.imageNote}
          </p>
        </div>
      )}
    </div>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.li
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
      className="border-t border-rule py-10 md:py-14"
    >
      <article className="grid gap-6 md:grid-cols-12 md:gap-10">
        {/* Text */}
        <div className="md:col-span-7">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-mute md:text-xs">
            <span className="tabular-nums text-ink-faint">
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

          <h3 className="mt-4 font-display font-medium leading-[1.0] text-ink text-[clamp(1.9rem,4.5vw,3.5rem)]">
            {project.title}
          </h3>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-mute md:text-lg">
            {project.description}
          </p>

          {project.stack && (
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint md:text-xs">
              {project.stack}
            </p>
          )}
        </div>

        {/* Thumbnail */}
        <div className="md:col-span-5 md:col-start-8">
          <ProjectThumbnail project={project} />
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
      className="relative px-6 py-20 md:px-12 md:py-32 scroll-mt-12"
    >
      <SectionWatermark>02</SectionWatermark>
      <div className="relative z-10 mx-auto max-w-6xl">
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
            <ProjectRow key={project.number} project={project} index={index} />
          ))}
        </ul>

        {/* Closing rule */}
        <div className="border-t border-rule" />
      </div>
    </section>
  );
}
