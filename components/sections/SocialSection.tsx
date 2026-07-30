import Link from "next/link";
import Image from "next/image";
import instagramBg from "@/assets/images/instagram.png";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";

export function SocialSection() {
  return (
    <AnimatedSection className="bg-gradient-to-b from-[#080808] via-[#191919] to-[#343434] py-24 text-white">
      <Container>
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/45">
              Social media
            </p>

            <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">
              Zobacz salon od środka
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-white/62 lg:justify-self-end">
            Aktualne realizacje, metamorfozy i codzienne życie salonu znajdziesz
            na profilach Krystian Wojewoda Hair Design.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative min-h-[620px] overflow-hidden rounded-3xl border border-white/10 bg-black">
            <Image
              src={instagramBg}
              alt="Instagram Krystian Wojewoda Hair Design"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top opacity-50"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-black/90" />

            <div className="relative z-10 flex min-h-[620px] flex-col justify-end p-7 md:p-10">
              <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/50">
                Instagram
              </p>

              <h3 className="max-w-xl text-3xl font-black uppercase leading-tight md:text-5xl">
                Realizacje, które mówią same za siebie
              </h3>

              <p className="mt-5 max-w-md text-base leading-7 text-white/70">
                Zobacz najnowsze koloryzacje, cięcia, metamorfozy i kulisy pracy
                zespołu.
              </p>

              <Link
                href="https://www.instagram.com/salonkwhd/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 w-fit rounded-full border border-white bg-white/10 px-6 py-3 text-sm font-black uppercase backdrop-blur transition hover:bg-white hover:text-black"
              >
                Otwórz Instagram
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-4 md:p-6">
            <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                  Facebook
                </p>

                <h3 className="mt-2 text-2xl font-black uppercase">
                  Aktualności z salonu
                </h3>
              </div>

              <Link
                href="https://www.facebook.com/KrystianWojewodaHairDesign/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit rounded-full border border-white/15 px-5 py-3 text-xs font-black uppercase transition hover:bg-white hover:text-black"
              >
                Otwórz Facebook
              </Link>
            </div>

            <div className="relative h-[700px] overflow-hidden rounded-2xl bg-white">
              <iframe
                title="Krystian Wojewoda Hair Design Facebook"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FKrystianWojewodaHairDesign%2F&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false"
                width="500"
                height="700"
                loading="lazy"
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="absolute left-1/2 top-0 h-[700px] w-[500px] -translate-x-1/2 border-0"
              />
            </div>
            <p className="mt-4 text-center text-sm text-white/45">
              Jeśli aktualności się nie wyświetlają, zezwól na pliki cookies dla
              Facebooka oraz wyłącz AdBlock lub inne rozszerzenia blokujące
              treści.
            </p>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
