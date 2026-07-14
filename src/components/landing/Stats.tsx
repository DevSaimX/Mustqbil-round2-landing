import { AnimatedCounter } from "@/components/landing/AnimatedCounter";
import { StaggerGroup } from "@/components/landing/StaggerGroup";
import { stats } from "@/data/landing";

export function Stats() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="mustqbil-dark bg-stats-depth relative overflow-hidden border-y border-[#f6ca14]/20"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:px-8">
        <h2 id="stats-heading" className="sr-only">
          Mustqbil platform statistics
        </h2>
        <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="premium-lift border border-white/10 bg-white/[0.04] p-5 hover:border-[#f6ca14]/45 hover:bg-white/[0.07]"
            >
              <p className="font-display text-4xl font-extrabold text-[#f6ca14]">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="mt-2 font-semibold text-[#f6f0e4]">{stat.label}</p>
              <p className="mt-1 text-sm leading-6 text-[#c8beaa]">{stat.detail}</p>
            </div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
