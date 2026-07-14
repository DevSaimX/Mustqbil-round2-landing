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
    <section id="career-tools" className="mustqbil-section pb-0 pt-14 md:pt-16 lg:pt-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="AI career tools"
          title="Everything job seekers need between search and offer"
          description="Mustqbil turns scattered career tasks into guided workflows that improve applications, interviews, and follow-through."
          align="center"
        />

        <div className="stagger-children mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </div>
    </section>
  );
}
