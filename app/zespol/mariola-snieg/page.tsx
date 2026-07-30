import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

import mariola from "@/assets/images/mariola.png";

export const metadata: Metadata = {
  title: "Fryzjer Mariola Śnieg - Krystian Wojewoda Hair Design",
  description:
    "Poznaj najlepszą fryzjerkę w Łodzi - Mariolę Śnieg. Pasja, wieloletnie doświadczenie, genialna koloryzacja i cięcie włosów. Umów się na wizytę!",
  alternates: { canonical: "/zespol/mariola-snieg/" },
};

export default function MariolaSniegPage() {
  return (
    <main className="min-h-screen bg-black pt-32 text-white">
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.045] blur-[150px]" />

        <Container>
          <AnimatedSection>
            <Link
              href="/zespol"
              className="mb-12 inline-block text-xs font-black uppercase tracking-[0.35em] text-white/40 transition hover:text-white"
            >
              ← Wróć do zespołu
            </Link>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:p-10 lg:grid-cols-[340px_1fr] lg:items-center">
              <div className="relative aspect-[400/420] w-full max-w-[300px] overflow-hidden rounded-[1.5rem] bg-neutral-900 md:max-w-[320px]">
                <Image
                  src={mariola}
                  alt="Mariola Śnieg"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="320px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>

              <div>
                <p className="mb-5 inline-block bg-white px-3 py-1 text-sm font-black uppercase text-black">
                  Mario
                </p>

                <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.9] md:text-8xl">
                  Mariola Śnieg
                </h1>

                <p className="mt-6 text-xl font-black uppercase tracking-[0.25em] text-white/45">
                  Stylistka / Technik koloryzacji
                </p>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
                  Prawa ręka Krystiana, mistrzyni koloryzacji i technik
                  kolorysta. Specjalizuje się w wymagających metamorfozach oraz
                  tworzeniu kolorów, których trudno szukać w gotowej palecie
                  barw.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Button href="/kontakt">Umów wizytę</Button>

                  <a
                    href="tel:+48730796861"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-black uppercase transition hover:bg-white hover:text-black"
                  >
                    Zadzwoń
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <article className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 md:p-12">
              <p className="text-xs uppercase tracking-[0.45em] text-white/35">
                Historia
              </p>

              <h2 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-tight md:text-6xl">
                Koloryzacja, doświadczenie i pasja
              </h2>

              <div className="mt-10 columns-1 gap-12 space-y-7 text-lg leading-9 text-white/65 lg:columns-2">
                <p>
                  Mariola to prawa ręka Krystiana i mistrzyni koloryzacji
                  wyspecjalizowana jako technik kolorysta. Swoją wiedzę
                  zdobywała podczas pracy z Krystianem, a dziś sama uczy fachu
                  innych.
                </p>

                <p>
                  Obecnie pod jej skrzydłami swoje umiejętności w salonie
                  rozwijają stażyści. Mariola swoją przygodę z fryzjerstwem
                  rozpoczęła w 2005 roku, a pierwsze szlify zdobywała w Studium
                  Policealnym Anagra.
                </p>

                <p>
                  W 2006 roku trafiła pod skrzydła Jacka Olejniczaka, gdzie
                  rozszerzała swoją wiedzę i umiejętności w zakresie
                  fryzjerstwa. To właśnie w tym salonie wzięła udział w
                  pierwszych szkoleniach.
                </p>

                <p>
                  W 2009 roku Mariola rozpoczęła pracę w Wojewoda Studio. Przez
                  ponad 4 lata doskonaliła swoje umiejętności, pracując na
                  produktach L’Oreal i Kerastase.
                </p>

                <p>
                  Od 2009 roku do dziś „Mario” odbyła ponad 100 szkoleń w Polsce
                  i za granicą. Od 2013 roku Wojewoda Studio współpracuje z
                  firmą A&amp;M Premium Distribution, dystrybutorem marek
                  Alterna i Kevin Murphy.
                </p>

                <p>
                  Fryzjerstwo, a w szczególności koloryzacja, to największa
                  życiowa pasja Marioli. Chętnie śledzi najnowsze trendy w
                  branży fryzjerskiej i stale rozwija swoje techniki.
                </p>

                <p>
                  Klienci kochają Mariolę za jej energię i profesjonalizm. Sama
                  tworzy kolory, których próżno szukać w palecie barw.
                </p>

                <p>
                  Najtrudniejsze metamorfozy trafiają właśnie do niej, bo w
                  koloryzacji należy do ścisłej czołówki specjalistów w Łodzi.
                </p>
              </div>
            </article>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.7fr]">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
                <p className="text-xs uppercase tracking-[0.45em] text-white/35">
                  Specjalizacja
                </p>

                <h2 className="mt-5 text-4xl font-black uppercase md:text-5xl">
                  Kolory, metamorfozy i technika
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  Mariola specjalizuje się w koloryzacjach, technicznych
                  metamorfozach i indywidualnym doborze odcienia do urody
                  klientki. Jej praca łączy doświadczenie, precyzję i wyczucie
                  trendów.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
                <p className="text-xs uppercase tracking-[0.45em] text-white/35">
                  Wizyta
                </p>

                <h2 className="mt-5 text-4xl font-black uppercase md:text-5xl">
                  Chcesz umówić wizytę?
                </h2>

                <p className="mt-6 text-lg leading-8 text-white/55">
                  Skontaktuj się z salonem i zapytaj o dostępne terminy do
                  Marioli.
                </p>

                <div className="mt-8 grid gap-4">
                  <Button href="/kontakt">Umów wizytę</Button>

                  <a
                    href="tel:+48730796861"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-black uppercase transition hover:bg-white hover:text-black"
                  >
                    Zadzwoń
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
