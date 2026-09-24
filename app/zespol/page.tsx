import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { team as teamMembers, teamPhotoAlt } from "@/data/team";

export const metadata: Metadata = pageMetadata({
  title: "Zespół - Krystian Wojewoda Hair Design",
  description:
    "Poznaj stylistów salonu Krystian Wojewoda Hair Design w Łodzi — doświadczony zespół specjalizujący się w strzyżeniu, koloryzacji i stylizacji włosów.",
  path: "/zespol/",
});

import krystian from "@/assets/images/krystian.webp";
import ania from "@/assets/images/ania.webp";
import danuta from "@/assets/images/danuta.webp";
import monika from "@/assets/images/monika.webp";
import marta from "@/assets/images/marta.webp";
import romina from "@/assets/images/romina.webp";
import mariola from "@/assets/images/mariola.webp";
import aneta from "@/assets/images/aneta.webp";
import julia from "@/assets/images/julia.webp";

import { ZespolHero } from "@/components/sections/ZespolHero";
import { teamBannerPhotos } from "@/data/team-gallery";

const images: Record<string, StaticImageData> = {
  "krystian-wojewoda": krystian,
  "mariola-snieg": mariola,
  danuta,
  aneta,
  ania,
  monika,
  romina,
  julia,
  marta,
};

/*
  Na liście pokazujemy tylko osoby z aktualnym portretem (.webp) w `images`.
  Kolejność kart bierze się z `data/team.ts` — tutaj decydujemy wyłącznie o tym,
  kto ma zdjęcie. Aneta i Julia mają już swoje .webp, więc wracają na swoje
  miejsca z `data/team.ts`, bez zmieniania kolejności reszty zespołu.
*/
const team = teamMembers
  .filter((member) => member.slug in images)
  .map((member) => ({
    ...member,
    image: images[member.slug],
  }));

