export default function WhyChooseUs() {
  const items = [
    {
      title: "Erfaring",
      text: "Professionelle stylister med mange års erfaring.",
    },
    {
      title: "Premium produkter",
      text: "Vi bruger kun kvalitetsprodukter.",
    },
    {
      title: "Personlig service",
      text: "Behandlinger tilpasses individuelt.",
    },
  ];

  return (
    <section className="py-32 bg-muted/30">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-16">
        <h2 className="text-4xl font-semibold">Hvorfor vælge os</h2>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {items.map((item) => (
            <div key={item.title} className="space-y-3">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}