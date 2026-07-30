import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-14 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-xl font-black uppercase">
              Krystian Wojewoda Hair Design
            </p>
            <p className="mt-4 text-white/55">
              Salon fryzjerski w Łodzi. Strzyżenie, koloryzacja i pielęgnacja
              włosów.
            </p>
          </div>

          <div>
            <p className="font-bold uppercase">Kontakt</p>
            <p className="mt-4 text-white/60">
              ul. Piotrkowska 293/305, 90-369 Łódź
            </p>
            <a
              href="tel:+48730796861"
              className="mt-2 block text-white/80 hover:text-white"
            >
              +48 730 796 861
            </a>
            <a
              href="mailto:salonkwhd@gmail.com"
              className="mt-2 block text-white/80 hover:text-white"
            >
              salonkwhd@gmail.com
            </a>
          </div>

          <div>
            <p className="font-bold uppercase">Linki</p>
            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/polityka-prywatnosci"
                className="text-white/60 hover:text-white"
              >
                Polityka prywatności
              </Link>
              <Link
                href="/regulamin-salonu"
                className="text-white/60 hover:text-white"
              >
                Regulamin salonu
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
