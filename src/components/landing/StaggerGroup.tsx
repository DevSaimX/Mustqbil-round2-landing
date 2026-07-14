import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";

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

  return (
    <Component className={cn("stagger-children", className)} {...props}>
      {children}
    </Component>
  );
}
