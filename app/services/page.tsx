import ServicesHero from "../components/services/ServicesHero";
import ServiceCategory from "../components/services/ServiceCategory";
import WhyChooseUs from "../components/services/WhyChooseUs";
import ServicesGallery from "../components/services/ServicesGallery";
import ServicesCTA from "../components/services/ServicesCTA";
import WorkGallerySection from "../components/WorkGallerySection";
import FAQSection from "../components/FAQSection";

export const metadata = {
  title: "Frisør Vivian – Vores ydelser i Horsens",
  description:
    "Oplev professionelle klip, farvning og styling hos Frisør Vivian i Horsens. Vi tilbyder premium behandlinger til damer, herrer og børn, med fokus på kvalitet og personlig service.",
  openGraph: {
    title: "Frisør Vivian – Vores ydelser i Horsens",
    description:
      "Professionelle klip, farvning og styling med premium produkter. Book tid online og få en personlig frisøroplevelse i Horsens.",
    url: "https://frisorvivian.dk/services",
    type: "website",
    images: [
      {
        url: "https://frisorvivian.dk/images/services-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Frisør Vivian – Salon Horsens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frisør Vivian – Vores ydelser i Horsens",
    description:
      "Klip, farvning og styling til damer, herrer og børn med premium produkter og personlig service hos Frisør Vivian i Horsens.",
    images: ["https://frisorvivian.dk/images/services-hero.jpg"],
  },
};



 export interface Service {
  name: string;
  description: string;
  price: string;
}

export const services = [
  {
    category: "Klip",
    image: "/images/klip.jpg",
    intro: "Professionelle klip tilpasset din ansigtsform og personlige stil.",
    items: [
      { name: "Dameklip", description: "Klip, vask og føn", price: "550 kr" },
      { name: "Herreklip", description: "Klassisk eller moderne herreklip", price: "350 kr" },
      { name: "Børneklip", description: "Op til 12 år", price: "250 kr" },
      { name: "Langt hår klip", description: "Klip og formning af langt hår", price: "650 kr" },
      { name: "Frisure opdatering", description: "Små justeringer og trimning", price: "300 kr" },
    ],
  },
  {
    category: "Farvning",
    image: "/images/farvning.jpg",
    intro: "Eksklusive farvebehandlinger med premium produkter.",
    items: [
      { name: "Helfarve", description: "Fuld farvning", price: "fra 0 kr" },
      { name: "Balayage", description: "Naturlig effekt", price: "fra 0 kr" },
      { name: "Highlights", description: "Lyse striber", price: "fra 0 kr" },
      { name: "Ombre", description: "Glidende farveovergang", price: "fra 0 kr" },
      { name: "Farvekorrektion", description: "Rettet uønsket farve", price: "fra 0 kr" },
    ],
  },
  {
    category: "Styling & Pleje",
    image: "/images/styling.jpg",
    intro: "Perfekt styling til hverdag eller særlige begivenheder.",
    items: [
      { name: "Bryllupsstyling", description: "Komplet styling", price: "fra 0 kr" },
      { name: "Føn & styling", description: "Vask og føn", price: "fra 0 kr" },
      { name: "Hårkur", description: "Intensiv pleje", price: "fra 0 kr" },
      { name: "Festfrisure", description: "Styling til fest eller event", price: "fra 0 kr" },
      { name: "Extensions styling", description: "Tilpasning og styling af extensions", price: "fra 0 kr" },
    ],
  },
  {
    category: "Special Treatments",
    image: "/images/special.jpg",
    intro: "Eksklusive behandlinger for ekstra pleje og luksus.",
    items: [
      { name: "Keratinbehandling", description: "Gør håret glat og skinnende", price: "fra 0 kr" },
      { name: "Scalp treatment", description: "Pleje af hovedbund og hårvækst", price: "fra 0 kr" },
      { name: "Olaplex behandling", description: "Reparerer skadet hår", price: "fra 0 kr" },
      { name: "Hårfarve + behandling", description: "Farvning med dybdegående pleje", price: "fra 0 kr" },
      { name: "Hårbotox", description: "Intensiv glans og fylde", price: "fra 0 kr" },
    ],
  },
];
export default function Page() {
  return (
    <>
      <ServicesHero />

      {services.map((group) => (
        <ServiceCategory key={group.category} {...group} />
      ))}
 
      <WhyChooseUs />
     <WorkGallerySection></WorkGallerySection>
      <FAQSection></FAQSection>
    </>
  );
}