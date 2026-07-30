import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { mainPrices, otherPrices, pricingRules as rules } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Cennik usług fryzjerskich - Krystian Wojewoda Hair Design",
  description:
    "Najlepszy fryzjer w Łodzi i okolicach ♛ Poznaj ceny usług fryzjerskich w salonie Krystian Wojewoda Hair Design: farbowanie, strzyżenie, modelowanie, balayage.",
  alternates: { canonical: "/cennik/" },
};

export default function CennikPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050505] via-[#171717] to-[#343434] pt-32 text-white">
      <section className="py-20">
        <Container>
          <div className="mb-20 max-w-5xl">
            <p className="mb-5 text-xs uppercase tracking-[0.55em] text-white/40">
              Cennik
            </p>

            <h1 className="text-5xl font-black uppercase leading-[0.95] md:text-7xl lg:text-8xl">
              Cennik usług fryzjerskich
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
              Poznaj pełen cennik usług oferowanych przez Wojewoda Studio:
              koloryzacje, strzyżenia, pielęgnacje, modelowanie, trwałą
              ondulację oraz fryzury wieczorowe i ślubne.
            </p>
          </div>

          <div className="mb-12 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.45em] text-white/35">
                  Mariola i Krystian
                </p>

                <h2 className="mt-4 text-3xl font-black uppercase md:text-5xl">
                  Standard / VIP
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-white/50">
                Ceny podane są w złotówkach. Ostateczna kwota może zależeć od
                długości, gęstości włosów i zużycia materiału.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30">
            <div className="grid grid-cols-[1fr_90px_90px] border-b border-white/10 bg-white/[0.06] px-4 py-5 text-xs font-black uppercase tracking-[0.25em] text-white/45 md:grid-cols-[1fr_150px_150px] md:px-8">
              <div>Usługa</div>
              <div className="text-right">Standard</div>
              <div className="text-right">VIP</div>
            </div>

            {mainPrices.map(({ service, standard, vip }, index) => (
              <div
                key={`${service}-${index}`}
                className="grid grid-cols-[1fr_90px_90px] items-center border-b border-white/10 px-4 py-5 transition hover:bg-white/[0.04] md:grid-cols-[1fr_150px_150px] md:px-8"
              >
                <div className="pr-4 text-sm font-bold uppercase leading-6 text-white/80 md:text-base">
                  {service}
                </div>

                <div className="text-right text-sm font-black text-white md:text-lg">
                  {standard}
                </div>

                <div className="text-right text-sm font-black text-white/70 md:text-lg">
                  {vip}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-12 mt-20 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-10">
            <p className="text-xs uppercase tracking-[0.45em] text-white/35">
              Pozostali fryzjerzy
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase md:text-5xl">
              Cennik Pozostałych Fryzjerów
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/50">
              Cena zależy od długości i gęstości włosów, zużycia materiału
              oraz stopnia trudności wykonania usługi.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30">
            <div className="grid grid-cols-[1fr_90px] border-b border-white/10 bg-white/[0.06] px-4 py-5 text-xs font-black uppercase tracking-[0.25em] text-white/45 md:grid-cols-[1fr_150px] md:px-8">
              <div>Usługa</div>
              <div className="text-right">Cena</div>
            </div>

            {otherPrices.map(({ service, price }, index) => (
              <div
                key={`${service}-${index}`}
                className="grid grid-cols-[1fr_90px] items-center border-b border-white/10 px-4 py-5 transition hover:bg-white/[0.04] md:grid-cols-[1fr_150px] md:px-8"
              >
                <div className="pr-4 text-sm font-bold uppercase leading-6 text-white/80 md:text-base">
                  {service}
                </div>

                <div className="text-right text-sm font-black text-white md:text-lg">
                  {price}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
            <div className="grid gap-0 lg:grid-cols-[1fr_auto]">
              <div className="p-8 md:p-10">
                <h2 className="max-w-4xl text-3xl font-black uppercase leading-tight md:text-4xl">
                  Usługa, której nie znalazłeś/aś w cenniku?
                </h2>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-white/55">
                  Napisz lub zadzwoń, a podamy dokładną cenę dopasowaną do
                  Twoich włosów.
                </p>
              </div>

              <div className="flex items-center border-t border-white/10 p-8 md:p-10 lg:border-l lg:border-t-0">
                <Button href="/kontakt">Zapytaj o cenę</Button>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-black/30 p-8 md:p-10">
            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.45em] text-white/35">
                Regulamin
              </p>

              <h2 className="mt-5 text-4xl font-black uppercase md:text-5xl">
                Zasady cennika
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {rules.map((rule, index) => (
                <div
                  key={rule}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
                >
                  <div className="mb-5 text-3xl font-black text-white/20">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="text-sm leading-7 text-white/60 md:text-base">
                    {rule}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 rounded-[2rem] border border-white/10 bg-black/30 p-8 md:p-12">
            <h2 className="max-w-4xl text-4xl font-black uppercase leading-tight md:text-6xl">
              Profesjonalna pielęgnacja i dobór kosmetyków
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-white/55">
              W salonie dostępne są kosmetyki do włosów renomowanych marek.
              Oferujemy również dobór odpowiedniej pielęgnacji oraz konsultację
              ze specjalistą, aby dopasować zabiegi i produkty do kondycji
              włosów.
            </p>

            <div className="mt-10">
              <Button href="/kontakt">Umów konsultację</Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
