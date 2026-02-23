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
      "Ja, vi anbefaler at booke tid på forhånd for at sikre ledighed. Du kan nemt booke online via vores kontaktside.",
  },
  {
    question: "Hvilke produkter bruger I?",
    answer:
      "Vi anvender udelukkende premium og skånsomme produkter, der beskytter og styrker håret.",
  },
  {
    question: "Tilbyder I konsultation før farvning?",
    answer:
      "Ja, vi tilbyder gratis konsultation, så vi kan finde den perfekte løsning til din hårtype og stil.",
  },
  {
    question: "Kan jeg afbestille min tid?",
    answer:
      "Ja, afbestilling skal ske senest 24 timer før din aftale for at undgå gebyr.",
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