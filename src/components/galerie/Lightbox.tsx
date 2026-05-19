"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export interface GalleryItem {
  id: string;
  label: string;
  span: "default" | "tall" | "wide";
  variant: "ink" | "outline" | "bone";
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const reduced = useReducedMotion();
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i === null ? null : (i + 1) % items.length));
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, items.length]);

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 [grid-auto-flow:dense]">
        {items.map((item, i) => (
          <li
            key={item.id}
            className={cn(
              "group",
              item.span === "tall" && "lg:row-span-2",
              item.span === "wide" && "sm:col-span-2",
            )}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Agrandir : ${item.label}`}
              className="relative block size-full overflow-hidden rounded-sm"
            >
              <div className="size-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]">
                <PlaceholderImage
                  label={item.label}
                  variant={item.variant}
                  ratio={item.span === "tall" ? "portrait" : item.span === "wide" ? "landscape" : "square"}
                />
              </div>
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500" />
              <span className="absolute bottom-4 left-4 text-bone text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Voir
              </span>
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-ink/95 backdrop-blur-sm"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            role="dialog"
            aria-modal="true"
            aria-label="Galerie agrandie"
          >
            <button
              type="button"
              aria-label="Fermer"
              onClick={() => setActiveIndex(null)}
              className="absolute top-6 right-6 inline-flex items-center justify-center size-12 rounded-full bg-bone/10 text-bone hover:bg-bone/20 transition-colors"
            >
              <X className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Précédent"
              onClick={() => setActiveIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length))}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 inline-flex items-center justify-center size-12 rounded-full bg-bone/10 text-bone hover:bg-bone/20 transition-colors"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Suivant"
              onClick={() => setActiveIndex((i) => (i === null ? null : (i + 1) % items.length))}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 inline-flex items-center justify-center size-12 rounded-full bg-bone/10 text-bone hover:bg-bone/20 transition-colors"
            >
              <ChevronRight className="size-5" />
            </button>
            <motion.div
              key={activeIndex}
              initial={reduced ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-3xl"
            >
              <PlaceholderImage
                label={items[activeIndex].label}
                variant={items[activeIndex].variant}
                ratio="landscape"
                className="rounded-sm"
              />
              <div className="mt-4 flex items-center justify-between text-bone/70 text-sm">
                <span className="font-display italic text-lg text-bone">
                  {items[activeIndex].label}
                </span>
                <span className="tabular-nums">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
