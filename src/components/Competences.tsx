"use client";

import { motion, useReducedMotion, type Transition } from "motion/react";
import {
  Atom,
  Braces,
  Component,
  Container,
  Database,
  GitBranch,
  Hash,
  Hexagon,
  Server,
  Triangle,
  Wind,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const EASE: Transition["ease"] = [0.2, 0, 0.2, 1];

type Skill = { name: string; icon: LucideIcon };

type Column = {
  label: string;
  caption: string;
  items: Skill[];
  accent?: boolean;
};

const COLUMNS: Column[] = [
  {
    label: "Au quotidien",
    caption: "Stack principale, prod réelle",
    accent: true,
    items: [
      { name: "React", icon: Atom },
      { name: "Next.js", icon: Triangle },
      { name: "TypeScript", icon: Braces },
      { name: "Tailwind", icon: Wind },
      { name: "C# / .NET 8", icon: Hash },
      { name: "Git", icon: GitBranch },
    ],
  },
  {
    label: "Bon niveau",
    caption: "Confortable, déjà livré",
    items: [
      { name: "MUI", icon: Component },
      { name: "Node.js", icon: Hexagon },
      { name: "PostgreSQL", icon: Database },
      { name: "SQL Server", icon: Database },
      { name: "Oracle", icon: Database },
      { name: "Docker", icon: Container },
    ],
  },
  {
    label: "En exploration",
    caption: "En cours d'apprentissage",
    items: [
      { name: "CI/CD avancé", icon: Workflow },
      { name: "Self-hosting", icon: Server },
    ],
  },
];

export function Competences() {
  const reduce = useReducedMotion();

  return (
    <section
      id="competences"
      aria-labelledby="competences-title"
      className="px-6 py-20 md:px-12 md:py-32 scroll-mt-12"
    >
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12 flex items-baseline justify-between border-b border-rule pb-6 md:mb-16"
        >
          <h2
            id="competences-title"
            className="font-mono text-xs uppercase tracking-[0.12em]"
          >
            <span className="text-accent" aria-hidden>
              04
            </span>{" "}
            <span className="text-ink-faint" aria-hidden>
              —
            </span>{" "}
            <span className="text-ink-mute">Compétences</span>
          </h2>
          <p className="hidden font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint md:block">
            Stack &amp; niveau
          </p>
        </motion.header>

        <div className="grid gap-12 md:grid-cols-3 md:gap-16">
          {COLUMNS.map((column, colIndex) => (
            <motion.div
              key={column.label}
              initial={
                reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: colIndex * 0.1,
                ease: EASE,
              }}
            >
              <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] md:text-xs">
                <span className={column.accent ? "text-accent" : "text-ink"}>
                  {column.label}
                </span>
              </h3>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint md:text-[11px]">
                {column.caption}
              </p>
              <div className="mt-6 border-t border-rule-strong" />
              <ul className="mt-4 space-y-3 text-base text-ink md:text-lg">
                {column.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.name} className="flex items-center gap-3">
                      <Icon
                        className="size-[18px] shrink-0 text-ink-faint"
                        strokeWidth={1.5}
                        aria-hidden
                      />
                      <span className="font-display leading-tight tracking-tight">
                        {item.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
