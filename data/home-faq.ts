// SZKIC DO WERYFIKACJI — treść do akceptacji przez salon.
import { BUSINESS } from "@/data/business";
import { REVIEWS } from "@/data/reviews";
import { services } from "@/data/services";
import type { FaqItem } from "@/lib/schema";

/**
 * Pytania i odpowiedzi na stronie głównej (widoczne + FAQPage).
 *
 * Nie powielają FAQ ze strony kontaktu (godziny, dojazd, zasady cennika) —
 * odpowiadają na pytania "wyboru salonu", czyli na zapytania typu
 * "najlepszy fryzjer Łódź", i odsyłają do stron usług.
 */
const SERVICE_NAMES = services.map((service) => service.name.toLowerCase()).join(", ");

export const homeFaq: FaqItem[] = [
  {
    question: "Jak wybrać najlepszego fryzjera w Łodzi?",
    answer: `Najlepszy fryzjer to ten, który specjalizuje się w usłudze, której potrzebujesz. Sprawdź opinie klientów, zdjęcia efektów i to, czy salon oferuje konsultację przed dużą zmianą. Nasz salon przy Piotrkowskiej ma ocenę ${REVIEWS.ratingLabel} na podstawie ${REVIEWS.countLabel} ${REVIEWS.label}, w zawodzie jesteśmy od ${BUSINESS.foundingYear} roku, a na stronach usług podajemy, którzy styliści specjalizują się w danej usłudze.`,
  },
  {
    question: "Jakie usługi fryzjerskie wykonujecie?",
    answer: `W salonie przy ul. Piotrkowskiej 293/305 wykonujemy m.in.: ${SERVICE_NAMES}. Każda z tych usług ma osobną stronę z opisem, cenami i odpowiedziami na najczęstsze pytania.`,
  },
  {
    question: "Czy strzyżecie mężczyzn i dzieci?",
    answer:
      "Tak. Wykonujemy strzyżenie męskie na krótkie i długie włosy z delikatną korektą brody oraz strzyżenie dziecięce. Nie świadczymy usług barberskich.",
  },
  {
    question: "Czy przed metamorfozą mogę umówić się na konsultację?",
    answer:
      "Tak. Konsultacja kosztuje 50 zł, a kwota ta jest w całości odliczana od ceny zrealizowanej usługi. Ocenimy kondycję włosów i zaproponujemy realny plan zmiany.",
  },
];
