import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { HomeContent } from "@/components/sections/HomeContent";

import { SocialSection } from "@/components/sections/SocialSection";

export const metadata: Metadata = {
  title: "Krystian Wojewoda Hair Design – Najlepszy fryzjer w Łodzi",
  alternates: { canonical: "/" },
};

const hairSalonSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Krystian Wojewoda Hair Design",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Piotrkowska 293/305",
    postalCode: "90-369",
    addressLocality: "Łódź",
    addressCountry: "PL",
  },
  telephone: "+48730796861",
  url: "https://wojewodastudio.pl",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "15:00",
    },
  ],
  sameAs: [
    "https://booksy.com/pl-pl/106358_krystian-wojewoda_fryzjer_23280_lodz",
    "https://www.facebook.com/KrystianWojewodaHairDesign/",
    "https://www.instagram.com/salonkwhd/",
  ],
  priceRange: "$$",
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hairSalonSchema) }}
      />

      <Hero />
      <HomeContent />

      <SocialSection />
    </main>
  );
}
