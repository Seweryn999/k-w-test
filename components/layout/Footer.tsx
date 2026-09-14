import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ADDRESS_LINE, BUSINESS } from "@/data/business";
import { BOOKSY_URL } from "@/data/navigation";

/**
 * Godziny otwarcia i pełny adres w stopce są widoczne na każdej podstronie.
 * To ta sama treść, którą wystawiamy w danych strukturalnych — Google lubi,
 * gdy dane kontaktowe z JSON-LD mają pokrycie w tekście strony.
 */
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-14 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="text-xl font-black uppercase">{BUSINESS.name}</p>
            <p className="mt-4 text-white/55">
              Salon fryzjerski w centrum Łodzi. Koloryzacja, strzyżenie i
              pielęgnacja włosów od {BUSINESS.foundingYear} roku.
            </p>

            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-white/85"
            >
              Umów wizytę
            </a>
          </div>

          <div>
            <p className="font-bold uppercase">Kontakt</p>
            <p className="mt-4 text-white/60">{ADDRESS_LINE}</p>
            <p className="mt-1 text-sm text-white/40">
              {BUSINESS.address.venue}
            </p>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="mt-3 block text-white/80 hover:text-white"
            >
              {BUSINESS.phoneLabel}
            </a>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="mt-2 block text-white/80 hover:text-white"
            >
              {BUSINESS.email}
            </a>
          </div>

          <div>
            <p className="font-bold uppercase">Godziny otwarcia</p>
            <dl className="mt-4 space-y-2 text-white/60">
              {BUSINESS.openingHours.map((slot) => (
                <div key={slot.label}>
                  <dt className="text-sm text-white/45">{slot.label}</dt>
                  <dd className="text-white/80">{slot.hoursLabel}</dd>
                </div>
              ))}
              <div>
                <dt className="text-sm text-white/45">Niedziela</dt>
                <dd className="text-white/80">Zamknięte</dd>
              </div>
            </dl>
          </div>

          <div>
            <p className="font-bold uppercase">Na skróty</p>
            <div className="mt-4 flex flex-col gap-2">
              <Link href="/cennik" className="text-white/60 hover:text-white">
                Cennik usług
              </Link>
              <Link href="/zespol" className="text-white/60 hover:text-white">
                Zespół
              </Link>
              <Link href="/blog" className="text-white/60 hover:text-white">
                Blog
              </Link>
              <Link href="/kontakt" className="text-white/60 hover:text-white">
                Kontakt i dojazd
              </Link>
              <Link
                href="/regulamin-salonu"
                className="text-white/60 hover:text-white"
              >
                Regulamin salonu
              </Link>
              <Link
                href="/polityka-prywatnosci"
                className="text-white/60 hover:text-white"
              >
                Polityka prywatności
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 KWHD - wszelkie prawa zastrzeżone</p>
          <p>
            Strona stworzona przez{" "}
            <a
              href="https://stalink.pl"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white"
            >
              stalink.pl
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
