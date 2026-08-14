export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-soft">
      <div className="mx-auto flex w-full max-w-page flex-wrap justify-between gap-2.5 px-5 py-7 text-[13px] text-text-dim sm:px-7">
        <span>© {year} Arthur Reynet — micro-entreprise, SIREN 104224902</span>
        <span>TVA non applicable, art. 293 B du CGI</span>
      </div>
    </footer>
  );
}
