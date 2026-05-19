/**
 * Typage des bindings Cloudflare exposés au runtime du Worker.
 * Ajouter ici toute nouvelle variable / binding déclaré dans `wrangler.jsonc`
 * (ex: DB, KV, MEDIA_BUCKET, secrets via `wrangler secret put`).
 *
 * Récupération côté serveur :
 *   import { getCloudflareContext } from "@opennextjs/cloudflare";
 *   const { env } = await getCloudflareContext({ async: true });
 *   env.SITE_ID; // typé
 */

interface CloudflareEnv {
  // Variables (wrangler.jsonc → "vars")
  SITE_ID: string;
  NEXT_PUBLIC_SITE_URL: string;

  // Static assets bundlées par OpenNext
  ASSETS: Fetcher;

  // À décommenter lors de l'activation des bindings correspondants :
  // DB: D1Database;
  // KV: KVNamespace;
  // MEDIA_BUCKET: R2Bucket;

  // Secrets éventuels (wrangler secret put) :
  // NEXT_PUBLIC_PLANITY_KEY?: string;
  // RESEND_API_KEY?: string;
  // BETTER_AUTH_SECRET?: string;
}
