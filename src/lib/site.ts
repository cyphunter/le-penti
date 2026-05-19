/**
 * Source unique des informations vérifiées du salon.
 * Toutes les valeurs ici sont issues de la fiche Planity ou doivent être complétées
 * par le client. Aucun texte rédactionnel inventé.
 */

export const site = {
  name: "Le Penn'ti du Coiffeur",
  shortName: "Le Penn'ti",
  tagline: "Coiffeur · Barbier · Monterblanc",
  description:
    "Salon de coiffure et barbier à Monterblanc (56250). Coupes hommes et entretien barbe depuis 10 ans, prestations enfants. 5,0/5 sur 563 avis Planity, ambiance familiale.",
  url: "https://lepenntiducoiffeur.fr",
  locale: "fr-FR",
  address: {
    street: "Place de la Mairie",
    postalCode: "56250",
    city: "Monterblanc",
    region: "Morbihan",
    country: "France",
    countryCode: "FR",
  },
  geo: {
    // Coordonnées approximatives — à affiner avec le client.
    latitude: 47.7341,
    longitude: -2.6798,
  },
  contact: {
    phone: "", // À fournir par le client
    email: "", // À fournir par le client
  },
  hours: [
    { days: ["Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00", label: "Mardi → Vendredi", time: "9h — 19h" },
    { days: ["Saturday"], opens: "09:00", closes: "17:00", label: "Samedi", time: "9h — 17h" },
  ] as const,
  closedDays: [
    { label: "Dimanche", day: "Sunday" },
    { label: "Lundi", day: "Monday" },
  ] as const,
  rating: {
    value: 5.0,
    count: 563,
    source: "Planity",
  },
  social: {
    planity: "https://www.planity.com/le-pennti-du-coiffeur-56250-monterblanc",
    instagram: "", // À fournir
    facebook: "", // À fournir
  },
  /**
   * Équipe : seuls les prénoms et rôles sont issus de Planity.
   * Les bios doivent être rédigées par le client.
   */
  team: [
    {
      slug: "maxime",
      name: "Maxime",
      role: "Coiffeur · Barbier",
      bio: "", // À compléter par le client
      specialties: [] as string[],
    },
    {
      slug: "clervie",
      name: "Clervie",
      role: "Coiffeuse",
      bio: "", // À compléter par le client
      specialties: [] as string[],
    },
  ] as const,
  experience: {
    years: 10,
    label: "10 ans d'expertise",
  },
  /**
   * Texte court issu de la description Planity (paraphrase de "men's cutting and beard work for 10 years")
   * + mention "ambiance familiale chaleureuse" présente sur la fiche.
   */
  about: {
    short: "Spécialistes des coupes hommes et de la barbe depuis 10 ans, dans une ambiance familiale.",
  },
} as const;

export type SiteConfig = typeof site;
