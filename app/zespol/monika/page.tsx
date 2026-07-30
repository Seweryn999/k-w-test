import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

import monika from "@/assets/images/monika.png";

export const metadata: Metadata = {
  title: "Monika - Krystian Wojewoda Hair Design",
  description:
    "Monika, doświadczona starsza stylistka w salonie Krystian Wojewoda Hair Design w Łodzi — specjalizuje się we fryzjerstwie damskim i męskim oraz koloryzacji.",
  alternates: { canonical: "/zespol/monika/" },
};

export default function MonikaPage() {
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
                  src={monika}
                  alt="Monika"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="320px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>

              <div>
                <p className="mb-5 inline-block bg-white px-3 py-1 text-sm font-black uppercase text-black">
                  Monia
                </p>

                <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.9] md:text-8xl">
                  Monika
                </h1>

                <p className="mt-6 text-xl font-black uppercase tracking-[0.25em] text-white/45">
                  Starsza stylistka
                </p>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
                  Doświadczona stylistka specjalizująca się we fryzjerstwie
                  damskim i męskim, nowoczesnych technikach koloryzacji oraz
                  efektownych fryzurach okolicznościowych.
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
                17 lat doświadczenia i nieustanny rozwój
              </h2>

              <div className="mt-10 max-w-5xl space-y-7 text-lg leading-9 text-white/65">
                <p>
                  Monika pracuje w zawodzie fryzjera od 17 lat. Przez lata
                  zdobywała doświadczenie, uczestnicząc w licznych szkoleniach,
                  pokazach i wydarzeniach branżowych.
                </p>

                <p>
                  Pracując u boku szkoleniowców firm Wella, L’Oréal oraz Rr Line
                  miała okazję brać udział w wielu eventach fryzjerskich, między
                  innymi podczas Fashion Week.
                </p>

                <p>
                  Specjalizuje się zarówno we fryzjerstwie damskim, jak i
                  męskim. Szczególną uwagę poświęca nowoczesnym technikom
                  koloryzacji oraz indywidualnemu dopasowaniu fryzury do
                  klienta.
                </p>

                <p>
                  Monika uwielbia również fryzury okolicznościowe, wieczorowe
                  oraz różnego rodzaju upięcia. To właśnie przy tego typu
                  stylizacjach może w pełni wykorzystać swoją kreatywność i
                  doświadczenie.
                </p>

                <p>
                  W pracy bardzo się spełnia i stale rozwija swoje umiejętności.
                  Regularnie uczestniczy w szkoleniach oraz śledzi najnowsze
                  trendy fryzjerskie, aby oferować klientom nowoczesne i
                  dopracowane usługi.
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
                  Koloryzacje i fryzury okolicznościowe
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  Monika szczególnie lubi wykonywać koloryzacje oraz fryzury
                  wieczorowe i okolicznościowe. Dzięki doświadczeniu oraz
                  wyczuciu estetyki tworzy stylizacje dopasowane do charakteru
                  wydarzenia i oczekiwań klientki.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
                <p className="text-xs uppercase tracking-[0.45em] text-white/35">
                  Prywatnie
                </p>

                <h2 className="mt-5 text-4xl font-black uppercase md:text-5xl">
                  Rodzina na pierwszym miejscu
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  Poza pracą Monika jest szczęśliwą żoną i mamą. Wolny czas
                  poświęca rodzinie, łącząc życie zawodowe z prywatnym w
                  harmonijny sposób.
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
                Skontaktuj się z salonem i zapytaj o dostępne terminy do Moniki.
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
