"use client";

import { motion, useReducedMotion, type Transition } from "motion/react";
import {
  Cable,
  GitCompareArrows,
  LayoutDashboard,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const EASE: Transition["ease"] = [0.22, 0.61, 0.36, 1];

const SERVICES: {
  num: string;
  icon: LucideIcon;
  title: string;
  body: string;
  stack: string;
}[] = [
  {
    num: "01",
    icon: Cable,
    title: "Connecteurs & synchro de données",
    body: "Faire dialoguer deux systèmes qui s'ignorent : ERP, e-commerce, outil métier, API tierce. Synchronisation planifiée, gestion des erreurs, reprise sur incident.",
    stack: "API REST · .NET · Node · SQL",
  },
  {
    num: "02",
    icon: LayoutDashboard,
    title: "Applications métier sur mesure",
    body: "Espace client, back-office, réservation, paiement, suivi de stock. Une interface qui tient la charge de travail réelle de vos équipes, pas une démo.",
    stack: "Next.js · React · TypeScript · Stripe",
  },
  {
    num: "03",
    icon: GitCompareArrows,
    title: "Migration & modernisation",
    body: "Reprise d'une application existante : montée de version, remplacement d'une stack legacy, refonte progressive sans couper le service en production.",
    stack: ".NET 8 · React · migrations SQL",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Mise en production & CI/CD",
    body: "Dockerisation, pipeline de déploiement, hébergement, supervision. Le déploiement fait partie de la livraison — pas de l'après.",
    stack: "Docker · GitLab CI · Traefik",
  },
];

export function Services() {
  const reduce = useReducedMotion();

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="border-t border-line-soft"
    >
      <div className="mx-auto w-full max-w-page px-5 pb-[74px] pt-[62px] sm:px-7 sm:pb-[110px] sm:pt-[86px]">
        <SectionHeader
          eyebrow="01 — Services"
          title="Ce sur quoi on m'appelle"
          titleId="services-title"
          lede="Je travaille sur de la logique métier et de l'intégration : faire fonctionner ensemble des systèmes qui ne se parlent pas, et remettre à niveau des applications qui ont vieilli."
        />

        <ul className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <motion.li
              key={service.num}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: EASE }}
              className="rounded-card border border-line-soft bg-bg-elev px-5.5 pb-6.5 pt-6 transition-[border-color,transform] hover:-translate-y-0.5 hover:border-accent"
            >
              <div className="flex items-center justify-between gap-2.5">
                <span className="grid size-8.5 place-items-center rounded-[9px] bg-[var(--halo)] text-accent">
                  <service.icon size={19} strokeWidth={2} />
                </span>
                <span className="text-xs font-bold tracking-[0.08em] text-accent">
                  {service.num}
                </span>
              </div>
              <h3 className="mb-2.5 mt-3.5 text-[1.08rem] font-bold tracking-[-0.01em]">
                {service.title}
              </h3>
              <p className="text-[0.93rem] text-text-muted">{service.body}</p>
              <p className="mt-4 border-t border-line-soft pt-3 text-[12.5px] text-text-dim">
                {service.stack}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
