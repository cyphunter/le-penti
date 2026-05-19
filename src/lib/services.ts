/**
 * Source unique des prestations du salon (issues de Planity).
 * Alimente la page /services, le JSON-LD HairSalon, et tout CTA "réserver telle prestation".
 *
 * Les `description` sont des résumés factuels du nom de la prestation.
 */

export type ServiceCategory = "homme" | "enfant";

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  category: ServiceCategory;
  durationMinutes: number;
  priceEuros: number;
  description: string;
  highlight?: boolean;
}

export const services: readonly Service[] = [
  {
    slug: "shampoing-coupe-coiffage",
    name: "Shampoing, Coupe & Coiffage",
    shortName: "Shampoing + Coupe",
    category: "homme",
    durationMinutes: 30,
    priceEuros: 23,
    description: "Shampoing, coupe et coiffage pour homme.",
  },
  {
    slug: "coupe-coiffage",
    name: "Coupe & Coiffage",
    shortName: "Coupe + Coiffage",
    category: "homme",
    durationMinutes: 30,
    priceEuros: 22,
    description: "Coupe et coiffage pour homme, sans shampoing.",
  },
  {
    slug: "entretien-barbe",
    name: "Entretien de la Barbe",
    shortName: "Entretien barbe",
    category: "homme",
    durationMinutes: 30,
    priceEuros: 16,
    description: "Taille et entretien de la barbe.",
  },
  {
    slug: "forfait-shampoing-coupe-barbe",
    name: "Forfait Shampoing, Coupe & Barbe",
    shortName: "Forfait complet",
    category: "homme",
    durationMinutes: 45,
    priceEuros: 35,
    description: "Forfait complet : shampoing, coupe, coiffage et entretien de la barbe.",
    highlight: true,
  },
  {
    slug: "shampoing-coupe-enfant",
    name: "Shampoing & Coupe Enfant",
    shortName: "Shampoing + Coupe enfant",
    category: "enfant",
    durationMinutes: 30,
    priceEuros: 17,
    description: "Shampoing et coupe pour les moins de 12 ans.",
  },
  {
    slug: "coupe-enfant",
    name: "Coupe Enfant",
    shortName: "Coupe enfant",
    category: "enfant",
    durationMinutes: 30,
    priceEuros: 16,
    description: "Coupe pour les moins de 12 ans.",
  },
] as const;

export const servicesByCategory: Record<ServiceCategory, readonly Service[]> = {
  homme: services.filter((s) => s.category === "homme"),
  enfant: services.filter((s) => s.category === "enfant"),
};

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function formatPrice(priceEuros: number): string {
  return `${priceEuros} €`;
}

export function formatDuration(minutes: number): string {
  return `${minutes} min`;
}