export default function ZespolPage() {
  return (
    /*
      Bez `pt-32` na <main>: baner stoi poza `Container` i sam odsuwa się od
      sticky headera (`mt-20`), tak jak hero na stronie głównej. Gdyby siedział
      w kontenerze, nie miałby jak wyjść na pełną szerokość okna.
    */
    <main className="min-h-screen bg-black text-white">
      <ZespolHero
        photos={teamBannerPhotos}
        eyebrow="Krystian Wojewoda Hair Design"
        title="Poznaj nasz zespół"
      />

      <section className="relative overflow-hidden pb-20 pt-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.045] blur-[150px]" />
        <div className="pointer-events-none absolute -right-40 top-[700px] h-[600px] w-[600px] rounded-full bg-white/[0.03] blur-[130px]" />

        <Container>
          <div className="relative mb-24 border-b border-white/10 pb-16">
            <Breadcrumbs
              crumbs={[{ name: "Zespół", path: "/zespol/" }]}
              className="mb-8 block"
            />

            <p className="mb-6 text-xs uppercase tracking-[0.6em] text-white/35">
              Zespół
            </p>

            <h1 className="max-w-6xl text-6xl font-black uppercase leading-[0.85] md:text-8xl lg:text-9xl">
              Ludzie, którzy tworzą styl
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-white/55">
              Poznaj stylistów Krystian Wojewoda Hair Design. Każdy profil
              prowadzi do osobnej podstrony pracownika.
            </p>
          </div>

          <div className="relative space-y-12">
            {team.map((person, index) => {
              const reversed = index % 2 !== 0;

              return (
                <Link
                  key={person.slug}
                  href={`/zespol/${person.slug}`}
                  className="group block"
                >
                  <article
                    className={`relative grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b] transition duration-500 hover:border-white/35 hover:bg-[#111] ${
                      reversed
                        ? "md:grid-cols-[1fr_340px] lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_480px]"
                        : "md:grid-cols-[340px_1fr] lg:grid-cols-[460px_1fr] xl:grid-cols-[480px_1fr]"
                    }`}
                  >
                    <div
                      className={`relative z-10 flex items-center justify-center p-6 md:p-10 ${
                        reversed ? "md:order-2" : ""
                      }`}
                    >
                      {/*
                        Nowe portrety .webp mają 1000×1250, czyli 4:5.
                        Portrety są teraz pod banerem (to on jest LCP),
                        więc nie dostają już `preload`/`priority`.

                        Szerokości kadru: do 320 px na wąskich ekranach,
                        260 px w paśmie md, 380 px od lg, 400 px od xl —
                        zawsze kolumna zdjęcia minus jej padding (md:p-10,
                        czyli 2 × 40 px).

                        W paśmie md (768–1023 px) kolumna zostaje przy 340 px
                        jak wcześniej — tam na nazwisko obok i tak jest ciasno.
                        Kadr rośnie od lg, czyli tam, gdzie karta ma szerokość
                        na jedno i drugie.

                        Górna granica to 400 px nie przez przypadek: przy DPR 2
                        daje 800 px, więc z `deviceSizes` wypada wariant 828 px
                        — wciąż mniej niż 1000 px pliku źródłowego. Szerszy kadr
                        zepchnąłby dobór na 1080 px, czyli na skalowanie
                        oryginału w górę. `sizes` odwzorowuje te szerokości 1:1,
                        bo inaczej przeglądarka dobiera wariant do złej liczby.
                      */}
                      <div className="relative aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-[1.5rem] bg-neutral-900 shadow-2xl shadow-black/50 md:max-w-[260px] lg:max-w-[380px] xl:max-w-[400px]">
                        <Image
                          src={person.image}
                          alt={teamPhotoAlt(person.slug)}
                          fill
                          className="object-cover object-center"
                          sizes="(min-width: 1280px) 400px, (min-width: 1024px) 380px, (min-width: 768px) 260px, 320px"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                      </div>
                    </div>

                    <div className="relative z-10 flex min-h-[420px] flex-col justify-center p-8 md:p-12 lg:p-16">
                      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                        <div className="absolute inset-y-10 left-0 w-px bg-white/10" />
                        <div className="absolute inset-x-10 top-10 h-px bg-white/10" />
                        <div className="absolute inset-x-10 bottom-10 h-px bg-white/10" />
                      </div>

                      <div className="relative">
                        <p className="mb-6 inline-block bg-white px-3 py-1 text-sm font-black uppercase text-black">
                          {person.nickname}
                        </p>

                        <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] transition duration-500 group-hover:tracking-tight md:text-6xl lg:text-7xl xl:text-8xl">
                          {person.name}
                        </h2>

                        <p className="mt-6 text-lg font-black uppercase tracking-[0.22em] text-white/45">
                          {person.role}
                        </p>

                        <div className="mt-10 h-px w-full max-w-xl bg-white/10 transition duration-500 group-hover:max-w-3xl group-hover:bg-white/25" />

                        <div className="grid overflow-hidden transition-all duration-500 md:grid-rows-[0fr] md:opacity-0 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100">
                          <div className="min-h-0">
                            <div className="pt-8">
                              <p className="max-w-xl text-lg leading-8 text-white/55">
                                Sprawdź profil, poznaj specjalizację i przejdź
                                do rezerwacji wizyty u wybranego pracownika.
                              </p>

                              <div className="mt-7 inline-flex rounded-full border border-white/20 px-7 py-4 text-sm font-black uppercase transition group-hover:bg-white group-hover:text-black">
                                Zobacz profil
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 inline-flex rounded-full border border-white/15 px-6 py-4 text-sm font-black uppercase text-white/80 transition md:hidden">
                          Zobacz profil
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>

          <div className="mt-24 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
            <div className="grid gap-0 md:grid-cols-[1fr_0.8fr]">
              <div className="p-8 md:p-12">
                <p className="text-xs uppercase tracking-[0.5em] text-white/35">
                  Rezerwacja
                </p>

                <h2 className="mt-6 max-w-3xl text-4xl font-black uppercase leading-tight md:text-6xl">
                  Nie wiesz, którego stylistę wybrać?
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/55">
                  Skontaktuj się z nami, a pomożemy dobrać osobę odpowiednią do
                  strzyżenia, koloryzacji lub pielęgnacji.
                </p>
              </div>

              <div className="flex items-center justify-start border-t border-white/10 p-8 md:justify-center md:border-l md:border-t-0 md:p-12">
                <Button href="/kontakt">Skontaktuj się</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
