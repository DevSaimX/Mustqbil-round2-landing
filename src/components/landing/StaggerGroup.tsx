import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";

import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";

interface StaggerGroupProps<TElement extends ElementType = "div"> {
  as?: TElement;
  children: ReactNode;
  className?: string;
}

export function StaggerGroup<TElement extends ElementType = "div">({
  as,
  children,
  className,
  ...props
}: StaggerGroupProps<TElement> &
  Omit<ComponentPropsWithoutRef<TElement>, keyof StaggerGroupProps<TElement>>) {
  const Component = as ?? "div";
  const { ref, isInView } = useInViewOnce<HTMLElement>();

  return (
    <Component
      ref={ref}
      className={cn("stagger-children", isInView && "is-visible", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
