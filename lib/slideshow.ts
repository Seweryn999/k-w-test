/**
 * Wspólny „kontrakt przejścia” dla wszystkich slideshowów na stronie:
 * slideshow w tle Hero (strona główna) i baner zespołu (/zespol/).
 *
 * Oba komponenty różnią się obudową — Hero filtruje kadry po orientacji
 * ekranu, ustawia `object-position` i kładzie na zdjęciu trzy warstwy
 * przyciemnienia; baner zespołu ma swipe, strzałki, kropki i pauzę.
 * Wspólne jest tylko to, JAK kadr zmienia się w kadr, i właśnie to siedzi
 * tutaj — dzięki temu zmiana tempa w jednym miejscu przenosi się na oba
 * miejsca i nie da się ich rozjechać przez przeoczenie.
 */

/** Co ile milisekund zmienia się kadr przy auto-przewijaniu. */
export const SLIDE_INTERVAL_MS = 5000;

/** Długość crossfade'u — dłuższa niż typowa animacja UI, żeby zmiana nie rozpraszała. */
export const SLIDE_FADE_S = 1.2;

/** Krzywa crossfade'u. */
export const SLIDE_EASE = "easeInOut" as const;
