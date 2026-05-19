import type { HairSalon, WithContext } from "schema-dts";
import { site } from "./site";
import { services, formatPrice } from "./services";

const dayMap: Record<string, string> = {
  Monday: "https://schema.org/Monday",
  Tuesday: "https://schema.org/Tuesday",
  Wednesday: "https://schema.org/Wednesday",
  Thursday: "https://schema.org/Thursday",
  Friday: "https://schema.org/Friday",
  Saturday: "https://schema.org/Saturday",
  Sunday: "https://schema.org/Sunday",
};

export function buildHairSalonJsonLd(): WithContext<HairSalon> {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: site.name,
    description: site.description,
    url: site.url,
    image: `${site.url}/og.jpg`,
    priceRange: "€",
    ...(site.contact.phone ? { telephone: site.contact.phone } : {}),
    ...(site.contact.email ? { email: site.contact.email } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: site.hours.map((slot) => ({
      "@type": "OpeningHoursSpecification" as const,
      dayOfWeek: slot.days.map((d) => ({ "@id": dayMap[d] })),
      opens: slot.opens,
      closes: slot.closes,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Prestations",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        name: service.name,
        description: service.description,
        price: service.priceEuros,
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: service.priceEuros,
          priceCurrency: "EUR",
          valueAddedTaxIncluded: true,
        },
        category: service.category === "homme" ? "Hommes" : "Enfants",
        availability: "https://schema.org/InStock",
      })),
    },
    sameAs: [
      site.social.planity,
      ...(site.social.instagram ? [site.social.instagram] : []),
      ...(site.social.facebook ? [site.social.facebook] : []),
    ],
  };
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  };
}

/**
 * Helper d'export à utiliser comme prop `dangerouslySetInnerHTML` :
 * <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(buildHairSalonJsonLd())} />
 */
export function jsonLd(data: object) {
  return { __html: JSON.stringify(data) };
}

void formatPrice;
