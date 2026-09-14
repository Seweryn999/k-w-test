import { ADDRESS_LINE, BUSINESS } from "@/data/business";
import { blogPosts } from "@/data/blog";
import { BOOKSY_URL } from "@/data/navigation";
import { team } from "@/data/team";
import { mainPrices, otherPrices, pricingRules } from "@/data/pricing";

/**
 * Kontekst podawany chatbotowi. Buduje się w całości z tych samych modułów,
 * z których korzysta strona — dzięki temu bot nie może podać innych godzin
 * czy innego cennika niż to, co widzi klient.
 */
function buildSiteContext(): string {
  const hours = BUSINESS.openingHours
    .map((slot) => `${slot.label}: ${slot.hoursLabel}`)
    .join(", ");

  const teamList = team
    .map((member) => {
      const bio = member.bio ? ` ${member.bio}` : "";
      return `- ${member.name} ("${member.nickname}") – ${member.role}.${bio}`;
    })
    .join("\n");

  // Obie tabele, bo model musi wiedzieć, że u pozostałych fryzjerów jest
  // taniej — inaczej podawałby wyłącznie ceny Marioli i Krystiana i przeczyłby
  // kwotom "od ..." ze strony głównej.
  const mainPriceList = mainPrices
    .map((row) => `- ${row.service}: ${row.standard} zł`)
    .join("\n");

  const otherPriceList = otherPrices
    .map((row) => `- ${row.service}: ${row.price} zł`)
    .join("\n");

  const rules = pricingRules.map((rule) => `- ${rule}`).join("\n");

  const articles = blogPosts.map((post) => `"${post.title}"`).join(", ");

  return `Salon: ${BUSINESS.name}, ${ADDRESS_LINE} (${BUSINESS.address.venue}).
Godziny otwarcia: ${hours}, niedziela zamknięte.
Telefon: ${BUSINESS.phoneLabel}. E-mail: ${BUSINESS.email}.
Rezerwacja online (Booksy): ${BOOKSY_URL}

Zespół:
${teamList}

Cennik Marioli i Krystiana (ceny w PLN):
${mainPriceList}

Cennik pozostałych fryzjerów (ceny w PLN):
${otherPriceList}

Zasady cennika:
${rules}

Na blogu salonu znajdują się artykuły: ${articles}.`;
}

export const SITE_CONTEXT = buildSiteContext();
