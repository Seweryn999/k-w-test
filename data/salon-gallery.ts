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
  src: StaticImageData;
  alt: string;
};

export type GalleryPhoto = SalonPhoto & {
  /** Klasy rozpiętości w siatce bento (tylko lg+). */
  span: string;
  /** Rzeczywista szerokość kafla — steruje doborem wariantu z srcset. */
  sizes: string;
};

/**
 * Kadr panoramiczny — używany WYŁĄCZNIE w Hero.
 * Świadomie nie pojawia się w galerii, żeby nie dublować zdjęcia na stronie.
 */
export const heroPhoto: SalonPhoto = {
  src: salon06,
  alt: "Wnętrze salonu Krystian Wojewoda Hair Design w Łodzi — stanowiska fryzjerskie przy drewnianym blacie",
};

const SIZE_WIDE = "(min-width: 1024px) 620px, 85vw";
const SIZE_TILE = "(min-width: 1024px) 305px, 85vw";

/**
 * Kolejność w tablicy = kolejność w DOM = kolejność auto-placement w siatce.
 * Wiersze 1–2 wypełniają: salon-01 (2×2) + salon-02 (1×2) + salon-03 (1×2).
 * Wiersz 3 wypełniają cztery kafle 1×1. Razem 12 komórek = 4 kolumny × 3 wiersze.
 */
export const galleryPhotos: GalleryPhoto[] = [
  {
    src: salon01,
    alt: "Rząd czarnych foteli fryzjerskich przy długim drewnianym blacie z lustrami",
    span: "lg:col-span-2 lg:row-span-2",
    sizes: SIZE_WIDE,
  },
  {
    src: salon02,
    alt: "Ceglana ściana z drewnianym zegarem, lustra i myjnie fryzjerskie",
    span: "lg:col-span-1 lg:row-span-2",
    sizes: SIZE_TILE,
  },
  {
    src: salon03,
    alt: "Wzorzysta podłoga, fotele przy blacie i myjnie w salonie fryzjerskim",
    span: "lg:col-span-1 lg:row-span-2",
    sizes: SIZE_TILE,
  },
  {
    src: salon04,
    alt: "Podświetlony neon z nazwą salonu na ciemnej ceglanej ścianie",
    span: "lg:col-span-1",
    sizes: SIZE_TILE,
  },
  {
    src: salon05,
    alt: "Strefa myjni ze skórzanymi fotelami i kosmetykami do pielęgnacji włosów",
    span: "lg:col-span-1",
    sizes: SIZE_TILE,
  },
  {
    src: salon07,
    alt: "Poczekalnia salonu ze skórzaną ławką, neonem i regałem z kosmetykami",
    span: "lg:col-span-1",
    sizes: SIZE_TILE,
  },
  {
    src: salon08,
    alt: "Stanowiska fryzjerskie z lustrami i drewnianym zegarem w Ogrodach Geyera",
    span: "lg:col-span-1",
    sizes: SIZE_TILE,
  },
];
