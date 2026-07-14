import { Quote } from "lucide-react";

import { SectionHeading } from "@/components/landing/SectionHeading";
import { testimonials } from "@/data/landing";

export function Testimonials() {
  return (
    <section className="mustqbil-section pb-12 pt-8 md:pb-16 md:pt-10 lg:pb-20 lg:pt-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Built around real career pressure"
          description="A credible job platform should reduce uncertainty. These demo stories show the kind of clarity Mustqbil is designed to create."
          align="center"
        />

        <div className="stagger-children mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="mustqbil-panel premium-lift flex h-full flex-col border p-6 hover:border-[#f6ca14]"
            >
              <Quote className="h-7 w-7 text-[#f6ca14]" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 text-lg leading-8 text-[#213228]">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-[#0c3123]/10 pt-5">
                <p className="font-display text-2xl font-bold leading-tight text-[#07140f]">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-sm text-[#47534b]">
                  {testimonial.role}, {testimonial.location}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
