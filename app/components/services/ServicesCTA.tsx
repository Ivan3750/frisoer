import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="py-32 text-center bg-primary text-primary-foreground">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-4xl font-semibold">
          Klar til en forandring?
        </h2>

        <Link
          href="/kontakt"
          className="inline-block px-12 py-4 bg-white text-black rounded-full text-sm uppercase tracking-widest"
        >
          Book din tid
        </Link>
      </div>
    </section>
  );
}