import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { PlanityWidget } from "@/components/booking/PlanityWidget";
import { PlanityFallback } from "@/components/booking/PlanityFallback";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Prendre rendez-vous",
  description: `Réservez votre coupe, barbe ou soin enfant chez ${site.name} en ligne, 24/7. Choisissez votre coiffeur et votre créneau en quelques clics.`,
  path: "/reservation",
});

export default function ReservationPage() {
  const apiKey = process.env.NEXT_PUBLIC_PLANITY_KEY;

  return (
    <>
      <Section className="pt-40 pb-12">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Réservation en ligne</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,1.5rem+4vw,5rem)] tracking-tight leading-[0.95] text-balance">
                Choisissez votre <span className="italic">moment</span>.
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 max-w-xl text-lg text-ink/70 text-pretty leading-relaxed">
                Réservation 24 h&nbsp;/&nbsp;24 via Planity. Confirmation instantanée, modification ou annulation possible jusqu&apos;à 24 h avant le rendez-vous.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="pt-0 pb-32">
        {apiKey ? (
          <Container>
            <Reveal>
              <PlanityWidget apiKey={apiKey} />
            </Reveal>
          </Container>
        ) : (
          <PlanityFallback />
        )}
      </Section>
    </>
  );
}
