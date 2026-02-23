import Link from "next/link";

interface Service {
  name: string;
  description: string;
  price: string;
}

interface Props {
  category: string;
  intro: string;
  items: Service[];
}

export default function ServiceCategory({
  category,
  intro,
  items,
}: Props) {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6 space-y-8">
        
        {/* Header */}
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold">{category}</h2>
          <p className="text-muted-foreground text-sm max-w-md">
            {intro}
          </p>
        </div>

        {/* Services list */}
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((service) => (
            <div
              key={service.name}
              className="p-4 rounded-2xl bg-muted/50 hover:bg-muted transition"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{service.name}</h3>
                <span className="text-primary font-semibold">
                  {service.price}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {service.description}
              </p>
{/* 
              <Link
                href="/kontakt"
                className="text-xs uppercase tracking-widest hover:text-primary"
              >
                Book →
              </Link> */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}