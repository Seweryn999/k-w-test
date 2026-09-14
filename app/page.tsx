import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { hairSalonSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { HomeContent } from "@/components/sections/HomeContent";

import { SocialSection } from "@/components/sections/SocialSection";

export const metadata: Metadata = pageMetadata({
  title: "Fryzjer Łódź – Krystian Wojewoda Hair Design, Piotrkowska",
  description:
    "Salon fryzjerski w centrum Łodzi przy Piotrkowskiej 293/305. Koloryzacja, balayage, strzyżenie damskie i męskie oraz metamorfozy. Rezerwacja online przez Booksy.",
  path: "/",
});

export default function Home() {
  return (
    <main>
      {/*
        Opis salonu dla wyszukiwarek. Stoi na stronie głównej, bo to ona jest
        "wizytówką" witryny — podstrony odwołują się do niego przez @id.
      */}
      <JsonLd data={hairSalonSchema()} />

      <Hero />
      <HomeContent />

      <SocialSection />
    </main>
  );
}
