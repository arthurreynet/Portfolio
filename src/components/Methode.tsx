"use client";

import { motion, useReducedMotion, type Transition } from "motion/react";
import { SectionHeader } from "./SectionHeader";

const EASE: Transition["ease"] = [0.22, 0.61, 0.36, 1];

const STEPS: { title: string; body: string }[] = [
  {
    title: "Cadrage facturé",
    body: "Dès qu'il y a une API tierce ou du code existant, on commence par une phase de cadrage courte et facturée : je lis le code, teste les intégrations, identifie les inconnues. Elle se conclut par un périmètre écrit et un chiffrage ferme.",
  },
  {
    title: "Prix ferme, périmètre écrit",
    body: "Après cadrage, un forfait fixe. Ce qui sort du périmètre fait l'objet d'un avenant chiffré et validé avant d'être développé — jamais d'une surprise sur la facture finale.",
  },
  {
    title: "Paiement par jalons",
    body: "Acompte à la commande, solde à la recette. Vous voyez le produit tourner sur vos données avant de régler le solde.",
  },
  {
    title: "Garantie 30 jours",
    body: "Toute anomalie sur le périmètre livré est corrigée sans frais pendant 30 jours après la recette. Le code et les droits vous appartiennent au paiement intégral.",
  },
];

const FACTS: { label: string; value: string }[] = [
  { label: "Micro-entreprise · SIREN", value: "104224902" },
  { label: "TVA non applicable —", value: "art. 293 B du CGI" },
  { label: "RC Pro", value: "Orus" },
  { label: "Remote · base", value: "Rouen" },
  { label: "Disponibilité", value: "2 à 3 jours / semaine" },
];

export function Methode() {
  const reduce = useReducedMotion();

  return (
    <section
      id="methode"
      aria-labelledby="methode-title"
      className="border-t border-line-soft"
    >
      <div className="mx-auto w-full max-w-page px-5 pb-[74px] pt-[62px] sm:px-7 sm:pb-[110px] sm:pt-[86px]">
        <SectionHeader
          eyebrow="03 — Méthode"
          title="Comment je travaille"
          titleId="methode-title"
          lede="Un cadre simple, annoncé à l'avance. Vous savez ce que vous payez, quand, et ce qui se passe si quelque chose ne va pas."
        />

        <ol className="grid gap-4.5 lg:grid-cols-2">
          {STEPS.map((step, i) => (
            <motion.li
              key={step.title}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: EASE }}
              className="flex gap-4.5 rounded-card border border-line-soft bg-bg-elev p-6"
            >
              <span
                aria-hidden
                className="grid size-7.5 flex-none place-items-center rounded-full bg-accent text-[13px] font-bold text-accent-ink"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="mb-2 text-[1.05rem] font-bold tracking-[-0.01em]">
                  {step.title}
                </h3>
                <p className="text-[0.93rem] text-text-muted">{step.body}</p>
              </div>
            </motion.li>
          ))}
        </ol>

        <ul className="mt-5.5 flex flex-wrap gap-2">
          {FACTS.map((fact) => (
            <li
              key={fact.label}
              className="rounded-full border border-line px-3.5 py-[7px] text-[12.5px] font-medium text-text-muted"
            >
              {fact.label}{" "}
              <b className="font-semibold text-text">{fact.value}</b>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
