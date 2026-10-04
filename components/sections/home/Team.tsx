import Link from "next/link";
import Image from "next/image";

import background from "@/assets/images/salon-06.webp";


import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { teamPhotoAlt } from "@/data/team";
import { teamPhoto } from "@/data/team-photos";

const team = [
  {
    name: "Krystian Wojewoda",
    role: "Stylista / Fryzjer",
    image: teamPhoto("krystian-wojewoda"),
    slug: "krystian-wojewoda",
  },
  {
    name: "Mariola Śnieg",
    role: "Technik koloryzacji",
    image: teamPhoto("mariola-snieg"),
    slug: "mariola-snieg",
  },
  { name: "Aneta", role: "Starsza stylistka", image: teamPhoto("aneta"), slug: "aneta" },
  { name: "Ania", role: "Starsza stylistka", image: teamPhoto("ania"), slug: "ania" },
  { name: "Monika", role: "Starsza stylistka", image: teamPhoto("monika"), slug: "monika" },
  { name: "Marta", role: "Manager / Recepcja", image: teamPhoto("marta"), slug: "marta" },
];

export function Team() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-gradient-to-br from-[#2f2f2f] via-[#111111] to-[#050505] py-28 text-white">
      <Image
        src={background}
        alt="Zespół Krystian Wojewoda Hair Design"
        fill
        className="object-cover opacity-28"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

      <Container>
        <div className="relative z-10 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="max-w-xl">
            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/45">
              Zespół
            </p>

            <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">
              Kilka osobowości. Jeden standard pracy.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/68">
              Zespół salonu łączy doświadczenie, technikę i wyczucie stylu.
              Dzięki temu każda wizyta jest prowadzona indywidualnie — od
              konsultacji po końcową stylizację.
            </p>

            <Link
              href="/zespol"
              className="mt-8 inline-flex rounded-full border border-white px-7 py-4 text-sm font-black uppercase transition hover:bg-white hover:text-black"
            >
              Poznaj zespół
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:grid-cols-6 lg:grid-cols-3">
            {team.map((person) => (
              <Link
                key={person.slug}
                href={`/zespol/${person.slug}`}
                className="group block"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                  <Image
                    src={person.image}
                    alt={teamPhotoAlt(person.slug)}
                    fill
                    sizes="(min-width: 1024px) 240px, (min-width: 640px) 16vw, 33vw"
                    className="object-cover object-top opacity-80 transition duration-500 group-hover:scale-110 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                <p className="mt-2 truncate text-xs font-black uppercase tracking-wide">
                  {person.name}
                </p>
                <p className="truncate text-[0.65rem] uppercase tracking-[0.2em] text-white/45">
                  {person.role}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
