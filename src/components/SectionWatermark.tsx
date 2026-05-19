type Props = {
  children: string;
};

export function SectionWatermark({ children }: Props) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute left-0 top-4 z-0 select-none font-display font-medium leading-[0.85] text-ink/[0.07] md:top-6"
      style={{
        fontSize: "clamp(6rem, 13vw, 14rem)",
        fontVariationSettings: '"opsz" 144',
      }}
    >
      {children}
    </span>
  );
}
