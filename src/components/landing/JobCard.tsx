import { Bookmark, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Job } from "@/types/landing";

interface JobCardProps {
  job: Job;
  isBookmarked: boolean;
  onToggleBookmark: (jobId: string) => void;
}

export function JobCard({ job, isBookmarked, onToggleBookmark }: JobCardProps) {
  return (
    <article className="mustqbil-panel premium-lift group flex h-full flex-col border p-5 shadow-sm hover:border-[#f6ca14] hover:shadow-xl hover:shadow-[#0b2a1d]/10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-[#5c665d]">{job.company}</p>
          <h3 className="font-display mt-2 text-2xl font-bold leading-tight text-[#07140f]">
            {job.title}
          </h3>
        </div>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          className="shrink-0 rounded-none text-[#5c665d] transition-transform hover:bg-[#f6ca14] hover:text-[#07140f] active:scale-[0.92]"
          aria-label={`${isBookmarked ? "Remove" : "Save"} ${job.title} at ${job.company}`}
          aria-pressed={isBookmarked}
          onClick={() => onToggleBookmark(job.id)}
        >
          <Bookmark
            className={`transition-all duration-[var(--motion-fast)] ${
              isBookmarked ? "scale-110 fill-[#f6ca14] text-[#07140f]" : "scale-100"
            }`}
            aria-hidden="true"
          />
        </Button>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-[#47534b]">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-4 w-4 text-[#5c665d]" aria-hidden="true" />
          {job.location}
        </span>
        <span aria-hidden="true">/</span>
        <span>{job.type}</span>
        {job.remote && (
          <Badge className="mustqbil-yellow rounded-none hover:bg-[#ffd91f]">Remote</Badge>
        )}
      </div>

      <div className="mt-5 grid gap-3 bg-[#ede8de] p-4">
        <div className="flex items-center justify-between gap-3 text-sm">
          <span className="font-semibold text-[#5c665d]">AI match</span>
          <strong className="font-display text-2xl font-bold leading-none text-[#07140f]">
            {job.matchPercentage}%
          </strong>
        </div>
        <div className="h-2 overflow-hidden bg-[#d7d0c3]">
          <div
            className="animated-progress h-full bg-[#f6ca14]"
            style={{ width: `${job.matchPercentage}%` }}
          />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {job.highlights.map((highlight) => (
          <span key={highlight} className="bg-[#0b2a1d]/8 px-2.5 py-1 text-xs text-[#47534b]">
            {highlight}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-5">
        <div className="flex items-center justify-between gap-3 border-t border-[#0c3123]/10 pt-4 text-sm">
          <span className="font-bold text-[#07140f]">{job.salary}</span>
          <span className="text-[#5c665d]">{job.postedDate}</span>
        </div>
      </div>
    </article>
  );
}
