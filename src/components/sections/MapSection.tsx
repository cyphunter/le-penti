import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";

export function MapSection() {
  const fullAddress = `${site.address.street}, ${site.address.postalCode} ${site.address.city}`;
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;

  return (
    <Section className="bg-bone-soft">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal>
              <Eyebrow>04 — Adresse</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 font-display text-[clamp(2.25rem,1.5rem+4vw,5rem)] tracking-tighter leading-[0.9]">
                Place de la
                <br />
                <span className="italic">Mairie</span>.
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8 inline-flex items-start gap-3 text-ink/85">
                <MapPin className="size-5 mt-0.5 shrink-0" aria-hidden />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </span>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton href={mapsUrl} external withArrow size="md">
                  Itinéraire
                </LinkButton>
                {site.contact.phone && (
                  <LinkButton href={`tel:${site.contact.phone}`} variant="secondary" size="md">
                    Appeler le salon
                  </LinkButton>
                )}
              </div>
            </Reveal>
            <Reveal delay={380}>
              <div className="mt-12 border-t border-ink/15 pt-8 text-sm">
                <h3 className="text-xs uppercase tracking-[0.22em] text-mute mb-4">
                  Horaires
                </h3>
                <ul className="space-y-2">
                  {site.hours.map((slot) => (
                    <li key={slot.label} className="flex items-baseline justify-between gap-4">
                      <span className="text-ink/75">{slot.label}</span>
                      <span className="font-display italic tabular-nums">{slot.time}</span>
                    </li>
                  ))}
                  {site.closedDays.map((closed) => (
                    <li key={closed.label} className="flex items-baseline justify-between gap-4 text-mute">
                      <span>{closed.label}</span>
                      <span className="italic">Fermé</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={150}>
              <div className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-square overflow-hidden border border-ink/20 bg-line">
                <iframe
                  src={embedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="size-full grayscale"
                  title={`Plan d'accès — ${site.name}`}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
