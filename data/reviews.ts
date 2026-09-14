/**
 * Jedyne źródło prawdy o opiniach i ocenie salonu.
 * Wszystkie liczby pochodzą z Google — nie mieszać ze statystykami Booksy.
 * Zmiana tutaj aktualizuje hero, sekcję "O salonie" i sekcję opinii.
 * Liczby NIE trafiają do JSON-LD — powód w komentarzu w lib/schema.ts.
 */
export const REVIEWS = {
  count: 460,
  rating: 4.7,
  bestRating: 5,
  source: "Google",
  /** Etykieta używana pod każdą liczbą opinii. */
  label: "opinii w Google",
  /** Polska typografia — przecinek dziesiętny. */
  ratingLabel: "4,7",
  countLabel: "460",
} as const;
