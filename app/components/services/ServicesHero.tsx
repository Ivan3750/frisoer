export default function ServicesHero() {
  return (
    <section className="relative py-32 bg-primary overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Tekst */}
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-white/70">
            Ydelser
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-6 leading-tight text-white">
            Eksklusive behandlinger
          </h1>

          <p className="text-white/80 text-lg max-w-md">
            Professionel hårpleje, klip og styling skræddersyet til din stil.
            Oplev personlig service og premium produkter hos Frisør Vivian.
          </p>
        </div>

        {/* Dekorativ placeholder */}
        
      </div>

      {/* Baggrunds dekoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}