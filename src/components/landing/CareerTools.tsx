import {
  Bot,
  FileText,
  KanbanSquare,
  MessageSquareText,
  ScanSearch,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/landing/SectionHeading";
import { StaggerGroup } from "@/components/landing/StaggerGroup";
import { careerTools } from "@/data/landing";
import type { CareerTool } from "@/types/landing";

const toolIcons: Record<CareerTool["icon"], LucideIcon> = {
  file: FileText,
  scan: ScanSearch,
  sparkles: Sparkles,
  messages: MessageSquareText,
  kanban: KanbanSquare,
  bot: Bot,
};

export function CareerTools() {
  return (
    <section
      id="career-tools"
      className="mustqbil-section bg-tools-depth relative overflow-hidden pb-0 pt-14 md:pt-16 lg:pt-20"
    >
      <div className="tools-system-art" aria-hidden="true">
        <svg viewBox="0 0 1440 720" preserveAspectRatio="xMidYMid slice">
          <path
            className="tool-flow-line"
            d="M88 250 H 302 C 372 250, 388 340, 456 340 H 652 C 720 340, 748 228, 824 228 H 1116 C 1196 228, 1208 332, 1324 332"
          />
          <path
            className="tool-flow-line tool-flow-line-secondary"
            d="M10 540 H 206 C 282 540, 300 458, 376 458 H 560 C 640 458, 670 588, 746 588 H 1008 C 1084 588, 1114 492, 1210 492 H 1460"
          />
          <g className="tool-system-nodes">
            <circle cx="302" cy="250" r="13" />
            <circle cx="456" cy="340" r="10" />
            <circle cx="652" cy="340" r="12" />
            <circle cx="824" cy="228" r="10" />
            <circle cx="1116" cy="228" r="13" />
            <circle cx="376" cy="458" r="10" />
            <circle cx="746" cy="588" r="12" />
            <circle cx="1210" cy="492" r="10" />
          </g>
          <g className="tool-system-cards">
            <rect x="120" y="118" width="120" height="76" rx="14" />
            <path d="M148 144 h56 M148 164 h34" />
            <rect x="590" y="118" width="132" height="82" rx="16" />
            <path d="M620 162 l18 18 42 -50" />
            <rect x="1038" y="390" width="138" height="86" rx="16" />
            <path d="M1070 438 v-22 M1102 438 v-44 M1134 438 v-32" />
          </g>
          <g className="tool-branch-labels">
            <text x="180" y="304">
              Build
            </text>
            <text x="636" y="410">
              Analyze
            </text>
            <text x="1038" y="286">
              Prepare
            </text>
          </g>
          <g className="tool-mini-glyphs">
            <path d="M1294 156 l16 16 32 -42" />
            <circle cx="972" cy="154" r="28" />
            <path d="M956 154 h32 M972 138 v32" />
          </g>
        </svg>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="heading-protection heading-protection-tools">
          <SectionHeading
            eyebrow="AI career tools"
            title="Everything job seekers need between search and offer"
            description="Mustqbil turns scattered career tasks into guided workflows that improve applications, interviews, and follow-through."
            align="center"
          />
        </div>

        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {careerTools.map((tool) => {
            const Icon = toolIcons[tool.icon];

            return (
              <article
                key={tool.title}
                className="mustqbil-panel premium-lift border p-6 shadow-sm hover:border-[#f6ca14] hover:shadow-xl hover:shadow-[#0b2a1d]/10"
              >
                <div className="mustqbil-yellow grid h-11 w-11 place-items-center">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-display mt-5 text-2xl font-bold leading-tight text-[#07140f]">
                  {tool.title}
                </h3>
                <p className="mt-3 leading-7 text-[#47534b]">{tool.description}</p>
              </article>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
