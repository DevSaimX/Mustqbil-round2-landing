import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { StaggerGroup } from "@/components/landing/StaggerGroup";
import { howItWorks } from "@/data/landing";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { motion } from "@/lib/motion";

export function HowItWorks() {
  const { ref, isInView, prefersReducedMotion } = useInViewOnce<HTMLDivElement>({
    threshold: 0.3,
  });
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    if (prefersReducedMotion) {
      setActiveStep(howItWorks.length - 1);
      return;
    }

    const timers = howItWorks.map((_, index) =>
      window.setTimeout(() => setActiveStep(index), index * motion.delay.stagger * 1.25),
    );

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [isInView, prefersReducedMotion]);

  const progress = ((activeStep + 1) / howItWorks.length) * 100;

  return (
    <section
      className="mustqbil-section pb-12 pt-14 md:pb-16 md:pt-16 lg:pb-20 lg:pt-20"
      id="how-it-works"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="A clearer path from profile to progress"
          description="The product flow is simple enough for first-time job seekers and structured enough for experienced professionals managing multiple applications."
          align="center"
        />

        <div ref={ref} className="relative mt-12">
          <ScrollProgress
            orientation="vertical"
            progress={progress}
            className="absolute bottom-6 left-6 top-6 w-px lg:hidden"
          />
          <ScrollProgress
            orientation="horizontal"
            progress={progress}
            className="absolute left-[12%] right-[12%] top-8 hidden h-px lg:block"
          />
          <StaggerGroup className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step, index) => (
              <article
                key={step.title}
                className={`mustqbil-panel premium-lift relative border p-6 hover:border-[#f6ca14] ${
                  index <= activeStep ? "border-[#f6ca14] shadow-lg shadow-[#0b2a1d]/8" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-[#5c665d]">Step {index + 1}</span>
                  <CheckCircle2
                    className={`h-5 w-5 transition-transform duration-[var(--motion-ui)] ${
                      index <= activeStep ? "scale-110 text-[#f6ca14]" : "text-[#9f947f]"
                    }`}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display mt-6 text-2xl font-bold leading-tight text-[#07140f]">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-[#47534b]">{step.description}</p>
              </article>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
