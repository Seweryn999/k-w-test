import { ADDRESS_LINE, BUSINESS } from "@/data/business";
import type { FaqItem } from "@/lib/schema";

/**
 * Pytania i odpowiedzi widoczne na stronie kontaktu.
 *
 * Ta sama lista zasila widoczną sekcję FAQ i dane strukturalne FAQPage —
 * markup bez pokrycia w treści strony Google traktuje jako spam, więc te
 * dwie rzeczy muszą pochodzić z jednego miejsca.
 *
 * Odpowiedzi opierają się wyłącznie na danych, które salon już potwierdził:
 * godziny z data/business.ts oraz zasady z cennika (data/pricing.ts).
 * Nie wpisywać tu cen konkretnych usług — widełki zależą od stylisty i
 * długości włosów, a rozjazd z cennikiem byłby gorszy niż brak odpowiedzi.
 */
const HOURS = BUSINESS.openingHours
  .map((slot) => `${slot.label.toLowerCase()} ${slot.hoursLabel}`)
  .join(", ");

export const bookingFaq: FaqItem[] = [
  {
    question: "Jak umówić wizytę w salonie fryzjerskim w Łodzi?",
    answer: `Najszybciej przez rezerwację online w Booksy — kalendarz jest dostępny całą dobę i od razu widać wolne terminy u konkretnego stylisty. Można też zadzwonić pod ${BUSINESS.phoneLabel} w godzinach otwarcia salonu lub napisać na ${BUSINESS.email}.`,
  },
  {
    question: "W jakich godzinach otwarty jest salon?",
    answer: `Salon jest czynny: ${HOURS}. W niedziele salon jest zamknięty. Rezerwacji online można dokonać o każdej porze.`,
  },
  {
    question: "Gdzie dokładnie znajduje się salon?",
    answer: `${ADDRESS_LINE}, na terenie kompleksu ${BUSINESS.address.venue} w centrum Łodzi. To południowy odcinek Piotrkowskiej — na miejscu jest parking.`,
  },
  {
    question: "Czy w cenę koloryzacji wliczone jest strzyżenie?",
    answer:
      "Tak. W cenę każdej koloryzacji oraz trwałej ondulacji wliczone jest strzyżenie i modelowanie. Jeśli koloryzacja ma być wykonana bez strzyżenia, cena usługi jest niższa o 60 zł. Wyjątkiem jest tonowanie — w jego cenę nie wchodzi modelowanie.",
  },
  {
    question: "Ile kosztuje konsultacja przed metamorfozą?",
    answer:
      "Konsultacja kosztuje 50 zł, a kwota ta jest w całości odliczana od ceny zrealizowanej usługi. Podczas konsultacji oceniamy kondycję włosów i ustalamy realny plan koloryzacji lub strzyżenia.",
  },
  {
    question: "Od czego zależy ostateczna cena usługi?",
    answer:
      "Od długości i gęstości włosów, ilości zużytego materiału oraz stopnia trudności wykonania, a także od tego, u którego stylisty rezerwujesz wizytę. W cenniku na stronie podajemy widełki dla każdej usługi.",
  },
  {
    question: "Czy salon wykonuje fryzury ślubne i wieczorowe?",
    answer:
      "Tak. Upięcia ślubne, weselne i wieczorowe wykonują Aneta oraz Monika. Możliwe jest też umówienie upięcia próbnego przed samą uroczystością.",
  },
  {
    question: "Czy salon świadczy usługi barberskie?",
    answer:
      "Nie. Wykonujemy strzyżenie męskie oraz delikatną korektę i podcięcie brody, ale nie prowadzimy usług barberskich ani zaawansowanego modelowania brody.",
  },
];
