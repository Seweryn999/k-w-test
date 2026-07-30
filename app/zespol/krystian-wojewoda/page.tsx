import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

import krystian from "@/assets/images/krystian.png";

export const metadata: Metadata = {
  title: "Fryzjer Krystian Wojewoda - Krystian Wojewoda Hair Design",
  description:
    "Poznaj najlepszego fryzjera w Łodzi - Krystian Wojewoda. Nowoczesny, pełen pasji fryzjer z wieloletnim doświadczeniem. Umów się na wizytę!",
  alternates: { canonical: "/zespol/krystian-wojewoda/" },
};

export default function KrystianWojewodaPage() {
  return (
    <main className="min-h-screen bg-black pt-32 text-white">
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.045] blur-[150px]" />

        <Container>
          <Link
            href="/zespol"
            className="mb-12 inline-block text-xs font-black uppercase tracking-[0.35em] text-white/40 transition hover:text-white"
          >
            ← Wróć do zespołu
          </Link>

          <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:p-10 lg:grid-cols-[340px_1fr] lg:items-center">
            <div className="relative aspect-[400/420] w-full max-w-[300px] overflow-hidden rounded-[1.5rem] bg-neutral-900 md:max-w-[320px]">
              <Image
                src={krystian}
                alt="Krystian Wojewoda"
                fill
                priority
                className="object-cover object-center"
                sizes="320px"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>

            <div>
              <p className="mb-5 inline-block bg-white px-3 py-1 text-sm font-black uppercase text-black">
                Zohan
              </p>

              <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.9] md:text-8xl">
                Krystian Wojewoda
              </h1>

              <p className="mt-6 text-xl font-black uppercase tracking-[0.25em] text-white/45">
                Stylista / Fryzjer
              </p>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
                Doświadczony stylista i fryzjer, właściciel salonu Krystian
                Wojewoda Studio Hair Design. Od lat związany z fryzjerstwem,
                szkoleniami i pracą z klientami z całej Polski.
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

          <article className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.45em] text-white/35">
              Historia
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-tight md:text-6xl">
              Od pierwszych praktyk do własnego salonu
            </h2>

            <div className="mt-10 columns-1 gap-12 space-y-7 text-lg leading-9 text-white/65 lg:columns-2">
              <p>
                Może nie uwierzycie, ale Krystian miał zostać stolarzem.
                Uwielbiał wszystko, co było związane z drewnem. Miał już nawet
                przygotowane papiery do zespołu szkół rzemiosła.
              </p>

              <p>
                Pewnego dnia Krystian trafił do osiedlowego salonu Pani Teresy,
                który mieścił się przy ul. Przybyszewskiego 90. W salonie
                pracowało kilka Pań — Basia, Agnieszka oraz Anita. Krystian
                przez wiele minut zastanawiał się, co powiedzieć. W końcu
                zapytał: „Co trzeba zrobić, żeby zostać fryzjerem?”.
              </p>

              <p>
                Tak zaczęła się jego przygoda z fryzjerstwem. Pani Teresa
                Baranowska przyjęła go na praktyki 11 sierpnia 1996 roku.
                Krystian od razu poczuł się jak ryba w wodzie. Patrząc na
                niesamowitą precyzję ruchów, chłonął wiedzę w niesamowitym
                tempie.
              </p>

              <p>
                Nawet mimo trzytygodniowego pobytu w szpitalu Zohan nie
                zniechęcił się do fryzjerstwa. Poprosił jedną z koleżanek, by
                przyniosła mu do szpitala grzebień i nożyczki. Wystylizował tam
                niezliczoną ilość dzieci i młodzieży. Już wtedy zaczął zarabiać
                na fryzjerstwie — najczęściej słodycze i drobne upominki.
              </p>

              <p>
                Na stanowisku fryzjera męskiego Krystian spędził 6 lat.
                Następnie przeszedł do francuskiej sieciówki, gdzie nabył
                doświadczenia w damskich stylizacjach. Praca pod okiem
                Francuzów, na produktach L’Oreal, zaowocowała zwycięstwem w
                eliminacjach do Mistrzostw Europy „Les Figaros de la Coif”.
              </p>

              <p>
                W wieku 22 lat Krystian zajął na tych mistrzostwach 3. miejsce.
                Kolejnym miejscem pracy Zohana był jeden z najlepszych salonów
                fryzjerskich tamtych czasów, prowadzony przez Jacka Olejniczaka.
                Spędził tam blisko 7 lat i do dziś uważa ten czas za najbardziej
                rozwojowy w swojej karierze.
              </p>

              <p>
                Ciągłe szkolenia sprawiły, że stał się jednym z najlepszych
                fryzjerów nie tylko w Łodzi. Był to moment, w którym Krystian
                pracował niemal 24 godziny na dobę. Wszystko to zaowocowało
                renomą i statusem jednego z najbardziej polecanych fryzjerów w
                Polsce.
              </p>

              <p>
                Przez trzy semestry Krystian pracował także w prywatnym studiu
                fryzjerskim jako nauczyciel, szkoląc praktykantów, którzy dziś
                pracują w najlepszych salonach fryzjerskich w całej Polsce.
              </p>
            </div>
          </article>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.7fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.45em] text-white/35">
                Krystian dziś
              </p>

              <h2 className="mt-5 text-4xl font-black uppercase md:text-5xl">
                Doświadczenie, zespół i ciągły rozwój
              </h2>

              <p className="mt-6 text-lg leading-9 text-white/60">
                Krystian prowadzi z Mariolą własny salon fryzjerski Krystian
                Wojewoda Studio Hair Design, cieszący się bardzo dobrą opinią
                wśród klientów z całej Polski. Zgrany zespół, praca na
                kosmetykach Alterna i Kevin Murphy oraz regularne szkolenia
                sprawiają, że salon stale się rozwija.
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
                Krystiana.
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
        </Container>
      </section>
    </main>
  );
}
