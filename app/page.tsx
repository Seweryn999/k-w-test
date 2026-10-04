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
    "Fryzjer w Łodzi przy Piotrkowskiej 293/305, od 1996 r. Koloryzacja, balayage, strzyżenie damskie i męskie, fryzury ślubne, metamorfozy. Rezerwacja online.",
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
