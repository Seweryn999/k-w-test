import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BookingLink } from "@/components/ui/BookingLink";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ACCENT_TILE, ACCENT_TILE_SOFT } from "@/components/ui/tile";
import {
  mainPrices,
  otherPrices,
  priceLegendFor,
  splitPriceMarker,
  pricingRules as rules,
} from "@/data/pricing";
import Link from "next/link";
import { mainPrices, otherPrices, pricingRules as rules } from "@/data/pricing";
import { servicePath, services } from "@/data/services";

export const metadata: Metadata = pageMetadata({
  title: "Cennik usług fryzjerskich - Krystian Wojewoda Hair Design",
  description:
    "Najlepszy fryzjer w Łodzi i okolicach ♛ Poznaj ceny usług fryzjerskich w salonie Krystian Wojewoda Hair Design: farbowanie, strzyżenie, modelowanie, balayage.",
  path: "/cennik/",
});

/**
 * Gwiazdka widoczna tak jak w cenniku, a czytnik ekranu słyszy „przypis 2"
 * — sam znak „**" bywa odczytywany jako „gwiazdka gwiazdka" albo pomijany.
 */
function Footnote({ symbol }: { symbol: string }) {
  return (
    <>
      <span aria-hidden="true">{symbol}</span>
      <span className="sr-only">przypis {symbol.length}</span>
    </>
  );
}

function ServiceName({ service }: { service: string }) {
  const { name, marker } = splitPriceMarker(service);

  return (
    <>
      {name}
      {marker && (
        <>
          {" "}
          <Footnote symbol={marker} />
        </>
      )}
    </>
  );
}

