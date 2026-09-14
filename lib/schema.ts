import { BUSINESS, SAME_AS } from "@/data/business";
import { getTeamMember } from "@/data/team";
import { BOOKSY_URL } from "@/data/navigation";
import { SITE_URL, OG_IMAGE } from "@/lib/seo";

/**
 * Buildery danych strukturalnych (JSON-LD).
 *
 * Wszystkie czytają z data/business.ts, więc opis salonu widziany przez Google
 * nie może rozjechać się z tym, co widzi człowiek na stronie.
 *
 * Stały identyfikator salonu. Dzięki niemu artykuły i okruszki mogą wskazać
 * "to ten sam podmiot co na stronie głównej", zamiast opisywać firmę od nowa
 * na każdej podstronie.
 */
export const SALON_ID = `${SITE_URL}/#salon`;

/** Bezwzględny adres — schema.org wymaga pełnych URL-i, nie ścieżek. */
export function absoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}

/**
 * HairSalon rozszerza LocalBusiness — to najwęższy typ, jaki Google rozumie
 * dla salonu fryzjerskiego, więc mówi o nas więcej niż samo LocalBusiness.
 */
export function hairSalonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": SALON_ID,
    name: BUSINESS.name,
    alternateName: BUSINESS.shortName,
    description: BUSINESS.description,
    url: `${SITE_URL}/`,
    image: OG_IMAGE,
    logo: OG_IMAGE,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    foundingDate: BUSINESS.foundingYear,
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: BUSINESS.currency,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.streetAddress,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    hasMap: BUSINESS.mapsUrl,
    areaServed: BUSINESS.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    openingHoursSpecification: BUSINESS.openingHours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...slot.days],
      opens: slot.opens,
      closes: slot.closes,
    })),
    // Booksy jest jednocześnie profilem salonu (sameAs) i kanałem rezerwacji
    // (potentialAction) — to dwie różne informacje dla wyszukiwarki.
    sameAs: [...SAME_AS, BOOKSY_URL],
    potentialAction: {
      "@type": "ReserveAction",
      name: "Umów wizytę",
      target: {
        "@type": "EntryPoint",
        urlTemplate: BOOKSY_URL,
        inLanguage: "pl-PL",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: { "@type": "Reservation", name: "Wizyta w salonie" },
    },
    // Świadomie BEZ aggregateRating. Opinie zebrane w Google, przepisane na
    // własną stronę i oznaczone jako ocena własnej firmy, to dla Google
    // "self-serving review markup" — grozi ręczną karą, a nie gwiazdkami
    // w wynikach. Gwiazdki przy wizytówce bierze się z Google Business Profile.
  };
}

type Crumb = {
  name: string;
  /** Ścieżka ze slashem na końcu, np. "/blog/". */
  path: string;
};

/**
 * Okruszki. Google pokazuje je zamiast surowego adresu URL w wynikach —
 * ścieżka "wojewodastudio.pl › Blog › Jak dbać o skórę głowy" klika się lepiej
 * niż długi slug. Stronę główną dokładamy tu, żeby nie powtarzać jej w wywołaniach.
 */
export function breadcrumbSchema(crumbs: Crumb[]) {
  const items = [{ name: "Strona główna", path: "/" }, ...crumbs];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

type BlogPostingInput = {
  title: string;
  description: string;
  slug: string;
  /** Data publikacji w ISO. */
  date: string;
  author: string;
  /** Ścieżka do zdjęcia głównego (`StaticImageData.src`). */
  image: string;
  keywords: string[];
};

export function blogPostingSchema(post: BlogPostingInput) {
  const url = absoluteUrl(`/blog/${post.slug}/`);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: post.title,
    description: post.description,
    image: absoluteUrl(post.image),
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "pl-PL",
    keywords: post.keywords.join(", "),
    author: { "@type": "Person", name: post.author },
    // Wydawcą jest salon — wskazujemy go przez @id zamiast opisywać ponownie.
    publisher: { "@id": SALON_ID },
  };
}

export type FaqItem = {
  question: string;
  /** Odpowiedź czystym tekstem — musi zgadzać się z tym, co widać na stronie. */
  answer: string;
};

/**
 * FAQPage wolno wystawiać tylko dla pytań realnie widocznych na stronie —
 * markup bez odpowiednika w treści Google traktuje jako spam.
 */
export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/**
 * Profil stylisty. Wiąże osobę z salonem przez `worksFor` → @id, dzięki czemu
 * dziewięć podstron zespołu buduje jeden spójny obraz firmy zamiast dziewięciu
 * niepowiązanych stron "o kimś".
 */
export function personSchema(slug: string, photoSrc: string) {
  const member = getTeamMember(slug);
  const url = absoluteUrl(`/zespol/${slug}/`);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${url}#person`,
    name: member.name,
    jobTitle: member.role,
    ...(member.bio ? { description: member.bio } : {}),
    image: absoluteUrl(photoSrc),
    url,
    worksFor: { "@id": SALON_ID },
    workLocation: { "@id": SALON_ID },
  };
}
