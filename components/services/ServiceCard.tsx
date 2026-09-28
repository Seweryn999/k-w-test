import Image from "next/image";
import Link from "next/link";

import {
  serviceFromLabel,
  servicePath,
  type Service,
} from "@/data/services";

/**
 * Karta usługi prowadząca na /uslugi/<slug>/. Jedna i ta sama na stronie
 * głównej, na /uslugi i w "powiązanych usługach" — cały klaster linkuje się
 * tym samym komponentem, więc anchor text (nazwa usługi) jest wszędzie spójny.
 */
export function ServiceCard({
  service,
  headingLevel = "h3",
}: {
  service: Service;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;

  return (
    <Link
      href={servicePath(service.slug)}
      className="group relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
    >
      <Image
        src={service.image}
        alt={service.imageAlt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-80"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />

      <div className="relative p-7">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-white/50">
          {serviceFromLabel(service)}
        </p>

        <Heading className="text-2xl font-black uppercase leading-tight md:text-3xl">
          {service.name}
        </Heading>

        <p className="mt-3 max-w-sm text-white/65">{service.cardDescription}</p>

        <span className="mt-5 inline-block text-xs font-black uppercase tracking-[0.3em] text-white/70 transition group-hover:text-white">
          Szczegóły i ceny →
        </span>
      </div>
    </Link>
  );
}
