"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Scissors } from "@/components/decor/Scissors";
import { Marquee, MarqueeStar } from "@/components/decor/Marquee";
import { site } from "@/lib/site";

const marqueeItems = [
  "Le Penn'ti du Coiffeur",
  "Coiffeur · Barbier",
  "Monterblanc — 56250",
  "Maxime & Clervie",
  "Sur rendez-vous",
  "Mardi → Samedi",
  "5,0 / 5 — 563 avis",
  "Spécialiste coupes hommes",
  "Barbe traditionnelle",
];

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-bone pt-32 pb-0">
      {/* Bandeau supérieur d'infos */}
      <div className="absolute top-24 left-0 right-0 z-10">
        <Container className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-mute">
          <motion.span
            initial={reduced ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="inline-flex items-center gap-2"
          >
            <span className="size-1 rounded-full bg-ink animate-[pulse-soft_2.4s_ease-in-out_infinite]" />
            Salon ouvert · sur rendez-vous
          </motion.span>
          <motion.span
            initial={reduced ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="hidden sm:inline-block"
          >
            Mardi → Samedi · 9h — 19h
          </motion.span>
          <motion.span
            initial={reduced ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="tabular-nums"
          >
            EST. <span className="font-display italic">2014</span>
          </motion.span>
        </Container>
      </div>

      {/* Layout principal */}
      <Container className="relative z-10 pt-12 pb-16 lg:pt-16 lg:pb-24">
        {/* Eyebrow */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 text-[11px] uppercase tracking-[0.28em] text-ink/70 mb-8"
        >
          <span className="block w-12 h-px bg-ink" />
          Coiffeur &amp; Barbier
          <span className="block w-12 h-px bg-ink" />
          Monterblanc
        </motion.div>

        {/* Titre principal — typographique massif */}
        <h1 className="font-display tracking-tighter text-ink leading-[0.86]">
          <motion.span
            initial={reduced ? false : { opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[clamp(4rem,3rem+8vw,12rem)]"
          >
            <span className="italic font-light">Le</span>{" "}
            <span className="font-medium">Penn&apos;ti</span>
          </motion.span>
          <motion.span
            initial={reduced ? false : { opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[clamp(2.5rem,1.8rem+4.5vw,7rem)] text-ink/85 -mt-2 lg:-mt-4"
          >
            du <span className="italic">Coiffeur</span>
          </motion.span>
        </h1>

        {/* Bandeau du milieu — infos + mascotte mustache */}
        <div className="mt-12 lg:mt-16 grid grid-cols-12 gap-6 lg:gap-8 items-end">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 sm:col-span-6 lg:col-span-5"
          >
            <p className="text-[15px] sm:text-base text-ink/70 leading-relaxed text-pretty max-w-md">
              {site.about.short} Place de la Mairie — au cœur de Monterblanc.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton>
                <LinkButton href="/reservation" size="lg" withArrow>
                  Prendre rendez-vous
                </LinkButton>
              </MagneticButton>
              <Link
                href="/services"
                className="shave-link text-sm font-medium uppercase tracking-[0.18em] text-ink"
              >
                <span>Voir les tarifs</span>
              </Link>
            </div>
          </motion.div>

          {/* Mascotte : ciseaux barber qui s'ouvrent et se ferment doucement */}
          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 sm:col-span-6 lg:col-span-7 flex justify-end items-center"
          >
            <div className="relative w-full max-w-[240px] sm:max-w-[280px] lg:max-w-xs text-ink">
              <Scissors className="w-full h-auto" />
              <span className="absolute -bottom-2 right-0 text-[10px] uppercase tracking-[0.2em] text-mute font-display italic">
                — L&apos;outil
              </span>
            </div>
          </motion.div>
        </div>

        {/* Stamps en bas du hero */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 border-t border-ink/15 pt-8"
        >
          <Stamp number="01" label="10 ans d'expertise" />
          <Stamp number="02" label="5,0 / 5 — 563 avis" />
          <Stamp number="03" label="Maxime & Clervie" />
          <Stamp number="04" label="Hommes & enfants" />
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-mute"
        >
          <ArrowDown className="size-3.5 animate-bounce" aria-hidden />
          Faire défiler
        </motion.div>
      </Container>

      {/* Marquee infini en bas */}
      <div className="relative mt-12 border-y border-ink py-5 bg-ink text-bone">
        <Marquee speed={42}>
          {marqueeItems.flatMap((label, i) => [
            <span key={`${label}-${i}`} className="font-display text-3xl sm:text-4xl tracking-tight">
              <span className="italic font-light">{label}</span>
            </span>,
            <MarqueeStar key={`star-${i}`} />,
          ])}
        </Marquee>
      </div>
    </section>
  );
}

function Stamp({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-baseline gap-3 lg:px-5 lg:py-2">
      <span className="text-[11px] uppercase tracking-[0.22em] text-mute tabular-nums">
        {number}
      </span>
      <span className="font-display italic text-base sm:text-lg tracking-tight text-ink">
        {label}
      </span>
    </div>
  );
}
