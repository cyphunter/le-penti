"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Scissors } from "@/components/decor/Scissors";
import { site } from "@/lib/site";

const pillars = [
  { num: "I", title: "Coupes hommes", note: "À partir de 22 €" },
  { num: "II", title: "Soin de la barbe", note: "À partir de 16 €" },
  { num: "III", title: "Coupes enfants", note: "À partir de 16 €" },
];

export function SavoirFaire() {
  const reduced = useReducedMotion();

  return (
    <Section className="relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Le grand "10" */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal>
              <Eyebrow>01 — Le savoir-faire</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 flex items-end gap-6">
                <span className="font-display italic text-[clamp(8rem,5rem+12vw,16rem)] leading-[0.8] text-ink tabular-nums">
                  10
                </span>
                <div className="pb-4">
                  <span className="font-display italic text-2xl text-ink/70 block leading-tight">
                    années
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-mute mt-1 block">
                    d&apos;expertise
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 max-w-md text-ink/75 text-pretty leading-relaxed">
                {site.about.short}
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-mute">
                <span className="size-2 rounded-full bg-ink animate-[pulse-soft_2.4s_ease-in-out_infinite]" />
                Maxime &amp; Clervie · Sur rendez-vous
              </div>
            </Reveal>
          </div>

          {/* Trois piliers */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-mute mb-8">
                <span className="size-1.5 rounded-full bg-ink" />
                Les trois piliers
                <span className="flex-1 h-px bg-ink/15" />
              </div>
            </Reveal>

            <ul className="border-y border-ink/15">
              {pillars.map((pillar, i) => (
                <li key={pillar.num}>
                  <Reveal delay={i * 100}>
                    <div className="group grid grid-cols-12 items-baseline gap-4 py-7 sm:py-9 border-b last:border-b-0 border-ink/15 transition-colors hover:bg-ink/[0.02] -mx-4 sm:-mx-6 px-4 sm:px-6">
                      <span className="col-span-1 font-display italic text-2xl text-mute tabular-nums">
                        {pillar.num}
                      </span>
                      <h3 className="col-span-7 sm:col-span-8 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                        {pillar.title}
                      </h3>
                      <span className="col-span-4 sm:col-span-3 text-right text-xs sm:text-sm uppercase tracking-[0.18em] text-mute tabular-nums">
                        {pillar.note}
                      </span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>

            {/* Citation factuelle Planity */}
            <Reveal delay={400}>
              <figure className="mt-14 lg:mt-20 relative">
                <Scissors
                  className="absolute -top-6 -left-2 size-12 text-ink/30 -rotate-12"
                />
                <blockquote className="font-display italic text-2xl sm:text-3xl tracking-tight leading-tight text-ink text-balance pl-12">
                  Une ambiance familiale, sur rendez-vous, mardi à samedi.
                </blockquote>
                <figcaption className="mt-4 pl-12 text-xs uppercase tracking-[0.2em] text-mute">
                  Description Planity vérifiée
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </Container>

      {/* Element décoratif rotation continu */}
      {!reduced && (
        <motion.div
          aria-hidden
          className="absolute -bottom-10 -right-10 hidden lg:block text-ink/12"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 200 200" className="size-72" fill="currentColor">
            <defs>
              <path id="circlePath" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
            </defs>
            <text fontSize="14" letterSpacing="6" fontFamily="serif" fontStyle="italic">
              <textPath href="#circlePath">
                Le Penn&apos;ti du Coiffeur · Maxime &amp; Clervie · Monterblanc · 56250 ·{" "}
              </textPath>
            </text>
          </svg>
        </motion.div>
      )}
    </Section>
  );
}
