import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

import julia from "@/assets/images/julia.png";

export const metadata: Metadata = {
  title: "Julia - Krystian Wojewoda Hair Design",
  description:
    "Julia, młodsza stylistka w salonie Krystian Wojewoda Hair Design w Łodzi — specjalizuje się w fryzjerstwie damsko-męskim i kreatywnych koloryzacjach.",
  alternates: { canonical: "/zespol/julia/" },
};

export default function JuliaPage() {
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
                  src={julia}
                  alt="Julia"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="320px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>

              <div>
                <p className="mb-5 inline-block bg-white px-3 py-1 text-sm font-black uppercase text-black">
                  Jula
                </p>

                <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.9] md:text-8xl">
                  Julia
                </h1>

                <p className="mt-6 text-xl font-black uppercase tracking-[0.25em] text-white/45">
                  Młodsza stylistka
                </p>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
                  Ambitna stylistka, która swoją przygodę z fryzjerstwem
                  rozpoczęła już jako nastolatka. Specjalizuje się we
                  fryzjerstwie damsko-męskim, a największą satysfakcję daje jej
                  tworzenie wyjątkowych koloryzacji.
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
                Pasja rozwijana od najmłodszych lat
              </h2>

              <div className="mt-10 max-w-5xl space-y-7 text-lg leading-9 text-white/65">
                <p>
                  Julia swoją przygodę z fryzjerstwem rozpoczęła już w wieku 14
                  lat, kiedy zaczęła uczęszczać na praktyki w naszym salonie. Od
                  samego początku wiedziała, że chce rozwijać się właśnie w tej
                  branży.
                </p>

                <p>
                  Dzięki zaangażowaniu, systematycznej pracy i determinacji
                  pomyślnie zdała egzamin czeladniczy, realizując swoje marzenie
                  o zawodowej pracy jako fryzjerka.
                </p>

                <p>
                  Po ukończeniu nauki odbyła roczny staż, podczas którego
                  regularnie uczestniczyła w szkoleniach i doskonaliła swoje
                  umiejętności pod okiem bardziej doświadczonych stylistów.
                </p>

                <p>
                  Specjalizuje się we fryzjerstwie damsko-męskim. Szczególne
                  miejsce w jej pracy zajmują koloryzacje, które pozwalają jej
                  wykorzystać kreatywność i indywidualne podejście do klienta.
                </p>

                <p>
                  Julia nieustannie śledzi najnowsze trendy oraz techniki
                  fryzjerskie, które z powodzeniem wdraża podczas codziennej
                  pracy w salonie.
                </p>

                <p>
                  Uwielbia wyzwania i trudne przypadki. To właśnie wymagające
                  metamorfozy pozwalają jej rozwijać umiejętności i tworzyć
                  rozwiązania idealnie dopasowane do potrzeb klientów.
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
                  Kreatywne koloryzacje
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  Największą pasją Julii są koloryzacje. Lubi zarówno subtelne
                  zmiany podkreślające naturalne piękno włosów, jak i bardziej
                  wyraziste metamorfozy wymagające kreatywnego podejścia.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
                <p className="text-xs uppercase tracking-[0.45em] text-white/35">
                  Podejście do pracy
                </p>

                <h2 className="mt-5 text-4xl font-black uppercase md:text-5xl">
                  Lubi wyzwania
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  Julia chętnie podejmuje się trudniejszych przypadków i
                  wymagających metamorfoz. Każdego klienta traktuje
                  indywidualnie, starając się znaleźć rozwiązanie idealnie
                  dopasowane do jego oczekiwań.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.45em] text-white/35">
                Wizyta
              </p>

              <h2 className="mt-5 text-4xl font-black uppercase md:text-5xl">
                Chcesz umówić wizytę?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/55">
                Skontaktuj się z salonem i zapytaj o dostępne terminy do Julii.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/kontakt">Umów wizytę</Button>

                <a
                  href="tel:+48730796861"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-black uppercase transition hover:bg-white hover:text-black"
                >
                  Zadzwoń
                </a>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
