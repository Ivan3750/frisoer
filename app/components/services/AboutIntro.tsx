"use client";

import Image from "next/image";
import Link from "next/link";

const AboutIntro = () => {
  return (
    <section className="relative py-32 md:py-40 bg-background overflow-hidden">
      
      {/* Soft glow background */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          
          <span className="text-xs uppercase tracking-[0.3em] text-accent">
            Om salonen
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-8 leading-tight">
            Frisør Vivian – <br />
            <span className="text-accent">Eksklusiv hårpleje i Danmark</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Hos <strong>Frisør Vivian</strong> kombinerer vi moderne teknikker med
            klassisk håndværk. Vi skaber personlige looks, der fremhæver din stil
            og naturlige skønhed.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Med fokus på kvalitet, luksus og professionel rådgivning tilbyder vi
            klip, farve og styling i rolige og eksklusive omgivelser.
          </p>

          <Link
            href="/booking"
            className="inline-block px-8 py-4 rounded-full bg-accent text-white font-medium transition hover:scale-105 hover:shadow-xl"
          >
            Book din tid →
          </Link>
        </div>

        {/* Images */}
        <div className="order-1 lg:order-2 grid grid-cols-2 gap-6 items-start relative">
          
          {/* Image 1 */}
          <div className="relative rounded-3xl overflow-hidden h-[280px] sm:h-[360px] md:h-[480px] shadow-2xl">
            <Image
              src="/salon-1.jpg"
              alt="Frisør salon interiør"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="relative rounded-3xl overflow-hidden mt-12 md:mt-20 h-[280px] sm:h-[360px] md:h-[480px] shadow-2xl">
            <Image
              src="/salon-2.jpg"
              alt="Hår styling behandling"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutIntro;