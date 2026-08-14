import { SectionHeader } from "./SectionHeader";

type Recommandation = {
  /** Citation courte, 2-3 phrases */
  citation: string;
  prenomNom: string;
  role: string;
  entreprise: string;
};

/**
 * Tant que ce tableau est vide, la section n'existe pas dans le DOM.
 * Ajouter une entrée suffit à la faire apparaître — penser alors à
 * renuméroter Contact en « 05 — Contact ».
 */
const RECOMMANDATIONS: Recommandation[] = [];

export function Recommandations() {
  if (RECOMMANDATIONS.length === 0) return null;

  return (
    <section
      id="recommandations"
      aria-labelledby="recommandations-title"
      className="border-t border-line-soft"
    >
      <div className="mx-auto w-full max-w-page px-5 pb-[74px] pt-[62px] sm:px-7 sm:pb-[110px] sm:pt-[86px]">
        <SectionHeader
          eyebrow="04 — Recommandations"
          title="Ce qu'en disent mes clients"
          titleId="recommandations-title"
        />

        <ul className="grid gap-4.5 lg:grid-cols-2">
          {RECOMMANDATIONS.map((item) => (
            <li
              key={`${item.prenomNom}-${item.entreprise}`}
              className="rounded-card border border-line-soft bg-bg-elev p-6"
            >
              <figure>
                <blockquote className="text-base text-text">
                  « {item.citation} »
                </blockquote>
                <figcaption className="mt-3.5 text-[0.86rem] text-text-dim">
                  {item.prenomNom} — {item.role}, {item.entreprise}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
