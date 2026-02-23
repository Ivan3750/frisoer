"use client";

import Image from "next/image";
import Link from "next/link";
import heroImage from "@/app/assets/hero-salon.jpg";

const Hero = () => {
  return (
    <section className="relative h-[88vh] min-h-[620px] flex items-center overflow-hidden">
      
      {/* Background Image */}
      <Image
        src={heroImage}
        alt="Frisør salon interiør"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl space-y-6">

          {/* Small Label */}
          <p className="text-sm font-semibold tracking-widest text-white/70 uppercase">
            Frisør i Horsens
          </p>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
            Din personlige
            <br />
            <span className="text-primary">
              frisøroplevelse
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-xl">
            Eksklusive behandlinger med fokus på kvalitet,
            detaljer og personlig service.
            Vi skaber et look, der passer perfekt til dig.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/kontakt"
              className="py-3 px-10 rounded-lg font-semibold bg-white text-black hover:bg-gray-200 transition"
            >
              Book tid
            </Link>

            <Link
              href="/services"
              className="py-3 px-10 rounded-lg font-medium border border-white/40 text-white hover:bg-white/10 transition"
            >
              Se ydelser
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;