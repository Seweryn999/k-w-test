/**
 * Jedyne źródło prawdy o danych firmy (NAP: name, address, phone).
 *
 * Wszystko, co opisuje salon "na zewnątrz" — adres, telefon, godziny, geo,
 * profile social, link do rezerwacji — mieszka tutaj. Stopka, hero, kontakt,
 * chatbot i dane strukturalne (JSON-LD) czytają z tego pliku, więc zmiana
 * numeru telefonu czy godzin to jedna edycja, a nie polowanie po komponentach.
 *
 * NAP musi być identyczny tu, w wizytówce Google i w Booksy — rozjazd w
 * adresie albo formacie telefonu osłabia pozycjonowanie lokalne.
 */

export const BUSINESS = {
  /** Nazwa prawna/marketingowa używana w JSON-LD i w tytułach. */
  name: "Krystian Wojewoda Hair Design",
  /** Krótsza forma marki, używana potocznie i w treściach. */
  shortName: "Wojewoda Studio",
  legalName: "Krystian Wojewoda Hair Design",

  description:
    "Salon fryzjerski w centrum Łodzi przy ul. Piotrkowskiej 293/305. Koloryzacja, strzyżenie, pielęgnacja i metamorfozy włosów.",

  /** Rok założenia — używany w hero i w JSON-LD (foundingDate). */
  foundingYear: "1996",

  address: {
    street: "ul. Piotrkowska 293/305",
    /** Bez prefiksu "ul." — schema.org oczekuje samej ulicy z numerem. */
    streetAddress: "Piotrkowska 293/305",
    postalCode: "90-369",
    city: "Łódź",
    region: "łódzkie",
    country: "PL",
    /** Nazwa kompleksu — pomaga klientom trafić, bo adres bywa mylący. */
    venue: "Ogrody Geyera",
  },

  /**
   * TODO (do potwierdzenia z klientem): współrzędne przybliżone z mapy.
   * Docelowo przepisać dokładnie z wizytówki Google Business Profile,
   * żeby pinezka w danych strukturalnych zgadzała się z tą w Mapach.
   */
  geo: {
    latitude: 51.7396,
    longitude: 19.4527,
  },

  /** Format E.164 — wymagany przez schema.org i klikalny na mobile. */
  phone: "+48730796861",
  /** Ta sama liczba w formacie do wyświetlania. */
  phoneLabel: "+48 730 796 861",
  email: "salonkwhd@gmail.com",

  /**
   * Godziny otwarcia. `days` używa nazw dni wg schema.org, `label` jest tym,
   * co widzi człowiek. Niedziela nieczynna — nie wpisujemy jej wcale,
   * bo brak wpisu w openingHoursSpecification znaczy "zamknięte".
   */
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "21:00",
      label: "Poniedziałek – piątek",
      hoursLabel: "9:00 – 21:00",
    },
    {
      days: ["Saturday"],
      opens: "09:00",
      closes: "15:00",
      label: "Sobota",
      hoursLabel: "9:00 – 15:00",
    },
  ],

  /** Widełki cen w notacji schema.org oraz realne widełki w PLN. */
  priceRange: "$$",
  priceFrom: 30,
  priceTo: 750,
  currency: "PLN",

  /** Miasto i okolice, na które realnie pracuje salon. */
  areaServed: ["Łódź", "województwo łódzkie"],

  social: {
    instagram: "https://www.instagram.com/salonkwhd/",
    facebook: "https://www.facebook.com/KrystianWojewodaHairDesign/",
    /** TODO (do potwierdzenia): czy salon ma profil na TikToku / YouTube? */
  },

  /** Link do wizytówki w Mapach Google (przycisk "Jak dojechać"). */
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Krystian%20Wojewoda%20Hair%20Design%20Piotrkowska%20293%2F305%20%C5%81%C3%B3d%C5%BA",
} as const;

/** Adres w jednej linii — do stopki, sekcji kontakt i JSON-LD. */
export const ADDRESS_LINE = `${BUSINESS.address.street}, ${BUSINESS.address.postalCode} ${BUSINESS.address.city}`;

/** Profile, do których salon się przyznaje — trafiają do sameAs w JSON-LD. */
export const SAME_AS = [
  BUSINESS.social.instagram,
  BUSINESS.social.facebook,
];
