import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceCard } from "@/components/services/ServiceCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { BookingLink } from "@/components/ui/BookingLink";
import { Container } from "@/components/ui/Container";
import { servicePath, services, SERVICES_PATH } from "@/data/services";
import { serviceListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Usługi fryzjerskie Łódź – koloryzacja, strzyżenie | Wojewoda",
  description:
    "Usługi fryzjerskie w Łodzi przy Piotrkowskiej 293/305: koloryzacja, balayage, pasemka, strzyżenie damskie i męskie, fryzury ślubne, metamorfozy i regeneracja.",
  path: SERVICES_PATH,
});

export default function UslugiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050505] via-[#171717] to-[#2a2a2a] pt-32 text-white">
      <JsonLd
        data={serviceListSchema(
          services.map((service) => ({
            name: service.name,
            path: servicePath(service.slug),
          })),
        )}
      />

      <section className="py-16 md:py-20">
        <Container>
          <AnimatedSection immediate className="mb-14 max-w-4xl">
            <Breadcrumbs
              crumbs={[{ name: "Usługi", path: SERVICES_PATH }]}
              className="mb-10 block"
            />

            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/45">
              Oferta salonu
            </p>

            <h1 className="text-5xl font-black uppercase leading-tight md:text-7xl">
              Usługi fryzjerskie w Łodzi
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Koloryzacja, strzyżenie, upięcia i pielęgnacja włosów w salonie
              przy ul. Piotrkowskiej 293/305. Przy każdej usłudze znajdziesz
              opis, aktualne widełki cen z cennika i odpowiedzi na najczęstsze
              pytania.
            </p>
          </AnimatedSection>

          <AnimatedSection immediate>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} headingLevel="h2" />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.05] p-8 text-center backdrop-blur md:flex-row md:text-left">
            <div>
              <h2 className="text-2xl font-black uppercase leading-tight md:text-3xl">
                Nie wiesz, którą usługę wybrać?
              </h2>

              <p className="mt-3 max-w-xl text-white/65">
                Umów konsultację — ocenimy kondycję włosów i zaproponujemy plan.
                Pełne zestawienie kwot znajdziesz w{" "}
                <Link href="/cennik" className="underline underline-offset-4 hover:text-white">
                  cenniku
                </Link>
                .
              </p>
            </div>

            <BookingLink size="lg" className="shrink-0" />
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
