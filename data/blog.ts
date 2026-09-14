import type { StaticImageData } from "next/image";

import kosmetyki from "@/assets/images/kosmetyki.png";
import pic2 from "@/assets/images/pic2.png";
import pic3 from "@/assets/images/pic3.png";

/**
 * Rejestr wpisów bloga — jedyne źródło prawdy o artykułach.
 *
 * Lista wpisów na /blog, kafle na stronie głównej, nawigacja poprzedni/następny,
 * sitemapa, dane strukturalne BlogPosting i kontekst chatbota czytają stąd.
 * Dodanie artykułu = jeden wpis w tej tablicy + jeden plik `app/blog/<slug>/page.tsx`
 * z samą treścią. Żadnego dopisywania po komponentach.
 *
 * UWAGA: `slug` wyznacza adres URL. Zmiana sluga istniejącego wpisu zrywa
 * indeksację w Google — jeśli naprawdę trzeba, dołóż redirect 301 w next.config.ts.
 */
export type BlogPost = {
  /** Tytuł wpisu — H1 artykułu i nagłówek kafla. */
  title: string;
  /**
   * Tytuł do wyniku wyszukiwania, gdy pełny `title` z nazwą salonu nie
   * zmieściłby się w ~60 znakach i Google i tak by go uciął. Opcjonalny.
   */
  metaTitle?: string;
  /** Ostatni segment adresu, bez slashy. */
  slug: string;
  /** Meta description i zajawka na listingu. */
  description: string;
  /** Data publikacji w ISO (YYYY-MM-DD) — do JSON-LD i sitemapy. */
  date: string;
  /** Ta sama data po polsku — do wyświetlenia. */
  dateLabel: string;
  /** Autor wpisu. */
  author: string;
  /** Kategoria pokazywana nad tytułem. */
  category: string;
  /** Zdjęcie główne — import statyczny, żeby next/image znał wymiary. */
  cover: StaticImageData;
  /** Opisowy alt zdjęcia głównego. Nie powielać samego tytułu. */
  coverAlt: string;
  /** Frazy kluczowe wpisu — trafiają do metadanych i JSON-LD. */
  keywords: string[];
};

/** Wpisy w kolejności wyświetlania: od najnowszego. */
export const blogPosts: BlogPost[] = [
  {
    title: "Kosmetyki do pielęgnacji zniszczonych włosów – lista must have",
    metaTitle: "Kosmetyki do zniszczonych włosów – lista must have",
    slug: "kosmetyki-do-pielegnacji-zniszczonych-wlosow-lista-must-have",
    description:
      "Najważniejsze kosmetyki, które pomagają odbudować strukturę włosa i zachować zdrowy wygląd na co dzień.",
    date: "2022-03-07",
    dateLabel: "7 marca 2022",
    author: "Krystian Wojewoda",
    category: "Pielęgnacja",
    cover: kosmetyki,
    coverAlt:
      "Profesjonalne kosmetyki do odbudowy zniszczonych włosów używane w salonie Krystian Wojewoda Hair Design w Łodzi",
    keywords: [
      "kosmetyki do zniszczonych włosów",
      "regeneracja włosów",
      "Olaplex",
      "pielęgnacja włosów Łódź",
    ],
  },
  {
    title: "Jak dbać o skórę głowy",
    slug: "jak-dbac-o-skore-glowy",
    description:
      "Zdrowe włosy zaczynają się od zdrowej skóry głowy. Sprawdź najważniejsze zasady codziennej pielęgnacji.",
    date: "2022-03-07",
    dateLabel: "7 marca 2022",
    author: "Krystian Wojewoda",
    category: "Pielęgnacja",
    cover: pic2,
    coverAlt:
      "Zabieg pielęgnacyjny skóry głowy wykonywany w salonie fryzjerskim w Łodzi",
    keywords: [
      "pielęgnacja skóry głowy",
      "sucha skóra głowy",
      "przetłuszczające się włosy",
      "trycholog Łódź",
    ],
  },
  {
    title: "Jaka fryzura pasuje do mojej twarzy?",
    metaTitle: "Jaka fryzura pasuje do mojej twarzy? Poradnik",
    slug: "jaka-fryzura-pasuje-do-mojej-twarzy",
    description:
      "Dowiedz się, jak dobrać fryzurę do kształtu twarzy oraz własnego stylu życia.",
    date: "2021-12-27",
    dateLabel: "27 grudnia 2021",
    author: "Krystian Wojewoda",
    category: "Stylizacja",
    cover: pic3,
    coverAlt:
      "Klientka po strzyżeniu dopasowanym do kształtu twarzy w salonie Krystian Wojewoda Hair Design",
    keywords: [
      "fryzura do kształtu twarzy",
      "dobór fryzury",
      "strzyżenie damskie Łódź",
      "metamorfoza włosów",
    ],
  },
];

/** Adres wpisu ze slashem na końcu — zgodnie z `trailingSlash: true`. */
export function postPath(slug: string): string {
  return `/blog/${slug}/`;
}

export function getPost(slug: string): BlogPost {
  const post = blogPosts.find((entry) => entry.slug === slug);

  // Rzucamy na etapie budowania, a nie renderujemy pustej strony — literówka
  // w slugu ma zatrzymać build, zanim trafi na produkcję.
  if (!post) {
    throw new Error(`Brak wpisu bloga o slugu "${slug}" w data/blog.ts`);
  }

  return post;
}

type ArticleNeighbours = {
  /** Wpis nowszy — o jeden wyżej na liście. */
  prev?: { href: string; label: string };
  /** Wpis starszy — o jeden niżej na liście. */
  next?: { href: string; label: string };
};

/**
 * Sąsiedzi wpisu liczeni z kolejności tablicy, więc nawigacja nie może się
 * rozjechać z listingiem ani wskazać nieistniejącego adresu.
 */
export function getNeighbours(slug: string): ArticleNeighbours {
  const index = blogPosts.findIndex((entry) => entry.slug === slug);
  const newer = index > 0 ? blogPosts[index - 1] : undefined;
  const older = index >= 0 ? blogPosts[index + 1] : undefined;

  return {
    prev: newer && { href: postPath(newer.slug), label: newer.title },
    next: older && { href: postPath(older.slug), label: older.title },
  };
}
