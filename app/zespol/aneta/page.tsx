import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

import aneta from "@/assets/images/aneta.png";

export const metadata: Metadata = {
  title: "Aneta - Krystian Wojewoda Hair Design",
  description:
    "Aneta, starsza stylistka z 25-letnim doświadczeniem w salonie Krystian Wojewoda Hair Design — specjalizuje się we fryzjerstwie damskim i koloryzacjach.",
  alternates: { canonical: "/zespol/aneta/" },
};

export default function AnetaPage() {
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
                  src={aneta}
                  alt="Aneta"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="320px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>

              <div>
                <p className="mb-5 inline-block bg-white px-3 py-1 text-sm font-black uppercase text-black">
                  Andzia
                </p>

                <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.9] md:text-8xl">
                  Aneta
                </h1>

                <p className="mt-6 text-xl font-black uppercase tracking-[0.25em] text-white/45">
                  Starsza stylistka
                </p>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
                  Stylistka z 25-letnim doświadczeniem, specjalizująca się we
                  fryzjerstwie damskim, koloryzacjach oraz efektownych
                  uczesaniach i upięciach.
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
                25 lat pasji do fryzjerstwa
              </h2>

              <div className="mt-10 max-w-5xl space-y-7 text-lg leading-9 text-white/65">
                <p>
                  Fryzjerstwo jest pasją Anety od 25 lat. Pracując u boku
                  szkoleniowców firm Matrix i Rr Line, miała przyjemność brać
                  udział w wielu eventach, takich jak Fashion Week czy Wybory
                  Miss Ziemi Łódzkiej.
                </p>

                <p>
                  Specjalizuje się szczególnie we fryzjerstwie damskim, które
                  daje jej nieograniczone możliwości balansowania między różnymi
                  stylami kolorystycznymi i artystycznymi.
                </p>

                <p>
                  W pracy bardzo się spełnia, a nowe trendy śledzi z
                  zaciekawieniem i na bieżąco. Dzięki temu jej stylizacje łączą
                  doświadczenie z aktualnym spojrzeniem na fryzjerstwo.
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
                  Upięcia i fryzury, które przyciągają spojrzenia
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  Uczesania i upięcia Anety są efektowne i spektakularne. Jeśli
                  marzysz o fryzurze, która ma zrobić wrażenie i przyciągać
                  spojrzenia, Aneta będzie świetnym wyborem.
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
                  Anety.
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
