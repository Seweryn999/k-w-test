import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

import marta from "@/assets/images/marta.png";

export const metadata: Metadata = {
  title: "Marta - Krystian Wojewoda Hair Design",
  description:
    "Marta, manager i recepcja salonu Krystian Wojewoda Hair Design w Łodzi — zadba o dogodny termin i sprawną organizację wizyty.",
  alternates: { canonical: "/zespol/marta/" },
};

export default function MartaPage() {
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
                  src={marta}
                  alt="Marta"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="320px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>

              <div>
                <p className="mb-5 inline-block bg-white px-3 py-1 text-sm font-black uppercase text-black">
                  Wieru
                </p>

                <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.9] md:text-8xl">
                  Marta
                </h1>

                <p className="mt-6 text-xl font-black uppercase tracking-[0.25em] text-white/45">
                  Manager / Recepcja
                </p>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
                  Osoba odpowiedzialna za organizację pracy salonu, kontakt z
                  klientami oraz sprawne funkcjonowanie recepcji. To właśnie
                  Marta najczęściej zadba o znalezienie odpowiedniego terminu i
                  pierwsze wrażenie po przekroczeniu progu salonu.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Button href="/kontakt">Skontaktuj się</Button>

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
                O Marcie
              </p>

              <h2 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-tight md:text-6xl">
                Serce organizacyjne #TeamWojewoda
              </h2>

              <div className="mt-10 max-w-5xl space-y-7 text-lg leading-9 text-white/65">
                <p>
                  Wieru w salonie pełni funkcję managera oraz zajmuje się
                  recepcją. To ona najczęściej odbiera telefony, odpowiada na
                  wiadomości oraz pomaga znaleźć najlepszy termin wizyty.
                </p>

                <p>
                  Jest również odpowiedzialna za relacjonowanie codziennego
                  życia salonu na Instagramie. Dokumentuje metamorfozy klientek,
                  przygotowuje relacje i pokazuje kulisy pracy całego
                  #TeamWojewoda.
                </p>

                <p>
                  Jeżeli zobaczycie ją z telefonem w dłoni, nie bójcie się
                  uśmiechnąć, pomachać lub zrobić czegoś spontanicznego — to
                  jedno z jej ulubionych zdań kierowanych do klientów.
                </p>

                <p>
                  Marta odpowiada również za organizację napiętego grafiku
                  salonu. To właśnie od niej możecie czasem usłyszeć, że do
                  Marioli lub Krystiana nie ma już wolnych terminów w danym
                  miesiącu, ale zawsze postara się znaleźć najlepsze możliwe
                  rozwiązanie lub dopisać Was do listy rezerwowej.
                </p>

                <p>
                  Salon traktuje jak drugi dom. Dba o organizację pracy zespołu,
                  komfort klientów oraz o to, aby niczego w salonie nie
                  zabrakło.
                </p>

                <p>
                  Razem z całym #TeamWojewoda stara się, aby każda osoba
                  odwiedzająca salon czuła się swobodnie, była zaopiekowana i
                  wychodziła z przekonaniem, że trafiła we właściwe ręce.
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
                  Architektura i design
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  Z wykształcenia Marta jest architektem. Uwielbia design,
                  estetyczne wnętrza oraz tworzenie wyjątkowej atmosfery.
                  Dekorowanie salonu i dbanie o jego wygląd sprawia jej ogromną
                  przyjemność.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
                <p className="text-xs uppercase tracking-[0.45em] text-white/35">
                  W salonie
                </p>

                <h2 className="mt-5 text-4xl font-black uppercase md:text-5xl">
                  Organizacja i kontakt
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  Marta dba o komunikację z klientami, organizację wizyt oraz
                  sprawne funkcjonowanie recepcji. To dzięki niej wszystko
                  działa płynnie zarówno przed wizytą, jak i po niej.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.45em] text-white/35">
                Kontakt
              </p>

              <h2 className="mt-5 text-4xl font-black uppercase md:text-5xl">
                Potrzebujesz pomocy z rezerwacją?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/55">
                Skontaktuj się z salonem. Marta pomoże znaleźć odpowiedni termin
                i odpowie na pytania dotyczące wizyty.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/kontakt">Skontaktuj się</Button>

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
