import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Polityka prywatności | Krystian Wojewoda Hair Design",
  description:
    "Polityka prywatności i informacje o przetwarzaniu danych osobowych w salonie Krystian Wojewoda Hair Design.",
  alternates: { canonical: "/polityka-prywatnosci/" },
};

export default function PolitykaPrywatnosciPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050505] via-[#171717] to-[#343434] pt-32 text-white">
      <section className="py-20">
        <Container>
          <div className="mb-16 max-w-4xl">
            <p className="mb-5 text-xs uppercase tracking-[0.55em] text-white/40">
              Informacje prawne
            </p>

            <h1 className="text-5xl font-black uppercase leading-[0.95] md:text-7xl">
              Polityka prywatności
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
              Niniejsza polityka opisuje, jakie dane przetwarzamy, w jakim celu
              i na jakiej podstawie podczas korzystania ze strony Krystian
              Wojewoda Hair Design.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-12 text-white/70">
            <div>
              <h2 className="mb-4 text-2xl font-black uppercase text-white">
                1. Administrator danych
              </h2>
              <p className="leading-7">
                Administratorem danych osobowych jest Krystian Wojewoda Hair
                Design, ul. Piotrkowska 293/305, 90-001 Łódź. Kontakt w
                sprawach związanych z przetwarzaniem danych osobowych:{" "}
                <a
                  href="mailto:salonkwhd@gmail.com"
                  className="text-white underline hover:no-underline"
                >
                  salonkwhd@gmail.com
                </a>{" "}
                lub telefonicznie pod numerem{" "}
                <a
                  href="tel:+48730796861"
                  className="text-white underline hover:no-underline"
                >
                  +48 730 796 861
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-black uppercase text-white">
                2. Jakie dane przetwarzamy
              </h2>
              <ul className="list-disc space-y-3 pl-5 leading-7">
                <li>
                  <span className="font-bold text-white">
                    Dane kontaktowe
                  </span>{" "}
                  - imię, numer telefonu, adres e-mail oraz treść wiadomości,
                  jeśli skontaktujesz się z nami telefonicznie, mailowo lub za
                  pomocą formularza kontaktowego.
                </li>
                <li>
                  <span className="font-bold text-white">
                    Rezerwacje wizyt
                  </span>{" "}
                  - rezerwacje dokonywane są za pośrednictwem platformy
                  Booksy. Dane podawane podczas rezerwacji przetwarzane są
                  przez Booksy zgodnie z jej własną polityką prywatności,
                  dostępną na stronie{" "}
                  <a
                    href="https://booksy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline hover:no-underline"
                  >
                    booksy.com
                  </a>
                  .
                </li>
                <li>
                  <span className="font-bold text-white">
                    Wiadomości w czacie (asystent salonu)
                  </span>{" "}
                  - treść wiadomości wpisanych w widżecie czatu jest wysyłana
                  do usługi Google Gemini (Google Ireland Limited) w celu
                  wygenerowania odpowiedzi. Wiadomości nie są zapisywane w
                  naszej bazie danych po zamknięciu okna czatu - rozmowa
                  istnieje tylko w pamięci przeglądarki użytkownika podczas
                  sesji.
                </li>
                <li>
                  <span className="font-bold text-white">
                    Dane techniczne i logi serwera
                  </span>{" "}
                  - strona jest hostowana na infrastrukturze Vercel, która w
                  ramach standardowego działania może automatycznie zapisywać
                  adres IP, typ urządzenia, przeglądarki oraz czas wizyty w
                  celach związanych z bezpieczeństwem i diagnostyką.
                </li>
                <li>
                  <span className="font-bold text-white">
                    Wtyczki social media
                  </span>{" "}
                  - na stronie znajduje się wtyczka Facebooka (timeline z
                  fanpage). Po jej wyświetleniu Facebook (Meta Platforms
                  Ireland Ltd.) może zapisywać pliki cookies oraz przetwarzać
                  dane zgodnie z własną polityką prywatności.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-black uppercase text-white">
                3. Cele i podstawy prawne przetwarzania
              </h2>
              <ul className="list-disc space-y-3 pl-5 leading-7">
                <li>
                  Udzielenie odpowiedzi na zapytanie oraz umożliwienie
                  kontaktu - art. 6 ust. 1 lit. b i f RODO (wykonanie umowy /
                  prawnie uzasadniony interes administratora).
                </li>
                <li>
                  Obsługa asystenta czatu i udzielanie informacji o usługach i
                  cenniku - art. 6 ust. 1 lit. f RODO (prawnie uzasadniony
                  interes - poprawa jakości obsługi klienta).
                </li>
                <li>
                  Zapewnienie bezpieczeństwa i prawidłowego działania strony -
                  art. 6 ust. 1 lit. f RODO.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-black uppercase text-white">
                4. Odbiorcy danych
              </h2>
              <p className="leading-7">
                Dane mogą być przekazywane podmiotom wspierającym działanie
                strony i obsługę klienta: Vercel Inc. (hosting), Google
                Ireland Limited (usługa Gemini API zasilająca czat), Booksy
                International sp. z o.o. (system rezerwacji online) oraz Meta
                Platforms Ireland Ltd. (wtyczka Facebook). Dane nie są
                sprzedawane ani udostępniane innym podmiotom w celach
                marketingowych.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-black uppercase text-white">
                5. Pliki cookies
              </h2>
              <p className="leading-7">
                Strona nie wykorzystuje własnych plików cookies do celów
                analitycznych ani marketingowych. Pliki cookies mogą być
                zapisywane przez wtyczkę Facebooka osadzoną na stronie - w
                takim przypadku ich obsługą i celem zarządza Meta Platforms
                Ireland Ltd. Użytkownik może w każdej chwili zablokować
                pliki cookies w ustawieniach swojej przeglądarki, co nie
                wpłynie na podstawowe działanie strony.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-black uppercase text-white">
                6. Okres przechowywania danych
              </h2>
              <p className="leading-7">
                Dane kontaktowe przechowywane są przez czas niezbędny do
                udzielenia odpowiedzi i obsługi zapytania, a w przypadku
                korespondencji - do czasu zgłoszenia żądania usunięcia.
                Wiadomości z czatu nie są przechowywane po zakończeniu sesji
                w przeglądarce.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-black uppercase text-white">
                7. Prawa użytkownika
              </h2>
              <p className="mb-3 leading-7">
                Zgodnie z RODO masz prawo do:
              </p>
              <ul className="list-disc space-y-2 pl-5 leading-7">
                <li>dostępu do swoich danych oraz uzyskania ich kopii,</li>
                <li>sprostowania (poprawienia) danych,</li>
                <li>usunięcia danych ("prawo do bycia zapomnianym"),</li>
                <li>ograniczenia przetwarzania,</li>
                <li>przenoszenia danych,</li>
                <li>
                  wniesienia sprzeciwu wobec przetwarzania opartego na
                  prawnie uzasadnionym interesie,
                </li>
                <li>
                  wniesienia skargi do Prezesa Urzędu Ochrony Danych
                  Osobowych (UODO).
                </li>
              </ul>
              <p className="mt-3 leading-7">
                W celu realizacji powyższych praw skontaktuj się z nami pod
                adresem{" "}
                <a
                  href="mailto:salonkwhd@gmail.com"
                  className="text-white underline hover:no-underline"
                >
                  salonkwhd@gmail.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-black uppercase text-white">
                8. Zmiany polityki prywatności
              </h2>
              <p className="leading-7">
                Niniejsza polityka prywatności może być okresowo
                aktualizowana. Aktualna wersja jest zawsze dostępna na tej
                stronie.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
