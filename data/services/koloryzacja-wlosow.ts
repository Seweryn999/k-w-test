// SZKIC DO WERYFIKACJI — treść merytoryczna do akceptacji przez salon.
import pic2 from "@/assets/images/pic2.png";
import { priceRangeLabel } from "@/data/pricing";

import type { Service } from "./types";

export const koloryzacjaWlosow: Service = {
  slug: "koloryzacja-wlosow",
  name: "Koloryzacja włosów",
  h1: "Koloryzacja włosów w Łodzi",
  metaTitle: "Koloryzacja włosów Łódź – Piotrkowska | Wojewoda Studio",
  metaDescription:
    "Koloryzacja włosów w Łodzi przy Piotrkowskiej 293/305: farbowanie, odrost, cover siwych włosów i tonowanie. Strzyżenie i modelowanie w cenie. Umów wizytę.",
  cardDescription:
    "Farbowanie, odrost, pokrycie siwych włosów i tonowanie — kolor dobrany do karnacji i kondycji włosów.",
  lead: "Dobry kolor zaczyna się od diagnozy, a nie od palety. W salonie przy ul. Piotrkowskiej 293/305 każdą koloryzację planujemy pod kondycję włosów, karnację i to, jak kolor ma się zachowywać za sześć tygodni — nie tylko w dniu wizyty. Koloryzacjami zajmujemy się w Łodzi od lat, a najtrudniejsze przypadki trafiają do naszego technika kolorysty.",
  image: pic2,
  imageAlt:
    "Stylistka w czarnych rękawiczkach spłukuje włosy klientki przy myjni w salonie Krystian Wojewoda Hair Design w Łodzi",
  sections: [
    {
      heading: "Jak wygląda koloryzacja w naszym salonie",
      paragraphs: [
        "Wizytę zaczynamy od rozmowy przy lustrze: jaki efekt chcesz osiągnąć, czym włosy były farbowane wcześniej i jak o nie dbasz na co dzień. Na tej podstawie stylistka dobiera technikę, odcień i czas pracy produktu. Jeżeli włosy są po wielu rozjaśnieniach lub domowych farbach, mówimy wprost, co da się zrobić na jednej wizycie, a co wymaga rozłożenia na etapy.",
        "W cenę każdej koloryzacji wliczone jest strzyżenie i modelowanie — wychodzisz z salonu z gotową fryzurą, a nie tylko z nowym kolorem.",
      ],
      subsections: [
        {
          heading: "Farbowanie całych włosów i odrostu",
          paragraphs: [
            "Pełne farbowanie wybieramy przy zmianie odcienia lub wyrównaniu koloru na całej długości. Przy regularnych wizytach zwykle wystarczy farbowanie odrostu — kolor na długościach odświeżamy tylko wtedy, gdy stracił intensywność.",
          ],
        },
        {
          heading: "Pokrycie siwych włosów (cover)",
          paragraphs: [
            "Siwe włosy mają inną strukturę i słabiej przyjmują pigment, dlatego do ich pokrycia stosujemy osobną procedurę. Celem jest kolor, który wygląda naturalnie i nie odcina się ostrą linią przy odroście.",
          ],
        },
        {
          heading: "Tonowanie",
          paragraphs: [
            "Tonowanie neutralizuje niechciane refleksy (np. żółte lub rude tony po rozjaśnieniu) i odświeża blond bez ponownego rozjaśniania. W cenę tonowania nie jest wliczone modelowanie.",
          ],
        },
      ],
    },
    {
      heading: "Kto wykona Twoją koloryzację",
      paragraphs: [
        "Koloryzacje wykonuje większość naszego zespołu. Najbardziej wymagające zmiany koloru — korekty po nieudanym farbowaniu, powrót do naturalnego odcienia, kolory spoza gotowej palety — prowadzi Mariola Śnieg, technik kolorysta z ponad setką odbytych szkoleń. Ceny u Marioli i Krystiana różnią się od cen pozostałych stylistów — obie wersje znajdziesz w cenniku.",
      ],
    },
    {
      heading: "Jak dbać o włosy po koloryzacji",
      paragraphs: [
        "Kolor utrzymuje się najdłużej, gdy włosy są dobrze nawilżone i chronione przed wysoką temperaturą. Po wizycie doradzimy kosmetyki do domowej pielęgnacji — pracujemy m.in. na produktach Kevin Murphy, Olaplex, K18 i Eleven Australia.",
      ],
      list: [
        "Myj włosy letnią, nie gorącą wodą — gorąca szybciej wypłukuje pigment.",
        "Stosuj szampon do włosów farbowanych, bez agresywnych detergentów.",
        "Przed suszeniem i prostowaniem używaj termoochrony.",
        "Odświeżaj odrost co 5–8 tygodni, zależnie od tempa wzrostu włosów.",
      ],
    },
  ],
  prices: [
    { label: "Farbowanie + strzyżenie", tag: "farbowanie" },
    { label: "Tonowanie", tag: "tonowanie" },
    { label: "Konsultacja (odliczana od ceny usługi)", tag: "konsultacja" },
  ],
  faq: [
    {
      question: "Ile kosztuje koloryzacja włosów w Łodzi w Waszym salonie?",
      answer: `Farbowanie ze strzyżeniem kosztuje ${priceRangeLabel("farbowanie")}, zależnie od długości i gęstości włosów, zużycia materiału oraz stylisty. W cenę wliczone jest strzyżenie i modelowanie. Koloryzacja bez strzyżenia jest tańsza o 60 zł.`,
    },
    {
      question: "Czy przed koloryzacją potrzebna jest konsultacja?",
      answer:
        "Nie jest obowiązkowa, ale polecamy ją przy dużej zmianie koloru lub włosach po wielu farbowaniach. Konsultacja kosztuje 50 zł, a kwota jest w całości odliczana od ceny zrealizowanej usługi.",
    },
    {
      question: "Jak długo trwa koloryzacja?",
      answer:
        "To zależy od techniki, długości włosów i tego, czy były wcześniej farbowane — odświeżenie odrostu trwa krócej niż pełna zmiana koloru. Orientacyjny czas każdej usługi widać przy rezerwacji w Booksy.",
    },
    {
      question: "Czy pokrywacie siwe włosy?",
      answer:
        "Tak. Pokrycie siwych włosów (cover) wykonujemy ze strzyżeniem, a odcień dobieramy tak, żeby odrost był jak najmniej widoczny.",
    },
  ],
  related: ["balayage-ombre-sombre", "pasemka-rozswietlanie", "metamorfoza-wlosow"],
  relatedPosts: ["kosmetyki-do-pielegnacji-zniszczonych-wlosow-lista-must-have"],
  specialists: ["mariola-snieg", "romina", "julia", "ania"],
};
