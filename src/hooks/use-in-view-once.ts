import { useEffect, useRef, useState } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface InViewOptions {
  rootMargin?: string;
  threshold?: number;
}

export function useInViewOnce<TElement extends Element>({
  rootMargin = "0px 0px -12% 0px",
  threshold = 0.16,
}: InViewOptions = {}) {
  const ref = useRef<TElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [prefersReducedMotion, rootMargin, threshold]);

  return { ref, isInView, prefersReducedMotion };
}
