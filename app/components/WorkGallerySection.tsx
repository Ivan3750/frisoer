"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import f1 from "../assets/frior (1).jpg"
import f2 from "../assets/frior (2).jpg"
import f3 from "../assets/frior (3).jpg"
/* import f4 from "../assets/frior (4).jpg"
 */import f5 from "../assets/frior (5).jpg"
import f6 from "../assets/frior (6).jpg"
import f7 from "../assets/frior (7).jpg"
import f8 from "../assets/frior (8).jpg"
import f9 from "../assets/frior (9).jpg"
import f10 from "../assets/frior (10).jpg"
import f11 from "../assets/frior (11).jpg"
import f12 from "../assets/frior (12).jpg"

type WorkItem = {
  id: number;
  title: string;
  category: string;
  image: StaticImageData;
};

const works: WorkItem[] = [
  {
    id: 1,
    title: "Classic",
    category: "Farvning",
    image: f1,
  },
/*   {
    id: 2,
    title: "Classic",
    category: "Styling",
    image: f2,
  }, */
  {
    id: 3,
    title: "Classic",
    category: "Klip",
    image: f3,
  },
  {
    id: 4,
    title: "Classic",
    category: "Farvning",
    image: f3,
  },
/*   {
    id: 5,
    title: "Classic",
    category: "Styling",
    image: f5,
  }, */
 /*  {
    id: 6,
    title: "Classic",
    category: "Klip",
    image: f6,
  }, */
  {
    id: 7,
    title: "Classic",
    category: "Farvning",
    image: f7,
  },
  {
    id: 8,
    title: "Classic",
    category: "Styling",
    image: f8,
  },
  {
    id: 9,
    title: "Classic",
    category: "Klip",
    image: f9,
  },
  {
    id: 10,
    title: "Classic",
    category: "Farvning",
    image: f10,
  },
  {
    id: 11,
    title: "Classic",
    category: "Styling",
    image: f11,
  },
  {
    id: 12,
    title: "Classic",
    category: "Klip",
    image: f12,
  },
];

export default function WorkGallerySection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Vores Arbejde
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Se et udvalg af vores seneste transformationer og kreative looks.
          </p>
        </div>
{/* Masonry Grid */}
<div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
  {works.map((work) => (
    <div
      key={work.id}
      className="relative group overflow-hidden rounded-3xl break-inside-avoid"
    >
      <Image
        src={work.image}
        alt={work.title}
        className="w-full h-auto object-contain transition duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
        <span className="text-xs uppercase tracking-widest text-white/80">
          {work.category}
        </span>

        <h3 className="text-white text-xl font-medium mt-2">
          {work.title}
        </h3>

        <Link
          href="/kontakt"
          className="mt-4 inline-block text-sm text-white underline underline-offset-4"
        >
          Book lignende look →
        </Link>
      </div>
    </div>
  ))}
</div>

      
      </div>
    </section>
  );
}