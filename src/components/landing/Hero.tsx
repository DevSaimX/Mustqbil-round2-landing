import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Loader2,
  MapPin,
  Search,
  ShieldCheck,
} from "lucide-react";
import { useState, type FormEvent } from "react";

import { StaggerGroup } from "@/components/landing/StaggerGroup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export function Hero() {
  const [searchStatus, setSearchStatus] = useState<"idle" | "loading" | "complete">("idle");

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (searchStatus === "loading") {
      return;
    }

    setSearchStatus("loading");
    window.setTimeout(() => setSearchStatus("complete"), 720);
  }

  const isSearching = searchStatus === "loading";
  const isComplete = searchStatus === "complete";

  return (
    <section id="top" className="mustqbil-dark bg-hero-depth relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#071b13_0%,#0b2a1d_48%,#173c22_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-24 bg-[#113724]" />
      <div className="absolute right-0 top-0 -z-10 h-full w-1/3 bg-[#f6ca14]/[0.05]" />
      <div className="hero-light-sweep absolute inset-x-0 top-0 -z-10 h-full opacity-80" />
      <div className="career-node-field" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <div className="hero-sequence">
          <p className="inline-flex items-center gap-3 border-l-2 border-[#f6ca14] pl-4 text-sm font-medium text-[#d8d0c1]">
            <BrainCircuit className="h-4 w-4" aria-hidden="true" />
            AI-powered career matching for Pakistan
          </p>
          <h1 className="font-display mt-6 max-w-4xl text-4xl font-extrabold leading-[1.04] text-[#f6f0e4] [text-wrap:balance] sm:text-5xl md:text-6xl lg:text-7xl">
            Find work that{" "}
            <span className="mustqbil-yellow inline-block px-2 leading-[0.98]">fits you</span>
            <br />
            not just your{" "}
            <span className="mustqbil-yellow inline-block px-2 leading-[0.98]">keywords</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#d8d0c1] sm:text-lg sm:leading-8">
            Mustqbil learns your skills, goals, location preferences, and growth path to recommend
            roles where you can do meaningful work and apply with confidence.
          </p>

          <form
            className="mt-8 border border-[#f6ca14]/25 bg-[#06170f]/80 p-3 shadow-[0_22px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl transition-[border-color,box-shadow,transform] duration-[var(--motion-ui)] focus-within:border-[#f6ca14]/70 focus-within:shadow-[0_24px_70px_rgba(246,202,20,0.12)]"
            onSubmit={handleSearch}
            aria-label="Search jobs"
          >
            <div className="grid gap-3 lg:grid-cols-[1fr_0.9fr_auto]">
              <label className="relative block">
                <span className="sr-only">Job title or skill</span>
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#f6ca14]"
                  aria-hidden="true"
                />
                <Input
                  className="h-12 rounded-none border-white/15 bg-[#f7f2e8] pl-10 font-medium text-[#07140f] placeholder:text-[#5c665d] focus-visible:ring-[#f6ca14]"
                  placeholder="Job title, skill, or company"
                />
              </label>
              <label className="relative block">
                <span className="sr-only">Location</span>
                <MapPin
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#f6ca14]"
                  aria-hidden="true"
                />
                <Input
                  className="h-12 rounded-none border-white/15 bg-[#f7f2e8] pl-10 font-medium text-[#07140f] placeholder:text-[#5c665d] focus-visible:ring-[#f6ca14]"
                  placeholder="City or remote"
                />
              </label>
              <Button
                type="submit"
                disabled={isSearching}
                className="mustqbil-yellow ambient-pulse h-12 w-full rounded-none px-6 font-semibold transition-transform hover:bg-[#ffd91f] active:scale-[0.98] lg:w-auto"
              >
                {isSearching ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Matching
                  </>
                ) : isComplete ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    Matches Ready
                  </>
                ) : (
                  <>
                    Search Jobs
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </Button>
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 px-1 text-sm text-[#d8d0c1]">
              <label className="flex cursor-pointer items-center gap-3">
                <Switch
                  aria-label="Include remote jobs"
                  className="data-[state=checked]:bg-[#f6ca14]"
                />
                Include remote jobs
              </label>
              <span className="text-[#c8beaa]">Try: React, Data Analyst, Product Manager</span>
            </div>
          </form>

          <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-[#d8d0c1]">
            {["Transparent match scores", "Pakistan-first filters", "Resume-aware results"].map(
              (item) => (
                <span key={item} className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#f6ca14]" aria-hidden="true" />
                  {item}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="hero-visual-enter is-visible">
          <div className="ambient-float border border-[#f6ca14]/25 bg-[#f7f2e8] p-4 shadow-2xl shadow-black/30">
            <div className="border border-[#0c3123]/15 bg-[#ede8de] p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-[#5c665d]">AI match dashboard</p>
                  <h2 className="font-display mt-1 text-2xl font-bold text-[#07140f] sm:text-3xl">
                    Your strongest roles
                  </h2>
                </div>
                <span className="mustqbil-yellow px-3 py-1 text-sm font-semibold">
                  {isSearching ? "Matching..." : isComplete ? "Updated" : "Live demo"}
                </span>
              </div>

              <StaggerGroup className="mt-6 space-y-4">
                {[
                  ["Machine Learning Engineer", "TensorStack AI", "96%", "w-[96%]"],
                  ["AI Frontend Developer", "ByteBridge Labs", "94%", "w-[94%]"],
                  ["Associate Product Manager", "NayaPay Studio", "91%", "w-[91%]"],
                ].map(([title, company, match, width]) => (
                  <article key={title} className="border border-[#0c3123]/15 bg-[#fffaf0] p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-[#07140f]">{title}</h3>
                        <p className="mt-1 text-sm text-[#5c665d]">{company}</p>
                      </div>
                      <strong className="font-display text-2xl font-bold text-[#0b2a1d]">
                        {isComplete && title === "AI Frontend Developer" ? "98%" : match}
                      </strong>
                    </div>
                    <div className="mt-4 h-2 overflow-hidden bg-[#d7d0c3]">
                      <div
                        className={`animated-progress h-full bg-[#f6ca14] ${
                          isComplete && title === "AI Frontend Developer" ? "w-[98%]" : width
                        }`}
                      />
                    </div>
                  </article>
                ))}
              </StaggerGroup>

              <StaggerGroup className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ["28", "new matches"],
                  ["12", "saved roles"],
                  ["4", "interviews"],
                ].map(([value, label]) => (
                  <div key={label} className="border border-[#0c3123]/15 bg-[#fffaf0] p-4">
                    <p className="font-display text-3xl font-bold text-[#07140f]">
                      {isComplete && label === "new matches" ? "34" : value}
                    </p>
                    <p className="mt-1 text-xs font-medium text-[#5c665d]">{label}</p>
                  </div>
                ))}
              </StaggerGroup>

              <div className="mt-5 border border-[#0c3123]/20 bg-[#0b2a1d] p-4">
                <div className="flex gap-3">
                  <BriefcaseBusiness className="mt-0.5 h-5 w-5 text-[#f6ca14]" aria-hidden="true" />
                  <p className="text-sm leading-6 text-[#f6f0e4]">
                    {isSearching
                      ? "Scanning skills, location preferences, and job signals for stronger matches."
                      : isComplete
                        ? "Updated: 6 new high-fit jobs found for your profile and remote preference."
                        : "Recommendation: apply to 5 high-match jobs this week and update your resume summary for AI product teams."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
