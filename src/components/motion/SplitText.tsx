"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.04,
  as = "h1",
}: SplitTextProps) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    const Tag = as as keyof React.JSX.IntrinsicElements;
    return <Tag className={cn(className)}>{text}</Tag>;
  }

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={cn("flex flex-wrap", className)}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      aria-label={text}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden pb-[0.12em] mr-[0.25em] last:mr-0">
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
