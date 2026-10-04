import type { StaticImageData } from "next/image";

import type { PriceTag } from "@/data/pricing";
import type { FaqItem } from "@/lib/schema";

/**
 * Opis jednej strony usługi (/uslugi/<slug>/).
 *
 * Strona, karta na stronie głównej, lista na /uslugi, sitemapa, dane
 * strukturalne (Service, FAQPage, BreadcrumbList) i linki z bloga budują się
 * wyłącznie z tych pól — szablon w app/uslugi/[slug]/page.tsx nie zna żadnej
 * konkretnej usługi.
 */
export type ServiceSection = {
  /** Nagłówek H2 sekcji. */
  heading: string;
  paragraphs: string[];
  /** Opcjonalna lista punktowana pod akapitami. */
  list?: string[];
  /** Podsekcje z nagłówkami H3. */
  subsections?: { heading: string; paragraphs: string[] }[];
};

export type ServicePrice = {
  /** Nazwa pozycji widoczna przy kwocie, np. "Farbowanie + strzyżenie". */
  label: string;
  /** Tag z data/pricing.ts — kwota liczy się z cennika, nigdy nie wpisujemy jej tu. */
  tag: PriceTag;
};

export type Service = {
  /**
   * Ostatni segment adresu, bez slashy. UWAGA: zmiana sluga opublikowanej
   * usługi zrywa indeksację — wtedy konieczny redirect 301 w next.config.ts.
   */
  slug: string;
  /** Krótka nazwa usługi — okruszki, karty, linki. */
  name: string;
  /** Jedyny H1 strony — zawiera frazę "usługa + Łódź". */
  h1: string;
  /** <title> — do ok. 60 znaków, z frazą "usługa + Łódź". */
  metaTitle: string;
  /** Meta description — do ok. 155 znaków. */
  metaDescription: string;
  /** Jedno-dwa zdania na kartę usługi (strona główna, /uslugi, powiązane). */
  cardDescription: string;
  /** Akapit wprowadzający pod H1. */
  lead: string;
  /** Zdjęcie — import statyczny, żeby next/image znał wymiary. */
  image: StaticImageData;
  /** Opisowy alt: co widać na zdjęciu, nie powtórzony tytuł. */
  imageAlt: string;
  /** Treść merytoryczna — kolejne sekcje H2 (z opcjonalnymi H3). */
  sections: ServiceSection[];
  /** Pozycje cennika pokazywane na stronie; pierwsza jest "główną" ceną karty. */
  prices: ServicePrice[];
  /** Pytania i odpowiedzi (3–5) — widoczne na stronie i w FAQPage. */
  faq: FaqItem[];
  /** Slugi powiązanych usług z rejestru. */
  related: string[];
  /** Slugi powiązanych wpisów z data/blog.ts. */
  relatedPosts: string[];
  /** Slugi stylistów z data/team.ts, którzy specjalizują się w usłudze. */
  specialists: string[];
};
