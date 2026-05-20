import { ImageResponse } from "next/og";

export const alt = "Arthur Reynet — Développeur full-stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFraunces(text: string): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500&text=${encodeURIComponent(
    text,
  )}`;
  const css = await (await fetch(url)).text();
  const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
  if (!match) throw new Error("Fraunces font face not found");
  const res = await fetch(match[1]);
  return res.arrayBuffer();
}

export default async function OpengraphImage() {
  const fraunces = await loadFraunces("Arthur Reynet");

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
        }}
      >
        {/* Top strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #bcb6af",
            paddingBottom: "24px",
            fontSize: "22px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#5b534f",
          }}
        >
          <div style={{ display: "flex" }}>Portfolio · 2026</div>
          <div style={{ display: "flex", gap: "10px" }}>
            <span>Statut ·</span>
            <span style={{ color: "#af5234" }}>Disponible</span>
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
            Arthur Reynet
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "28px",
              fontSize: "36px",
              color: "#5b534f",
            }}
          >
            {"Développeur full-stack — Next.js & .NET 8"}
          </div>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #bcb6af",
            paddingTop: "24px",
            fontSize: "22px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#6f6763",
          }}
        >
          <div style={{ display: "flex" }}>Rouen, France</div>
          <div style={{ display: "flex" }}>Apprenti CDA</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, style: "normal", weight: 500 },
      ],
    },
  );
}
