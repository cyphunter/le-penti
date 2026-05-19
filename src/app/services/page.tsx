import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { MustacheBand } from "@/components/sections/MustacheBand";
import { servicesByCategory, formatDuration, formatPrice, type Service } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services & tarifs",
  description:
    "Coupe, coiffage, entretien barbe, forfait complet, prestations enfants. Tarifs et durées affichés. Réservation en ligne 24/7.",
  path: "/services",
});

const categoryMeta = {
  homme: {
    label: "Hommes",
    eyebrow: "01 — Pour eux",
    title: "Coupes & barbe",
    intro: "Quatre prestations homme : coupe seule, shampoing-coupe, entretien barbe et forfait complet.",
  },
  enfant: {
    label: "Enfants",
    eyebrow: "02 — Pour les plus jeunes",
    title: "Moins de 12 ans",
    intro: "Deux prestations enfant : coupe seule, et shampoing-coupe.",
  },
} as const;

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Reveal delay={index * 80}>
      <article className="group relative flex flex-col h-full p-7 sm:p-9 bg-paper border border-ink/15 transition-all duration-500 hover:border-ink hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.18)]">
        <div className="flex items-baseline justify-between mb-6">
          <span className="text-mute text-xs uppercase tracking-[0.2em] tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          {service.highlight && (
            <span className="text-[10px] uppercase tracking-[0.2em] text-bone bg-ink rounded-full px-2.5 py-1 font-medium">
              Best-seller
            </span>
          )}
        </div>
        <h3 className="font-display text-2xl sm:text-3xl tracking-tight leading-tight">
          {service.name}
        </h3>
        <p className="mt-4 text-ink/65 text-pretty leading-relaxed flex-1">
          {service.description}
        </p>
        <div className="mt-8 flex items-baseline justify-between border-t border-ink/15 pt-6">
          <div className="flex items-center gap-2 text-sm text-mute">
            <Clock className="size-3.5" aria-hidden />
            <span className="tabular-nums">{formatDuration(service.durationMinutes)}</span>
          </div>
          <span className="font-display italic text-3xl sm:text-4xl tabular-nums tracking-tight">
            {formatPrice(service.priceEuros)}
          </span>
        </div>
        <Link
          href="/reservation"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors"
        >
          Réserver cette prestation
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </article>
    </Reveal>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-40 pb-16">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Carte des prestations</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,1.5rem+5vw,7rem)] tracking-tighter leading-[0.88] text-balance">
                Six prestations.
                <br />
                <span className="italic">Pas une de plus</span>.
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-8 max-w-xl text-lg text-ink/70 text-pretty leading-relaxed">
                Tarifs identiques en boutique et sur Planity. Réservation en deux clics, confirmation immédiate.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {(["homme", "enfant"] as const).map((category) => {
        const meta = categoryMeta[category];
        const list = servicesByCategory[category];
        return (
          <Section
            key={category}
            className={category === "homme" ? "py-16" : "py-16 bg-bone-soft"}
          >
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
                <div className="lg:col-span-5">
                  <Reveal>
                    <Eyebrow>{meta.eyebrow}</Eyebrow>
                  </Reveal>
                  <Reveal delay={100}>
                    <h2 className="mt-6 font-display text-[clamp(2rem,1.5rem+3vw,4rem)] tracking-tighter leading-[0.92]">
                      {meta.title}
                    </h2>
                  </Reveal>
                </div>
                <div className="lg:col-span-5 lg:col-start-8 self-end">
                  <Reveal delay={150}>
                    <p className="text-ink/70 text-pretty leading-relaxed">{meta.intro}</p>
                  </Reveal>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {list.map((service, i) => (
                  <ServiceCard key={service.slug} service={service} index={i} />
                ))}
              </div>
            </Container>
          </Section>
        );
      })}

      <MustacheBand />

      <Section className="pt-12">
        <Container>
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border-t border-ink/15 pt-16">
              <div>
                <h2 className="font-display text-3xl tracking-tight">
                  Une question, un conseil ?
                </h2>
                <p className="mt-4 text-ink/65 max-w-md leading-relaxed">
                  Vous hésitez entre deux prestations ? L&apos;équipe est joignable directement.
                </p>
              </div>
              <div className="lg:justify-self-end flex flex-wrap gap-3">
                <LinkButton href="/contact" variant="secondary" withArrow>
                  Nous contacter
                </LinkButton>
                <LinkButton href="/reservation" withArrow>
                  Réserver
                </LinkButton>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <BookingCTA />
    </>
  );
}
