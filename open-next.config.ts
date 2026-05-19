import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// `npm run build` exécute `opennextjs-cloudflare build`, qui à son tour
// déclenche le build Next.js. On lui indique explicitement `build:next`
// pour éviter la récursion infinie sur `npm run build`.
export default {
  ...defineCloudflareConfig(),
  buildCommand: "npm run build:next",
};
