import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { BarberStripes } from "@/components/decor/BarberStripes";

interface BookingCTAProps {
  variant?: "default" | "compact";
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: string;
}

export function BookingCTA({
  variant = "default",
  eyebrow = "Réservation en ligne",
  title,
  subtitle = "Choisissez votre prestation, votre coiffeur, votre créneau. Confirmation immédiate, modification libre jusqu'à 24 h avant le rendez-vous.",
}: BookingCTAProps) {
  return (
    <Section className={variant === "compact" ? "py-20 sm:py-24" : ""}>
      <Container>
        <div className="relative overflow-hidden border border-ink bg-bone">
          {/* Top stripe */}
          <BarberStripes
            animated
            className="h-3 w-full"
          />
          <div className="relative px-8 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <Reveal>
                  <Eyebrow>{eyebrow}</Eyebrow>
                </Reveal>
                <Reveal delay={100}>
                  <h2 className="mt-6 font-display text-[clamp(2.5rem,1.5rem+5vw,6rem)] tracking-tighter leading-[0.92] text-balance">
                    {title ?? (
                      <>
                        Prêt pour <span className="italic">votre prochain</span>{" "}
                        passage&nbsp;?
                      </>
                    )}
                  </h2>
                </Reveal>
                <Reveal delay={200}>
                  <p className="mt-6 max-w-xl text-ink/70 text-pretty leading-relaxed">
                    {subtitle}
                  </p>
                </Reveal>
              </div>
              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <Reveal delay={300}>
                  <LinkButton href="/reservation" size="lg" withArrow>
                    Prendre rendez-vous
                  </LinkButton>
                </Reveal>
              </div>
            </div>
          </div>
          {/* Bottom stripe */}
          <BarberStripes
            animated
            className="h-3 w-full"
          />
        </div>
      </Container>
    </Section>
  );
}
