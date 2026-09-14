import { Phone } from "lucide-react";

import { BUSINESS } from "@/data/business";
import { BOOKSY_URL } from "@/data/navigation";

/**
 * Pasek rezerwacji przyklejony do dołu ekranu na telefonach.
 *
 * Na mobile większość ruchu trafia z Map i wyników lokalnych, a użytkownik
 * rzadko przewija do stopki — dwa kroki do rezerwacji (dzwoń / umów online)
 * są więc dostępne z każdego miejsca każdej podstrony. Na desktopie pasek się
 * nie pokazuje, bo tam CTA siedzi w nagłówku.
 */
export function StickyBooking() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[900] border-t border-white/10 bg-black/85 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <a
          href={`tel:${BUSINESS.phone}`}
          aria-label={`Zadzwoń: ${BUSINESS.phoneLabel}`}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition active:bg-white active:text-black"
        >
          <Phone size={20} aria-hidden />
        </a>

        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="booksy"
          className="flex h-12 flex-1 items-center justify-center rounded-full bg-white text-sm font-black uppercase tracking-[0.2em] text-black transition active:bg-white/85"
        >
          Umów wizytę
        </a>
      </div>
    </div>
  );
}
