// SZKIC DO WERYFIKACJI — treść merytoryczna do akceptacji przez salon.
import pic3 from "@/assets/images/pic3.png";
import { priceRangeLabel } from "@/data/pricing";

import type { Service } from "./types";

export const strzyzenieDamskie: Service = {
  slug: "strzyzenie-damskie",
  name: "Strzyżenie damskie",
  h1: "Strzyżenie damskie w Łodzi",
  metaTitle: "Strzyżenie damskie Łódź – Piotrkowska | Wojewoda Studio",
  metaDescription:
    "Strzyżenie damskie w Łodzi przy Piotrkowskiej 293/305: cięcie dopasowane do kształtu twarzy i typu włosów, mycie i modelowanie w cenie. Umów wizytę online.",
  cardDescription:
    "Cięcie dopasowane do kształtu twarzy, rodzaju włosów i tego, ile czasu masz rano na stylizację.",
  lead: "Dobre strzyżenie to takie, które dobrze wygląda także tydzień po wizycie, gdy układasz włosy sama. W naszym salonie w Łodzi zaczynamy od rozmowy o tym, jak nosisz włosy na co dzień, a dopiero potem sięgamy po nożyczki. Każde strzyżenie obejmuje mycie i modelowanie.",
  image: pic3,
  imageAlt:
    "Krystian Wojewoda strzyże krótkie włosy klientki nożyczkami i grzebieniem w salonie przy Piotrkowskiej w Łodzi",
  sections: [
    {
      heading: "Strzyżenie dopasowane do Ciebie",
      paragraphs: [
        "Kształt twarzy, gęstość i naturalny skręt włosów, a nawet to, czy nosisz okulary — to wszystko wpływa na to, które cięcie będzie wyglądać najlepiej. Stylistka zaproponuje długość i formę, a jeśli planujesz dużą zmianę, pokaże, jak fryzura będzie się zachowywać w miarę odrastania.",
      ],
      subsections: [
        {
          heading: "Cięcia krótkie i średnie",
          paragraphs: [
            "Pixie, bob, long bob — krótsze formy wymagają precyzji i regularnego podcinania, ale odwdzięczają się szybką stylizacją. Dopracowujemy linię karku i okolice uszu, bo to one decydują o tym, jak fryzura wygląda z profilu.",
          ],
        },
        {
          heading: "Długie włosy",
          paragraphs: [
            "Przy długich włosach dbamy o to, żeby odświeżyć końce i nadać fryzurze ruch bez niepotrzebnej utraty długości. Cieniowanie planujemy tak, żeby włosy nie traciły objętości.",
          ],
        },
      ],
    },
    {
      heading: "Jak wygląda wizyta",
      paragraphs: [
        "Nie strzyżemy bez mycia — włosy umyte i odpowiednio przygotowane pozwalają ciąć precyzyjnie. Po strzyżeniu modelujemy fryzurę i pokazujemy, jak ułożyć ją w domu. Jeśli nie wiesz, jakie cięcie wybrać, zajrzyj do naszego poradnika o doborze fryzury do kształtu twarzy.",
      ],
    },
  ],
  prices: [
    { label: "Strzyżenie damskie (z myciem i modelowaniem)", tag: "strzyzenie-damskie" },
    { label: "Strzyżenie dziecięce do 6 lat", tag: "strzyzenie-dzieciece" },
  ],
  faq: [
    {
      question: "Ile kosztuje strzyżenie damskie w Łodzi?",
      answer: `Strzyżenie damskie kosztuje u nas ${priceRangeLabel("strzyzenie-damskie")}, zależnie od długości i gęstości włosów oraz stylisty. W cenie jest mycie i modelowanie.`,
    },
    {
      question: "Czy mogę przyjść na samo strzyżenie bez mycia?",
      answer:
        "Nie. Każde strzyżenie wykonujemy na umytych włosach — to warunek precyzyjnego cięcia.",
    },
    {
      question: "Jak często podcinać włosy?",
      answer:
        "Krótkie fryzury najlepiej odświeżać co 4–6 tygodni, średnie co 6–8 tygodni, a długie włosy co 2–3 miesiące, żeby końce nie zaczęły się rozdwajać.",
    },
    {
      question: "Nie wiem, jakie cięcie wybrać. Pomożecie?",
      answer:
        "Tak. Na początku wizyty stylistka omówi z Tobą kształt twarzy, rodzaj włosów i sposób stylizacji, a potem zaproponuje konkretne cięcie. Przy dużej zmianie możesz też umówić konsultację.",
    },
  ],
  related: ["koloryzacja-wlosow", "metamorfoza-wlosow", "strzyzenie-meskie"],
  relatedPosts: ["jaka-fryzura-pasuje-do-mojej-twarzy"],
  specialists: ["krystian-wojewoda", "aneta", "ania", "danuta"],
};
