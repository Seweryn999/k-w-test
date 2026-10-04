import type { StaticImageData } from "next/image";

import krystian from "@/assets/images/krystian.webp";
import mariola from "@/assets/images/mariola.webp";
import danuta from "@/assets/images/danuta.webp";
import aneta from "@/assets/images/aneta.webp";
import ania from "@/assets/images/ania.webp";
import monika from "@/assets/images/monika.webp";
import romina from "@/assets/images/romina.webp";
import julia from "@/assets/images/julia.webp";
import marta from "@/assets/images/marta.webp";

/**
 * JEDYNE źródło portretów zespołu (1000×1250, czyli 4:5). Korzystają z niego
 * karty na /zespol, sekcja zespołu na stronie głównej i podstrony
 * /zespol/[slug] — wcześniej podstrony importowały osobno stare .png i po
 * wymianie zdjęć w kartach pokazywały nieaktualne portrety.
 *
 * Osobny moduł zamiast pola w `data/team.ts`, bo tamten plik czyta też
 * chatbot (API route), a on zdjęć nie potrzebuje.
 */
export const teamPhotos: Record<string, StaticImageData> = {
  "krystian-wojewoda": krystian,
  "mariola-snieg": mariola,
  danuta,
  aneta,
  ania,
  monika,
  romina,
  julia,
  marta,
};

export function teamPhoto(slug: string): StaticImageData {
  const photo = teamPhotos[slug];

  // Brak zdjęcia ma zatrzymać build, a nie wypuścić podstronę z pustym kadrem.
  if (!photo) {
    throw new Error(`Brak portretu dla "${slug}" w data/team-photos.ts`);
  }

  return photo;
}
