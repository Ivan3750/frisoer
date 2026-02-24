import { Scissors, Heart, Sparkles } from "lucide-react";
import heroImage from "../app/assets/hero-salon.jpg";
import Link from "next/link";
import Image from "next/image";
import FeedBack from "./components/FeedBack";
import FAQSection from "./components/FAQSection";
import WorkGallerySection from "./components/WorkGallerySection";
import Hero from "./components/Hero";
import InfoBlocks from "./components/InfoBlocks";
import InfoBlocksSEO from "./components/InfoBlocksSEO";
import Contact from "./components/Contact";
const Index = () => {
  return (
    <>
      
      <Hero></Hero>
      <InfoBlocks></InfoBlocks>
      <InfoBlocksSEO></InfoBlocksSEO>
          <FeedBack></FeedBack>
      <WorkGallerySection></WorkGallerySection>
      <FAQSection></FAQSection>
      <Contact></Contact>
    </>
  );
};

export default Index;