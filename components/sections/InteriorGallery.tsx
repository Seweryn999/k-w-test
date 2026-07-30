"use client";

import { useState } from "react";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Lightbox } from "@/components/ui/Lightbox";
import { galleryPhotos } from "@/data/salon-gallery";

export function InteriorGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="wnetrze"
      className="bg-gradient-to-b from-[#101010] via-[#1a1a1a] to-[#2f2f2f] py-24"
    >
      <AnimatedSection>
        <Container>
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/45">
            Wnętrze
          </p>

          <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">
            Zobacz, gdzie usiądziesz
          </h2>

          <p className="mb-14 mt-6 max-w-2xl text-lg leading-8 text-white/68">
            Fotele przy blacie z litego drewna, osobna strefa myjni, poczekalnia
            z pełną ekspozycją kosmetyków.
          </p>

          {/*
            Jeden zestaw kafli, dwa układy. Poniżej lg to przewijany w poziomie
            pasek ze snapem; od lg kontener staje się siatką bento 4×3,
            a klasy `span` z danych rozstawiają kafle.
          */}
          <div
            className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-4 lg:grid-rows-[11rem_11rem_13rem] lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
            role="list"
          >
            {galleryPhotos.map((photo, index) => (
              <button
                key={photo.src.src}
                type="button"
                role="listitem"
                onClick={() => setOpenIndex(index)}
                aria-label={`Powiększ zdjęcie: ${photo.alt}`}
                className={`group relative aspect-[4/5] w-[85%] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 lg:aspect-auto lg:h-full lg:w-auto lg:shrink ${photo.span}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading="lazy"
                  placeholder="blur"
                  sizes={photo.sizes}
                  className="object-cover transition duration-500 motion-reduce:transition-none group-hover:scale-[1.04]"
                />

                {/* Delikatne przyciemnienie dołu — spójne z resztą strony. */}
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70 transition group-hover:opacity-40"
                />
              </button>
            ))}
          </div>

          <p className="mt-5 text-xs uppercase tracking-[0.28em] text-white/35 lg:hidden">
            Przesuń, aby zobaczyć więcej
          </p>
        </Container>
      </AnimatedSection>

      <Lightbox
        photos={galleryPhotos}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
    </section>
  );
}
