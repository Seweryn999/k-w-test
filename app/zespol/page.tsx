import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { team as teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "Zespół - Krystian Wojewoda Hair Design",
  description:
    "Poznaj stylistów salonu Krystian Wojewoda Hair Design w Łodzi — doświadczony zespół specjalizujący się w strzyżeniu, koloryzacji i stylizacji włosów.",
  alternates: { canonical: "/zespol/" },
};

import krystian from "@/assets/images/krystian.png";
import aneta from "@/assets/images/aneta.png";
import ania from "@/assets/images/ania.png";
import danuta from "@/assets/images/danuta.png";
import julia from "@/assets/images/julia.png";
import monika from "@/assets/images/monika.png";
import marta from "@/assets/images/marta.png";
import romina from "@/assets/images/romina.png";
import mariola from "@/assets/images/mariola.png";

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

const team = teamMembers.map((member) => ({
  ...member,
  image: images[member.slug],
}));

export default function ZespolPage() {
  return (
    <main className="min-h-screen bg-black pt-32 text-white">
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.045] blur-[150px]" />
        <div className="pointer-events-none absolute -right-40 top-[700px] h-[600px] w-[600px] rounded-full bg-white/[0.03] blur-[130px]" />

        <Container>
          <div className="relative mb-24 border-b border-white/10 pb-16">
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
                    className={`relative grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b] transition duration-500 hover:border-white/35 hover:bg-[#111] md:grid-cols-[340px_1fr] ${
                      reversed ? "md:grid-cols-[1fr_340px]" : ""
                    }`}
                  >
                    <div
                      className={`relative z-10 flex items-center justify-center p-6 md:p-10 ${
                        reversed ? "md:order-2" : ""
                      }`}
                    >
                      <div className="relative aspect-[400/420] w-full max-w-[260px] overflow-hidden rounded-[1.5rem] bg-neutral-900 shadow-2xl shadow-black/50 md:max-w-[300px]">
                        <Image
                          src={person.image}
                          alt={person.name}
                          fill
                          priority={index < 2}
                          className="object-cover object-center"
                          sizes="380px"
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

                        <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] transition duration-500 group-hover:tracking-tight md:text-7xl lg:text-8xl">
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
