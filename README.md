# Le Penn'ti du Coiffeur — Site vitrine

Site vitrine premium pour le salon **Le Penn'ti du Coiffeur** (Place de la Mairie, 56250 Monterblanc).
Réservation intégrée via le widget officiel Planity, SEO local optimisé, animations fluides.

---

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript strict**
- **Tailwind CSS 4** (avec design tokens dans `globals.css`)
- **Framer Motion** + **Lenis** (smooth scroll) pour les animations
- **next/font** — Fraunces (display) + Inter Tight (sans)
- **schema-dts** — JSON-LD `HairSalon` typé
- **@vercel/analytics** + **@vercel/speed-insights**
- Déploiement : **Vercel**

---

## Démarrer en local

```bash
npm install
cp .env.local.example .env.local   # puis éditer .env.local
npm run dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000).

---

## Variables d'environnement

| Variable | Description | Requis |
|---|---|---|
| `NEXT_PUBLIC_PLANITY_KEY` | Clé du widget Planity. Sans elle, la page `/reservation` affiche un fallback CTA vers Planity. | Optionnel |

**Comment obtenir la clé Planity** : envoyer un email à Planity Pro (depuis l'espace administrateur du salon) en demandant la clé API du module white-label. La doc officielle est sur [planity.gitbook.io/white-label](https://planity.gitbook.io/white-label).

Une fois la clé reçue :

1. Sur Vercel : Project → Settings → Environment Variables → ajouter `NEXT_PUBLIC_PLANITY_KEY`.
2. Redéployer (le site bascule automatiquement du fallback vers le widget).

---

## Personnaliser le contenu

### Informations du salon

Toutes les informations sont centralisées dans **`src/lib/site.ts`** :

- Nom, adresse, téléphone, email
- Horaires d'ouverture
- Coordonnées GPS (pour le JSON-LD et la carte)
- Note Planity, équipe, réseaux sociaux

Modifier ce fichier met à jour automatiquement le pied de page, la section adresse / horaires, la section "5 étoiles", le JSON-LD pour le SEO local Google, et tous les liens téléphone / email du site.

### Prestations & tarifs

Source unique dans **`src/lib/services.ts`**. Modifier ici met à jour la page `/services`, le widget de la home, et le JSON-LD.

### Photos

Tous les visuels actuels sont des **placeholders** (composant `<PlaceholderImage>`). Pour les remplacer :

1. Déposer les photos dans `public/photos/` (formats : `.jpg`, `.webp` recommandé).
2. Remplacer les `<PlaceholderImage>` par `<Image src="/photos/..." />` (`next/image`).
3. Ajouter un `alt` descriptif et `priority` sur l'image hero.

Photos à fournir en priorité :

- Hero : photo principale du salon (format portrait 3:4, 2000×2667 px min)
- `/equipe` : portraits Maxime + Clervie (3:4)
- `/galerie` : 9 à 15 photos variées du salon, équipe, réalisations

### Logo

Remplacer le texte `<span className="font-display">Le Penn'ti</span>` dans `src/components/layout/Header.tsx` et `src/components/layout/Footer.tsx` par un `<Image>` du logo si fourni.

### Couleurs

Les couleurs sont définies dans **`src/app/globals.css`** sous `@theme`. Ajuster les valeurs `--color-copper`, `--color-bone`, `--color-ink` pour matcher la charte du salon.

### Mentions légales

Compléter les `[À compléter]` dans **`src/app/mentions-legales/page.tsx`** : SIRET, raison sociale, responsable de publication, etc.

---

## Déployer sur Vercel

```bash
npx vercel link
npx vercel --prod
```

Ou via l'interface Vercel : importer le repo Git, ajouter `NEXT_PUBLIC_PLANITY_KEY` (si dispo) dans les Environment Variables, déployer.

Le domaine peut être branché dans **Project → Settings → Domains**.

---

## Vérifications post-déploiement

1. **Lighthouse** (Chrome DevTools, mode mobile) — viser 100/100/100/100 sur Accessibility / Best Practices / SEO et > 90 sur Performance.
2. **JSON-LD** — valider sur [search.google.com/test/rich-results](https://search.google.com/test/rich-results) : doit détecter un `HairSalon` avec note, horaires, services.
3. **OG image** — visiter `https://<domaine>/opengraph-image` pour vérifier la card de partage.
4. **Google Search Console** — soumettre `/sitemap.xml`.
5. **Animations désactivées** : ouvrir DevTools → Rendering → cocher "Emulate CSS prefers-reduced-motion: reduce" → vérifier que les animations sont supprimées.

---

## Structure du projet

```
src/
├── app/                        # Routes (App Router)
│   ├── layout.tsx              # Layout root (header, footer, fonts, JSON-LD)
│   ├── page.tsx                # /
│   ├── globals.css             # Design tokens + base styles
│   ├── sitemap.ts              # /sitemap.xml
│   ├── robots.ts               # /robots.txt
│   ├── opengraph-image.tsx     # OG image dynamique
│   ├── services/page.tsx
│   ├── equipe/page.tsx
│   ├── galerie/page.tsx
│   ├── contact/page.tsx
│   ├── reservation/page.tsx
│   └── mentions-legales/page.tsx
├── components/
│   ├── layout/                 # Header, Footer, LenisProvider
│   ├── ui/                     # Button, Container, Section, PlaceholderImage
│   ├── motion/                 # Reveal, MagneticButton, SplitText, ParallaxImage
│   ├── sections/               # Hero, ServicesPreview, ReviewsBand, etc.
│   ├── booking/                # PlanityWidget + Fallback
│   └── galerie/                # Lightbox
└── lib/
    ├── site.ts                 # Source unique d'infos du salon
    ├── services.ts             # Source unique des prestations
    ├── seo.ts                  # Helper buildMetadata()
    ├── jsonld.ts               # JSON-LD HairSalon
    └── utils.ts                # cn() helper
```

---

## Notes

- Le widget Planity est chargé en `strategy="afterInteractive"` pour ne pas bloquer le rendu initial.
- Toutes les animations respectent `prefers-reduced-motion: reduce` (accessibilité).
- Le site est entièrement statique (aucune API server-side) — TTFB minimal sur Vercel Edge.

---

## Assets à fournir au client

- [ ] Logo (SVG ou PNG transparent ≥ 1024px)
- [ ] Charte graphique (codes couleur exacts)
- [ ] 15-25 photos pro haute déf (salon, équipe, réalisations)
- [ ] Bios courtes Maxime + Clervie
- [ ] Téléphone du salon
- [ ] Email de contact
- [ ] Coordonnées GPS exactes
- [ ] Mentions légales (raison sociale, SIRET, etc.)
- [ ] Clé API Planity (à demander à Planity Pro)
- [ ] Réseaux sociaux (Instagram, Facebook)
