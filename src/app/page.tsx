export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Editorial metadata strip */}
        <div className="flex items-center justify-between border-b border-rule pb-4 font-mono text-xs uppercase tracking-[0.08em] text-ink-mute">
          <span>Portfolio · 2026 · N°01</span>
          <span>Rouen · FR</span>
        </div>

        {/* Hero placeholder */}
        <section className="pt-24 md:pt-40">
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-accent">
            En construction
          </p>
          <h1
            className="mt-6 font-display font-medium leading-[0.95] text-ink"
            style={{
              fontSize: "var(--text-display)",
              letterSpacing: "var(--tracking-display)",
            }}
          >
            Arthur Reynet
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-mute md:text-xl">
            Développeur full-stack — Next.js &amp; .NET. Apprenti CDA,
            expérience de production réelle. Disponible en freelance.
          </p>
        </section>

        {/* Design system smoke test — to remove once hero is real */}
        <section className="mt-40 border-t border-rule pt-12">
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-ink-faint">
            Système typographique · vérification
          </p>

          <div className="mt-8 grid gap-12 md:grid-cols-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-ink-mute">
                Display · Fraunces
              </p>
              <p className="mt-4 font-display text-4xl leading-tight text-ink">
                La voix éditoriale.
              </p>
              <p className="mt-2 font-display italic text-4xl leading-tight text-ink-mute">
                Italique cursive.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-ink-mute">
                Body · Hanken Grotesk
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink">
                Une grotesk neutre, dessinée pour le long texte. Le rythme se
                pose dans la justification, pas dans la décoration.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-ink-mute">
                Mono · JetBrains
              </p>
              <p className="mt-4 font-mono text-sm leading-relaxed text-ink">
                2024–2026 · Production
                <br />
                stack · next, .net 8
                <br />
                statut · en cours
              </p>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-6 font-mono text-xs uppercase tracking-[0.08em]">
            <span className="text-ink-mute">Accent</span>
            <span className="h-3 w-12 rounded-none bg-accent" />
            <span className="text-accent">terracotta · 0.55 0.13 38</span>
          </div>
        </section>

        {/* Footer end-mark */}
        <footer className="mt-40 flex items-center justify-between border-t border-rule pt-6 font-mono text-xs uppercase tracking-[0.08em] text-ink-faint">
          <span>© 2026 Arthur Reynet</span>
          <span aria-hidden>※</span>
          <span>Next.js · Tailwind · Vercel</span>
        </footer>
      </div>
    </main>
  );
}
