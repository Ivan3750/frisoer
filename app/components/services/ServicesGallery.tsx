import Image from "next/image";

export default function ServicesGallery() {
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
  ];

  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-16">
          Galleri
        </h2>

        <div className="columns-1 md:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt="Gallery"
              width={600}
              height={800}
              className="rounded-3xl w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}