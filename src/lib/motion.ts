export const motion = {
  duration: {
    fast: 180,
    ui: 320,
    reveal: 640,
  },
  delay: {
    stagger: 90,
  },
  distance: {
    reveal: 28,
    hover: 4,
  },
  scale: {
    press: 0.98,
    reveal: 0.985,
  },
  easing: {
    standard: "cubic-bezier(0.22, 1, 0.36, 1)",
    emphasized: "cubic-bezier(0.16, 1, 0.3, 1)",
  },
} as const;
