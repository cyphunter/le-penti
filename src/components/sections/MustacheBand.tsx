import { MustacheShave } from "@/components/decor/MustacheShave";
import { Marquee, MarqueeStar } from "@/components/decor/Marquee";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

const items = [
  "Coupe",
  "Barbe",
  "Coiffage",
  "Forfait complet",
  "Coupe enfant",
  "Shampoing",
  "Place de la Mairie",
  "Monterblanc",
  "Maxime & Clervie",
  "Sur rendez-vous",
];

/**
 * Bandeau décoratif full-width entre sections : moustache rasée XXL,
 * marquee de prestations en bas, fond noir.
 */
export function MustacheBand() {
  return (
    <section
      className="relative bg-ink text-bone overflow-hidden border-y border-ink"
      aria-label="Décoration — moustache rasée"
    >
      <Container className="py-20 sm:py-28 lg:py-36 relative">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Texte gauche */}
          <Reveal className="col-span-12 lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.22em] text-bone/55 inline-flex items-center gap-3">
              <span className="size-1.5 rounded-full bg-bone/55" />
              Spécialité maison
            </span>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,1.5rem+4vw,5rem)] italic font-light tracking-tighter leading-[0.92]">
              Le rasage
              <br />
              <span className="not-italic font-medium">à l&apos;ancienne</span>.
            </h2>
            <p className="mt-6 text-bone/65 leading-relaxed text-pretty max-w-md">
              Entretien de la barbe, contour précis, soin nourrissant. La prestation classique du barbier, à 16 €.
            </p>
          </Reveal>

          {/* Mustache animée XXL */}
          <Reveal delay={150} className="col-span-12 lg:col-span-8">
            <div className="relative text-bone">
              <MustacheShave
                className="w-full h-auto"
                cycleSeconds={7}
              />
              {/* Annotations */}
              <span className="absolute top-2 left-2 text-[10px] uppercase tracking-[0.2em] text-bone/45 font-display italic">
                Fig. 01
              </span>
              <span className="absolute bottom-2 right-2 text-[10px] uppercase tracking-[0.2em] text-bone/45 font-display italic">
                — En boucle
              </span>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Marquee bas */}
      <div className="border-t border-bone/15 py-4">
        <Marquee speed={50}>
          {items.flatMap((label, i) => [
            <span
              key={`${label}-${i}`}
              className="font-display text-2xl sm:text-3xl tracking-tight"
            >
              <span className="italic font-light">{label}</span>
            </span>,
            <MarqueeStar key={`star-${i}`} />,
          ])}
        </Marquee>
      </div>
    </section>
  );
}
