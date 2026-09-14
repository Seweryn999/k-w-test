import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BOOKSY_URL } from "@/data/navigation";
import { BUSINESS } from "@/data/business";
import { bookingFaq } from "@/data/faq";
import { BookingLink } from "@/components/ui/BookingLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Kontakt i rezerwacja wizyty | Krystian Wojewoda Hair Design",
  description:
    "Zadzwoń, napisz lub zarezerwuj wizytę online w salonie Krystian Wojewoda Hair Design przy ul. Piotrkowskiej 293/305 w Łodzi.",
  path: "/kontakt/",
});

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050505] via-[#171717] to-[#343434] pt-32 text-white">
      <AnimatedSection immediate className="py-20">
        <Container>
          <div className="mb-16 max-w-4xl">
            <Breadcrumbs
              crumbs={[{ name: "Kontakt", path: "/kontakt/" }]}
              className="mb-8 block"
            />

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
                  href={`tel:${BUSINESS.phone}`}
                  className="mt-3 block text-4xl font-black transition hover:text-white/70"
                >
                  {BUSINESS.phoneLabel}
                </a>
              </div>

              <div className="mt-10">
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                  Email
                </p>

                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="mt-3 block break-words text-xl font-bold text-white/80 transition hover:text-white"
                >
                  {BUSINESS.email}
                </a>
              </div>

              <div className="mt-10">
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                  Adres
                </p>

                <p className="mt-3 text-2xl font-black">
                  {BUSINESS.address.street}
                </p>

                <p className="mt-1 text-white/60">
                  {BUSINESS.address.postalCode} {BUSINESS.address.city},{" "}
                  {BUSINESS.address.venue}
                </p>
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

                <Button href={`tel:${BUSINESS.phone}`}>Zadzwoń teraz</Button>

                <a
                  href={BUSINESS.mapsUrl}
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
                  {BUSINESS.openingHours.map((slot) => (
                    <p key={slot.label}>
                      {slot.label}: {slot.hoursLabel}
                    </p>
                  ))}
                  <p className="text-white/45">Niedziela: zamknięte</p>
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

          {/*
            FAQ odpowiada na pytania, które klienci zadają przez telefon —
            i jednocześnie łapie zapytania typu "fryzjer Łódź godziny otwarcia"
            w wyszukiwarce. Treść widoczna i oznaczona w FAQPage to ta sama lista.
          */}
          <div className="mt-20">
            <JsonLd data={faqPageSchema(bookingFaq)} />

            <h2 className="text-4xl font-black uppercase leading-tight md:text-5xl">
              Najczęstsze pytania
            </h2>

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {bookingFaq.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur open:bg-white/[0.06]"
                >
                  <summary className="cursor-pointer list-none text-lg font-black leading-snug marker:content-none">
                    <span className="flex items-start justify-between gap-4">
                      {item.question}
                      <span
                        aria-hidden
                        className="mt-1 shrink-0 text-white/35 transition group-open:rotate-45"
                      >
                        +
                      </span>
                    </span>
                  </summary>

                  <p className="mt-4 leading-7 text-white/65">{item.answer}</p>
                </details>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.05] p-8 text-center sm:flex-row sm:justify-between sm:text-left">
              <p className="max-w-xl text-lg text-white/70">
                Nie znalazłeś odpowiedzi? Zarezerwuj termin online — wolne
                godziny widać od razu, bez czekania na oddzwonienie.
              </p>

              <BookingLink size="lg" className="shrink-0" />
            </div>
          </div>
        </Container>
      </AnimatedSection>
    </main>
  );
}
