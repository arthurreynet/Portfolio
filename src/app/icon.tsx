import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#af5234",
          color: "#faf5ea",
          fontSize: "34px",
          fontWeight: 700,
          letterSpacing: "-1px",
        }}
      >
        AR
      </div>
    ),
    { ...size },
  );
}
