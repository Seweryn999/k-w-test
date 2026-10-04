/**
 * Cennik salonu — źródło prawdy dla wszystkich kwot podawanych na stronie.
 *
 * UWAGA na kolumny. Strona /cennik pokazuje klientowi wyłącznie `standard`
 * (cennik Marioli i Krystiana) oraz `price` (cennik pozostałych fryzjerów).
 * Kolumna `vip` nie jest renderowana nigdzie w serwisie. To z niej wzięły się
 * zawyżone kwoty, które trafiły kiedyś na stronę główną i do chatbota —
 * dlatego wszystkie kwoty prezentowane klientowi liczymy poniżej wyłącznie
 * z kolumn publicznych.
 */

/**
 * Etykieta usługi wyróżnianej poza cennikiem — na stronie głównej i w
 * odpowiedziach chatbota. Oznaczamy nią KAŻDY wiersz cennika dotyczący danej
 * usługi (także z drugiego bloku cen), bo "od" ma znaczyć najniższą kwotę,
 * jaką klient faktycznie widzi w tabeli.
 */
export type PriceTag =
  | "strzyzenie-damskie"
  | "strzyzenie-meskie"
  | "strzyzenie-dzieciece"
  | "farbowanie"
  | "balayage"
  | "pasemka"
  | "tonowanie"
  | "broda";

export type PriceRow = {
  service: string;
  standard: string;
  vip: string;
  tag?: PriceTag;
};

export type OtherPriceRow = {
  service: string;
  price: string;
  tag?: PriceTag;
};

export const mainPrices: PriceRow[] = [
  { service: "Strzyżenie damskie", standard: "220–260", vip: "190–230", tag: "strzyzenie-damskie" },
  { service: "Farbowanie + Strzyżenie **", standard: "480–520", vip: "440–480", tag: "farbowanie" },
  { service: "Farbowanie odrostu + Strzyżenie", standard: "350–390", vip: "320–360" },
  { service: "Baleyage / Sombre / Ombre + Strzyżenie **", standard: "500–540", vip: "460–500", tag: "balayage" },
  { service: "Pasemka / Rozświetlanie + Strzyżenie **", standard: "460–500", vip: "420–460", tag: "pasemka" },
  { service: "Farbowanie + Pasemka + Strzyżenie **", standard: "530–570", vip: "490–530" },
  { service: "Rozjaśnianie + Farba + Strzyżenie **", standard: "530–570", vip: "490–530" },
  { service: "Demakijaż **", standard: "140–160", vip: "130–150" },
  { service: "Modyfikacja **", standard: "210–230", vip: "200–220" },
  { service: "Tonowanie **", standard: "130–170", vip: "120–160", tag: "tonowanie" },
  { service: "Modelowanie", standard: "90–120", vip: "90–120" },
  { service: "Fale / Loki do usługi", standard: "100–120", vip: "90–100" },
  { service: "Cover + Strzyżenie **", standard: "360–420", vip: "330–390" },
  { service: "Zabieg pielęgnacyjny do usługi", standard: "100–150", vip: "100–150" },
  { service: "Strzyżenie męskie włosy krótkie", standard: "130", vip: "120", tag: "strzyzenie-meskie" },
  { service: "Strzyżenie męskie włosy długie", standard: "150", vip: "140", tag: "strzyzenie-meskie" },
  { service: "Broda ***", standard: "40", vip: "30", tag: "broda" },
  { service: "Pojaśnienie + Strzyżenie **", standard: "370", vip: "350" },
  { service: "Farbowanie + Strzyżenie **", standard: "390", vip: "370", tag: "farbowanie" },
  { service: "Rozjaśnianie + Farba **", standard: "460", vip: "420" },
  { service: "Pasemka + Strzyżenie **", standard: "390", vip: "360", tag: "pasemka" },
  { service: "Cover + Strzyżenie **", standard: "280", vip: "260" },
  { service: "Strzyżenie dziecięce <6 lat **", standard: "110", vip: "70", tag: "strzyzenie-dzieciece" },
  { service: "Konsultacja *", standard: "50", vip: "–" },
];

