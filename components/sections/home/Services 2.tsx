import Link from "next/link";
import Image from "next/image";

import pic1 from "@/assets/images/pic1.png";
import pic2 from "@/assets/images/pic2.png";
import pic3 from "@/assets/images/pic3.png";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { BookingLink } from "@/components/ui/BookingLink";

const services = [
  {
    title: "Koloryzacja",
    description:
      "Naturalne odcienie, blondy, sombre, ombre i zaawansowane techniki koloryzacji.",
    image: pic2,
    alt: "Koloryzacja włosów w salonie fryzjerskim przy Piotrkowskiej w Łodzi",
  },
  {
    title: "Strzyżenie",
    description:
      "Dopasowane cięcia damskie, męskie i dziecięce z naciskiem na kształt oraz styl.",
    image: pic3,
    alt: "Strzyżenie damskie wykonywane przez stylistę w łódzkim salonie Krystian Wojewoda Hair Design",
  },
  {
    title: "Pielęgnacja",
    description:
      "Profesjonalna regeneracja, odbudowa i dobór kosmetyków do kondycji włosów.",
    image: pic1,
    alt: "Zabieg regeneracji i pielęgnacji włosów w salonie fryzjerskim w Łodzi",
  },
];

export function Services() {
  return (
    <AnimatedSection className="bg-gradient-to-b from-[#1f1f1f] via-[#181818] to-[#292929] py-24 text-white">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/45">
              Usługi
            </p>

            <h2 className="max-w-3xl text-4xl font-black uppercase leading-tight md:text-6xl">
              Fryzura, która pracuje na Twój wizerunek
            </h2>
          </div>

          <Link
            href="/cennik"
            className="w-fit rounded-full border border-white/15 px-6 py-3 text-sm font-black uppercase transition hover:bg-white hover:text-black"
          >
            Zobacz cennik
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative min-h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"
            >
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover opacity-70 transition duration-700 group-hover:scale-110 group-hover:opacity-90"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/45">
                  Hair Design
                </p>

                <h3 className="text-4xl font-black uppercase">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-sm text-white/65">
                  {service.description}
                </p>
              </div>
            </article>
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
