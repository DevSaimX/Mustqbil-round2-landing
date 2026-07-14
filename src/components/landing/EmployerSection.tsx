import { ArrowRight, ClipboardCheck, FilePlus2, ListChecks, SlidersHorizontal } from "lucide-react";

import { StaggerGroup } from "@/components/landing/StaggerGroup";
import { Button } from "@/components/ui/button";

const employerBenefits = [
  { label: "AI-generated job descriptions", icon: FilePlus2 },
  { label: "Candidate screening", icon: ClipboardCheck },
  { label: "Ranked shortlists", icon: ListChecks },
  { label: "Applicant management", icon: SlidersHorizontal },
];

export function EmployerSection() {
  return (
    <section
      id="employers"
      className="mustqbil-dark bg-employer-depth relative overflow-hidden pb-8 pt-12 md:pb-10 md:pt-16 lg:pb-12 lg:pt-20"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold text-[#f6ca14]">For employers</p>
          <h2 className="font-display mt-3 text-3xl font-extrabold leading-[1.08] text-[#f6f0e4] [text-wrap:balance] sm:text-4xl md:text-5xl">
            Hire faster with structured AI support, not noisy applicant piles.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#d8d0c1] sm:text-lg sm:leading-8">
            Mustqbil helps hiring teams write clearer roles, evaluate candidates consistently, and
            move strong applicants through a focused pipeline.
          </p>
          <Button
            asChild
            id="post-job"
            className="mustqbil-yellow ambient-pulse mt-8 scroll-mt-24 rounded-none font-semibold transition-transform hover:bg-[#ffd91f] active:scale-[0.98]"
          >
            <a href="#post-job">
              Post a Job
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>

        <StaggerGroup className="grid gap-4 sm:grid-cols-2">
          {employerBenefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.label}
                className="premium-lift border border-white/10 bg-white/[0.05] p-5 hover:border-[#f6ca14]/45 hover:bg-white/[0.08]"
              >
                <div className="mustqbil-yellow grid h-11 w-11 place-items-center">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-display mt-5 text-2xl font-bold leading-tight">
                  {benefit.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#c8beaa]">
                  Keep hiring decisions explainable, organized, and easier to compare across roles.
                </p>
              </article>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
