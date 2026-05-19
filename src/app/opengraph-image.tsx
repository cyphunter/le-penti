import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #0B0B0B 0%, #1A1A1A 100%)",
          color: "#F5F1EA",
          fontFamily: "serif",
        }}
      >
        {/* Top */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "9999px",
              background: "#B8763E",
            }}
          />
          <div
            style={{
              fontSize: "20px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(245,241,234,0.7)",
            }}
          >
            Coiffeur · Barbier — Monterblanc
          </div>
        </div>

        {/* Middle */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "120px",
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              fontWeight: 500,
              display: "flex",
              alignItems: "baseline",
              gap: "20px",
            }}
          >
            <span style={{ fontStyle: "italic", fontWeight: 300 }}>Le</span>
            <span>Penn&apos;ti</span>
          </div>
          <div
            style={{
              fontSize: "60px",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "rgba(245,241,234,0.6)",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            du Coiffeur
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: "26px",
              color: "rgba(245,241,234,0.7)",
              maxWidth: "640px",
              lineHeight: 1.3,
            }}
          >
            L&apos;art du soin masculin à Monterblanc — coupes, barbe, soins enfants.
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "12px",
                color: "#D9A36E",
              }}
            >
              <span
                style={{
                  fontSize: "60px",
                  fontStyle: "italic",
                  fontWeight: 300,
                  lineHeight: 1,
                }}
              >
                5,0
              </span>
              <span
                style={{
                  fontSize: "20px",
                  color: "rgba(245,241,234,0.55)",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                }}
              >
                / 5
              </span>
            </div>
            <div
              style={{
                fontSize: "16px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(245,241,234,0.5)",
              }}
            >
              563 avis · Planity
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
