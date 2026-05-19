import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article" | "header" | "footer";
}

export function Section({
  as: Tag = "section",
  className,
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cn("relative py-24 sm:py-32 lg:py-40", className)}
      {...props}
    />
  );
}

export function Eyebrow({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-mute",
        className,
      )}
      {...props}
    >
      <span className="h-px w-8 bg-current opacity-50" aria-hidden />
      {children}
    </span>
  );
}
