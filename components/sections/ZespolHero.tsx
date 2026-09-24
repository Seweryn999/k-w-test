"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import type { TeamBannerPhoto } from "@/data/team-gallery";
import { SLIDE_EASE, SLIDE_FADE_S, SLIDE_INTERVAL_MS } from "@/lib/slideshow";

type ZespolHeroProps = {
  photos: TeamBannerPhoto[];
  /** Duży napis na zdjęciach. Pominięty — baner zostaje bez nakładki z tekstem. */
  title?: string;
  /** Mniejszy nadtytuł nad `title`. Bez `title` nie jest pokazywany. */
  eyebrow?: string;
};

/**
 * Wysokość banera dopasowana do zdjęć zespołu (poziome, ok. 3:2), a nie do
 * ekranu — przy `object-cover` każdy nadmiar wysokości lub szerokości to
 * odcięty kawałek grupy.
 *
 * - telefon (< sm): 5:4 (`80vw`). Pełny ekran w pionie zostawiał ~1/3
 *   szerokości zdjęcia, więc skrajne osoby wypadały z kadru; przy 5:4 widać
 *   ~83% szerokości, a w pionie nic nie jest ucinane.
 * - sm+: tyle, ile zdjęcie ma przy pełnej szerokości (`66.67vw` = 3:2), ale
 *   nie więcej niż okno pod headerem (svh, bo na mobile pasek adresu chowa
 *   się i wraca). Na ekranach szerszych niż 3:2 zostaje przycięcie z góry
 *   i z dołu — tym steruje `position` przy każdym zdjęciu.
 */
const HERO_HEIGHT = "h-[80vw] sm:h-[min(calc(100svh-80px),66.67vw)]";

/** Punkt kadru dla zdjęć bez własnego `position` — bliżej góry, bo tam są głowy. */
const DEFAULT_POSITION = "50% 20%";

/**
 * Baner na pełną szerokość na /zespol/ — bliźniak slideshow'u w tle Hero na stronie
 * głównej: ten sam crossfade, ten sam interwał i easing (wszystkie trzy
 * z `lib/slideshow`), ta sama konstrukcja na AnimatePresence, ten sam licznik
 * z modulo.
 *
 * Kadry zmieniają się wyłącznie samoistnie — żadnych strzałek, kropek, pauzy
 * ani swipe'a, dokładnie jak na stronie głównej. Z tego samego powodu nie ma
 * tu `aria-live` ani ról karuzeli: nie ma czym sterować, więc nie ma czego
 * ogłaszać.
 */
export function ZespolHero({ photos, title, eyebrow }: ZespolHeroProps) {
  const reduce = useReducedMotion();
  const count = photos.length;

  /*
    Licznik rośnie w nieskończoność, a kadr wybieramy dopiero przez modulo —
    tak samo jak w Hero. Dzięki temu `key` nigdy się nie powtarza, także po
    zapętleniu galerii, więc AnimatePresence nie dostanie dwóch dzieci
    o tym samym kluczu.
  */
  const [tick, setTick] = useState(0);

  /*
    Przy `prefers-reduced-motion` w ogóle nie zakładamy interwału — zostaje
    pierwszy kadr. Przy jednym zdjęciu nie ma czego przewijać. Zwracany
    cleanup kasuje timer przy odmontowaniu, więc nie zostaje wiszący interwał.
  */
  useEffect(() => {
    if (reduce || count < 2) return;

    const timer = setInterval(
      () => setTick((current) => current + 1),
      SLIDE_INTERVAL_MS,
    );

    return () => clearInterval(timer);
  }, [reduce, count]);

  if (count === 0) return null;

  const photo = photos[tick % count];
  const nextPhoto = photos[(tick + 1) % count];

  return (
    <section
      className={`relative mt-20 ${HERO_HEIGHT} w-full overflow-hidden bg-black text-white`}
    >
      {/* Fallback pod obrazem — zapobiega białemu błyskowi przed dekodowaniem. */}
      <div aria-hidden className="absolute inset-0 bg-black" />

      {/*
        Jak w Hero: zamontowany jest tylko bieżący kadr, a AnimatePresence
        trzyma poprzedni przez czas wygaszania — crossfade zamiast przeskoku.

        Pierwsze zdjęcie to element LCP strony. W Next 16 `priority` jest
        zdeprecjonowane na rzecz `preload`, które wstrzykuje <link rel="preload">
        i samo ustawia fetchPriority="high" — tylko dla pierwszego renderu, żeby
        po zapętleniu nie wstrzykiwać go ponownie. `placeholder="blur"` działa,
        bo wszystkie `src` to importy statyczne.
      */}
      <AnimatePresence initial={false}>
        <motion.div
          key={tick}
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: reduce ? 0 : SLIDE_FADE_S,
            ease: SLIDE_EASE,
          }}
          className="absolute inset-0"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            preload={tick === 0}
            placeholder="blur"
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: photo.position ?? DEFAULT_POSITION }}
          />
        </motion.div>
      </AnimatePresence>

      {/*
        Następny kadr renderowany poza widokiem, żeby był już pobrany, gdy
        przyjdzie jego kolej — bez czarnego mignięcia w połowie crossfade'u.
        Na pełnym ekranie zdjęcie waży więcej niż w dawnym małym banerze, więc
        tym bardziej się przydaje. `display: none` nie zadziała, bo część
        przeglądarek pomija wtedy pobieranie.
      */}
      {count > 1 && (
        <div
          aria-hidden
          className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0"
        >
          <Image
            key={nextPhoto.src.src}
            src={nextPhoto.src}
            alt=""
            sizes="100vw"
            loading="lazy"
          />
        </div>
      )}

      {/*
        Przyciemnienia, każde tam, gdzie jest potrzebne:
        1) górny cień — żeby menu było czytelne na jasnej części kadru,
        2) dolna połowa — zlanie z czarną sekcją kart zespołu poniżej,
        3) plama pod napisem — zdjęcia zespołu są jasne (białe studio),
           więc sam cień tekstu by nie wystarczył.
      */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent"
      />

      {title && (
        /*
          Napis w dolnej części banera, nie na środku: twarze są w górnej
          połowie kadru (tam go przesuwa `position`), a dół i tak ściemnia
          gradient — tekst leży na nogach i podestach, nie na twarzach.
        */
        <div className="absolute inset-0 flex items-end justify-center px-6 pb-4 text-center sm:px-10 sm:pb-[5%]">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_85%,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.25)_55%,rgba(0,0,0,0)_100%)]"
          />

          {/*
            Napis jest akapitem, nie nagłówkiem, celowo: niżej na stronie stoi
            H1 („Ludzie, którzy tworzą styl”). Drugi H1 albo H2 postawiony przed
            H1 rozjechałby konspekt nagłówków.
          */}
          <div className="relative max-w-4xl">
            {eyebrow && (
              <p className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-white/70 [text-shadow:0_1px_12px_rgba(0,0,0,0.7)] sm:mb-7 sm:text-xs sm:tracking-[0.6em]">
                {eyebrow}
              </p>
            )}

            <p className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] [text-shadow:0_2px_30px_rgba(0,0,0,0.6)] sm:text-6xl lg:text-7xl xl:text-8xl">
              {title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
