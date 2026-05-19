"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion, type Transition } from "motion/react";
import { SectionWatermark } from "./SectionWatermark";

const EASE: Transition["ease"] = [0.2, 0, 0.2, 1];

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "";
const EMAIL = "arthur.reynet@gmail.com";
const GITHUB_URL = "https://github.com/arthurreynet";
const LINKEDIN_URL = "https://www.linkedin.com/in/arthur-reynet";
const CV_URL = "/cv.pdf";

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
      setError(
        `Formulaire non configuré. Écris-moi directement à ${EMAIL}.`,
      );
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
          data?.error ?? "Une erreur est survenue. Réessaie ou écris-moi directement.",
        );
      }
    } catch {
      setStatus("error");
      setError("Connexion impossible. Réessaie ou écris-moi directement.");
    }
  }

  const inputClass =
    "mt-3 w-full border-b border-rule bg-transparent py-3 text-base text-ink outline-none transition-colors focus:border-accent placeholder:text-ink-faint";

  return (
    <section
      id="contact"
      className="relative px-6 py-20 md:px-12 md:py-32 scroll-mt-12"
    >
      <SectionWatermark>06</SectionWatermark>
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.header
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex items-baseline justify-between border-b border-rule pb-6"
        >
          <p className="font-mono text-xs uppercase tracking-[0.12em]">
            <span className="text-accent">06</span>{" "}
            <span className="text-ink-faint">—</span>{" "}
            <span className="text-ink-mute">Contact</span>
          </p>
          <p className="hidden font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint md:block">
            Discuter / écrire
          </p>
        </motion.header>

        {/* Closing statement */}
        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="mt-16 md:mt-24"
        >
          <h2
            className="font-display font-medium leading-[0.95] text-ink"
            style={{
              fontSize: "clamp(2.2rem, 6vw, 5.5rem)",
              letterSpacing: "var(--tracking-display)",
              fontVariationSettings: '"opsz" 120, "SOFT" 40',
            }}
          >
            Disponible pour une mission
            <br />
            ou un poste.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-mute md:text-lg">
            Décris-moi ton projet ou ton besoin en quelques lignes. Je
            réponds sous 48h.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          onSubmit={handleSubmit}
          noValidate
          className="mt-16 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-x-12"
        >
          {/* Honeypot for bots */}
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
            <span className="block font-mono text-xs uppercase tracking-[0.12em] text-ink-mute">
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
            <span className="block font-mono text-xs uppercase tracking-[0.12em] text-ink-mute">
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

          <label className="block md:col-span-2">
            <span className="block font-mono text-xs uppercase tracking-[0.12em] text-ink-mute">
              Message <span className="text-accent">*</span>
            </span>
            <textarea
              name="message"
              required
              rows={5}
              className={`${inputClass} resize-y`}
            />
          </label>

          {/* Submit row */}
          <div className="flex flex-col items-start justify-between gap-6 md:col-span-2 md:flex-row md:items-center">
            <div className="font-mono text-xs uppercase tracking-[0.12em] min-h-[1.5em]">
              {status === "success" && (
                <span className="text-ink">
                  → Message envoyé. Retour sous 48h.
                </span>
              )}
              {status === "error" && error && (
                <span className="text-accent">{error}</span>
              )}
            </div>
            <button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              className="group inline-flex items-center gap-3 border-b-2 border-accent pb-1 font-mono text-xs uppercase tracking-[0.14em] text-ink transition-colors hover:text-accent focus-visible:text-accent disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span>
                {status === "submitting"
                  ? "Envoi…"
                  : status === "success"
                    ? "Envoyé"
                    : "Envoyer"}
              </span>
              <span
                aria-hidden
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </button>
          </div>
        </motion.form>

        {/* Plain text links */}
        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          className="mt-24 border-t border-rule pt-8 md:mt-32"
        >
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">
            Ou directement
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-4 font-display text-xl md:text-2xl">
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="border-b border-rule pb-0.5 transition-colors hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:text-accent"
              >
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={CV_URL}
                className="border-b border-rule pb-0.5 transition-colors hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:text-accent"
              >
                CV (PDF)
              </a>
            </li>
            <li>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="border-b border-rule pb-0.5 transition-colors hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:text-accent"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="border-b border-rule pb-0.5 transition-colors hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:text-accent"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
