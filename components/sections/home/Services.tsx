import Link from "next/link";

import { ServiceCard } from "@/components/services/ServiceCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { BookingLink } from "@/components/ui/BookingLink";
import { services, SERVICES_PATH } from "@/data/services";

/**
 * Sekcja "Usługi" na stronie głównej — filar klastra tematycznego.
 *
 * Karty budują się z rejestru w data/services, więc strona główna linkuje
 * do każdej strony usługi, a nowa usługa pojawia się tu sama.
 */
export function Services() {
  return (
    <AnimatedSection className="bg-gradient-to-b from-[#1f1f1f] via-[#181818] to-[#292929] py-24 text-white">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/45">
              Fryzura, która pracuje na Twój wizerunek
            </p>

            <h2 className="max-w-3xl text-4xl font-black uppercase leading-tight md:text-6xl">
              Usługi fryzjerskie w Łodzi
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={SERVICES_PATH}
              className="w-fit rounded-full border border-white/15 px-6 py-3 text-sm font-black uppercase transition hover:bg-white hover:text-black"
            >
              Wszystkie usługi
            </Link>

            <Link
              href="/cennik"
              className="w-fit rounded-full border border-white/15 px-6 py-3 text-sm font-black uppercase transition hover:bg-white hover:text-black"
            >
              Zobacz cennik
            </Link>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.05] p-8 text-center backdrop-blur md:flex-row md:text-left">
          <div>
            <h3 className="text-2xl font-black uppercase leading-tight md:text-3xl">
              Wiesz już, czego szukasz?
            </h3>

            <p className="mt-3 max-w-xl text-white/65">
              Wybierz termin i stylistę w kalendarzu online. Rezerwacja
              zajmuje minutę i jest dostępna całą dobę.
            </p>
          </div>

          <BookingLink size="lg" className="shrink-0" />
        </div>
      </Container>
    </AnimatedSection>
  );
}
