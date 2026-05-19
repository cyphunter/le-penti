import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  label?: string;
  className?: string;
  variant?: "ink" | "outline" | "bone";
  ratio?: "portrait" | "landscape" | "square";
}

const ratios = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

const variants = {
  ink: "bg-gradient-to-br from-ink via-ink-soft to-[#222] text-bone/40",
  outline: "bg-bone-soft border border-ink text-ink/30",
  bone: "bg-gradient-to-br from-bone-soft via-line to-bone text-ink/30",
};

/**
 * Visuel de remplacement haut de gamme à utiliser tant que les photos pro
 * ne sont pas livrées. À remplacer par <Image src="/photos/..." />.
 */
export function PlaceholderImage({
  label,
  className,
  variant = "ink",
  ratio = "portrait",
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        ratios[ratio],
        variants[variant],
        className,
      )}
      role="img"
      aria-label={label ?? "Visuel à remplacer"}
    >
      {/* Texture subtile */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 30%, rgba(255,255,255,0.6), transparent 50%), radial-gradient(circle at 75% 70%, rgba(0,0,0,0.4), transparent 50%)",
        }}
      />
      {/* Diagonal stripes accent thin */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 8px)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between gap-4">
        <span className={cn("font-display italic text-lg tracking-tight")}>
          {label ?? "À photographier"}
        </span>
        <span className={cn("text-[10px] uppercase tracking-[0.2em]")}>
          Le Penn&apos;ti
        </span>
      </div>
    </div>
  );
}
