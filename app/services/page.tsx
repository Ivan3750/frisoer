import Link from "next/link";
import Image from "next/image";

interface Service {
  name: string;
  description: string;
  price: string;
}

const services: { 
  category: string; 
  image: string;
  intro: string;
  items: Service[] 
}[] = [
  {
    category: "Klip",
    image: "/images/klip.jpg", // ← фото категорії
    intro: "Professionelle klip tilpasset din ansigtsform og personlige stil.",
    items: [
      { name: "Dameklip", description: "Klip, vask og føn", price: "450 kr" },
      { name: "Herreklip", description: "Klassisk eller moderne herreklip", price: "300 kr" },
      { name: "Børneklip", description: "Op til 12 år", price: "200 kr" },
    ],
  },
  {
    category: "Farvning",
    image: "/images/farvning.jpg",
    intro: "Eksklusive farvebehandlinger med premium produkter.",
    items: [
      { name: "Helfarve", description: "Fuld farvning med premium produkter", price: "650 kr" },
      { name: "Balayage", description: "Naturlig, solkysset effekt", price: "1200 kr" },
      { name: "Highlights", description: "Lyse striber for dimension og dybde", price: "900 kr" },
    ],
  },
  {
    category: "Styling & Pleje",
    image: "/images/styling.jpg",
    intro: "Perfekt styling til hverdag eller særlige begivenheder.",
    items: [
      { name: "Bryllupsstyling", description: "Komplet styling til den store dag", price: "800 kr" },
      { name: "Føn & styling", description: "Vask, føn og finishing", price: "350 kr" },
      { name: "Hårkur", description: "Intensiv pleje og genopbygning", price: "250 kr" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-card">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text */}
          <div>
            <h1 className=" text-4xl md:text-6xl font-semibold mb-6">
              Ydelser & Priser
            </h1>
            <p className="text-muted-foreground text-lg">
              Eksklusive behandlinger tilpasset din stil og personlighed.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/images/hero-services.jpg"
              alt="Salon"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto space-y-32">
          {services.map((group) => (
            <div key={group.category} className="space-y-12">
              
              {/* Category Header + Image */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className=" text-3xl mb-4">
                    {group.category}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {group.intro}
                  </p>
                </div>

                <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src={group.image}
                    alt={group.category}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.items.map((service) => (
                  <div
                    key={service.name}
                    className="group bg-card p-8 rounded-xl border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <h3 className=" text-xl">
                        {service.name}
                      </h3>

                      <span className="text-primary font-semibold text-lg">
                        {service.price}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-8">
                      <Link
                        href="/kontakt"
                        className="text-sm uppercase tracking-widest text-foreground group-hover:text-primary transition-colors"
                      >
                        Book behandling →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className=" text-3xl md:text-4xl">
            Hvorfor vælge os?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-semibold mb-2">Erfaring</h3>
              <p className="text-muted-foreground text-sm">
                Professionelle stylister med mange års erfaring.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Premium produkter</h3>
              <p className="text-muted-foreground text-sm">
                Vi bruger kun kvalitetsprodukter for det bedste resultat.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Personlig service</h3>
              <p className="text-muted-foreground text-sm">
                Hver behandling tilpasses individuelt til dig.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className=" text-3xl text-center mb-12">
            Galleri
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {["/images/gallery1.jpg", "/images/gallery2.jpg", "/images/gallery3.jpg"].map((img, i) => (
              <div key={i} className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src={img}
                  alt="Gallery"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center bg-primary text-primary-foreground">
        <div className="max-w-2xl mx-auto">
          <h2 className=" text-3xl md:text-4xl mb-6">
            Klar til en forandring?
          </h2>

          <Link
            href="/kontakt"
            className="inline-block px-10 py-4 bg-white text-black rounded-full text-sm tracking-widest uppercase hover:opacity-90 transition"
          >
            Book din tid
          </Link>
        </div>
      </section>
    </>
  );
}