import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { services, formatDuration, formatPrice } from "@/lib/services";

export function ServicesPreview() {
  return (
    <Section className="relative bg-ink text-bone overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16 lg:mb-20">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow className="text-bone/60">02 — La carte</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 font-display text-[clamp(2.5rem,1.8rem+5vw,7rem)] tracking-tighter leading-[0.86]">
                Six prestations.
                <br />
                <span className="italic text-bone/55">Pas une de plus.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={200}>
              <p className="text-bone/65 text-pretty leading-relaxed text-sm">
                Tarifs identiques en boutique et sur Planity. Toutes les prestations sont réservables en ligne 24 h&nbsp;/&nbsp;24, et les annulations sont libres jusqu&apos;à 24 h avant le créneau.
              </p>
            </Reveal>
          </div>
        </div>

        <ul className="border-t border-bone/15">
          {services.map((service, i) => (
            <li key={service.slug}>
              <Reveal delay={i * 50}>
                <Link
                  href="/reservation"
                  className="group grid grid-cols-12 gap-4 sm:gap-8 items-baseline py-7 sm:py-9 border-b border-bone/15 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-bone/[0.04] -mx-4 sm:-mx-6 px-4 sm:px-6"
                >
                  <span className="col-span-1 text-bone/50 text-xs uppercase tracking-[0.2em] tabular-nums pt-1.5 transition-colors group-hover:text-bone">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-11 sm:col-span-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight">
                      {service.name}
                      {service.highlight && (
                        <span className="ml-3 align-middle inline-block text-[10px] uppercase tracking-[0.2em] text-ink bg-bone rounded-full px-2.5 py-1 font-sans font-medium tracking-tight">
                          Best-seller
                        </span>
                      )}
                    </h3>
                    <p className="mt-2 text-bone/55 text-sm hidden sm:block">
                      {service.description}
                    </p>
                  </div>
                  <span className="col-span-5 sm:col-span-2 text-bone/55 text-sm tabular-nums sm:text-right">
                    {formatDuration(service.durationMinutes)}
                  </span>
                  <span className="col-span-5 sm:col-span-2 font-display text-3xl sm:text-4xl italic tracking-tight tabular-nums text-right">
                    {formatPrice(service.priceEuros)}
                  </span>
                  <span className="col-span-2 sm:col-span-1 flex justify-end pt-1 text-bone/40 transition-colors duration-500 group-hover:text-bone">
                    <ArrowUpRight className="size-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5 group-hover:-translate-y-1.5" />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={120}>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-6">
            <p className="text-sm text-bone/50 max-w-md uppercase tracking-[0.18em] text-xs">
              Réservation en ligne · 24 h / 24 · Confirmation immédiate
            </p>
            <LinkButton
              href="/services"
              variant="ghost"
              withArrow
              className="text-bone hover:bg-bone/10 decoration-bone"
            >
              Détail des prestations
            </LinkButton>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
