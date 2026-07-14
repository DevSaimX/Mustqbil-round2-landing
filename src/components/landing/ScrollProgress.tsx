import { cn } from "@/lib/utils";

interface ScrollProgressProps {
  className?: string;
  orientation: "horizontal" | "vertical";
  progress: number;
}

export function ScrollProgress({ className, orientation, progress }: ScrollProgressProps) {
  const clampedProgress = Math.min(Math.max(progress, 0), 100) / 100;
  const isVertical = orientation === "vertical";

  return (
    <div className={cn("bg-[#0c3123]/12", className)} aria-hidden="true">
      <div
        className={cn(
          "h-full w-full origin-left bg-[#f6ca14] transition-transform duration-[var(--motion-reveal)] ease-out",
          isVertical && "origin-top",
        )}
        style={{
          transform: isVertical ? `scaleY(${clampedProgress})` : `scaleX(${clampedProgress})`,
        }}
      />
    </div>
  );
}
