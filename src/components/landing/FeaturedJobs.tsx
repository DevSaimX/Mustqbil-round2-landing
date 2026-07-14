import { useEffect, useMemo, useRef, useState } from "react";

import { JobCard } from "@/components/landing/JobCard";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { StaggerGroup } from "@/components/landing/StaggerGroup";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { jobCategories, jobs } from "@/data/landing";
import type { JobCategory } from "@/types/landing";

const BOOKMARK_STORAGE_KEY = "mustqbil-bookmarked-jobs";

type FilterCategory = JobCategory | "All";

export function FeaturedJobs() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");
  const [displayedCategory, setDisplayedCategory] = useState<FilterCategory>("All");
  const [bookmarkedJobs, setBookmarkedJobs] = useState<Set<string>>(() => new Set());
  const [isLoading, setIsLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const hasFiltered = useRef(false);

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

  useEffect(() => {
    if (!hasFiltered.current) {
      hasFiltered.current = true;
      return;
    }

    setIsTransitioning(true);

    const fadeTimeoutId = window.setTimeout(() => {
      setDisplayedCategory(activeCategory);
      setIsLoading(true);
    }, 170);

    const finishTimeoutId = window.setTimeout(() => {
      setIsLoading(false);
      setIsTransitioning(false);
    }, 520);

    return () => {
      window.clearTimeout(fadeTimeoutId);
      window.clearTimeout(finishTimeoutId);
    };
  }, [activeCategory]);

  const filteredJobs = useMemo(() => {
    if (displayedCategory === "All") {
      return jobs;
    }

    return jobs.filter((job) => job.category === displayedCategory);
  }, [displayedCategory]);

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

  return (
    <section id="jobs" className="mustqbil-section pb-0 pt-12 md:pt-14 lg:pt-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Featured jobs"
            title="High-fit roles across Pakistan and remote teams"
            description="Filter realistic demo jobs by category, compare AI match scores, and save roles locally while you explore."
          />
          <p className="text-sm font-medium text-[#5c665d]">
            {bookmarkedJobs.size} saved {bookmarkedJobs.size === 1 ? "job" : "jobs"}
          </p>
        </div>

        <StaggerGroup
          className="mt-8 flex gap-2 overflow-x-auto pb-2"
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
                onClick={() => {
                  if (category !== activeCategory) {
                    setActiveCategory(category);
                  }
                }}
              >
                {category}
              </Button>
            );
          })}
        </StaggerGroup>

        <StaggerGroup
          className={`mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3 ${
            isTransitioning && !isLoading ? "filtering-out" : ""
          }`}
          aria-live="polite"
        >
          {isLoading
            ? Array.from({ length: 6 }, (_, index) => (
                <div key={index} className="mustqbil-panel border p-5">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="mt-4 h-7 w-4/5" />
                  <Skeleton className="mt-6 h-20 w-full" />
                  <Skeleton className="mt-5 h-5 w-3/5" />
                </div>
              ))
            : filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  isBookmarked={bookmarkedJobs.has(job.id)}
                  onToggleBookmark={toggleBookmark}
                />
              ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
