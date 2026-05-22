import { ImageResponse } from "next/og";

export const alt = "Arthur Reynet — Développeur full-stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Card text — kept as literals (incl. uppercase) so each font subset
// requested below covers exactly the glyphs it renders (no fallback mixing).
const NAME = "Arthur Reynet";
const TAGLINE = "Développeur full-stack — Next.js & .NET 8";
const META_TOP_L = "PORTFOLIO · 2026";
const META_STATUT = "STATUT ·";
const META_DISPO = "DISPONIBLE";
const META_BOT_L = "ROUEN, FRANCE";
const META_BOT_R = "APPRENTI CDA";

const MONO_TEXT = META_TOP_L + META_STATUT + META_DISPO + META_BOT_L + META_BOT_R;

async function loadGoogleFont(
  family: string,
  text: string,
): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(
    text,
  )}`;
  const css = await (await fetch(url)).text();
  const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
  if (!match) throw new Error(`Font face not found for ${family}`);
  return (await fetch(match[1])).arrayBuffer();
}

export default async function OpengraphImage() {
  const [fraunces, mono, hanken] = await Promise.all([
    loadGoogleFont("Fraunces:opsz,wght@9..144,500", NAME),
    loadGoogleFont("JetBrains+Mono:wght@400", MONO_TEXT),
    loadGoogleFont("Hanken+Grotesk:wght@400", TAGLINE),
  ]);

  const stripStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "JetBrains Mono",
    fontSize: "22px",
    letterSpacing: "3px",
    color: "#5b534f",
  } as const;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#faf5ea",
          padding: "60px 72px",
          fontFamily: "Hanken Grotesk",
        }}
      >
        {/* Top strip */}
        <div
          style={{
            ...stripStyle,
            borderBottom: "1px solid #bcb6af",
            paddingBottom: "24px",
          }}
        >
          <div style={{ display: "flex" }}>{META_TOP_L}</div>
          <div style={{ display: "flex", gap: "10px" }}>
            <span>{META_STATUT}</span>
            <span style={{ color: "#af5234" }}>{META_DISPO}</span>
          </div>
        </div>

        {/* Name + tagline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Fraunces",
              fontSize: "150px",
              lineHeight: 1,
              letterSpacing: "-3px",
              color: "#211914",
            }}
          >
            {NAME}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "28px",
              fontSize: "36px",
              color: "#5b534f",
            }}
          >
            {TAGLINE}
          </div>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            ...stripStyle,
            color: "#6f6763",
            borderTop: "1px solid #bcb6af",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex" }}>{META_BOT_L}</div>
          <div style={{ display: "flex" }}>{META_BOT_R}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, style: "normal", weight: 500 },
        { name: "JetBrains Mono", data: mono, style: "normal", weight: 400 },
        { name: "Hanken Grotesk", data: hanken, style: "normal", weight: 400 },
      ],
    },
  );
}
