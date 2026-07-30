export type SalonPhoto = {
  src: string;
  alt: string;
  /** Kadr źródłowy — decyduje o proporcji kafla w karuzeli mobilnej. */
  orientation: "landscape" | "portrait";
  /** Umiejscowienie w siatce bento (od breakpointu lg). */
  tile: string;
  /** Dobrane do rzeczywistej szerokości kafla: 85vw na mobile, 50vw / 25vw na desktopie. */
  sizes: string;
};

const WIDE_TILE_SIZES = "(min-width: 1024px) 50vw, 85vw";
const NARROW_TILE_SIZES = "(min-width: 1024px) 25vw, 85vw";

/**
 * Kadr ogólny salonu zarezerwowany dla hero — celowo nie występuje w galerii,
 * żeby to samo zdjęcie nie pojawiło się dwa razy na stronie głównej.
 */
export const heroPhoto = {
  src: "/images/salon/wnetrze-salonu-panorama.webp",
  alt: "Wnętrze salonu Krystian Wojewoda Hair Design w Łodzi — stanowiska fryzjerskie, ceglane ściany i strefa myjni",
};

/**
 * Kolejność w tablicy = kolejność w karuzeli mobilnej.
 * Na desktopie o układzie decyduje pole `tile`, więc kolejność w DOM jest dowolna.
 */
export const salonGallery: SalonPhoto[] = [
  {
    src: "/images/salon/stanowiska-z-lustrami-i-zegarem.webp",
    alt: "Stanowiska fryzjerskie z lustrami i drewnianym zegarem na ceglanej ścianie salonu",
    orientation: "landscape",
    tile: "lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2",
    sizes: WIDE_TILE_SIZES,
  },
  {
    src: "/images/salon/ceglana-sciana-zegar-myjnie.webp",
    alt: "Ceglana ściana z drewnianym zegarem i lustrami, na pierwszym planie myjnie fryzjerskie",
    orientation: "portrait",
    tile: "lg:col-start-3 lg:row-start-1 lg:row-span-2",
    sizes: NARROW_TILE_SIZES,
  },
  {
    src: "/images/salon/neon-wojewoda-studio-ceglana-sciana.webp",
    alt: "Neon z nazwą salonu na ceglanej ścianie podświetlonej na zielono",
    orientation: "landscape",
    tile: "lg:col-start-4 lg:row-start-1",
    sizes: NARROW_TILE_SIZES,
  },
  {
    src: "/images/salon/strefa-myjni-skorzane-fotele.webp",
    alt: "Strefa myjni z brązowymi skórzanymi fotelami do mycia włosów",
    orientation: "landscape",
    tile: "lg:col-start-4 lg:row-start-2",
    sizes: NARROW_TILE_SIZES,
  },
  {
    src: "/images/salon/stanowiska-fryzjerskie-lustra.webp",
    alt: "Rząd foteli fryzjerskich ustawionych wzdłuż długiego drewnianego blatu z lustrami",
    orientation: "landscape",
    tile: "lg:col-start-1 lg:col-span-2 lg:row-start-3 lg:row-span-2",
    sizes: WIDE_TILE_SIZES,
  },
  {
    src: "/images/salon/wzorzysta-podloga-fotele-myjnie.webp",
    alt: "Wzorzysta podłoga, drewniany blat i fotele fryzjerskie, w głębi strefa myjni",
    orientation: "portrait",
    tile: "lg:col-start-3 lg:row-start-3 lg:row-span-2",
    sizes: NARROW_TILE_SIZES,
  },
  {
    src: "/images/salon/poczekalnia-lawka-regal-z-kosmetykami.webp",
    alt: "Poczekalnia salonu ze skórzaną ławką, neonem i regałem z kosmetykami do włosów",
    // Kadr poziomy, ale na desktopie świadomie przycięty do pionowego kafla —
    // regał i neon dają w tej scenie wystarczająco dużo pionu.
    orientation: "landscape",
    tile: "lg:col-start-4 lg:row-start-3 lg:row-span-2",
    sizes: NARROW_TILE_SIZES,
  },
];
