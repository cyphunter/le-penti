import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { SavoirFaire } from "@/components/sections/SavoirFaire";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { MustacheBand } from "@/components/sections/MustacheBand";
import { ReviewsBand } from "@/components/sections/ReviewsBand";
import { MapSection } from "@/components/sections/MapSection";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Coiffeur & Barbier à Monterblanc",
  description:
    "Le Penn'ti du Coiffeur, salon hommes et enfants à Monterblanc (56250). Coupes hommes et entretien barbe depuis 10 ans, prestations enfants. 5,0/5 sur 563 avis. Réservation 24/7.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <SavoirFaire />
      <ServicesPreview />
      <MustacheBand />
      <ReviewsBand />
      <MapSection />
      <BookingCTA />
    </>
  );
}
