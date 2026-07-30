import type { StaticImageData } from "next/image";

import salon01 from "@/assets/images/salon-01.webp";
import salon02 from "@/assets/images/salon-02.webp";
import salon03 from "@/assets/images/salon-03.webp";
import salon04 from "@/assets/images/salon-04.webp";
import salon05 from "@/assets/images/salon-05.webp";
import salon06 from "@/assets/images/salon-06.webp";
import salon07 from "@/assets/images/salon-07.webp";
import salon08 from "@/assets/images/salon-08.webp";

export type SalonPhoto = {
  /** Stabilny klucz listy — alt bywa redagowany, więc nie nadaje się na key. */
  id: string;
  src: StaticImageData;
  alt: string;
  /** Umiejscowienie w siatce bento (od breakpointu lg). */
  tile: string;
  /** Dobrane do rzeczywistej szerokości kafla: 85vw na mobile, 50vw / 25vw na desktopie. */
  sizes: string;
};

const WIDE_TILE_SIZES = "(min-width: 1024px) 50vw, 85vw";
const NARROW_TILE_SIZES = "(min-width: 1024px) 25vw, 85vw";

/**
 * Najszerszy kadr całej sali zarezerwowany dla hero — celowo nie występuje
 * w galerii, żeby to samo zdjęcie nie pojawiło się dwa razy na stronie głównej.
 */
export const heroPhoto = {
  src: salon06,
  alt: "Wnętrze salonu Krystian Wojewoda Hair Design w Łodzi — rząd stanowisk fryzjerskich przy drewnianym blacie, ceglane ściany i wzorzysta podłoga",
};

/**
 * Kolejność w tablicy = kolejność w karuzeli mobilnej.
 * Na desktopie o układzie decyduje pole `tile`, więc kolejność w DOM jest dowolna.
 */
export const salonGallery: SalonPhoto[] = [
  {
    id: "sala-z-gory",
    src: salon08,
    alt: "Widok z góry na rząd stanowisk fryzjerskich przy drewnianym blacie, drewniany zegar na ceglanej ścianie i myjnie w tle",
    tile: "lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2",
    sizes: WIDE_TILE_SIZES,
  },
  {
    id: "zegar-nad-stanowiskami",
    src: salon02,
    alt: "Czarna ceglana ściana z dużym drewnianym zegarem, podłużne lampy nad stanowiskami, na pierwszym planie myjnie fryzjerskie",
    tile: "lg:col-start-3 lg:row-start-1 lg:row-span-2",
    sizes: NARROW_TILE_SIZES,
  },
  {
    id: "neon-na-ceglanej-scianie",
    src: salon04,
    alt: "Zielono podświetlony neon z nazwą salonu na czarnej ceglanej ścianie",
    tile: "lg:col-start-4 lg:row-start-1",
    sizes: NARROW_TILE_SIZES,
  },
  {
    id: "drewniany-blat-stanowisk",
    src: salon01,
    alt: "Masywny blat z litego drewna biegnący wzdłuż stanowisk, czarne fotele fryzjerskie i zieleń w tle",
    tile: "lg:col-start-4 lg:row-start-2",
    sizes: NARROW_TILE_SIZES,
  },
  {
    id: "strefa-myjni",
    src: salon05,
    alt: "Strefa myjni z brązowymi pikowanymi fotelami, białymi umywalkami i kosmetykami, w tle sala ze stanowiskami",
    tile: "lg:col-start-1 lg:col-span-2 lg:row-start-3 lg:row-span-2",
    sizes: WIDE_TILE_SIZES,
  },
  {
    id: "wzorzysta-podloga",
    src: salon03,
    alt: "Wzorzysta czarno-biała podłoga, czarne fotele przy drewnianym blacie i myjnie na pierwszym planie",
    tile: "lg:col-start-3 lg:row-start-3 lg:row-span-2",
    sizes: NARROW_TILE_SIZES,
  },
  {
    id: "poczekalnia",
    src: salon07,
    // Kadr poziomy, ale na desktopie świadomie przycięty do pionowego kafla —
    // regał z kosmetykami i neon dają w tej scenie wystarczająco dużo pionu.
    alt: "Poczekalnia ze skórzaną ławą, neonem z nazwą salonu i regałem z kosmetykami do włosów",
    tile: "lg:col-start-4 lg:row-start-3 lg:row-span-2",
    sizes: NARROW_TILE_SIZES,
  },
];
