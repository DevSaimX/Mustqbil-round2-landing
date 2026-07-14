import { useEffect, useMemo, useState } from "react";

import { useInViewOnce } from "@/hooks/use-in-view-once";
import { motion } from "@/lib/motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

function parseCounterValue(value: string) {
  const match = value.match(/^([\d,.]+)(.*)$/);
  const numericValue = match?.[1] ? Number(match[1].replaceAll(",", "")) : 0;
  const suffix = match?.[2] ?? "";

  return { numericValue, suffix };
}

function formatCounter(value: number) {
  return Math.round(value).toLocaleString("en-US");
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const { numericValue, suffix } = useMemo(() => parseCounterValue(value), [value]);
  const { ref, isInView, prefersReducedMotion } = useInViewOnce<HTMLSpanElement>({
    threshold: 0.45,
  });
  const [displayValue, setDisplayValue] = useState(prefersReducedMotion ? numericValue : 0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    if (prefersReducedMotion) {
      setDisplayValue(numericValue);
      return;
    }

    let animationFrame = 0;
    const startTime = performance.now();
    const duration = motion.duration.reveal + 180;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(numericValue * easedProgress);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    }

    animationFrame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, numericValue, prefersReducedMotion]);

  return (
    <span ref={ref} className={className}>
      {formatCounter(displayValue)}
      {suffix}
    </span>
  );
}
