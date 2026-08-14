"use client";

import { motion, useReducedMotion, type Transition } from "motion/react";
import {
  Container,
  Database,
  MonitorSmartphone,
  Server,
  type LucideIcon,
} from "lucide-react";

const EASE: Transition["ease"] = [0.22, 0.61, 0.36, 1];

const CHAIN: {
  name: string;
  index: string;
  stack: string;
  icon: LucideIcon;
}[] = [
  {
    name: "Interface",
    index: "01",
    stack: "Next.js · React",
    icon: MonitorSmartphone,
  },
  { name: "Logique & API", index: "02", stack: "Node · .NET", icon: Server },
  {
    name: "Données",
    index: "03",
    stack: "PostgreSQL · Oracle · SQL Server",
    icon: Database,
  },
  {
    name: "Déploiement",
    index: "04",
    stack: "Docker · CI/CD · mise en ligne",
    icon: Container,
  },
];

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: EASE },
  });

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="mx-auto grid w-full max-w-page items-center gap-11 px-5 pb-16 pt-15 sm:px-7 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-24 lg:pt-18"
    >
      <div>
        <motion.p
          {...rise(0.05)}
          className="mb-6 flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-accent"
        >
          <span aria-hidden className="h-px w-[22px] bg-accent/70" />
          Développeur full-stack · Freelance · Rouen
        </motion.p>

        <motion.h1
          {...rise(0.15)}
          id="hero-title"
          className="mb-6 text-[clamp(2.6rem,5.6vw,4.3rem)] font-extrabold leading-[1.04] tracking-tight"
        >
          Je conçois, développe et{" "}
          <span className="text-accent">déploie</span> vos applications web.
        </motion.h1>

        <motion.p
          {...rise(0.28)}
          className="mb-9 max-w-[40ch] text-[clamp(1.05rem,1.5vw,1.22rem)] text-text-muted"
        >
          Connecteurs, applications métier, migrations. De la première ligne de
          code jusqu&apos;à la mise en production.
        </motion.p>

        <motion.div
          {...rise(0.4)}
          className="flex flex-wrap items-center gap-3.5 max-[480px]:w-full"
        >
          <a
            href="#services"
            className="rounded-full bg-text px-6 py-3.5 text-base font-semibold text-bg transition-[transform,opacity] hover:-translate-y-px hover:opacity-90 focus-visible:-translate-y-px focus-visible:opacity-90 max-[480px]:flex-1 max-[480px]:text-center"
          >
            Ce que je fais
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line px-6 py-3.5 text-base font-medium transition-colors hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:text-accent max-[480px]:flex-1 max-[480px]:text-center"
          >
            Discuter d&apos;un projet
          </a>
        </motion.div>
      </div>

      <motion.div
        {...rise(0.35)}
        className="rounded-card border border-line-soft bg-bg-elev p-3"
      >
        <p className="px-3.5 pb-4 pt-3 text-xs font-semibold uppercase tracking-[0.06em] text-text-dim">
          La chaîne complète
        </p>
        <ul aria-label="Ce que je couvre, de l'interface au déploiement">
          {CHAIN.map((step) => (
            <li
              key={step.index}
              className="group relative rounded-[10px] py-4 pl-[30px] pr-4 transition-colors hover:bg-surface"
            >
              <span
                aria-hidden
                className="absolute left-4 top-1/2 h-3.5 w-[3px] -translate-y-1/2 rounded-sm bg-line transition-[height,background-color,box-shadow] duration-250 group-hover:h-[26px] group-hover:bg-accent-glow group-hover:shadow-[0_0_12px_var(--halo)]"
              />
              <span className="flex items-baseline justify-between gap-3">
                <span className="flex items-center gap-2.5 text-[17px] font-semibold transition-colors group-hover:text-accent-glow">
                  <step.icon
                    size={18}
                    strokeWidth={2}
                    className="shrink-0 self-center text-text-dim transition-colors group-hover:text-accent"
                  />
                  {step.name}
                </span>
                <span className="text-[13px] font-medium text-text-dim">
                  {step.index}
                </span>
              </span>
              <span className="mt-1 block text-sm text-text-dim opacity-55 transition-[opacity,color,transform] group-hover:translate-x-0.5 group-hover:text-text-muted group-hover:opacity-100">
                {step.stack}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
