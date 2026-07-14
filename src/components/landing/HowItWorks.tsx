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
      className="mustqbil-section bg-workflow-depth relative overflow-hidden pb-12 pt-14 md:pb-16 md:pt-16 lg:pb-20 lg:pt-20"
      id="how-it-works"
    >
      <div className="workflow-journey-art" aria-hidden="true">
        <svg viewBox="0 0 1440 680" preserveAspectRatio="xMidYMid slice">
          <path
            className="journey-path"
            d="M72 332 C 192 168, 330 214, 428 316 S 652 486, 776 332 S 1000 166, 1136 314 S 1328 470, 1432 294"
          />
          <path
            className="journey-path journey-path-lower"
            d="M-20 518 C 174 430, 326 566, 500 492 S 842 398, 1038 504 S 1278 584, 1480 458"
          />
          <g className="journey-main-nodes">
            <circle cx="220" cy="260" r="28" />
            <circle cx="540" cy="392" r="30" />
            <circle cx="858" cy="246" r="28" />
            <circle cx="1178" cy="358" r="31" />
          </g>
          <g className="journey-milestones">
            <circle cx="356" cy="292" r="7" />
            <circle cx="698" cy="398" r="7" />
            <circle cx="1018" cy="278" r="7" />
            <circle cx="1294" cy="366" r="7" />
          </g>
          <g className="journey-arrows">
            <path d="M442 314 l42 12 -38 22" />
            <path d="M760 346 l42 -10 -24 34" />
            <path d="M1088 314 l42 12 -38 22" />
          </g>
          <g className="journey-labels">
            <text x="165" y="210">
              Profile
            </text>
            <text x="492" y="456">
              Match
            </text>
            <text x="816" y="196">
              Apply
            </text>
            <text x="1130" y="430">
              Track
            </text>
          </g>
          <g className="journey-icons">
            <rect x="120" y="470" width="92" height="70" rx="12" />
            <path d="M144 494 h44 M144 514 h28" />
            <circle cx="398" cy="138" r="38" />
            <path d="M382 138 l12 12 24 -28" />
            <rect x="1010" y="494" width="100" height="74" rx="14" />
            <path d="M1036 538 v-22 M1060 538 v-38 M1084 538 v-28" />
          </g>
        </svg>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="heading-protection heading-protection-workflow">
          <SectionHeading
            eyebrow="How it works"
            title="A clearer path from profile to progress"
            description="The product flow is simple enough for first-time job seekers and structured enough for experienced professionals managing multiple applications."
            align="center"
          />
        </div>

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
          <StaggerGroup className="relative grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {howItWorks.map((step, index) => (
              <article
                key={step.title}
                className={`mustqbil-panel premium-lift relative border p-5 hover:border-[#f6ca14] sm:p-6 ${
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
