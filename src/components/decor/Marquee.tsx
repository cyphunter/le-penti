"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Children, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
}

/**
 * Bandeau de défilement infini horizontal. Duplication automatique du contenu pour le loop.
 * Respecte prefers-reduced-motion (statique).
 */
export function Marquee({ children, speed = 50, reverse = false, className }: MarqueeProps) {
  const reduced = useReducedMotion();
  const items = Children.toArray(children);

  return (
    <div className={cn("relative overflow-hidden", className)} aria-hidden>
      <motion.div
        className="flex gap-12 whitespace-nowrap will-change-transform"
        animate={reduced ? { x: 0 } : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration: speed,
          repeat: reduced ? 0 : Infinity,
          ease: "linear",
        }}
      >
        <div className="flex shrink-0 gap-12 items-center">{items}</div>
        <div className="flex shrink-0 gap-12 items-center">{items}</div>
      </motion.div>
    </div>
  );
}

/**
 * Élément de séparation typo entre items du marquee.
 */
export function MarqueeStar() {
  return (
    <span aria-hidden className="inline-block size-1.5 rounded-full bg-current shrink-0 opacity-60" />
  );
}
