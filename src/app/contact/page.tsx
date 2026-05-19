import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { MapSection } from "@/components/sections/MapSection";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact & accès",
  description: `${site.name}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}. Horaires, téléphone et plan d'accès.`,
  path: "/contact",
});

export default function ContactPage() {
  const fullAddress = `${site.address.street}, ${site.address.postalCode} ${site.address.city}`;
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;

  return (
    <>
      <Section className="pt-40 pb-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Contact</Eyebrow>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="mt-6 font-display text-[clamp(2.5rem,1.5rem+4vw,5.5rem)] tracking-tight leading-[0.95] text-balance">
                  À deux pas
                  <br />
                  de la <span className="italic">mairie</span>.
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-8 max-w-xl text-lg text-ink/70 text-pretty leading-relaxed">
                  Le salon est en plein cœur de Monterblanc, place de la mairie. Pour réserver, c&apos;est en ligne. Pour le reste, voici tout ce qu&apos;il faut.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5 lg:col-start-8 space-y-6">
              <Reveal delay={150}>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-6 bg-paper border border-line rounded-sm hover:border-ink transition-colors"
                >
                  <MapPin className="size-5 text-ink mt-0.5 shrink-0" aria-hidden />
                  <div className="flex-1">
                    <h2 className="text-xs uppercase tracking-[0.18em] text-mute mb-2">Adresse</h2>
                    <p className="text-ink leading-relaxed">
                      {site.address.street}
                      <br />
                      {site.address.postalCode} {site.address.city}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm text-ink group-hover:gap-2 transition-all">
                      Itinéraire →
                    </span>
                  </div>
                </a>
              </Reveal>
              {site.contact.phone && (
                <Reveal delay={250}>
                  <a
                    href={`tel:${site.contact.phone}`}
                    className="group flex items-start gap-4 p-6 bg-paper border border-line rounded-sm hover:border-ink transition-colors"
                  >
                    <Phone className="size-5 text-ink mt-0.5 shrink-0" aria-hidden />
                    <div>
                      <h2 className="text-xs uppercase tracking-[0.18em] text-mute mb-2">Téléphone</h2>
                      <p className="text-ink">{site.contact.phone}</p>
                    </div>
                  </a>
                </Reveal>
              )}
              {site.contact.email && (
                <Reveal delay={300}>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="group flex items-start gap-4 p-6 bg-paper border border-line rounded-sm hover:border-ink transition-colors"
                  >
                    <Mail className="size-5 text-ink mt-0.5 shrink-0" aria-hidden />
                    <div>
                      <h2 className="text-xs uppercase tracking-[0.18em] text-mute mb-2">Email</h2>
                      <p className="text-ink">{site.contact.email}</p>
                    </div>
                  </a>
                </Reveal>
              )}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-12 pb-16">
        <Container>
          <Reveal>
            <div className="rounded-sm border border-line bg-paper p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-5">
                  <h2 className="text-xs uppercase tracking-[0.2em] text-mute inline-flex items-center gap-2">
                    <Clock className="size-3.5" /> Horaires d&apos;ouverture
                  </h2>
                  <p className="mt-6 font-display text-3xl tracking-tight">Mardi → Samedi</p>
                  <p className="mt-3 text-ink/65">Sur rendez-vous, en ligne ou par téléphone.</p>
                </div>
                <div className="lg:col-span-7">
                  <ul className="divide-y divide-line border-y border-line">
                    {site.hours.map((slot) => (
                      <li
                        key={slot.label}
                        className="flex items-baseline justify-between py-4 text-lg"
                      >
                        <span>{slot.label}</span>
                        <span className="font-display italic tabular-nums">{slot.time}</span>
                      </li>
                    ))}
                    {site.closedDays.map((closed) => (
                      <li
                        key={closed.label}
                        className="flex items-baseline justify-between py-4 text-lg"
                      >
                        <span className="text-mute">{closed.label}</span>
                        <span className="text-mute italic">Fermé</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <LinkButton href="/reservation" withArrow>
                      Réserver en ligne
                    </LinkButton>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <MapSection />

      <BookingCTA />
    </>
  );
}
