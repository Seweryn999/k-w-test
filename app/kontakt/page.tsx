import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BOOKSY_URL } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Kontakt i rezerwacja wizyty | Krystian Wojewoda Hair Design",
  description:
    "Zadzwoń, napisz lub zarezerwuj wizytę online w salonie Krystian Wojewoda Hair Design przy ul. Piotrkowskiej 293/305 w Łodzi.",
  alternates: { canonical: "/kontakt/" },
};

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050505] via-[#171717] to-[#343434] pt-32 text-white">
      <AnimatedSection className="py-20">
        <Container>
          <div className="mb-16 max-w-4xl">
            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/45">
              Kontakt
            </p>

            <h1 className="text-5xl font-black uppercase leading-tight md:text-7xl">
              Umów wizytę w salonie
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Zadzwoń, napisz lub sprawdź trasę do salonu przy ul. Piotrkowskiej
              293/305 w Łodzi.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur md:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                  Telefon
                </p>

                <a
                  href="tel:+48730796861"
                  className="mt-3 block text-4xl font-black transition hover:text-white/70"
                >
                  +48 730 796 861
                </a>
              </div>

              <div className="mt-10">
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                  Email
                </p>

                <a
                  href="mailto:salonkwhd@gmail.com"
                  className="mt-3 block break-words text-xl font-bold text-white/80 transition hover:text-white"
                >
                  salonkwhd@gmail.com
                </a>
              </div>

              <div className="mt-10">
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                  Adres
                </p>

                <p className="mt-3 text-2xl font-black">
                  ul. Piotrkowska 293/305
                </p>

                <p className="mt-1 text-white/60">90-369 Łódź, Ogrody Geyera</p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-center text-base font-medium text-black transition hover:bg-neutral-200 sm:col-span-2"
                >
                  Zarezerwuj online w Booksy
                </a>

                <Button href="tel:+48730796861">Zadzwoń teraz</Button>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Krystian%20Wojewoda%20Hair%20Design%20Piotrkowska%20293%2F305%20%C5%81%C3%B3d%C5%BA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-center text-sm font-black uppercase transition hover:bg-white hover:text-black"
                >
                  Otwórz mapę
                </a>
              </div>

              <div className="mt-10 rounded-2xl border border-white/10 bg-black/20 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                  Godziny otwarcia
                </p>

                <div className="mt-4 space-y-2 text-lg font-semibold text-white/80">
                  <p>Pon-Pt: 9:00–21:00</p>
                  <p>Sobota: 9:00–15:00</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
              <iframe
                title="Mapa Krystian Wojewoda Hair Design"
                src="https://www.google.com/maps?q=Krystian%20Wojewoda%20Hair%20Design%20Piotrkowska%20293%2F305%20%C5%81%C3%B3d%C5%BA&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[560px] w-full rounded-2xl border-0"
              />
            </div>
          </div>
        </Container>
      </AnimatedSection>
    </main>
  );
}
