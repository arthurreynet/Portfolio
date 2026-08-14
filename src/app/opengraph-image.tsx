import { ImageResponse } from "next/og";

export const alt = "Arthur Reynet — Développeur full-stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Textes gardés en littéraux (majuscules comprises) pour que chaque sous-
// ensemble de police demandé ci-dessous couvre exactement les glyphes qu'il
// rend — sinon les fontes se mélangent sur les caractères manquants.
const NAME = "Arthur Reynet";
const TAGLINE = "Connecteurs, applications métier, migrations.";
const META_TOP = "DÉVELOPPEUR FULL-STACK · FREELANCE · ROUEN";
const META_BOT_L = "DE LA PREMIÈRE LIGNE DE CODE JUSQU'À LA MISE EN PRODUCTION";
const META_BOT_R = "ARTHURREYNET.DEV";

const META_TEXT = META_TOP + META_BOT_L + META_BOT_R;

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
  const [bold, regular, medium] = await Promise.all([
    loadGoogleFont("Schibsted+Grotesk:wght@800", NAME),
    loadGoogleFont("Schibsted+Grotesk:wght@400", TAGLINE),
    loadGoogleFont("Schibsted+Grotesk:wght@600", META_TEXT),
  ]);

  const stripStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "Schibsted Meta",
    fontSize: "21px",
    letterSpacing: "2px",
    color: "#939B8C",
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
          backgroundColor: "#0F1311",
          padding: "60px 72px",
          fontFamily: "Schibsted Body",
        }}
      >
        {/* Bandeau haut */}
        <div
          style={{
            ...stripStyle,
            color: "#8FB97E",
            borderBottom: "1px solid #222923",
            paddingBottom: "24px",
          }}
        >
          <div style={{ display: "flex" }}>{META_TOP}</div>
        </div>

        {/* Nom + accroche */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Schibsted Display",
              fontSize: "132px",
              lineHeight: 1,
              letterSpacing: "-4px",
              color: "#ECEDE6",
            }}
          >
            {NAME}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "28px",
              fontSize: "36px",
              color: "#939B8C",
            }}
          >
            {TAGLINE}
          </div>
        </div>

        {/* Bandeau bas */}
        <div
          style={{
            ...stripStyle,
            color: "#6B7367",
            borderTop: "1px solid #222923",
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
        { name: "Schibsted Display", data: bold, style: "normal", weight: 800 },
        { name: "Schibsted Body", data: regular, style: "normal", weight: 400 },
        { name: "Schibsted Meta", data: medium, style: "normal", weight: 600 },
      ],
    },
  );
}
