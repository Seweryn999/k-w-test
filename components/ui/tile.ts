/**
 * Warianty niebieskiego kafelka — ten sam wzorzec co na stronie głównej
 * (Features, Process, About). Promień rogów i padding zostają przy kafelku,
 * bo zależą od jego rangi w układzie strony.
 *
 * Niebieski ma być akcentem: dostają go tylko kafelki kluczowe (informacja
 * o cenniku, CTA). Zwykłe treści zostają na neutralnym `border-white/10`.
 */

/** Kafelek główny: obramowanie i gradient akcentu. */
export const ACCENT_TILE =
  "border border-accent/30 bg-gradient-to-br from-accent/20 to-accent-strong/5";

/** Dokładka dla kafelków klikalnych — hover jak na stronie głównej. */
export const ACCENT_TILE_HOVER =
  "transition duration-300 hover:border-accent/60 hover:from-accent/30";

/** Kafelek drugorzędny: samo obramowanie i ledwie zabarwione tło. */
export const ACCENT_TILE_SOFT = "border border-accent/20 bg-accent/[0.05]";
