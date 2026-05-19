import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  children: ReactNode;
  className?: string;
}

const base =
  "group relative inline-flex items-center justify-center gap-2.5 font-medium tracking-tight transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] disabled:opacity-50 disabled:cursor-not-allowed will-change-transform";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-bone hover:bg-ink-soft hover:text-bone shadow-[0_1px_0_0_rgba(0,0,0,0.06)] hover:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.4)]",
  secondary:
    "bg-bone text-ink border border-ink hover:bg-ink hover:text-bone",
  ghost:
    "bg-transparent text-ink hover:bg-ink/5 underline-offset-4 hover:underline decoration-ink",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-sm rounded-full",
  md: "h-12 px-7 text-[15px] rounded-full",
  lg: "h-14 px-9 text-base rounded-full",
};

interface ButtonProps
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> {}

export function Button({
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight
          aria-hidden
          className="size-4 -translate-y-px transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-1"
        />
      )}
    </button>
  );
}

interface LinkButtonProps
  extends CommonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className" | "href"> {
  href: string;
  external?: boolean;
}

export function LinkButton({
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  children,
  href,
  external = false,
  ...props
}: LinkButtonProps) {
  if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={cn(base, variants[variant], sizes[size], className)}
        {...(external || href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...props}
      >
        <span>{children}</span>
        {withArrow && (
          <ArrowUpRight
            aria-hidden
            className="size-4 -translate-y-px transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-1"
          />
        )}
      </a>
    );
  }
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight
          aria-hidden
          className="size-4 -translate-y-px transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-1"
        />
      )}
    </Link>
  );
}
