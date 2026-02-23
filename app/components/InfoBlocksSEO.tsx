"use client";

import { Sparkles, Scissors, HeartHandshake } from "lucide-react";

const InfoBlocksSEO = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Split Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

          {/* Image Placeholder */}
          <div className="relative h-[450px] rounded-3xl overflow-hidden bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">Billede af salon</span>
          </div>

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
        </div>

        {/* 3 Info Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          <div className="p-10 rounded-3xl bg-muted/40 hover:shadow-xl transition duration-300">
            <Scissors className="w-8 h-8 mb-6 text-primary" />
            <h3 className="text-xl font-semibold mb-4">
              Ekspertise & erfaring
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Vores frisører har mange års erfaring med moderne klip og farvning, og holder sig 
              altid opdateret på de nyeste trends inden for hårpleje og styling. Hos os får du 
              professionel rådgivning og et resultat, der passer til din stil.
            </p>
          </div>

          <div className="p-10 rounded-3xl bg-muted/40 hover:shadow-xl transition duration-300">
            <Sparkles className="w-8 h-8 mb-6 text-primary" />
            <h3 className="text-xl font-semibold mb-4">
              Premium produkter
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Vi bruger kun kvalitetsprodukter fra anerkendte brands, der beskytter håret 
              og giver det en sund glans. Vores udvalg af hårprodukter sikrer, at du får 
              langvarige resultater og en luksuriøs oplevelse i salonen.
            </p>
          </div>

          <div className="p-10 rounded-3xl bg-muted/40 hover:shadow-xl transition duration-300">
            <HeartHandshake className="w-8 h-8 mb-6 text-primary" />
            <h3 className="text-xl font-semibold mb-4">
              Personlig service
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Hver behandling tilpasses individuelt, så vi sikrer, at dit hår og look 
              matcher din personlighed. Vores mål er, at du forlader salonen med selvtillid 
              og et smil – og at du får en frisøroplevelse, der huskes.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default InfoBlocksSEO;