/** Legenda gwiazdek pod tabelą — tylko oznaczenia występujące w `rows`. */
function PriceLegend({ rows }: { rows: { service: string }[] }) {
  const legend = priceLegendFor(rows);

  if (legend.length === 0) return null;

  return (
    <dl className="mt-5 grid gap-2 px-4 text-xs leading-5 text-white/50 md:px-8 md:text-sm md:leading-6">
      {legend.map(({ symbol, description }) => (
        <div key={symbol} className="flex gap-3">
          <dt className="w-6 shrink-0 font-black text-white/75">
            <Footnote symbol={symbol} />
          </dt>
          <dd>{description}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function CennikPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050505] via-[#171717] to-[#343434] pt-32 text-white">
      <section className="py-20">
        <Container>
          <div className="mb-20 max-w-5xl">
            <Breadcrumbs
              crumbs={[{ name: "Cennik", path: "/cennik/" }]}
              className="mb-8 block"
            />

            <p className="mb-5 text-xs uppercase tracking-[0.55em] text-white/40">
              Cennik
            </p>

            <h1 className="text-5xl font-black uppercase leading-[0.95] md:text-7xl lg:text-8xl">
              Cennik usług fryzjerskich
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
              Poznaj pełen cennik usług oferowanych przez Wojewoda Studio:
              koloryzacje, strzyżenia, pielęgnacje, modelowanie, trwałą
              ondulację oraz fryzury wieczorowe i ślubne.
            </p>
          </div>

          <div className={`mb-12 rounded-[2rem] p-6 md:p-10 ${ACCENT_TILE}`}>
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.45em] text-white/55">
                  Mariola i Krystian
                </p>

                <h2 className="mt-4 text-3xl font-black uppercase md:text-5xl">
                  Cennik Marioli i Krystiana
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-white/65">
                Ceny podane są w złotówkach. Ostateczna kwota może zależeć od
                długości, gęstości włosów i zużycia materiału.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30">
            <div className="grid grid-cols-[1fr_90px] border-b border-white/10 bg-white/[0.06] px-4 py-5 text-xs font-black uppercase tracking-[0.25em] text-white/45 md:grid-cols-[1fr_150px] md:px-8">
              <div>Usługa</div>
              <div className="text-right">Cena</div>
            </div>

            {mainPrices.map(({ service, standard }, index) => (
              <div
                key={`${service}-${index}`}
                className="grid grid-cols-[1fr_90px] items-center border-b border-white/10 px-4 py-5 transition hover:bg-white/[0.04] md:grid-cols-[1fr_150px] md:px-8"
              >
                <div className="pr-4 text-sm font-bold uppercase leading-6 text-white/80 md:text-base">
                  <ServiceName service={service} />
                </div>

                <div className="text-right text-sm font-black text-white md:text-lg">
                  {standard}
                </div>
              </div>
            ))}
          </div>

          <PriceLegend rows={mainPrices} />

          <div className={`mb-12 mt-20 rounded-[2rem] p-6 md:p-10 ${ACCENT_TILE}`}>
            <p className="text-xs uppercase tracking-[0.45em] text-white/55">
              Pozostali fryzjerzy
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase md:text-5xl">
              Cennik Pozostałych Fryzjerów
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/65">
              Cena zależy od długości i gęstości włosów, zużycia materiału oraz
              stopnia trudności wykonania usługi.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30">
            <div className="grid grid-cols-[1fr_90px] border-b border-white/10 bg-white/[0.06] px-4 py-5 text-xs font-black uppercase tracking-[0.25em] text-white/45 md:grid-cols-[1fr_150px] md:px-8">
              <div>Usługa</div>
              <div className="text-right">Cena</div>
            </div>

            {otherPrices.map(({ service, price }, index) => (
              <div
                key={`${service}-${index}`}
                className="grid grid-cols-[1fr_90px] items-center border-b border-white/10 px-4 py-5 transition hover:bg-white/[0.04] md:grid-cols-[1fr_150px] md:px-8"
              >
                <div className="pr-4 text-sm font-bold uppercase leading-6 text-white/80 md:text-base">
                  <ServiceName service={service} />
                </div>

                <div className="text-right text-sm font-black text-white md:text-lg">
                  {price}
                </div>
              </div>
            ))}
          </div>

          {/*
            Legenda pod każdą tabelą osobno: obie są długie i rozdziela je
            duży nagłówek, więc wspólny blok pod drugą byłby poza ekranem
            dla kogoś, kto czyta pierwszą.
          */}
          <PriceLegend rows={otherPrices} />

          <div className={`mt-12 overflow-hidden rounded-[2rem] ${ACCENT_TILE}`}>
            <div className="grid gap-0 lg:grid-cols-[1fr_auto]">
              <div className="p-8 md:p-10">
                <h2 className="max-w-4xl text-3xl font-black uppercase leading-tight md:text-4xl">
                  Usługa, której nie znalazłeś/aś w cenniku?
                </h2>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-white/65">
                  Napisz lub zadzwoń, a podamy dokładną cenę dopasowaną do
                  Twoich włosów.
                </p>
              </div>

              <div className="flex items-center border-t border-accent/30 p-8 md:p-10 lg:border-l lg:border-t-0">
                <Button href="/kontakt">Zapytaj o cenę</Button>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-black/30 p-8 md:p-10">
            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.45em] text-white/35">
                Regulamin
              </p>

              <h2 className="mt-5 text-4xl font-black uppercase md:text-5xl">
                Zasady cennika
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {rules.map((rule, index) => (
                <div
                  key={rule}
                  className={`rounded-2xl p-6 ${ACCENT_TILE_SOFT}`}
                >
                  <div className="mb-5 text-3xl font-black text-accent-soft/40">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="text-sm leading-7 text-white/60 md:text-base">
                    {rule}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Z cennika do opisów usług — cennik jest częścią klastra /uslugi. */}
          <div className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-12">
            <h2 className="text-3xl font-black uppercase leading-tight md:text-4xl">
              Opisy usług
            </h2>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={servicePath(service.slug)}
                    className="block rounded-2xl border border-white/10 px-5 py-4 font-bold uppercase text-white/80 transition hover:bg-white hover:text-black"
                  >
                    {service.name} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-black/30 p-8 md:p-12">
            <h2 className="max-w-4xl text-4xl font-black uppercase leading-tight md:text-6xl">
              Profesjonalna pielęgnacja i dobór kosmetyków
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-white/55">
              W salonie dostępne są kosmetyki do włosów renomowanych marek.
              Oferujemy również dobór odpowiedniej pielęgnacji oraz konsultację
              ze specjalistą, aby dopasować zabiegi i produkty do kondycji
              włosów.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <BookingLink size="lg">Umów konsultację</BookingLink>

              <Button href="/kontakt">Zadaj pytanie</Button>
            </div>
          </div>

          {/*
            Cennik to strona o najwyższej gotowości zakupowej — klient
            zaakceptował już cenę, więc kolejnym krokiem ma być kalendarz,
            a nie formularz kontaktowy.
          */}
          <div className="mt-8 flex flex-col items-center gap-6 rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 text-center md:flex-row md:justify-between md:p-10 md:text-left">
            <div>
              <h2 className="text-3xl font-black uppercase leading-tight md:text-4xl">
                Cena Ci pasuje?
              </h2>

              <p className="mt-3 max-w-xl text-white/60">
                Sprawdź wolne terminy w kalendarzu online i zarezerwuj wizytę
                u wybranego stylisty.
              </p>
            </div>

            <BookingLink size="lg" className="shrink-0" />
          </div>
        </Container>
      </section>
    </main>
  );
}
