import Link from "next/link";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Marquee, MarqueeStar } from "@/components/decor/Marquee";
import { BarberStripes } from "@/components/decor/BarberStripes";

const navColumns = [
  {
    title: "Le salon",
    items: [
      { href: "/services", label: "Services & tarifs" },
      { href: "/equipe", label: "Notre équipe" },
      { href: "/galerie", label: "Galerie" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Réservation",
    items: [
      { href: "/reservation", label: "Prendre rendez-vous" },
      { href: site.social.planity, label: "Planity", external: true },
    ],
  },
  {
    title: "Mentions",
    items: [{ href: "/mentions-legales", label: "Mentions légales" }],
  },
];

const marqueeItems = [
  "Le Penn'ti du Coiffeur",
  "Coiffeur · Barbier",
  "Monterblanc — 56250",
  "Maxime & Clervie",
  "5,0 / 5",
  "563 avis Planity",
];

export function Footer() {
  return (
    <footer className="bg-ink text-bone mt-0">
      {/* Marquee top — décoratif */}
      <div className="border-b border-bone/15 py-5">
        <Marquee speed={45}>
          {marqueeItems.flatMap((label, i) => [
            <span
              key={`${label}-${i}`}
              className="font-display text-2xl sm:text-3xl italic font-light tracking-tight"
            >
              {label}
            </span>,
            <MarqueeStar key={`star-${i}`} />,
          ])}
        </Marquee>
      </div>

      <Container className="py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand + contact */}
          <div className="lg:col-span-5">
            <Link href="/" className="font-display text-3xl tracking-tight inline-block">
              <span className="italic font-light">Le</span>{" "}
              <span className="font-medium">Penn&apos;ti</span>{" "}
              <span className="text-bone/60">du Coiffeur</span>
            </Link>
            <p className="mt-6 max-w-md text-bone/65 text-pretty leading-relaxed">
              {site.about.short} Place de la Mairie, au cœur de Monterblanc.
            </p>
            <div className="mt-10 flex flex-col gap-4 text-sm">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${site.address.street}, ${site.address.postalCode} ${site.address.city}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-start gap-3 hover:text-bone transition-colors text-bone/80"
              >
                <MapPin className="size-4 mt-0.5 shrink-0" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </span>
              </a>
              {site.contact.phone && (
                <a
                  href={`tel:${site.contact.phone}`}
                  className="group inline-flex items-center gap-3 hover:text-bone transition-colors text-bone/80"
                >
                  <Phone className="size-4" />
                  {site.contact.phone}
                </a>
              )}
              {site.contact.email && (
                <a
                  href={`mailto:${site.contact.email}`}
                  className="group inline-flex items-center gap-3 hover:text-bone transition-colors text-bone/80"
                >
                  <Mail className="size-4" />
                  {site.contact.email}
                </a>
              )}
            </div>
          </div>

          {/* Hours */}
          <div className="lg:col-span-3">
            <h2 className="text-xs uppercase tracking-[0.2em] text-bone/50 mb-6 inline-flex items-center gap-2">
              <Clock className="size-3.5" /> Horaires
            </h2>
            <ul className="space-y-2.5 text-[15px]">
              {site.hours.map((slot) => (
                <li key={slot.label} className="flex items-baseline justify-between gap-3">
                  <span className="text-bone/80">{slot.label}</span>
                  <span className="font-medium tabular-nums">{slot.time}</span>
                </li>
              ))}
              {site.closedDays.map((closed) => (
                <li key={closed.label} className="flex items-baseline justify-between gap-3">
                  <span className="text-bone/50">{closed.label}</span>
                  <span className="text-bone/40 italic">Fermé</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {navColumns.map((col) => (
              <div key={col.title}>
                <h2 className="text-xs uppercase tracking-[0.2em] text-bone/50 mb-6">{col.title}</h2>
                <ul className="space-y-2.5 text-[15px]">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      {("external" in item && item.external) ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-bone/80 hover:text-bone transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link href={item.href} className="text-bone/80 hover:text-bone transition-colors">
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-10 border-t border-bone/15 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between text-xs text-bone/50">
          <p>
            © {new Date().getFullYear()} {site.name}. Tous droits réservés.
          </p>
          <p>
            Réservation propulsée par{" "}
            <a
              href={site.social.planity}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-bone"
            >
              Planity
            </a>
          </p>
        </div>
      </Container>

      {/* Stripes barber en pied */}
      <BarberStripes className="h-3 w-full" />
    </footer>
  );
}
