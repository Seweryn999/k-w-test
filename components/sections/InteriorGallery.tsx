"use client";

import { useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";

import { salonGallery } from "@/data/salon-gallery";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { Lightbox } from "@/components/ui/Lightbox";

const GALLERY_LABEL = "Wnętrze salonu Krystian Wojewoda Hair Design";

export function InteriorGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <AnimatedSection className="bg-gradient-to-b from-[#101010] via-[#1a1a1a] to-[#2f2f2f] py-24 text-white">
      <Container>
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/45">
              Wnętrze
            </p>

            <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">
              Cegła, drewno i dobre światło
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-white/68 lg:justify-self-end">
            Przestrzeń salonu projektowaliśmy tak, żeby dobrze się w niej
            pracowało i wygodnie siedziało. Surowa cegła, ciepłe drewno i
            światło, w którym kolor włosów wygląda tak samo jak na zewnątrz.
          </p>
        </div>

        {/*
          Jeden zestaw kafli w DOM: na mobile karuzela ze scroll-snapem
          (bez dublowania obrazków), od lg — asymetryczna siatka bento.
        */}
        <ul className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-4 lg:grid-rows-[200px_200px_170px_170px] lg:overflow-visible lg:px-0 lg:pb-0 xl:grid-rows-[240px_240px_200px_200px] [&::-webkit-scrollbar]:hidden">
          {salonGallery.map((photo, index) => (
            <li
              key={photo.id}
              className={`shrink-0 basis-[85%] snap-center lg:basis-auto ${photo.tile}`}
            >
              {/*
                Mobile: każdy slajd ma identyczne 4:3, żeby karuzela była równa —
                pionowe kadry pokazują pełną ramkę na desktopie i w lightboxie.
                Stała proporcja / stała wysokość wiersza siatki = zero CLS.
              */}
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={`Powiększ zdjęcie: ${photo.alt}`}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:aspect-auto lg:h-full"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading="lazy"
                  decoding="async"
                  sizes={photo.sizes}
                  className="object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70 transition group-hover:opacity-100 motion-reduce:transition-none" />

                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 backdrop-blur transition group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
                  <Expand size={15} />
                </span>
              </button>
            </li>
          ))}
        </ul>

        <p className="mt-5 text-sm text-white/40 lg:hidden">
          Przesuń w bok, aby zobaczyć kolejne zdjęcia.
        </p>
      </Container>

      {openIndex !== null && (
        <Lightbox
          photos={salonGallery}
          index={openIndex}
          label={GALLERY_LABEL}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      )}
    </AnimatedSection>
  );
}
