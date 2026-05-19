import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { MustacheBand } from "@/components/sections/MustacheBand";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "L'équipe",
  description: `Maxime et Clervie, l'équipe du salon Le Penn'ti du Coiffeur à Monterblanc.`,
  path: "/equipe",
});

export default function EquipePage() {
  return (
    <>
      <Section className="pt-40 pb-12">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>L&apos;équipe</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,1.5rem+5vw,7rem)] tracking-tighter leading-[0.88] text-balance">
                Deux mains
                <br />
                <span className="italic">au salon</span>.
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-8 max-w-xl text-lg text-ink/70 text-pretty leading-relaxed">
                {site.about.short}
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {site.team.map((member, i) => {
        const reverse = i % 2 === 1;
        return (
          <Section key={member.slug} className={cn(i === 0 ? "py-16" : "py-16 bg-bone-soft")}>
            <Container>
              <div
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center",
                  reverse && "lg:[&>:first-child]:order-2",
                )}
              >
                <div className="lg:col-span-5">
                  <Reveal>
                    <ParallaxImage amount={40}>
                      <PlaceholderImage
                        label={`${member.name} — portrait`}
                        variant="ink"
                        ratio="portrait"
                      />
                    </ParallaxImage>
                  </Reveal>
                </div>
                <div className="lg:col-span-6 lg:col-start-7">
                  <Reveal>
                    <span className="text-mute text-xs uppercase tracking-[0.22em] tabular-nums">
                      0{i + 1} — {member.role}
                    </span>
                  </Reveal>
                  <Reveal delay={120}>
                    <h2 className="mt-4 font-display text-[clamp(3rem,2rem+5vw,8rem)] tracking-tighter leading-[0.88] italic font-light">
                      {member.name}
                    </h2>
                  </Reveal>
                  <Reveal delay={220}>
                    {member.bio ? (
                      <p className="mt-8 text-lg text-ink/75 leading-relaxed text-pretty max-w-xl">
                        {member.bio}
                      </p>
                    ) : (
                      <p className="mt-8 text-sm uppercase tracking-[0.18em] text-mute italic">
                        Bio à compléter
                      </p>
                    )}
                  </Reveal>
                  {member.specialties.length > 0 && (
                    <Reveal delay={320}>
                      <ul className="mt-10 flex flex-wrap gap-2">
                        {member.specialties.map((spec) => (
                          <li
                            key={spec}
                            className="text-xs uppercase tracking-[0.15em] border border-ink/30 rounded-full px-3.5 py-1.5 text-ink/75"
                          >
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  )}
                </div>
              </div>
            </Container>
          </Section>
        );
      })}

      <MustacheBand />

      <BookingCTA
        eyebrow="Choisir un coiffeur en particulier ?"
        title={
          <>
            Maxime ou Clervie,
            <br />
            <span className="italic">à votre choix</span>.
          </>
        }
        subtitle="Au moment de la réservation Planity, indiquez le coiffeur de votre préférence — les disponibilités s'affichent en direct."
      />
    </>
  );
}
