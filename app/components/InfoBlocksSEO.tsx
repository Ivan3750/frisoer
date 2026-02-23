"use client";

import { Sparkles, Scissors, HeartHandshake } from "lucide-react";
import f from "../assets/frior (4).jpg"
const InfoBlocksSEO = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Split Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

        

          {/* Text */}
          <div className="space-y-6">
            <p className="uppercase tracking-widest text-sm text-muted-foreground font-medium">
              Hvorfor vælge os
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Din professionelle <span className="text-primary">frisør i Horsens</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Hos vores frisørsalon i Horsens tilbyder vi professionel hårpleje og styling, 
              skræddersyet til dine behov. Vores erfarne stylister kombinerer kreativitet 
              med premium produkter for at sikre, at dit hår altid ser sundt, glansfuldt 
              og moderne ud. Uanset om du ønsker en klassisk klipning, balayage, highlights 
              eller komplet styling til en særlig lejlighed, er vi her for at guide dig 
              gennem hele processen.
            </p>
          </div>

            {/* Image Placeholder */}
          <div className="relative h-[650px] rounded-3xl overflow-hidden bg-gray-200 flex items-center justify-center">
            <img src={f.src} alt="Frisør i Horsens" className="w-full h-full object-cover" />
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default InfoBlocksSEO;