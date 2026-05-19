import { cn } from "@/lib/utils";

interface BarberStripesProps {
  className?: string;
  animated?: boolean;
  variant?: "default" | "thin";
}

/**
 * Bande de rayures diagonales façon enseigne barber.
 * Default : épaisses noir/blanc, animation = défilement permanent.
 * Thin : fines, à utiliser comme texture subtile.
 */
export function BarberStripes({
  className,
  animated = false,
  variant = "default",
}: BarberStripesProps) {
  return (
    <div
      aria-hidden
      className={cn(
        variant === "thin" ? "barber-stripes-thin" : "barber-stripes",
        animated && variant === "default" && "barber-stripes-animated",
        className,
      )}
    />
  );
}
