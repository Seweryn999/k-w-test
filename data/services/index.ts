import { getPost } from "@/data/blog";
import { priceSpan } from "@/data/pricing";
import { getTeamMember } from "@/data/team";

import { balayageOmbreSombre } from "./balayage-ombre-sombre";
import { fryzurySlubne } from "./fryzury-slubne";
import { koloryzacjaWlosow } from "./koloryzacja-wlosow";
import { metamorfozaWlosow } from "./metamorfoza-wlosow";
import { pasemkaRozswietlanie } from "./pasemka-rozswietlanie";
import { regeneracjaWlosow } from "./regeneracja-wlosow";
import { strzyzenieDamskie } from "./strzyzenie-damskie";
import { strzyzenieMeskie } from "./strzyzenie-meskie";
import type { Service } from "./types";

export type { Service } from "./types";

/**
 * Rejestr stron usług — jedyne źródło prawdy o tym, jakie usługi mają
 * własne podstrony.
 *
 * Strona usługi, karty na stronie głównej i na /uslugi, sitemapa, linki
 * z bloga i dane strukturalne czytają stąd. Nowa usługa = nowy plik
 * `data/services/<slug>.ts` z treścią + jedna linijka w tej tablicy.
 * Szablonu strony nie trzeba ruszać.
 *
 * Kolejność w tablicy = kolejność kart na stronie głównej i na /uslugi.
 */
export const services: Service[] = [
  koloryzacjaWlosow,
  balayageOmbreSombre,
  pasemkaRozswietlanie,
  strzyzenieDamskie,
  strzyzenieMeskie,
  fryzurySlubne,
  metamorfozaWlosow,
  regeneracjaWlosow,
];

/** Adres strony usługi ze slashem na końcu — zgodnie z `trailingSlash: true`. */
export function servicePath(slug: string): string {
  return `/uslugi/${slug}/`;
}

export const SERVICES_PATH = "/uslugi/";

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

/**
 * Najniższa i najwyższa kwota ze wszystkich pozycji cennika podpiętych pod
 * usługę — do danych strukturalnych (AggregateOffer).
 */
export function serviceSpan(service: Service): { min: number; max: number } {
  const spans = service.prices.map((price) => priceSpan(price.tag));

  return {
    min: Math.min(...spans.map((span) => span.min)),
    max: Math.max(...spans.map((span) => span.max)),
  };
}

/** Cena na kartę: "od X zł" z pierwszej (głównej) pozycji cennika usługi. */
export function serviceFromLabel(service: Service): string {
  return `od ${priceSpan(service.prices[0].tag).min} zł`;
}

/** Usługi powiązane z daną, w kolejności podanej w pliku usługi. */
export function relatedServices(service: Service): Service[] {
  return service.related.map((slug) => {
    const related = getService(slug);

    if (!related) {
      throw new Error(`Usługa "${service.slug}" wskazuje nieistniejącą usługę "${slug}"`);
    }

    return related;
  });
}

/**
 * Usługi, które same wskazały ten wpis jako powiązany. Liczone odwrotnie,
 * żeby powiązanie blog ↔ usługa było zapisane tylko w jednym miejscu.
 */
export function servicesForPost(postSlug: string): Service[] {
  return services.filter((service) => service.relatedPosts.includes(postSlug));
}

/**
 * Kontrola spójności rejestru przy imporcie, czyli na etapie builda:
 * zduplikowany slug, literówka w slugu wpisu, stylisty czy tagu cennika
 * ma zatrzymać build, a nie wypuścić stronę z martwym linkiem albo bez ceny.
 */
function validate() {
  const seen = new Set<string>();

  for (const service of services) {
    if (seen.has(service.slug)) {
      throw new Error(`Zduplikowany slug usługi "${service.slug}" w data/services`);
    }
    seen.add(service.slug);

    if (service.prices.length === 0) {
      throw new Error(`Usługa "${service.slug}" nie ma żadnej pozycji cennika`);
    }

    service.prices.forEach((price) => priceSpan(price.tag));
    service.relatedPosts.forEach((slug) => getPost(slug));
    service.specialists.forEach((slug) => getTeamMember(slug));
  }

  services.forEach((service) => relatedServices(service));
}

validate();
