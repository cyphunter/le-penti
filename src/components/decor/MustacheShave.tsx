"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MustacheShaveProps {
  className?: string;
  /** Durée d'un cycle complet (entrée, rasage, repousse) en secondes. */
  cycleSeconds?: number;
  /** Cacher le rasoir + copeaux (mode mascotte simple). */
  hideRazor?: boolean;
}

/**
 * Mascotte SVG signature : un visage stylisé (nez, lèvre, menton) avec
 * une moustache handlebar bien marquée, rasée par un rasoir qui sweep
 * de droite à gauche, puis repousse, en boucle.
 *
 * Respecte prefers-reduced-motion (état statique : moustache complète).
 */
export function MustacheShave({
  className,
  cycleSeconds = 8,
  hideRazor = false,
}: MustacheShaveProps) {
  const reduced = useReducedMotion();
  const clipId = useId();

  /*
   * Pacing du cycle (en proportion de cycleSeconds) :
   *   0%        → moustache complète, rasoir off-screen droit
   *  10-12%     → rasoir entre dans le cadre par la droite
   *  12-42%     → rasoir glisse de droite à gauche, mustache shavée progressivement
   *  42-50%     → pause, moitié droite rasée, rasoir ressort
   *  50-78%     → état "rasée" : mustache visible uniquement à gauche
   *  78-95%     → repousse de gauche à droite (clipPath élargit jusqu'à 600)
   *  95-100%    → état "complète", attend le prochain cycle
   */
  const widthKeys = reduced ? [600] : [600, 600, 280, 280, 280, 600, 600];
  const widthTimes = reduced ? [0] : [0, 0.1, 0.42, 0.5, 0.78, 0.95, 1];

  // Position X du rasoir (centré sur le visage en x≈300, sortant à droite x≈660)
  const razorKeys = reduced ? [660] : [660, 660, 280, 280, 660, 660, 660];
  const razorTimes = reduced ? [0] : [0, 0.1, 0.42, 0.5, 0.6, 0.95, 1];

  // Hair particles tombent pendant la phase de rasage (12-42%)
  const hairParticleTransition = (delay: number) => ({
    duration: cycleSeconds,
    times: [0, delay, delay + 0.04, delay + 0.18, 1],
    repeat: reduced ? 0 : Infinity,
    ease: "easeOut" as const,
  });

  return (
    <svg
      viewBox="0 0 600 400"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      role="img"
      aria-label="Visage stylisé avec moustache handlebar rasée par un rasoir, animation en boucle"
    >
      {/* === Repères visage minimaux : pointe du nez + philtrum + lèvre === */}
      {/* Pointe du nez */}
      <g fill="currentColor">
        <path
          d="M 282,150 C 282,170 292,180 300,180 C 308,180 318,170 318,150 C 318,140 312,134 300,134 C 288,134 282,140 282,150 Z"
          opacity="0.18"
        />
        {/* Narines */}
        <ellipse cx="290" cy="172" rx="3" ry="1.6" opacity="0.45" />
        <ellipse cx="310" cy="172" rx="3" ry="1.6" opacity="0.45" />
      </g>

      {/* Philtrum (sillon naso-labial) — relie le nez à la lèvre */}
      <line
        x1="300"
        y1="184"
        x2="300"
        y2="210"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.3"
      />

      {/* Lèvre supérieure */}
      <path
        d="M 240,275 C 270,283 330,283 360,275"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />

      {/* === MUSTACHE === clippée par le rasage */}
      <defs>
        <clipPath id={clipId}>
          <motion.rect
            x="0"
            y="0"
            height="400"
            initial={{ width: 600 }}
            animate={{ width: widthKeys }}
            transition={{
              duration: cycleSeconds,
              times: widthTimes,
              repeat: reduced ? 0 : Infinity,
              ease: [0.65, 0, 0.35, 1] as const,
            }}
          />
        </clipPath>
      </defs>

      <g clipPath={`url(#${clipId})`}>
        {/* Corps de la moustache handlebar — pointes recourbées intégrées */}
        <path
          fill="currentColor"
          d="
            M 300,212
            C 285,213 268,213 252,211
            C 222,208 192,208 168,214
            C 148,219 128,217 114,209
            C 96,198 82,180 96,164
            C 112,148 138,150 150,170
            C 156,180 154,192 146,200
            C 138,208 142,220 154,228
            C 178,242 215,254 250,259
            C 273,261 290,262 300,261
            C 310,262 327,261 350,259
            C 385,254 422,242 446,228
            C 458,220 462,208 454,200
            C 446,192 444,180 450,170
            C 462,150 488,148 504,164
            C 518,180 504,198 486,209
            C 472,217 452,219 432,214
            C 408,208 378,208 348,211
            C 332,213 315,213 300,212 Z
          "
        />
        {/* Quelques traits intérieurs très subtils — hint de poils */}
        <g stroke="var(--color-bone)" strokeWidth="1" opacity="0.12" strokeLinecap="round">
          <path d="M 200,218 L 202,242" />
          <path d="M 240,226 L 241,252" />
          <path d="M 360,226 L 361,252" />
          <path d="M 400,218 L 402,242" />
        </g>
      </g>

      {/* === RAZOR === */}
      {!hideRazor && (
        <motion.g
          initial={{ x: 660 }}
          animate={{ x: razorKeys }}
          transition={{
            duration: cycleSeconds,
            times: razorTimes,
            repeat: reduced ? 0 : Infinity,
            ease: [0.65, 0, 0.35, 1] as const,
          }}
        >
          {/* Décalage local : on positionne le rasoir tip à x=0 (origine) */}
          <g transform="translate(0, 215) rotate(-4)">
            {/* Lame */}
            <path
              d="M 0,0 L -8,2 L -10,7 L -8,12 L 0,14 L 175,11 L 188,7 L 175,3 Z"
              fill="currentColor"
            />
            {/* Reflet sur la lame (highlight clair) */}
            <path
              d="M 8,4 L 170,5 L 170,7 L 8,7 Z"
              fill="var(--color-bone)"
              opacity="0.18"
            />
            {/* Arête de coupe (ligne sombre) */}
            <path
              d="M 5,12 L 175,11"
              stroke="currentColor"
              strokeWidth="0.8"
              opacity="0.5"
            />
            {/* Pivot */}
            <circle cx="190" cy="7" r="6" fill="currentColor" />
            <circle cx="190" cy="7" r="2.5" fill="var(--color-bone)" />
            {/* Manche */}
            <rect x="194" y="2" width="125" height="11" rx="2" fill="currentColor" />
            {/* Highlight sur le manche */}
            <rect x="196" y="3.5" width="121" height="1.5" fill="var(--color-bone)" opacity="0.18" />
            {/* Strie sur le manche */}
            <rect x="196" y="9" width="121" height="0.8" fill="currentColor" opacity="0.6" />
            {/* Embout du manche */}
            <rect x="319" y="0" width="6" height="15" rx="2" fill="currentColor" />
            <circle cx="322" cy="7.5" r="1.5" fill="var(--color-bone)" opacity="0.5" />
          </g>
        </motion.g>
      )}

      {/* === HAIR PARTICLES === (tombent pendant la phase de rasage) */}
      {!reduced && !hideRazor && (
        <g fill="currentColor">
          {[
            { x: 470, delay: 0.16 },
            { x: 430, delay: 0.2 },
            { x: 390, delay: 0.24 },
            { x: 350, delay: 0.28 },
            { x: 310, delay: 0.32 },
          ].map((p, i) => (
            <motion.line
              key={i}
              x1={p.x}
              y1="240"
              x2={p.x + 2}
              y2="252"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: [0, 0, 1, 0, 0],
                y: [0, 0, 0, 80, 80],
                rotate: [0, 0, 0, 30, 30],
              }}
              transition={hairParticleTransition(p.delay)}
              style={{ originX: `${p.x}px`, originY: "245px" }}
            />
          ))}
        </g>
      )}

    </svg>
  );
}
