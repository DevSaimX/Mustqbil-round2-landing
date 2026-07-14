import { Quote } from "lucide-react";

import { SectionHeading } from "@/components/landing/SectionHeading";
import { StaggerGroup } from "@/components/landing/StaggerGroup";
import { testimonials } from "@/data/landing";

export function Testimonials() {
  return (
    <section className="mustqbil-section bg-testimonials-depth relative overflow-hidden pb-12 pt-8 md:pb-16 md:pt-10 lg:pb-20 lg:pt-12">
      <div className="testimonial-story-art" aria-hidden="true">
        <svg viewBox="0 0 1440 620" preserveAspectRatio="xMidYMid slice">
          <path
            className="story-line"
            d="M-40 185 C 190 82, 345 250, 540 164 S 910 116, 1112 226 S 1328 314, 1488 196"
          />
          <path
            className="story-line story-line-soft"
            d="M-20 455 C 164 348, 354 502, 534 410 S 864 322, 1042 426 S 1286 526, 1484 392"
          />
          <path
            className="speech-bubble"
            d="M132 100 h250 a46 46 0 0 1 46 46 v88 a46 46 0 0 1 -46 46 h-112 l-56 48 16 -48 h-98 a46 46 0 0 1 -46 -46 v-88 a46 46 0 0 1 46 -46 Z"
          />
          <path
            className="speech-bubble speech-bubble-alt"
            d="M982 244 h246 a42 42 0 0 1 42 42 v84 a42 42 0 0 1 -42 42 h-92 l-48 42 14 -42 h-120 a42 42 0 0 1 -42 -42 v-84 a42 42 0 0 1 42 -42 Z"
          />
          <text className="quote-outline" x="22" y="260">
            &quot;
          </text>
          <text className="quote-outline quote-outline-mid" x="600" y="190">
            &quot;
          </text>
          <text className="quote-outline quote-outline-end" x="1240" y="560">
            &quot;
          </text>
          <g className="profile-network">
            <path d="M250 360 L410 314 L574 364 L752 292 L936 340 L1106 294" />
            <circle cx="250" cy="360" r="9" />
            <circle cx="410" cy="314" r="7" />
            <circle cx="574" cy="364" r="10" />
            <circle cx="752" cy="292" r="8" />
            <circle cx="936" cy="340" r="9" />
            <circle cx="1106" cy="294" r="7" />
          </g>
          <g className="feedback-symbols">
            <path d="M1188 118 l10 22 24 3 -18 16 5 24 -21 -12 -21 12 5 -24 -18 -16 24 -3 Z" />
            <path d="M498 512 l7 15 17 2 -12 11 3 17 -15 -8 -15 8 3 -17 -12 -11 17 -2 Z" />
          </g>
        </svg>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Built around real career pressure"
          description="A credible job platform should reduce uncertainty. These demo stories show the kind of clarity Mustqbil is designed to create."
          align="center"
        />

        <StaggerGroup className="mt-9 grid w-full grid-cols-1 gap-5 sm:mt-12 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="mustqbil-panel premium-lift flex h-full w-full min-w-0 flex-col border p-5 hover:border-[#f6ca14] sm:p-6 lg:p-8"
            >
              <Quote className="h-7 w-7 text-[#f6ca14]" aria-hidden="true" />
              <blockquote className="mt-5 min-w-0 flex-1 break-words text-lg leading-relaxed text-[#213228] sm:text-xl">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-[#0c3123]/10 pt-5">
                <p className="font-display min-w-0 break-words text-xl font-bold leading-tight text-[#07140f] sm:text-2xl">
                  {testimonial.name}
                </p>
                <p className="mt-1 min-w-0 break-words text-sm text-[#47534b]">
                  {testimonial.role}, {testimonial.location}
                </p>
              </figcaption>
            </figure>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
