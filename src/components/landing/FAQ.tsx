import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/landing";

export function FAQ() {
  return (
    <section id="faq" className="mustqbil-section py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold text-[#5c665d]">FAQ</p>
          <h2 className="font-display mt-3 text-4xl font-extrabold leading-tight text-[#07140f] sm:text-5xl">
            Questions job seekers and employers ask first
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mustqbil-panel premium-lift mt-10 border px-4 hover:border-[#f6ca14]"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`}>
              <AccordionTrigger className="text-left font-bold text-[#07140f] hover:text-[#7a5f00]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="leading-7 text-[#47534b]">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
