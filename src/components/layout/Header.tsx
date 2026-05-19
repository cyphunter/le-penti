"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { LinkButton } from "@/components/ui/Button";
import { site } from "@/lib/site";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/equipe", label: "Équipe" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

/** Petite moustache statique pour le logo (version simplifiée). */
function MustacheGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 30"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      aria-hidden
    >
      <path
        d="M 40,10
          C 46,7 54,7 61,9
          C 67,11 73,14 76,18
          C 78,21 78,23 75,24
          C 72,24 67,21 64,18
          C 60,14 54,12 47,13
          C 43,14 41,15 40,16
          C 39,15 37,14 33,13
          C 26,12 20,14 16,18
          C 13,21 8,24 5,24
          C 2,23 2,21 4,18
          C 7,14 13,11 19,9
          C 26,7 34,7 40,10 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "bg-bone/90 backdrop-blur-xl border-b border-ink/15 py-3"
            : "bg-transparent py-5",
        )}
      >
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6 sm:px-8 lg:px-14 flex items-center justify-between gap-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-ink"
            aria-label={`${site.name} — Accueil`}
          >
            <MustacheGlyph className="w-7 h-auto transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110" />
            <span className="font-display text-xl sm:text-2xl tracking-tight leading-none">
              <span className="italic font-light">Le</span>{" "}
              <span className="font-medium">Penn&apos;ti</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 text-[15px]" aria-label="Navigation principale">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2 text-ink/80 hover:text-ink transition-colors"
              >
                <span className="relative">
                  {item.label}
                  <span
                    aria-hidden
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-ink origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                  />
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LinkButton href="/reservation" size="sm" withArrow className="hidden sm:inline-flex">
              Prendre rendez-vous
            </LinkButton>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              className="lg:hidden inline-flex items-center justify-center size-11 rounded-full border border-ink/30 bg-paper/60 text-ink hover:bg-paper transition-colors"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-opacity duration-500",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Fermer le menu"
          className="absolute inset-0 bg-ink/30 backdrop-blur-sm"
        />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-full max-w-md bg-bone shadow-2xl flex flex-col",
            "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-ink/15">
            <span className="font-display text-xl inline-flex items-center gap-3">
              <MustacheGlyph className="w-7 h-auto" />
              <span><span className="italic font-light">Le</span> <span className="font-medium">Penn&apos;ti</span></span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fermer"
              className="inline-flex items-center justify-center size-11 rounded-full border border-ink/30"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col px-6 py-8 gap-1" aria-label="Navigation mobile">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl py-3 border-b border-ink/15 hover:italic transition-colors"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pb-8">
            <LinkButton href="/reservation" size="lg" withArrow className="w-full" onClick={() => setOpen(false)}>
              Prendre rendez-vous
            </LinkButton>
          </div>
        </div>
      </div>
    </>
  );
}
