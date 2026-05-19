import { cn } from "@/lib/utils";

/** Peigne barber simple en SVG. */
export function Comb({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      role="img"
      aria-label="Peigne"
    >
      <rect x="10" y="10" width="180" height="14" rx="2" fill="currentColor" />
      {Array.from({ length: 28 }, (_, i) => (
        <rect key={i} x={14 + i * 6} y="22" width="2" height={i % 4 === 0 ? 32 : 26} fill="currentColor" />
      ))}
    </svg>
  );
}
