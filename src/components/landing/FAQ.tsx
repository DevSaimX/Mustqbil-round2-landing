import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/landing";

export function FAQ() {
  return (
    <section
      id="faq"
      className="mustqbil-section bg-faq-depth relative overflow-hidden py-12 md:py-16 lg:py-20"
    >
      <div className="faq-support-art" aria-hidden="true">
        <svg viewBox="0 0 1440 620" preserveAspectRatio="xMidYMid slice">
          <path
            className="faq-question-curve"
            d="M134 190 C 130 84, 286 52, 348 122 C 414 196, 308 254, 268 300 C 244 328, 242 356, 246 382"
          />
          <path
            className="faq-question-curve faq-question-curve-right"
            d="M1214 430 C 1230 332, 1378 320, 1418 392 C 1458 464, 1352 502, 1324 544 C 1308 568, 1310 592, 1316 612"
          />
          <path
            className="faq-flow-line"
            d="M60 454 C 254 358, 390 514, 560 422 S 886 302, 1052 406 S 1270 520, 1448 418"
          />
          <rect className="faq-frame" x="440" y="132" width="560" height="360" rx="44" />
          <g className="faq-ripples">
            <ellipse cx="720" cy="318" rx="360" ry="178" />
            <ellipse cx="720" cy="318" rx="260" ry="126" />
          </g>
          <g className="qa-nodes">
            <path d="M268 456 L412 408 L552 452" />
            <path d="M884 210 L1018 248 L1164 206" />
            <circle cx="268" cy="456" r="9" />
            <circle cx="412" cy="408" r="7" />
            <circle cx="552" cy="452" r="9" />
            <circle cx="884" cy="210" r="8" />
            <circle cx="1018" cy="248" r="7" />
            <circle cx="1164" cy="206" r="9" />
          </g>
          <g className="faq-icons">
            <text x="198" y="122">
              ?
            </text>
            <text x="1234" y="186">
              ?
            </text>
            <path d="M1132 520 l16 16 34 -42" />
            <rect x="308" y="92" width="88" height="62" rx="12" />
            <path d="M330 116 h44 M330 134 h28" />
            <rect x="1032" y="86" width="92" height="66" rx="14" />
            <path d="M1058 118 h42 M1058 136 h24" />
          </g>
          <g className="faq-labels">
            <text x="276" y="560">
              Help center
            </text>
            <text x="1042" y="332">
              Answers
            </text>
          </g>
        </svg>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold text-[#5c665d]">FAQ</p>
          <h2 className="font-display mt-3 text-3xl font-extrabold leading-[1.08] text-[#07140f] [text-wrap:balance] sm:text-4xl md:text-5xl">
            Questions job seekers and employers ask first
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mustqbil-panel premium-lift mt-8 border px-3 hover:border-[#f6ca14] sm:mt-10 sm:px-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`}>
              <AccordionTrigger className="gap-4 text-left font-bold text-[#07140f] hover:text-[#7a5f00]">
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
