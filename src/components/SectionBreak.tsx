export function SectionBreak() {
  return (
    <div aria-hidden className="px-6 md:px-12">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-6 py-6 md:py-8">
        <div className="h-px flex-1 bg-rule" />
        <span className="font-mono text-sm text-ink-faint">※</span>
        <div className="h-px flex-1 bg-rule" />
      </div>
    </div>
  );
}
