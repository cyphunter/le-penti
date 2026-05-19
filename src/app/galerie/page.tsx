import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { GalleryGrid, type GalleryItem } from "@/components/galerie/Lightbox";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Galerie",
  description:
    "Découvrez l'atmosphère du salon Le Penn'ti du Coiffeur, l'équipe au travail, et quelques-unes des coupes signatures réalisées à Monterblanc.",
  path: "/galerie",
});

const items: GalleryItem[] = [
  { id: "salon-1", label: "Vue du salon — entrée", span: "tall", variant: "ink" },
  { id: "salon-2", label: "Détail — fauteuil & miroir", span: "default", variant: "bone" },
  { id: "salon-3", label: "Outils du métier", span: "default", variant: "outline" },
  { id: "team-1", label: "Maxime au travail", span: "wide", variant: "ink" },
  { id: "coupe-1", label: "Coupe en cours", span: "default", variant: "outline" },
  { id: "coupe-2", label: "Soin de la barbe", span: "tall", variant: "ink" },
  { id: "salon-4", label: "Ambiance lumière", span: "default", variant: "bone" },
  { id: "team-2", label: "Clervie & client", span: "default", variant: "outline" },
  { id: "salon-5", label: "Façade Place de la Mairie", span: "wide", variant: "ink" },
];

export default function GaleriePage() {
  return (
    <>
      <Section className="pt-40 pb-16">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Galerie</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,1.5rem+4vw,5.5rem)] tracking-tight leading-[0.95] text-balance">
                L&apos;atelier
                <br />
                <span className="italic">en images</span>.
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-8 max-w-xl text-lg text-ink/70 text-pretty leading-relaxed">
                Le salon, l&apos;équipe, le geste. Quelques instantanés pour donner le ton avant votre passage.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="pt-0 pb-32">
        <Container>
          <Reveal>
            <GalleryGrid items={items} />
          </Reveal>
          <p className="mt-10 text-xs text-mute italic">
            Visuels de remplacement — à substituer par les photos professionnelles du salon dès leur livraison.
          </p>
        </Container>
      </Section>

      <BookingCTA />
    </>
  );
}
