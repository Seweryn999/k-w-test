// SZKIC DO WERYFIKACJI — treść merytoryczna do akceptacji przez salon.
import pic2 from "@/assets/images/pic2.png";
import { priceRangeLabel } from "@/data/pricing";

import type { Service } from "./types";

export const pasemkaRozswietlanie: Service = {
  slug: "pasemka-rozswietlanie",
  name: "Pasemka i rozświetlanie",
  h1: "Pasemka i rozświetlanie włosów w Łodzi",
  metaTitle: "Pasemka Łódź – rozświetlanie włosów | Wojewoda Studio",
  metaDescription:
    "Pasemka i rozświetlanie włosów w Łodzi przy Piotrkowskiej 293/305 — od delikatnych refleksów po wyraźny blond. Strzyżenie i modelowanie w cenie. Umów wizytę.",
  cardDescription:
    "Pasemka i rozświetlenia, które dodają włosom głębi i blasku — od subtelnych refleksów po wyraźny blond.",
  lead: "Pasemka to najprostszy sposób, żeby dodać włosom światła i objętości bez całkowitej zmiany koloru. W salonie przy Piotrkowskiej w Łodzi dobieramy grubość pasm, ich rozmieszczenie i odcień do cięcia i karnacji — tak, żeby efekt wyglądał dobrze także przy spiętych włosach.",
  image: pic2,
  imageAlt:
    "Płukanie włosów klientki po nałożeniu koloru przy myjni w salonie fryzjerskim przy Piotrkowskiej w Łodzi",
  sections: [
    {
      heading: "Pasemka klasyczne czy rozświetlenie?",
      paragraphs: [
        "Klasyczne pasemka wykonuje się w folii, co pozwala precyzyjnie kontrolować, które pasma i o ile tonów się rozjaśniają. Rozświetlenie to delikatniejsza wersja — cienkie, rozproszone pasma, które dają efekt blasku, a nie kontrastu.",
      ],
      subsections: [
        {
          heading: "Pasemka z farbowaniem",
          paragraphs: [
            "Gdy baza wymaga odświeżenia albo pokrycia siwych włosów, łączymy pasemka z farbowaniem. Kolor bazowy i jasne pasma planujemy razem, żeby tworzyły spójną całość.",
          ],
        },
        {
          heading: "Pasemka dla mężczyzn",
          paragraphs: [
            "Wykonujemy też pasemka i pojaśnienia na krótszych męskich fryzurach — ta pozycja ma w cenniku osobną, niższą wycenę.",
          ],
        },
      ],
    },
    {
      heading: "Co warto wiedzieć przed wizytą",
      paragraphs: [
        "Jeśli masz zdjęcie efektu, który Ci się podoba, przynieś je — to najszybszy sposób, żeby dogadać się co do grubości i jasności pasm. W cenę koloryzacji wliczone jest strzyżenie i modelowanie.",
      ],
      list: [
        "Przy włosach wcześniej farbowanych na ciemno rozjaśnienie może wymagać więcej niż jednej wizyty.",
        "Po pasemkach warto co jakiś czas przyjść na tonowanie, które odświeży odcień.",
        "Do domowej pielęgnacji doradzimy kosmetyki do włosów rozjaśnianych.",
      ],
    },
  ],
  prices: [
    { label: "Pasemka / rozświetlanie + strzyżenie", tag: "pasemka" },
    { label: "Tonowanie", tag: "tonowanie" },
  ],
  faq: [
    {
      question: "Ile kosztują pasemka w Łodzi?",
      answer: `Pasemka lub rozświetlanie ze strzyżeniem kosztują u nas ${priceRangeLabel("pasemka")}. Cena zależy od długości i gęstości włosów, zużycia materiału oraz stylisty — niższe kwoty dotyczą krótszych, męskich fryzur.`,
    },
    {
      question: "Czy pasemka niszczą włosy?",
      answer:
        "Każde rozjaśnianie ingeruje w strukturę włosa, ale dobrze zaplanowane pasemka i odpowiednia pielęgnacja pozwalają utrzymać włosy w dobrej kondycji. Przy osłabionych włosach zaproponujemy dodatkowy zabieg pielęgnacyjny.",
    },
    {
      question: "Czym różnią się pasemka od balayage?",
      answer:
        "Pasemka wykonuje się zwykle w folii, od samej nasady, co daje równomierne rozjaśnienie. Balayage maluje się ręcznie i zaczyna niżej, dzięki czemu odrasta łagodniej.",
    },
  ],
  related: ["balayage-ombre-sombre", "koloryzacja-wlosow", "strzyzenie-damskie"],
  relatedPosts: ["kosmetyki-do-pielegnacji-zniszczonych-wlosow-lista-must-have"],
  specialists: ["mariola-snieg", "ania", "monika"],
};
