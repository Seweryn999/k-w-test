import Link from "next/link";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { BookingLink } from "@/components/ui/BookingLink";
import { priceHighlights } from "@/data/pricing";

export function Pricing() {
  return (
    <AnimatedSection className="bg-gradient-to-b from-[#222222] via-[#191919] to-[#0c0c0c] py-24 text-white">
      <Container>
        <div className="grid gap-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/45">
              Cennik
            </p>

            <h2 className="text-4xl font-black uppercase leading-tight md:text-5xl">
              Przejrzyste ceny, bez niespodzianek
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-white/60">
              Pełen cennik z podziałem na koloryzacje, strzyżenia, zabiegi
              pielęgnacyjne oraz ceny Standard / VIP znajdziesz na osobnej
              stronie.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/cennik"
                className="inline-flex items-center justify-center rounded-full border border-white px-7 py-4 text-sm font-black uppercase transition hover:bg-white hover:text-black"
              >
                Pełny cennik
              </Link>

              <BookingLink />
            </div>
          </div>

          <div className="grid gap-3">
            {priceHighlights.map((item) => (
              <div
                key={item.service}
                className="flex items-center justify-between gap-4 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-sky-400/20 to-sky-500/5 px-6 py-4"
              >
                <p className="text-sm font-bold uppercase leading-5 text-white/75 md:text-base">
                  {item.service}
                </p>

                <p className="whitespace-nowrap text-lg font-black">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
