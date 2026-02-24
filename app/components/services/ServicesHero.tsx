import Link from "next/link";

Link

export default function ServicesHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-primary overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/salon-hero.jpg" // заміни на своє фото
          alt="Frisør Vivian salon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center w-full">
        
        {/* Text */}
        <div className="text-white">
          <span className="text-xs uppercase tracking-[0.3em] text-white/70">
            Ydelser
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-6 leading-tight">
            Eksklusive <br />
            <span className="text-accent">behandlinger</span>
          </h1>

          <p className="text-white/80 text-lg max-w-md mb-8">
            Professionel hårpleje, klip og styling skræddersyet til din stil.
            Oplev personlig service og premium produkter hos Frisør Vivian.
          </p>

          <div className="flex flex-wrap gap-4">
           <Link
              href="/kontakt"
              className="py-3 px-10 rounded-lg font-semibold bg-white text-black hover:bg-gray-200 transition"
            >
              Book tid
            </Link>

       
          </div>
        </div>

        {/* Decorative Right Side */}
        <div className="hidden md:block relative">
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
          <div className="relative bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-2xl">
            <p className="text-white text-xl font-light leading-relaxed">
              “Skønhed starter med selvtillid.
              <br />
              Lad dit hår fortælle din historie.”
            </p>
          </div>
        </div>
      </div>

      {/* Extra glow decorations */}
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl" />
    </section>
  );
}