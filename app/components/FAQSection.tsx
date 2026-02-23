"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}
const faqs: FAQItem[] = [
  {
    question: "Skal jeg bestille tid på forhånd?",
    answer:
      "Ja, vi anbefaler altid at booke tid på forhånd, så du er sikker på at få plads. Du kan nemt reservere online eller ringe til os.",
  },
  {
    question: "Hvilke produkter bruger I i salonen?",
    answer:
      "Vi bruger kun premium produkter, som er skånsomme og styrker håret, så det altid ser sundt og glansfuldt ud.",
  },
  {
    question: "Tilbyder I konsultation før farvning eller styling?",
    answer:
      "Ja, vi tilbyder en gratis konsultation, hvor vi sammen finder den bedste løsning til dit hår og din stil.",
  },
  {
    question: "Hvordan kan jeg afbestille eller ændre min tid?",
    answer:
      "Du kan afbestille eller ændre din tid op til 48 timer før aftalen uden gebyr. Kontakt os gerne via telefon eller e-mail.",
  },
  {
    question: "Tilbyder I farvning af hår?",
    answer:
      "Ja, vi tilbyder alle typer farvning, inklusiv balayage, highlights og fuld farve, tilpasset din stil og hårtype.",
  },
  {
    question: "Kan I klippe børn?",
    answer:
      "Ja, vi byder børn velkommen og sørger for, at deres oplevelse bliver tryg og sjov. Vi anbefaler altid at booke tid på forhånd.",
  },
  {
    question: "Er salonen venlig overfor LGBT+ kunder?",
    answer:
      "Ja, hos Frisør Vivian er alle velkomne. Vi skaber et trygt og inkluderende miljø, hvor alle kan føle sig godt tilpas.",
  },
  {
    question: "Hvor lang tid tager en almindelig klipning?",
    answer:
      "En almindelig klipning tager typisk 20–35 minutter, afhængigt af hårtype og ønsket styling.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className=" text-3xl md:text-4xl text-center mb-16">
          Ofte stillede spørgsmål
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border border-border rounded-2xl bg-background overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="font-medium text-foreground">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}