export const otherPrices: OtherPriceRow[] = [
  { service: "Strzyżenie Damskie", price: "170–210", tag: "strzyzenie-damskie" },
  { service: "Farbowanie + Strzyżenie **", price: "430–470", tag: "farbowanie" },
  { service: "Farbowanie Odrostu + Strzyżenie", price: "300–340" },
  { service: "Baleyage/Sombre/Ombre + Strzyżenie **", price: "450–490", tag: "balayage" },
  { service: "Pasemka/Rozświetlenie + Strzyżenie **", price: "420–460", tag: "pasemka" },
  { service: "Farbowanie + Pasemka + Strzyżenie **", price: "470–510" },
  { service: "Rozjaśnianie + Farba + Strzyżenie **", price: "470–510" },
  { service: "Refleksy Airtouch **", price: "650–750" },
  { service: "Demakijaż **", price: "130–150" },
  { service: "Modyfikacja **", price: "200–220" },
  { service: "Tonowanie **", price: "120–160", tag: "tonowanie" },
  { service: "Trwała", price: "430–490" },
  { service: "Modelowanie", price: "90–120" },
  { service: "Fale/Loki", price: "150–180" },
  { service: "Fale Hollywoodzkie **", price: "200–250" },
  { service: "Upięcie **", price: "350–400" },
  { service: "Upięcie próbne", price: "300–350" },
  { service: "Cover + Strzyżenie", price: "330–390" },
  { service: "Zabieg Pielęgnacyjny do usługi", price: "100–150" },
  { service: "Pielęgnacja + Modelowanie", price: "150–240" },
  { service: "Zabieg Enviro **", price: "350–450" },
  { service: "Strzyżenie Męskie włosy krótkie", price: "100", tag: "strzyzenie-meskie" },
  { service: "Strzyżenie Męskie włosy długie", price: "120", tag: "strzyzenie-meskie" },
  { service: "Broda ***", price: "30", tag: "broda" },
  { service: "Pojaśnianie + Strzyżenie **", price: "340" },
  { service: "Farbowanie + Strzyżenie **", price: "360", tag: "farbowanie" },
  { service: "Rozjaśnianie + Farba + Strzyżenie **", price: "400" },
  { service: "Pasemka + Strzyżenie **", price: "360", tag: "pasemka" },
  { service: "Cover + Strzyżenie **", price: "250" },
  { service: "Strzyżenie Dziecięce <6 lat **", price: "70", tag: "strzyzenie-dzieciece" },
  { service: "Strzyżenie Dziecięce 6-12 lat **", price: "90" },
  { service: "Konsultacja *", price: "–" },
];

/**
 * Wyciąga wszystkie kwoty z pola cennika. Pola mają postać "220–260", "130"
 * albo "–" (usługa bez ceny), a myślnik rozdzielający jest tym samym znakiem
 * co oznaczenie braku ceny — dlatego czytamy same grupy cyfr zamiast dzielić
 * tekst po myślniku.
 */
function amountsIn(value: string): number[] {
  return (value.match(/\d+/g) ?? []).map(Number);
}

/**
 * Najniższa i najwyższa kwota, jaką klient widzi w cenniku dla danej usługi.
 *
 * Liczona wyłącznie z kolumn publikowanych na stronie /cennik — kolumna `vip`
 * jest świadomie pomijana, bo nigdzie jej nie pokazujemy, a to z niej brały
 * się zaniżone "od" wpisywane wcześniej ręcznie.
 */
export function priceSpan(tag: PriceTag): { min: number; max: number } {
  const amounts = [
    ...mainPrices
      .filter((row) => row.tag === tag)
      .flatMap((row) => amountsIn(row.standard)),
    ...otherPrices
      .filter((row) => row.tag === tag)
      .flatMap((row) => amountsIn(row.price)),
  ];

  // Rzucamy na etapie budowania — literówka w tagu ma zatrzymać build,
  // a nie wypuścić na produkcję kartę usługi bez ceny.
  if (amounts.length === 0) {
    throw new Error(`Brak pozycji cennika oznaczonych tagiem "${tag}"`);
  }

  return { min: Math.min(...amounts), max: Math.max(...amounts) };
}

/** Najniższa kwota z cennika, np. "od 170 zł". */
export function lowestPriceLabel(tag: PriceTag): string {
  return `od ${priceSpan(tag).min} zł`;
}

