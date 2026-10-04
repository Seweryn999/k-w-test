// SZKIC DO WERYFIKACJI — treść merytoryczna do akceptacji przez salon.
// Do potwierdzenia: czym dokładnie jest "Zabieg Enviro" (producent, działanie).
import pic1 from "@/assets/images/pic1.png";
import { priceRangeLabel } from "@/data/pricing";

import type { Service } from "./types";

export const regeneracjaWlosow: Service = {
  slug: "regeneracja-wlosow",
  name: "Regeneracja i pielęgnacja włosów",
  h1: "Regeneracja włosów w Łodzi",
  metaTitle: "Regeneracja włosów Łódź – zabiegi pielęgnacyjne | Wojewoda",
  metaDescription:
    "Regeneracja i pielęgnacja włosów w Łodzi przy Piotrkowskiej 293/305: zabiegi odbudowujące, zabieg Enviro, dobór kosmetyków Kevin Murphy, Olaplex, K18.",
  cardDescription:
    "Zabiegi odbudowujące po koloryzacji i rozjaśnianiu oraz dobór kosmetyków do domowej pielęgnacji.",
  lead: "Rozjaśnianie, prostownica i codzienne suszenie zostawiają ślad w strukturze włosa. Zabiegi regenerujące w naszym salonie w Łodzi pomagają odbudować włosy od środka i przywrócić im miękkość i połysk — jako osobna wizyta albo dodatek do koloryzacji czy strzyżenia.",
  image: pic1,
  imageAlt:
    "Kosmetyki do stylizacji i pielęgnacji włosów Kevin Murphy na półce w salonie Krystian Wojewoda Hair Design w Łodzi",
  sections: [
    {
      heading: "Zabiegi pielęgnacyjne w salonie",
      paragraphs: [
        "Zabieg dobieramy do tego, co dzieje się z włosami: czy są przesuszone, osłabione po rozjaśnianiu, puszą się, czy tracą objętość. Każdy zabieg kończy się modelowaniem albo jest częścią innej usługi.",
      ],
      subsections: [
        {
          heading: "Zabieg pielęgnacyjny do usługi",
          paragraphs: [
            "Najczęściej wybierany dodatek do koloryzacji i strzyżenia. Wzmacnia włosy w trakcie wizyty, kiedy i tak są myte i przygotowywane do pracy.",
          ],
        },
        {
          heading: "Pielęgnacja z modelowaniem",
          paragraphs: [
            "Samodzielna wizyta pielęgnacyjna zakończona modelowaniem — dobra opcja między koloryzacjami, przed ważnym wyjściem albo po wakacjach.",
          ],
        },
        {
          heading: "Zabieg Enviro",
          paragraphs: [
            "Najbardziej intensywny zabieg w naszej ofercie, przeznaczony dla włosów wymagających gruntownej odbudowy.",
          ],
        },
      ],
    },
    {
      heading: "Pielęgnacja w domu",
      paragraphs: [
        "Efekt zabiegu w salonie utrzymuje się dłużej, gdy w domu używasz właściwych kosmetyków. Pracujemy m.in. na markach Kevin Murphy, Olaplex, K18 i Eleven Australia i doradzimy, które produkty sprawdzą się przy Twoich włosach. Więcej wskazówek znajdziesz w naszych artykułach o kosmetykach do zniszczonych włosów i pielęgnacji skóry głowy.",
      ],
    },
  ],
  prices: [
    { label: "Zabieg pielęgnacyjny do usługi", tag: "zabieg-pielegnacyjny" },
    { label: "Zabieg Enviro", tag: "zabieg-enviro" },
  ],
  faq: [
    {
      question: "Ile kosztuje zabieg regenerujący włosy?",
      answer: `Zabieg pielęgnacyjny dodawany do usługi kosztuje ${priceRangeLabel("zabieg-pielegnacyjny")}, a intensywny zabieg Enviro ${priceRangeLabel("zabieg-enviro")}. Pozostałe warianty, w tym pielęgnację z modelowaniem, znajdziesz w cenniku.`,
    },
    {
      question: "Czy zabieg pielęgnacyjny można połączyć z koloryzacją?",
      answer:
        "Tak, to najczęstsze połączenie. Zabieg wykonujemy w trakcie tej samej wizyty — wystarczy zaznaczyć to przy rezerwacji albo powiedzieć stylistce na miejscu.",
    },
    {
      question: "Jakie kosmetyki polecacie do zniszczonych włosów?",
      answer:
        "Dobieramy je indywidualnie — pracujemy m.in. na produktach Kevin Murphy, Olaplex, K18 i Eleven Australia. Stylistka podpowie, co sprawdzi się przy Twoich włosach.",
    },
  ],
  related: ["koloryzacja-wlosow", "balayage-ombre-sombre", "metamorfoza-wlosow"],
  relatedPosts: [
    "kosmetyki-do-pielegnacji-zniszczonych-wlosow-lista-must-have",
    "jak-dbac-o-skore-glowy",
  ],
  specialists: [],
};
