import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

import ania from "@/assets/images/ania.png";

export const metadata: Metadata = {
  title: "Ania - Krystian Wojewoda Hair Design",
  description:
    "Ania, starsza stylistka z 25-letnim stażem w salonie Krystian Wojewoda Hair Design w Łodzi — specjalizuje się w koloryzacjach i klasycznych cięciach.",
  alternates: { canonical: "/zespol/ania/" },
};

export default function AniaPage() {
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
                  src={ania}
                  alt="Ania"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="320px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>

              <div>
                <p className="mb-5 inline-block bg-white px-3 py-1 text-sm font-black uppercase text-black">
                  Anka
                </p>

                <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.9] md:text-8xl">
                  Ania
                </h1>

                <p className="mt-6 text-xl font-black uppercase tracking-[0.25em] text-white/45">
                  Starsza stylistka
                </p>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
                  Doświadczona stylistka z 25-letnim stażem, specjalizująca się
                  w koloryzacjach oraz klasycznych cięciach. Łączy wieloletnią
                  praktykę z pasją do ciągłego rozwoju.
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
                25 lat doświadczenia przy fotelu fryzjerskim
              </h2>

              <div className="mt-10 max-w-5xl space-y-7 text-lg leading-9 text-white/65">
                <p>
                  Ania to koleżanka Krystiana jeszcze ze szkolnej ławki.
                  Fryzjerstwo towarzyszy jej przez większość życia — swoją
                  przygodę z zawodem rozpoczęła już w wieku 15 lat.
                </p>

                <p>
                  Dziś może pochwalić się 25-letnim doświadczeniem zawodowym,
                  zdobywanym zarówno w renomowanych salonach, jak i podczas
                  prowadzenia własnej działalności.
                </p>

                <p>
                  Przez wiele lat pracowała w jednej z francuskich sieci salonów
                  fryzjerskich, gdzie rozwijała swoje umiejętności i zdobywała
                  doświadczenie w pracy z różnorodnymi klientami.
                </p>

                <p>
                  Przez ponad 16 lat z powodzeniem prowadziła własny salon,
                  budując zaufanie klientów oraz rozwijając swój indywidualny
                  styl pracy.
                </p>

                <p>
                  Uczestniczyła w licznych szkoleniach, warsztatach, seminariach
                  i sympozjach zarówno w Polsce, jak i za granicą. Dzięki temu
                  stale rozwija swój warsztat i pozostaje na bieżąco z trendami
                  branżowymi.
                </p>

                <p>
                  Szczególnie lubi wykonywać koloryzacje oraz klasyczne cięcia,
                  choć nie stroni również od bardziej kreatywnych i
                  awangardowych stylizacji.
                </p>
              </div>
            </article>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.7fr]">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
                <p className="text-xs uppercase tracking-[0.45em] text-white/35">
                  Po godzinach
                </p>

                <h2 className="mt-5 text-4xl font-black uppercase md:text-5xl">
                  Rodzina, taniec i psy
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  Prywatnie Ania jest żoną i mamą dwójki dzieci. Interesuje się
                  tańcem oraz psią behawiorystyką, a wolny czas najchętniej
                  spędza z rodziną i swoimi czworonożnymi podopiecznymi.
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
                  Skontaktuj się z salonem i zapytaj o dostępne terminy do Ani.
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
