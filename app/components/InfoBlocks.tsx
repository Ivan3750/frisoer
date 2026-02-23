"use client";

import Image from "next/image";
import { Sparkles, Scissors, HeartHandshake } from "lucide-react";
/* import salonImage from "@/app/assets/salon-interior.jpg";
 */
const InfoBlocks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Split Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

          {/* Image */}
          <div className="relative h-[450px] rounded-3xl overflow-hidden">
           {/*  <Image
              src={salonImage}
              alt="Salon interior"
              fill
              className="object-cover"
            /> */}
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="uppercase tracking-widest text-sm text-muted-foreground font-medium">
              Om salonen
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Skønhed starter med
              <br />
              <span className="text-primary">selvtillid</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Vi kombinerer kreativitet, erfaring og premium produkter
              for at skabe et look, der fremhæver din naturlige skønhed.
              Hos os handler det ikke kun om hår — men om oplevelsen.
            </p>
          </div>
        </div>

        {/* 3 Info Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          <div className="p-10 rounded-3xl bg-muted/40 hover:shadow-xl transition duration-300">
            <Scissors className="w-8 h-8 mb-6 text-primary" />
            <h3 className="text-xl font-semibold mb-4">
              Ekspertise
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Professionelle stylister med mange års erfaring i
              moderne klip og farveteknikker.
            </p>
          </div>

          <div className="p-10 rounded-3xl bg-muted/40 hover:shadow-xl transition duration-300">
            <Sparkles className="w-8 h-8 mb-6 text-primary" />
            <h3 className="text-xl font-semibold mb-4">
              Premium produkter
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Vi bruger kun kvalitetsprodukter, der beskytter
              og styrker dit hår.
            </p>
          </div>

          <div className="p-10 rounded-3xl bg-muted/40 hover:shadow-xl transition duration-300">
            <HeartHandshake className="w-8 h-8 mb-6 text-primary" />
            <h3 className="text-xl font-semibold mb-4">
              Personlig service
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Hver behandling skræddersys til din stil,
              personlighed og behov.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default InfoBlocks;