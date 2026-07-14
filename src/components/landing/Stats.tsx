import { AnimatedCounter } from "@/components/landing/AnimatedCounter";
import { stats } from "@/data/landing";

export function Stats() {
  return (
    <section aria-labelledby="stats-heading" className="mustqbil-dark border-y border-[#f6ca14]/20">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:px-8">
        <h2 id="stats-heading" className="sr-only">
          Mustqbil platform statistics
        </h2>
        <div className="stagger-children grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </div>
    </section>
  );
}
