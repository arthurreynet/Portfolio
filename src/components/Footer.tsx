export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint md:flex-row md:items-center md:text-xs">
        <p>Built with Next.js · Tailwind · Vercel</p>
        <p aria-hidden className="hidden text-ink-mute md:block">
          ※
        </p>
        <p>© {year} Arthur Reynet</p>
      </div>
    </footer>
  );
}
