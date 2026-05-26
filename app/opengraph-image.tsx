import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Al Fikri Kholil Misbah — Software Engineer"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #1D1333 0%, #2A1B4B 50%, #4C1D95 100%)",
          color: "#E6C200",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: "32px",
            color: "#E6C200",
            opacity: 0.85,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          Software Engineer
        </div>
        <div
          style={{
            fontSize: "88px",
            fontWeight: 900,
            lineHeight: 1.1,
            color: "#FFFFFF",
            textShadow: "0 0 40px rgba(230, 194, 0, 0.4)",
            marginBottom: "32px",
          }}
        >
          Al Fikri Kholil Misbah
        </div>
        <div
          style={{
            fontSize: "32px",
            color: "#D4C5F9",
            opacity: 0.9,
            maxWidth: "900px",
            lineHeight: 1.4,
          }}
        >
          AI · Blockchain · Modern Web — engineering elegant systems at the
          intersection of art and code
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            fontSize: "28px",
            color: "#E6C200",
            letterSpacing: "0.2em",
          }}
        >
          alfikri.xyz
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
