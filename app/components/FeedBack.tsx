"use client";

import { Star } from "lucide-react";

interface FeedBackType {
  name: string;
  text: string;
  rating: number;
}

const feedBack: FeedBackType[] = [
  {
    name: "Ida Smidt",
    text: "Meget dygtig og til rimelige priser! Reddede mine lyse striber i håret fra en anden frisør, der havde farvet det orange😱 stor anbefaling",
    rating: 5,
  },
  {
    name: "Lene Falbe Hansen",
    text: "Er blevet klippet flere gange hos Vivian, kan kun sige at hun er et besøg værd super frisør til fornuftige priser.",
    rating: 5,
  },
  {
    name: "Novah Meyer Jørgensen",
    text: "Christina er en super dedikeret og passioneret frisør, der lytter til sine kunder og kommer med gode konstruktive forslag. Hun er dygtig og behagelig, og jeg kører gerne de mange kilometer efter hende.",
    rating: 5,
  },
];

export default function FeedBack() {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-medium mb-16 text-center animate-slide-up">
          Hvad vores kunder siger
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedBack.map(({ name, text, rating }, i) => (
            <div
              key={name}
              className="bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {/* Avatar med første bogstav */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary text-white font-bold text-lg">
                  {name.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-medium">{name}</p>

                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: rating }).map((_, si) => (
                      <Star
                        key={si}
                        size={14}
                        className="fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Text */}
              <p className="text-muted-foreground text-sm leading-relaxed italic">
                “{text}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}