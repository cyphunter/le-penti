"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { site } from "@/lib/site";

const highlights = [
  { label: "Accueil", value: "5,0" },
  { label: "Propreté", value: "5,0" },
  { label: "Cadre & ambiance", value: "5,0" },
  { label: "Qualité de la prestation", value: "5,0" },
];

export function ReviewsBand() {
  const reduced = useReducedMotion();

  return (
    <Section className="relative bg-bone overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Big 5,0 */}
          <div className="lg:col-span-7 relative">
            <Reveal>
              <Eyebrow>03 — Reconnaissance</Eyebrow>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-8 relative">
                <span className="font-display italic font-light text-[clamp(8rem,4rem+24vw,28rem)] leading-[0.78] tracking-tighter text-ink block tabular-nums select-none">
                  5,0
                </span>
                {/* Stars below */}
                <div className="mt-2 flex items-center gap-2 lg:gap-3">
                  {Array.from({ length: 5 }, (_, i) => (
                    <motion.span
                      key={i}
                      initial={reduced ? false : { opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      className="text-ink text-2xl sm:text-3xl lg:text-4xl leading-none"
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-mute">
                <span className="font-display italic text-ink text-2xl tabular-nums normal-case tracking-normal not-italic font-medium">
                  {site.rating.count}
                </span>
                avis vérifiés sur {site.rating.source}
              </div>
            </Reveal>
          </div>

          {/* Breakdown */}
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={200}>
              <div className="border-t border-ink/15 pt-8">
                <p className="text-xs uppercase tracking-[0.22em] text-mute mb-8">
                  Détail par critère
                </p>
                <ul className="space-y-6">
                  {highlights.map((item, i) => (
                    <li key={item.label}>
                      <Reveal delay={i * 80}>
                        <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-ink/15">
                          <span className="text-base sm:text-lg">{item.label}</span>
                          <span className="font-display italic text-2xl sm:text-3xl tabular-nums">
                            {item.value}
                          </span>
                        </div>
                      </Reveal>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <LinkButton
                    href={site.social.planity}
                    external
                    withArrow
                    variant="secondary"
                  >
                    Lire les avis sur Planity
                  </LinkButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