/** Widełki z cennika, np. "170–260 zł" (albo "50 zł", gdy kwota jest jedna). */
export function priceRangeLabel(tag: PriceTag): string {
  const { min, max } = priceSpan(tag);

  return min === max ? `${min} zł` : `${min}–${max} zł`;
}

/**
 * Cztery usługi wyróżnione na stronie głównej. Kwoty wyliczają się z cennika,
 * więc nie mogą się już z nim rozjechać — wcześniej były wpisane osobno
 * i wszystkie cztery były zawyżone.
 */
export const priceHighlights: { service: string; price: string }[] = (
  [
    { service: "Strzyżenie damskie", tag: "strzyzenie-damskie" },
    { service: "Balayage / Sombre / Ombre + strzyżenie", tag: "balayage" },
    { service: "Pasemka + strzyżenie", tag: "pasemka" },
    { service: "Strzyżenie męskie", tag: "strzyzenie-meskie" },
  ] as const
).map(({ service, tag }) => ({ service, price: lowestPriceLabel(tag) }));

/**
 * Objaśnienia gwiazdek dopisanych do nazw usług w cenniku. Strona salonu
 * nigdzie ich nie objaśniała, więc opisy wyprowadzone są z `pricingRules`:
 *
 * - `*`   stoi wyłącznie przy „Konsultacja" → zasada o konsultacji za 50 zł.
 * - `***` stoi wyłącznie przy „Broda" → zasada o korekcie brody.
 * - `**`  stoi przy koloryzacjach, ale też przy demakijażu, upięciu,
 *         strzyżeniu dziecięcym czy zabiegu Enviro, a nie stoi np. przy
 *         „Farbowanie odrostu + Strzyżenie" — z treści nie da się ustalić,
 *         co oznacza.
 *
 * TODO(Krystian): potwierdzić znaczenie `**` (oraz dla pewności `*` i `***`).
 * Do tego czasu `**` opisuje neutralna zasada nr 4 z regulaminu cennika,
 * która i tak dotyczy wszystkich usług.
 */
const priceMarkerDescriptions: Record<string, string> = {
  "*": "Koszt konsultacji jest w całości odejmowany od ceny zrealizowanej usługi.",
  "**": "Ostateczna cena zależy od długości i gęstości włosa, zużycia materiału oraz trudności wykonania.",
  "***": "Wykonujemy jedynie delikatną korektę i podcięcie brody, bez usług barberskich.",
};

/** Gwiazdka (lub kilka) na końcu nazwy usługi, np. "Broda ***" → "***". */
function markerOf(service: string): string | undefined {
  return service.match(/(\*+)\s*$/)?.[1];
}

/**
 * Legenda pod cennikiem — tylko te oznaczenia, które faktycznie występują
 * w tabelach, od najkrótszego. Gwiazdka bez opisu zatrzymuje build, żeby
 * nowe oznaczenie nie trafiło na stronę bez wyjaśnienia.
 */
export const priceLegend: { symbol: string; description: string }[] = [
  ...new Set(
    [...mainPrices, ...otherPrices]
      .map((row) => markerOf(row.service))
      .filter((marker): marker is string => Boolean(marker)),
  ),
]
  .sort((a, b) => a.length - b.length)
  .map((symbol) => {
    const description = priceMarkerDescriptions[symbol];

    if (!description) {
      throw new Error(`Brak objaśnienia oznaczenia "${symbol}" w legendzie cennika`);
    }

    return { symbol, description };
  });

export const pricingRules: string[] = [
  "Fryzury wieczorowe, ślubne i weselne upina jedynie Aneta i Monika.",
  "W cenę koloryzacji i trwałej wliczone jest również strzyżenie i modelowanie.",
  "W cenę tonowania nie jest wliczone modelowanie.",
  "Ostateczna cena zależy od długości i gęstości włosa, zużycia materiału oraz trudności wykonania.",
  "Nie ma możliwości strzyżenia bez mycia.",
  "Konsultacja kosztuje 50 zł — kwota w całości odejmowana jest przy zrealizowanej usłudze.",
  "Każda koloryzacja bez strzyżenia: minus 60 zł.",
  "Wykonujemy jedynie delikatną korektę i podcięcie brody. Nie wykonujemy usług barberskich ani zaawansowanego modelowania brody.",
];
