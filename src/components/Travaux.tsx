"use client";

import { motion, useReducedMotion, type Transition } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { TiltFrame } from "./TiltFrame";

const EASE: Transition["ease"] = [0.22, 0.61, 0.36, 1];

const STATS: { value: string; label: string }[] = [
  {
    value: "1 min → 20 s",
    label: "Requête la plus lourde du portail, après réécriture de la couche données",
  },
  { value: "~140", label: "Clients professionnels utilisateurs du portail" },
  { value: "100 Go", label: "Base Oracle de production, 282 tables" },
];

const PILLS = ["Next.js", ".NET 8", "React 19", "TypeScript", "Docker"];

export function Travaux() {
  const reduce = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 } as const,
    transition: { duration: 0.6, delay, ease: EASE },
  });

  return (
    <section
      id="travaux"
      aria-labelledby="travaux-title"
      className="mx-auto w-full max-w-page px-5 pb-[74px] pt-[62px] sm:px-7 sm:pb-[110px] sm:pt-[86px]"
    >
      <SectionHeader
        eyebrow="02 — Travaux"
        title="Ce que j'ai livré"
        titleId="travaux-title"
      />

      <article className="grid items-center gap-8 lg:grid-cols-[minmax(0,430px)_1fr] lg:gap-13">
        <motion.div {...reveal()}>
          <p className="mb-4.5 flex flex-wrap items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.05em] text-text-dim">
            <span>01</span>
            <span>2024–2026</span>
            <span className="text-accent">Production</span>
            <span>Anonymisé</span>
          </p>

          <h3 className="mb-4.5 text-[clamp(1.9rem,3.2vw,2.6rem)] font-extrabold leading-[1.08] tracking-tight">
            Migration d&apos;un portail client
          </h3>

          <p className="mb-5.5 max-w-[44ch] text-[1.05rem] text-text-muted">
            Refonte d&apos;un portail de commandes B2B / B2C en production chez
            un prestataire logistique, utilisé au quotidien par ses clients
            professionnels. Stack d&apos;origine hors support et requêtes qui
            prenaient plusieurs minutes. Migration vers Next.js et .NET 8,
            réécriture de la couche d&apos;accès aux données, refonte de la page
            la plus consultée en priorité — elle concentrait près de 90 % du
            trafic.
          </p>

          <p className="mb-6.5 inline-flex items-center gap-2.5 rounded-full border border-line-soft bg-bg-elev px-4 py-2 text-sm text-text-dim">
            <b className="font-semibold text-text">Vue 2 / .NET FW</b>
            <span aria-hidden className="text-accent">
              →
            </span>
            <b className="font-semibold text-text">Next.js / .NET 8</b>
          </p>

          <dl className="my-6 grid grid-cols-2 gap-3.5 min-[481px]:grid-cols-3">
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className="rounded-[10px] border border-line-soft bg-bg-elev px-3.5 py-4"
              >
                <dt className="text-2xl font-extrabold leading-[1.1] tracking-[-0.02em] text-accent">
                  {stat.value}
                </dt>
                <dd className="mt-[7px] text-xs leading-[1.35] text-text-dim">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          <ul className="flex flex-wrap gap-2">
            {PILLS.map((pill) => (
              <li
                key={pill}
                className="rounded-full border border-line px-3.5 py-1.5 text-[13px] font-medium text-text-muted"
              >
                {pill}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...reveal(0.1)}>
          <TiltFrame />
        </motion.div>
      </article>

      <ul className="mt-16 grid gap-4.5 lg:mt-24 lg:grid-cols-3">
        <motion.li
          {...reveal()}
          className="flex min-h-42 flex-col rounded-card border border-line-soft bg-bg-elev p-5.5 transition-[border-color,transform] hover:-translate-y-0.5 hover:border-accent"
        >
          <p className="mb-3 flex gap-2 text-[11px] font-bold uppercase tracking-[0.06em] text-text-dim">
            <span>Production</span>
            <span>· Anonymisé</span>
          </p>
          <h3 className="mb-2 text-[1.15rem] font-bold tracking-[-0.01em]">
            Reprise d&apos;un service d&apos;impression legacy
          </h3>
          <p className="mb-4 text-[0.92rem] text-text-muted">
            Un service d&apos;édition de documents tournait sur un serveur dédié
            dont le code source avait été perdu : impossible à faire évoluer,
            impossible à mettre à jour sans risque. Remplacé par une API interne
            qui génère les documents à partir de modèles Word, intégrée
            directement dans l&apos;outil métier existant. Un serveur en moins à
            maintenir.
          </p>
          <p className="mt-auto text-[13px] text-text-dim">
            .NET · OpenXML · API interne
          </p>
        </motion.li>

        <motion.li
          {...reveal(0.06)}
          className="flex min-h-42 flex-col rounded-card border border-line-soft bg-bg-elev p-5.5 transition-[border-color,transform] hover:-translate-y-0.5 hover:border-accent"
        >
          <p className="mb-3 flex gap-2 text-[11px] font-bold uppercase tracking-[0.06em] text-text-dim">
            <span className="inline-flex items-center text-accent">
              <span className="relative mr-[7px] inline-block size-1.5 rounded-full bg-accent">
                <span
                  aria-hidden
                  className="absolute left-1/2 top-1/2 size-full rounded-full bg-accent animate-ping-soft"
                />
              </span>
              En ligne
            </span>
            <span>· Open source</span>
          </p>
          <h3 className="mb-2 text-[1.15rem] font-bold tracking-[-0.01em]">
            Regex Playground
          </h3>
          <p className="mb-4 text-[0.92rem] text-text-muted">
            Tester, expliquer et documenter des regex : matches en temps réel,
            explication pas à pas, partage par URL.
          </p>
          <div className="mt-auto flex gap-3.5">
            <a
              href="https://regex-playground-one.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="text-[13px] font-semibold text-accent transition-colors hover:text-accent-glow focus-visible:text-accent-glow"
            >
              Voir le projet ↗
            </a>
            <a
              href="https://github.com/arthurreynet/Regex-Playground"
              target="_blank"
              rel="noreferrer"
              className="text-[13px] font-semibold text-accent transition-colors hover:text-accent-glow focus-visible:text-accent-glow"
            >
              Code ↗
            </a>
          </div>
        </motion.li>

        <motion.li
          {...reveal(0.12)}
          className="flex min-h-42 flex-col justify-center rounded-card border border-dashed border-line-soft p-5.5"
        >
          <p className="text-[0.92rem] text-text-muted">
            Deux autres outils sont en cours de développement. Ils apparaîtront
            ici une fois en ligne.
          </p>
        </motion.li>
      </ul>
    </section>
  );
}
