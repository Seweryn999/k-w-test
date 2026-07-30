import { BOOKSY_URL } from "@/data/navigation";
import { team } from "@/data/team";
import { mainPrices, pricingRules } from "@/data/pricing";

function buildSiteContext(): string {
  const teamList = team
    .map((member) => {
      const bio = member.bio ? ` ${member.bio}` : "";
      return `- ${member.name} ("${member.nickname}") – ${member.role}.${bio}`;
    })
    .join("\n");

  const priceList = mainPrices
    .map((row) => `- ${row.service}: Standard ${row.standard} zł / VIP ${row.vip} zł`)
    .join("\n");

  const rules = pricingRules.map((rule) => `- ${rule}`).join("\n");

  return `Salon: Krystian Wojewoda Hair Design, ul. Piotrkowska 293/305, 90-369 Łódź (Ogrody Geyera).
Godziny otwarcia: poniedziałek–piątek 9:00–21:00, sobota 9:00–15:00, niedziela zamknięte.
Telefon: +48 730 796 861. E-mail: salonkwhd@gmail.com.
Rezerwacja online (Booksy): ${BOOKSY_URL}

Zespół:
${teamList}

Cennik (ceny w PLN):
${priceList}

Zasady cennika:
${rules}

Na blogu salonu znajdują się artykuły: "Kosmetyki do pielęgnacji zniszczonych włosów", "Jaka fryzura pasuje do mojej twarzy?" oraz "Jak dbać o skórę głowy".`;
}

export const SITE_CONTEXT = buildSiteContext();
