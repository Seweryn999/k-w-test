// SZKIC DO WERYFIKACJI — treść merytoryczna do akceptacji przez salon.
import pic3 from "@/assets/images/pic3.png";
import { priceRangeLabel } from "@/data/pricing";

import type { Service } from "./types";

export const metamorfozaWlosow: Service = {
  slug: "metamorfoza-wlosow",
  name: "Metamorfoza włosów",
  h1: "Metamorfoza włosów w Łodzi",
  metaTitle: "Metamorfoza włosów Łódź – nowe cięcie i kolor | Wojewoda",
  metaDescription:
    "Metamorfoza włosów w Łodzi przy Piotrkowskiej 293/305: nowy kolor, cięcie i plan pielęgnacji. Konsultacja 50 zł odliczana od ceny usługi. Umów wizytę.",
  cardDescription:
    "Całkowita zmiana wizerunku: nowy kolor, nowe cięcie i plan dojścia do efektu — zaczynamy od konsultacji.",
  lead: "Metamorfoza to więcej niż nowy kolor. To zestawienie cięcia, koloryzacji i pielęgnacji w jedną spójną zmianę — zaplanowaną tak, żeby włosy zniosły ją w dobrej kondycji. Najtrudniejsze metamorfozy w naszym salonie przy Piotrkowskiej w Łodzi prowadzi technik kolorysta Mariola Śnieg.",
  image: pic3,
  imageAlt:
    "Stylista skraca włosy klientki podczas metamorfozy w salonie fryzjerskim przy Piotrkowskiej w Łodzi",
  sections: [
    {
      heading: "Od konsultacji do efektu",
      paragraphs: [
        "Każdą dużą zmianę zaczynamy od konsultacji. Oceniamy kondycję włosów, historię farbowania i to, co realnie da się osiągnąć — na jednej wizycie albo w kilku etapach. Konsultacja kosztuje 50 zł, a ta kwota jest w całości odliczana od ceny zrealizowanej usługi.",
      ],
      subsections: [
        {
          heading: "Zmiana koloru",
          paragraphs: [
            "Przejście z ciemnego na blond, powrót do naturalnego odcienia czy korekta nieudanej koloryzacji wymagają planu. Czasem potrzebny jest demakijaż koloru (usunięcie starego pigmentu) albo modyfikacja, zanim nałożymy docelowy odcień.",
          ],
        },
        {
          heading: "Nowe cięcie",
          paragraphs: [
            "Strzyżenie dobieramy do kształtu twarzy i do nowego koloru — dobrze poprowadzone cięcie potrafi wydobyć z koloryzacji znacznie więcej.",
          ],
        },
        {
          heading: "Pielęgnacja po metamorfozie",
          paragraphs: [
            "Po dużej zmianie włosy potrzebują wsparcia. Doradzimy zabieg w salonie i kosmetyki do domu, żeby efekt utrzymał się jak najdłużej.",
          ],
        },
      ],
    },
    {
      heading: "Kto prowadzi metamorfozy",
      paragraphs: [
        "Mariola Śnieg specjalizuje się w wymagających metamorfozach i kolorach, których nie ma w gotowej palecie. Odważne zmiany chętnie prowadzą też Romina i Julia, które najlepiej odnajdują się w kreatywnych koloryzacjach.",
      ],
    },
  ],
  prices: [
    { label: "Konsultacja (odliczana od ceny usługi)", tag: "konsultacja" },
    { label: "Strzyżenie damskie", tag: "strzyzenie-damskie" },
    { label: "Farbowanie + strzyżenie", tag: "farbowanie" },
    { label: "Balayage / sombre / ombre + strzyżenie", tag: "balayage" },
  ],
  faq: [
    {
      question: "Ile kosztuje metamorfoza włosów?",
      answer: `Cena zależy od zakresu zmiany. Zaczynamy od konsultacji za ${priceRangeLabel("konsultacja")}, odliczanej od ceny usługi. Dla orientacji: farbowanie ze strzyżeniem kosztuje ${priceRangeLabel("farbowanie")}, a balayage ze strzyżeniem ${priceRangeLabel("balayage")}.`,
    },
    {
      question: "Czy metamorfozę da się zrobić na jednej wizycie?",
      answer:
        "Często tak, ale przy dużej zmianie koloru — zwłaszcza z ciemnego na jasny — bezpieczniej rozłożyć ją na etapy. Na konsultacji powiemy uczciwie, ile wizyt będzie potrzebnych.",
    },
    {
      question: "Z kim umówić się na metamorfozę?",
      answer:
        "Najtrudniejsze metamorfozy kolorystyczne prowadzi Mariola Śnieg. Odważne zmiany wykonują też Romina i Julia.",
    },
  ],
  related: ["koloryzacja-wlosow", "balayage-ombre-sombre", "strzyzenie-damskie"],
  relatedPosts: ["jaka-fryzura-pasuje-do-mojej-twarzy"],
  specialists: ["mariola-snieg", "romina", "julia"],
};
