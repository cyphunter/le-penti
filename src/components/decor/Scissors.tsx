"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScissorsProps {
  className?: string;
  cycleSeconds?: number;
}

/**
 * Ciseaux barber stylisés : deux leviers en X (lame + tang + anneau)
 * pivotant autour d'un screw central. Animation : repos ouvert,
 * snip subtil, retour. Cycle ~2,8 s, easeInOut.
 *
 * - Anneaux dessinés en path evenodd (vrai trou — fonctionne sur tout fond)
 * - Lames tapered (pivot ~9 unités → pointe ~3 unités)
 * - Pivot screw avec slot
 *
 * Respecte prefers-reduced-motion (état statique ouvert).
 */
export function Scissors({ className, cycleSeconds = 2.8 }: ScissorsProps) {
  const reduced = useReducedMotion();

  const transition = {
    duration: cycleSeconds,
    repeat: reduced ? 0 : Infinity,
    times: [0, 0.55, 0.62, 0.7, 1],
    ease: [0.4, 0, 0.4, 1] as const,
  };

  return (
    <svg
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      role="img"
      aria-label="Ciseaux qui s'ouvrent et se ferment doucement, animation en boucle"
    >
      {/* === LEVIER B — lame haut-droite, anneau bas-gauche === */}
      <motion.g
        style={{ originX: "120px", originY: "130px" }}
        animate={reduced ? { rotate: 4 } : { rotate: [4, 4, 0.5, 4, 4] }}
        transition={transition}
      >
        {/* Lame */}
        <path d="M 116,130 L 170,28 L 168,30 L 124,132 Z" fill="currentColor" />
        {/* Reflet de la lame */}
        <line
          x1="121"
          y1="131"
          x2="170"
          y2="29"
          stroke="var(--color-bone)"
          strokeWidth="0.7"
          opacity="0.32"
        />

        {/* Tang */}
        <path
          d="M 120,134 C 110,156 90,180 65,205"
          stroke="currentColor"
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
        />

        {/* Anneau (donut evenodd) */}
        <path
          d="M 35,208 a 20,20 0 0 1 40,0 a 20,20 0 0 1 -40,0 M 43,208 a 12,12 0 0 1 24,0 a 12,12 0 0 1 -24,0"
          fillRule="evenodd"
          fill="currentColor"
        />
      </motion.g>

      {/* === LEVIER A — lame haut-gauche, anneau bas-droite === */}
      <motion.g
        style={{ originX: "120px", originY: "130px" }}
        animate={reduced ? { rotate: -4 } : { rotate: [-4, -4, -0.5, -4, -4] }}
        transition={transition}
      >
        {/* Lame */}
        <path d="M 124,130 L 70,28 L 72,30 L 116,132 Z" fill="currentColor" />
        <line
          x1="119"
          y1="131"
          x2="70"
          y2="29"
          stroke="var(--color-bone)"
          strokeWidth="0.7"
          opacity="0.32"
        />

        {/* Tang */}
        <path
          d="M 120,134 C 130,156 150,180 175,205"
          stroke="currentColor"
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
        />

        {/* Anneau */}
        <path
          d="M 165,208 a 20,20 0 0 1 40,0 a 20,20 0 0 1 -40,0 M 173,208 a 12,12 0 0 1 24,0 a 12,12 0 0 1 -24,0"
          fillRule="evenodd"
          fill="currentColor"
        />
      </motion.g>

      {/* === PIVOT SCREW === */}
      <circle cx="120" cy="130" r="8" fill="currentColor" />
      <circle cx="120" cy="130" r="3" fill="var(--color-bone)" />
      <line
        x1="114"
        y1="130"
        x2="126"
        y2="130"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
