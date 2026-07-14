import { useEffect, useMemo, useRef, useState } from "react";

import { JobCard } from "@/components/landing/JobCard";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { StaggerGroup } from "@/components/landing/StaggerGroup";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { jobCategories, jobs } from "@/data/landing";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import type { JobCategory } from "@/types/landing";

const BOOKMARK_STORAGE_KEY = "mustqbil-bookmarked-jobs";
const MOBILE_JOB_LIMIT = 3;

type FilterCategory = JobCategory | "All";

export function FeaturedJobs() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");
  const [displayedCategory, setDisplayedCategory] = useState<FilterCategory>("All");
  const [bookmarkedJobs, setBookmarkedJobs] = useState<Set<string>>(() => new Set());
  const [isLoading, setIsLoading] = useState(false);
  const [showAllMobileJobs, setShowAllMobileJobs] = useState(false);
  const loadingTimeoutRef = useRef<number | null>(null);
  const filterAreaRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    try {
      const savedJobs = window.localStorage.getItem(BOOKMARK_STORAGE_KEY);
      if (savedJobs) {
        setBookmarkedJobs(new Set(JSON.parse(savedJobs) as string[]));
      }
    } catch {
      setBookmarkedJobs(new Set());
    }
  }, []);

  useEffect(
    () => () => {
      if (loadingTimeoutRef.current !== null) {
        window.clearTimeout(loadingTimeoutRef.current);
      }
    },
    [],
  );

  const filteredJobs = useMemo(() => {
    if (displayedCategory === "All") {
      return jobs;
    }

    return jobs.filter((job) => job.category === displayedCategory);
  }, [displayedCategory]);

  const hasMoreMobileJobs = filteredJobs.length > MOBILE_JOB_LIMIT;

  function toggleMobileJobs() {
    if (showAllMobileJobs) {
      setShowAllMobileJobs(false);

      window.requestAnimationFrame(() => {
        filterAreaRef.current?.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "start",
        });
      });

      return;
    }

    setShowAllMobileJobs(true);
  }

  function toggleBookmark(jobId: string) {
    setBookmarkedJobs((currentBookmarks) => {
      const nextBookmarks = new Set(currentBookmarks);

      if (nextBookmarks.has(jobId)) {
        nextBookmarks.delete(jobId);
      } else {
        nextBookmarks.add(jobId);
      }

      try {
        window.localStorage.setItem(BOOKMARK_STORAGE_KEY, JSON.stringify([...nextBookmarks]));
      } catch {
        // Keep the UI responsive even when storage is blocked or unavailable.
      }

      return nextBookmarks;
    });
  }

  function selectCategory(category: FilterCategory) {
    if (category === activeCategory) {
      return;
    }

    if (loadingTimeoutRef.current !== null) {
      window.clearTimeout(loadingTimeoutRef.current);
    }

    setActiveCategory(category);
    setDisplayedCategory(category);
    setShowAllMobileJobs(false);
    setIsLoading(true);

    loadingTimeoutRef.current = window.setTimeout(() => {
      setIsLoading(false);
      loadingTimeoutRef.current = null;
    }, 520);
  }

  return (
    <section
      id="jobs"
      className="mustqbil-section bg-jobs-depth relative overflow-hidden pb-0 pt-12 md:pt-14 lg:pt-14"
    >
      <div className="job-discovery-art" aria-hidden="true">
        <svg viewBox="0 0 1440 760" preserveAspectRatio="xMidYMid slice">
          <path
            className="job-route-line"
            d="M-30 238 C 158 124, 296 214, 448 170 S 760 86, 918 206 S 1184 364, 1468 216"
          />
          <path
            className="job-route-line job-route-line-secondary"
            d="M60 610 C 226 500, 392 638, 558 544 S 842 388, 1034 506 S 1248 646, 1470 502"
          />
          <g className="job-map-nodes">
            <path d="M190 370 L360 300 L532 364 L742 276 L944 356 L1168 282" />
            <circle cx="190" cy="370" r="10" />
            <circle cx="360" cy="300" r="8" />
            <circle cx="532" cy="364" r="11" />
            <circle cx="742" cy="276" r="9" />
            <circle cx="944" cy="356" r="10" />
            <circle cx="1168" cy="282" r="8" />
          </g>
          <g className="job-pins">
            <path d="M250 182 c0 -28 22 -50 50 -50 s50 22 50 50 c0 38 -50 92 -50 92 s-50 -54 -50 -92 Z" />
            <circle cx="300" cy="182" r="14" />
            <path d="M1048 448 c0 -24 20 -44 44 -44 s44 20 44 44 c0 34 -44 82 -44 82 s-44 -48 -44 -82 Z" />
            <circle cx="1092" cy="448" r="12" />
          </g>
          <g className="job-discovery-labels">
            <text x="138" y="492">
              Lahore
            </text>
            <text x="680" y="228">
              Remote
            </text>
            <text x="1110" y="594">
              Karachi
            </text>
          </g>
          <g className="job-compass">
            <circle cx="1252" cy="138" r="44" />
            <path d="M1252 106 l14 48 -14 18 -14 -18 Z" />
          </g>
        </svg>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="heading-protection heading-protection-left">
            <SectionHeading
              eyebrow="Featured jobs"
              title="High-fit roles across Pakistan and remote teams"
              description="Filter realistic demo jobs by category, compare AI match scores, and save roles locally while you explore."
            />
          </div>
          <p className="text-sm font-medium text-[#5c665d]">
            {bookmarkedJobs.size} saved {bookmarkedJobs.size === 1 ? "job" : "jobs"}
          </p>
        </div>

        <div ref={filterAreaRef} className="scroll-mt-[calc(var(--navbar-height)+1rem)]">
          <StaggerGroup
            className="mt-8 flex flex-wrap gap-2 pb-1"
            aria-label="Filter jobs by category"
          >
            {jobCategories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <Button
                  key={category}
                  type="button"
                  variant={isActive ? "default" : "outline"}
                  className={
                    isActive
                      ? "mustqbil-yellow shrink-0 rounded-none border border-[#f6ca14] font-semibold hover:bg-[#ffd91f]"
                      : "shrink-0 rounded-none border-[#0c3123]/20 bg-transparent font-semibold text-[#0b2a1d] hover:bg-[#0b2a1d] hover:text-[#f6f0e4]"
                  }
                  aria-pressed={isActive}
                  onClick={() => selectCategory(category)}
                >
                  {category}
                </Button>
              );
            })}
          </StaggerGroup>
        </div>

        <StaggerGroup
          id="featured-jobs-grid"
          className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          aria-live="polite"
        >
          {isLoading
            ? Array.from({ length: 6 }, (_, index) => (
                <div
                  key={index}
                  className={`mustqbil-panel border p-5 ${
                    index >= MOBILE_JOB_LIMIT ? "hidden md:block" : ""
                  }`}
                >
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="mt-4 h-7 w-4/5" />
                  <Skeleton className="mt-6 h-20 w-full" />
                  <Skeleton className="mt-5 h-5 w-3/5" />
                </div>
              ))
            : filteredJobs.map((job, index) => (
                <div
                  key={job.id}
                  className={
                    !showAllMobileJobs && index >= MOBILE_JOB_LIMIT ? "hidden md:block" : ""
                  }
                >
                  <JobCard
                    job={job}
                    isBookmarked={bookmarkedJobs.has(job.id)}
                    onToggleBookmark={toggleBookmark}
                  />
                </div>
              ))}
        </StaggerGroup>

        {!isLoading && hasMoreMobileJobs ? (
          <div className="mt-8 flex justify-center md:hidden">
            <Button
              type="button"
              variant="outline"
              className="rounded-none border-[#0c3123]/25 bg-[#f6f0e4]/70 px-6 font-semibold text-[#0b2a1d] hover:border-[#f6ca14] hover:bg-[#f6ca14] hover:text-[#07140f]"
              aria-expanded={showAllMobileJobs}
              aria-controls="featured-jobs-grid"
              onClick={toggleMobileJobs}
            >
              {showAllMobileJobs ? "Show fewer jobs" : "Show more jobs"}
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
