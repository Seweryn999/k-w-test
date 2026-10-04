// SZKIC DO WERYFIKACJI — treść merytoryczna do akceptacji przez salon.
import pic2 from "@/assets/images/pic2.png";
import { priceRangeLabel } from "@/data/pricing";

import type { Service } from "./types";

export const balayageOmbreSombre: Service = {
  slug: "balayage-ombre-sombre",
  name: "Balayage, sombre i ombre",
  h1: "Balayage, sombre i ombre w Łodzi",
  metaTitle: "Balayage Łódź – sombre, ombre, Airtouch | Wojewoda Studio",
  metaDescription:
    "Balayage, sombre, ombre i refleksy Airtouch w Łodzi przy Piotrkowskiej 293/305. Naturalne przejścia koloru, strzyżenie w cenie. Sprawdź ceny i umów wizytę.",
  cardDescription:
    "Ręcznie malowane przejścia koloru i refleksy Airtouch — efekt muśniętych słońcem włosów, który ładnie odrasta.",
  lead: "Balayage, sombre i ombre to techniki, które rozjaśniają włosy miękko i nieregularnie — tak, jak zrobiłoby to słońce. Dobrze wykonane odrastają bez ostrej linii, więc między wizytami może minąć więcej czasu niż przy klasycznym farbowaniu. W naszym salonie w Łodzi każdą z tych technik dobieramy do długości, gęstości i bazowego koloru włosów.",
  image: pic2,
  imageAlt:
    "Stylistka w rękawiczkach płucze rozjaśniane włosy klientki przy myjni w łódzkim salonie fryzjerskim",
  sections: [
    {
      heading: "Czym różnią się balayage, sombre i ombre",
      paragraphs: [
        "Wszystkie trzy techniki dają przejście od ciemniejszej nasady do jaśniejszych długości, ale różnią się kontrastem i sposobem nakładania rozjaśniacza. Na konsultacji pokażemy, która da efekt najbliższy temu, co masz na zdjęciu inspiracji.",
      ],
      subsections: [
        {
          heading: "Balayage",
          paragraphs: [
            "Rozjaśniacz nakładany jest ręcznie, pociągnięciami pędzla, na wybrane pasma. Efekt jest naturalny i wielowymiarowy — jasne pasma przeplatają się z bazowym kolorem.",
          ],
        },
        {
          heading: "Sombre",
          paragraphs: [
            "Subtelna odmiana ombre: różnica między nasadą a końcami wynosi zwykle jeden–dwa tony, a przejście jest bardzo łagodne. Dobry wybór na pierwsze rozjaśnienie.",
          ],
        },
        {
          heading: "Ombre",
          paragraphs: [
            "Wyraźny kontrast między ciemną nasadą a jasnymi końcami. Efekt odważniejszy, najlepiej wygląda na dłuższych włosach.",
          ],
        },
        {
          heading: "Refleksy Airtouch",
          paragraphs: [
            "Technika, w której przed rozjaśnieniem część krótszych włosów wydmuchuje się suszarką z pasma. Dzięki temu przejście jest wyjątkowo miękkie, bez widocznych pasm. To praca czasochłonna i precyzyjna, dlatego jest wyceniana osobno.",
          ],
        },
      ],
    },
    {
      heading: "Pielęgnacja rozjaśnionych włosów",
      paragraphs: [
        "Rozjaśnianie zawsze obciąża strukturę włosa, dlatego pracujemy z produktami wzmacniającymi wiązania i doradzamy domową pielęgnację. Po balayage warto co kilka tygodni wrócić na tonowanie, które odświeża odcień i neutralizuje żółte refleksy.",
      ],
      list: [
        "Szampon i odżywka do włosów rozjaśnianych, najlepiej z fioletowym pigmentem raz w tygodniu.",
        "Termoochrona przed każdym suszeniem i stylizacją na gorąco.",
        "Tonowanie między wizytami koloryzacyjnymi.",
      ],
    },
  ],
  prices: [
    { label: "Balayage / sombre / ombre + strzyżenie", tag: "balayage" },
    { label: "Refleksy Airtouch", tag: "airtouch" },
    { label: "Tonowanie", tag: "tonowanie" },
  ],
  faq: [
    {
      question: "Ile kosztuje balayage w Łodzi?",
      answer: `Balayage, sombre lub ombre ze strzyżeniem kosztuje u nas ${priceRangeLabel("balayage")}, a refleksy Airtouch ${priceRangeLabel("airtouch")}. Ostateczna cena zależy od długości i gęstości włosów, zużycia materiału i stylisty.`,
    },
    {
      question: "Czy balayage da się zrobić na ciemnych włosach?",
      answer:
        "Tak, ale przy bardzo ciemnej bazie lub włosach wcześniej farbowanych na ciemno efekt często trzeba budować etapami, żeby nie przeciążyć włosów. Realny plan ustalimy podczas konsultacji.",
    },
    {
      question: "Jak często trzeba odświeżać balayage?",
      answer:
        "Balayage odrasta łagodnie, więc zwykle wystarcza odświeżenie co kilka miesięcy. W międzyczasie warto przyjść na tonowanie, które przywraca odcień bez ponownego rozjaśniania.",
    },
    {
      question: "Czym różni się Airtouch od balayage?",
      answer:
        "W Airtouch przed rozjaśnieniem wydmuchuje się suszarką krótsze włosy z każdego pasma, dzięki czemu przejście jest jeszcze bardziej miękkie. Technika jest bardziej pracochłonna, dlatego ma osobną cenę.",
    },
  ],
  related: ["koloryzacja-wlosow", "pasemka-rozswietlanie", "regeneracja-wlosow"],
  relatedPosts: ["kosmetyki-do-pielegnacji-zniszczonych-wlosow-lista-must-have"],
  specialists: ["mariola-snieg", "monika", "romina", "julia"],
};
