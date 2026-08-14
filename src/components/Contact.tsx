"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion, type Transition } from "motion/react";
import { SectionHeader } from "./SectionHeader";

const EASE: Transition["ease"] = [0.22, 0.61, 0.36, 1];

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "";
const EMAIL = "contact@arthurreynet.dev";
const GITHUB_URL = "https://github.com/arthurreynet";
const LINKEDIN_URL = "https://www.linkedin.com/in/arthurreynet";

const RECAP: { label: string; value: string }[] = [
  { label: "Statut", value: "Micro-entreprise" },
  { label: "Intervention", value: "Remote · Normandie ponctuel" },
  { label: "Disponibilité", value: "2 à 3 jours / semaine" },
  { label: "Format", value: "Forfait après cadrage" },
  { label: "Réponse", value: "Sous 24h ouvrées" },
  { label: "Assurance", value: "RC Pro Orus" },
];

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const reduce = useReducedMotion();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    if (!FORMSPREE_ID) {
      setStatus("error");
      setError(`Formulaire non configuré. Écrivez-moi directement à ${EMAIL}.`);
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        setStatus("error");
        setError(
          data?.error ??
            "Une erreur est survenue. Réessayez ou écrivez-moi directement.",
        );
      }
    } catch {
      setStatus("error");
      setError("Connexion impossible. Réessayez ou écrivez-moi directement.");
    }
  }

  const labelClass = "block text-[13px] font-semibold text-text-muted";
  const inputClass =
    "mt-2 w-full rounded-[10px] border border-line-soft bg-bg-elev px-3.5 py-3 text-base text-text outline-none transition-colors focus:border-accent placeholder:text-text-dim";

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t border-line-soft"
    >
      <div className="mx-auto w-full max-w-page px-5 pb-[74px] pt-[62px] sm:px-7 sm:pb-[110px] sm:pt-[86px]">
        <SectionHeader
          eyebrow="04 — Contact"
          title="Parlons de votre projet"
          titleId="contact-title"
        />

        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-13">
          <motion.div
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <p className="max-w-[56ch] text-[1.02rem] text-text-muted">
              Décrivez votre besoin en quelques lignes : le contexte, les
              systèmes concernés, l&apos;échéance si vous en avez une. Je réponds
              sous 24h ouvrées, et je vous dis franchement si ce n&apos;est pas
              pour moi.
            </p>
            <p className="mt-3.5 max-w-[56ch] text-[1.02rem] text-text-muted">
              Si le projet touche à une API tierce ou à du code existant, je
              proposerai d&apos;abord un cadrage court plutôt qu&apos;un devis au
              jugé.
            </p>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-8 grid gap-5 sm:grid-cols-2"
            >
              {/* Piège à robots */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
                aria-hidden
              />
              <input
                type="hidden"
                name="_subject"
                value="Nouveau contact via le portfolio"
              />

              <label className="block">
                <span className={labelClass}>
                  Nom <span className="text-accent">*</span>
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  className={inputClass}
                />
              </label>

              <label className="block">
                <span className={labelClass}>
                  Email <span className="text-accent">*</span>
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className={inputClass}
                />
              </label>

              <label className="block sm:col-span-2">
                <span className={labelClass}>
                  Message <span className="text-accent">*</span>
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className={`${inputClass} resize-y`}
                />
              </label>

              <div className="flex flex-col items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className="cursor-pointer rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-accent-ink transition-[background-color,transform] hover:-translate-y-px hover:bg-accent-glow focus-visible:-translate-y-px focus-visible:bg-accent-glow disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting"
                    ? "Envoi…"
                    : status === "success"
                      ? "Envoyé"
                      : "Envoyer"}
                </button>
                <p
                  aria-live="polite"
                  className="min-h-[1.5em] text-sm text-text-muted"
                >
                  {status === "success" &&
                    "Message envoyé. Réponse sous 24h ouvrées."}
                  {status === "error" && error}
                </p>
              </div>
            </form>

            <div className="mt-6 flex flex-wrap gap-4.5">
              <a
                href={`mailto:${EMAIL}`}
                className="text-sm font-semibold text-accent transition-colors hover:text-accent-glow focus-visible:text-accent-glow"
              >
                {EMAIL}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-accent transition-colors hover:text-accent-glow focus-visible:text-accent-glow"
              >
                LinkedIn ↗
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-accent transition-colors hover:text-accent-glow focus-visible:text-accent-glow"
              >
                GitHub ↗
              </a>
            </div>
          </motion.div>

          <motion.dl
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="rounded-card border border-line-soft bg-bg-elev p-6.5"
          >
            {RECAP.map((row, i) => (
              <div
                key={row.label}
                className={`flex justify-between gap-4 py-3.5 text-[0.94rem] ${
                  i === RECAP.length - 1 ? "" : "border-b border-line-soft"
                }`}
              >
                <dt className="text-text-dim">{row.label}</dt>
                <dd className="text-right font-semibold">{row.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
