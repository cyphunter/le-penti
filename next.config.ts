import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

// `initOpenNextCloudflareForDev()` connecte les bindings Cloudflare (D1, KV, R2…)
// au `next dev`. Le projet n'a aucun binding pour l'instant — l'appeler quand
// wrangler.jsonc est vide fait boucler Wrangler et explose la RAM en quelques
// secondes (incident dev confirmé, cf. CLAUDE.md §13). On garde l'import pour
// le réactiver d'une ligne quand une D1 / KV / R2 sera ajoutée.
void initOpenNextCloudflareForDev;

const nextConfig: NextConfig = {
  // Empêche Turbopack de remonter dans `freelance/` chercher un lockfile parent.
  turbopack: {
    root: projectRoot,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
