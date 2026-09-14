import type { Metadata } from "next";

import { getPost, postPath } from "@/data/blog";

export const SITE_URL = "https://wojewodastudio.pl";
export const SITE_NAME = "Krystian Wojewoda Hair Design";

// Zdjęcie zespołu z sekcji hero, przycięte do 1200x630. og:image musi być
// adresem absolutnym — scrapery social media nie rozwijają ścieżek względnych.
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const OG_IMAGE_ALT =
  "Zespół salonu Krystian Wojewoda Hair Design w Łodzi";

type PageSeo = {
  title: string;
  description: string;
  /** Ścieżka kanoniczna ze slashem na końcu, np. "/cennik/". */
  path: string;
  type?: "website" | "article";
};

/**
 * Buduje komplet metadanych podstrony: title, description, canonical,
 * Open Graph i Twitter Card. Next.js nie kopiuje `title` do `og:title`,
 * więc każda podstrona musi mieć własny blok `openGraph` — inaczej
 * wszystkie odziedziczyłyby OG z layoutu i miały ten sam podgląd.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "pl_PL",
      siteName: SITE_NAME,
      url: `${SITE_URL}${path}`,
      title,
      description,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_IMAGE_ALT }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

/**
 * Metadane artykułu bloga zbudowane w całości z rejestru w data/blog.ts.
 *
 * W przeciwieństwie do zwykłej podstrony artykuł dostaje własne zdjęcie w
 * Open Graph (a nie wspólne zdjęcie zespołu) oraz datę publikacji — dzięki
 * temu udostępniony link pokazuje okładkę wpisu, a nie kadr z salonu.
 */
export function articleMetadata(slug: string): Metadata {
  const post = getPost(slug);
  const path = postPath(slug);
  const title = post.metaTitle ?? post.title;
  const cover = `${SITE_URL}${post.cover.src}`;

  return {
    title: `${title} | ${SITE_NAME}`,
    description: post.description,
    keywords: [...post.keywords],
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      locale: "pl_PL",
      siteName: SITE_NAME,
      url: `${SITE_URL}${path}`,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: cover, alt: post.coverAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [cover],
    },
  };
}
