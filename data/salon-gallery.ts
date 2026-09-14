import type { StaticImageData } from "next/image";

import salon01 from "@/assets/images/salon-01.webp";
import salon02 from "@/assets/images/salon-02.webp";
import salon03 from "@/assets/images/salon-03.webp";
import salon04 from "@/assets/images/salon-04.webp";
import salon05 from "@/assets/images/salon-05.webp";
import salon07 from "@/assets/images/salon-07.webp";
import salon08 from "@/assets/images/salon-08.webp";

export type SalonPhoto = {
  src: StaticImageData;
  alt: string;
  /**
   * Punkt kadru (CSS `object-position`) w tle Hero — osobno dla ekranu
   * pionowego (telefon) i poziomego (desktop). Na telefonie z poziomego
   * zdjęcia zostaje ok. 1/3 szerokości, więc środek kadru rzadko trafia
   * w to, co na zdjęciu najciekawsze.
   */
  heroPosition?: { portrait: string; landscape: string };
};

export type GalleryPhoto = SalonPhoto & {
  /** Klasy rozpiętości w siatce bento (tylko lg+). */
  span: string;
  /** Rzeczywista szerokość kafla — steruje doborem wariantu z srcset. */
  sizes: string;
};

/**
 * JEDYNE źródło zdjęć wnętrza salonu. Korzystają z niego zarówno slideshow
 * w tle Hero, jak i galeria „Zobacz, gdzie usiądziesz” — żadnych ścieżek
 * wpisywanych na sztywno w komponentach.
 *
 * Kolejność w tablicy = kolejność slajdów w Hero = kolejność w DOM galerii,
 * czyli też kolejność auto-placement w siatce.
 */
export const salonPhotos: SalonPhoto[] = [
  {
    src: salon01,
    alt: "Rząd czarnych foteli fryzjerskich przy długim drewnianym blacie z lustrami",
    // Drewniany blat biegnie przez środek i prawą część kadru.
    heroPosition: { portrait: "58% 60%", landscape: "50% 62%" },
  },
  {
    src: salon02,
    alt: "Ceglana ściana z drewnianym zegarem, lustra i myjnie fryzjerskie",
    // Zdjęcie pionowe — w Hero pokazywane tylko na pionowych ekranach.
    heroPosition: { portrait: "50% 40%", landscape: "50% 40%" },
  },
  {
    src: salon03,
    alt: "Wzorzysta podłoga, fotele przy blacie i myjnie w salonie fryzjerskim",
    // Zdjęcie pionowe — w Hero pokazywane tylko na pionowych ekranach.
    heroPosition: { portrait: "45% 45%", landscape: "45% 45%" },
  },
  {
    src: salon04,
    alt: "Podświetlony neon z nazwą salonu na ciemnej ceglanej ścianie",
    // Na telefonie mieści się tylko część napisu — pokazujemy „KRYSTIAN”.
    heroPosition: { portrait: "30% 45%", landscape: "50% 45%" },
  },
  {
    src: salon05,
    alt: "Strefa myjni ze skórzanymi fotelami i kosmetykami do pielęgnacji włosów",
    // Myjnie na pierwszym planie, prawa-dolna część zdjęcia.
    heroPosition: { portrait: "62% 70%", landscape: "50% 65%" },
  },
  {
    src: salon07,
    alt: "Poczekalnia salonu ze skórzaną ławką, neonem i regałem z kosmetykami",
    // Neon i skórzana ława po prawej; lewa część to ciemna ściana.
    heroPosition: { portrait: "68% 50%", landscape: "55% 45%" },
  },
  {
    src: salon08,
    alt: "Stanowiska fryzjerskie z lustrami i drewnianym zegarem w Ogrodach Geyera",
    // Zegar i blat w centrum kadru.
    heroPosition: { portrait: "48% 50%", landscape: "50% 50%" },
  },
];

const SIZE_WIDE = "(min-width: 1024px) 620px, 85vw";
const SIZE_TILE = "(min-width: 1024px) 305px, 85vw";

/**
 * Układ kafli domapowany po indeksie do `salonPhotos`.
 * Wiersze 1–2 wypełniają: salon-01 (2×2) + salon-02 (1×2) + salon-03 (1×2).
 * Wiersz 3 wypełniają cztery kafle 1×1. Razem 12 komórek = 4 kolumny × 3 wiersze.
 */
const GALLERY_LAYOUT = [
  { span: "lg:col-span-2 lg:row-span-2", sizes: SIZE_WIDE },
  { span: "lg:col-span-1 lg:row-span-2", sizes: SIZE_TILE },
  { span: "lg:col-span-1 lg:row-span-2", sizes: SIZE_TILE },
  { span: "lg:col-span-1", sizes: SIZE_TILE },
  { span: "lg:col-span-1", sizes: SIZE_TILE },
  { span: "lg:col-span-1", sizes: SIZE_TILE },
  { span: "lg:col-span-1", sizes: SIZE_TILE },
] satisfies { span: string; sizes: string }[];

export const galleryPhotos: GalleryPhoto[] = salonPhotos.map(
  (photo, index) => ({ ...photo, ...GALLERY_LAYOUT[index] }),
);
