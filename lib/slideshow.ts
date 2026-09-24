/**
 * Wspólny „kontrakt przejścia” dla wszystkich slideshowów na stronie:
 * slideshow w tle Hero (strona główna) i baner zespołu (/zespol/).
 *
 * Oba są na pełną szerokość i przewijają się wyłącznie samoistnie. Różni je tylko
 * obudowa — Hero filtruje kadry po orientacji ekranu i ustawia `object-position`
 * per zdjęcie, baner zespołu ma nakładkę z napisem. Wspólne jest to, JAK kadr
 * zmienia się w kadr, i właśnie to siedzi tutaj: zmiana tempa w jednym miejscu
 * przenosi się na oba i nie da się ich rozjechać przez przeoczenie.
 */

/** Co ile milisekund zmienia się kadr przy auto-przewijaniu. */
export const SLIDE_INTERVAL_MS = 5000;

/** Długość crossfade'u — dłuższa niż typowa animacja UI, żeby zmiana nie rozpraszała. */
export const SLIDE_FADE_S = 1.2;

/** Krzywa crossfade'u. */
export const SLIDE_EASE = "easeInOut" as const;
