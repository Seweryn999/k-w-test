"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

import type { TeamBannerPhoto } from "@/data/team-gallery";

type ZespolHeroProps = {
  photos: TeamBannerPhoto[];
};

/** Co ile milisekund zmienia się kadr. */
const SLIDE_INTERVAL_MS = 5000;

/**
 * Po tylu milisekundach bez interakcji (ruch myszy, klik, dotyk, klawiatura)
 * auto-przewijanie wraca samo; następny kadr pojawia się SLIDE_INTERVAL_MS później.
 */
const IDLE_RESUME_MS = 3000;

/** Długość crossfade'u — ta sama wartość co w slideshow na stronie głównej. */
const SLIDE_FADE_S = 1.2;

/** Minimalne przesunięcie (px) albo prędkość (px/s), od której swipe zmienia kadr. */
const SWIPE_OFFSET_PX = 60;
const SWIPE_VELOCITY = 400;

/** Kontener ma szerokość `Container` (max-w-7xl minus padding boczny). */
const SIZES =
  "(min-width: 1280px) 1216px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)";

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

const CONTROL =
  "rounded-full border border-white/20 bg-black/50 text-white/80 backdrop-blur-xl transition hover:border-white/50 hover:text-white";

export function ZespolHero({ photos }: ZespolHeroProps) {
  const reduce = useReducedMotion();
  const count = photos.length;

  /*
    `index` wybiera kadr, a `key` rośnie przy każdej zmianie. Szybkie
    „wstecz → dalej" wraca do tego samego indeksu, zanim poprzedni kadr
    zdąży się wygasić — gdyby kluczem był indeks, AnimatePresence dostałby
    dwoje dzieci o tym samym kluczu.
  */
  const [slide, setSlide] = useState({ index: 0, key: 0 });
  /*
    Pauza trwa tylko w trakcie interakcji. Samo „bycie” kursora nad banerem
    albo focus zostawiony na strzałce po kliknięciu nie blokuje karuzeli na
    stałe — po IDLE_RESUME_MS bez żadnego zdarzenia przewijanie rusza dalej.
  */
  const [interacting, setInteracting] = useState(false);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  /** Ręczna pauza przyciskiem — zostaje, dopóki użytkownik jej nie zdejmie. */
  const [stopped, setStopped] = useState(false);

  const markInteraction = useCallback(() => {
    // Przy kolejnych zdarzeniach stan już jest `true`, więc React nie renderuje ponownie.
    setInteracting(true);
    clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(
      () => setInteracting(false),
      IDLE_RESUME_MS,
    );
  }, []);

  useEffect(() => () => clearTimeout(idleTimerRef.current), []);

  const paused = interacting || stopped;
  const autoplay = !reduce && !paused && count > 1;

  const goTo = useCallback(
    (next: number) =>
      setSlide((current) => ({
        index: (next + count) % count,
        key: current.key + 1,
      })),
    [count],
  );

  /*
    Timeout zamiast interwału, zależny od `slide.key`: każda ręczna zmiana
    kadru odlicza pełne 5 s od nowa, zamiast przeskoczyć chwilę po kliknięciu.
    Przy `prefers-reduced-motion` timer w ogóle nie startuje — zostaje
    pierwsze zdjęcie.
  */
  useEffect(() => {
    if (!autoplay) return;

    const timer = setTimeout(() => goTo(slide.index + 1), SLIDE_INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [autoplay, slide.key, slide.index, goTo]);

  if (count === 0) return null;

  const photo = photos[slide.index];
  const nextPhoto = photos[(slide.index + 1) % count];

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    markInteraction();

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(slide.index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(slide.index - 1);
    }
  };

  // Ruch myszy nad banerem to „hover” — pauzuje, dopóki kursor się rusza.
  // Na dotyku interakcję łapie `pointerdown` (tap, początek swipe'a).
  const onPointerMove = (event: PointerEvent) => {
    if (event.pointerType === "mouse") markInteraction();
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_OFFSET_PX || info.velocity.x < -SWIPE_VELOCITY) {
      goTo(slide.index + 1);
    } else if (
      info.offset.x > SWIPE_OFFSET_PX ||
      info.velocity.x > SWIPE_VELOCITY
    ) {
      goTo(slide.index - 1);
    }
  };

  return (
    <section
      role="region"
      aria-roledescription="karuzela"
      aria-label="Zdjęcia zespołu salonu"
      onKeyDown={onKeyDown}
      onPointerMove={onPointerMove}
      onPointerDown={markInteraction}
      onFocus={markInteraction}
      className="relative mb-16 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b] shadow-2xl shadow-black/50 md:mb-24"
    >
      {/*
        aria-live: przy automatycznym przewijaniu wyłączone, żeby czytnik nie
        ogłaszał nowego kadru co 5 s; po pauzie — ogłasza ręczne zmiany.
      */}
      <div
        aria-live={autoplay ? "off" : "polite"}
        className="relative aspect-[4/3] w-full sm:aspect-[16/9]"
      >
        {/*
          Tak jak w Hero: zamontowany jest tylko bieżący kadr, a AnimatePresence
          trzyma poprzedni przez czas wygaszania — crossfade zamiast przeskoku.
          `drag="x"` daje swipe na dotyku (framer ustawia `touch-action: pan-y`,
          więc pionowe przewijanie strony dalej działa); kadr nie jedzie za
          palcem, bo przejście jest crossfade'em, nie slajdem.
        */}
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.key}
            role="group"
            aria-roledescription="slajd"
            aria-label={`${slide.index + 1} z ${count}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: reduce ? 0 : SLIDE_FADE_S,
              ease: "easeInOut",
            }}
            drag={count > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            dragSnapToOrigin
            onDragEnd={onDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            {/*
              Pierwszy kadr to element LCP strony. W Next 16 `priority` jest
              zdeprecjonowane na rzecz `preload` — tylko dla pierwszego renderu,
              żeby po zapętleniu nie wstrzykiwać ponownie <link rel="preload">.
              Kolejne kadry: domyślne `loading="lazy"`.
            */}
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              preload={slide.key === 0}
              placeholder="blur"
              sizes={SIZES}
              draggable={false}
              className="pointer-events-none select-none object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/*
          Następny kadr renderowany poza widokiem (jak w Lightboxie), żeby był
          już pobrany, gdy przyjdzie jego kolej — bez czarnego mignięcia w
          połowie crossfade'u. `display: none` nie zadziała, bo część
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
              sizes={SIZES}
              loading="lazy"
            />
          </div>
        )}

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
        />
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(slide.index - 1)}
            aria-label="Poprzednie zdjęcie"
            className={`absolute left-3 top-1/2 z-10 -translate-y-1/2 p-2.5 sm:left-6 sm:p-3 ${CONTROL} ${FOCUS_RING}`}
          >
            <ChevronLeft size={22} aria-hidden />
          </button>

          <button
            type="button"
            onClick={() => goTo(slide.index + 1)}
            aria-label="Następne zdjęcie"
            className={`absolute right-3 top-1/2 z-10 -translate-y-1/2 p-2.5 sm:right-6 sm:p-3 ${CONTROL} ${FOCUS_RING}`}
          >
            <ChevronRight size={22} aria-hidden />
          </button>

          <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between gap-4 px-4 pb-4 sm:px-6 sm:pb-6">
            <div
              role="group"
              aria-label="Wybierz zdjęcie"
              className="flex items-center gap-1"
            >
              {photos.map((item, dot) => {
                const active = dot === slide.index;

                return (
                  <button
                    key={item.src.src}
                    type="button"
                    onClick={() => goTo(dot)}
                    aria-label={`Pokaż zdjęcie ${dot + 1} z ${count}`}
                    aria-current={active ? "true" : undefined}
                    className={`group flex h-8 items-center px-1 ${FOCUS_RING} rounded-full`}
                  >
                    <span
                      aria-hidden
                      className={`block h-1.5 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                        active
                          ? "w-8 bg-white"
                          : "w-1.5 bg-white/40 group-hover:bg-white/70"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {!reduce && (
              <button
                type="button"
                onClick={() => setStopped((current) => !current)}
                aria-label={
                  stopped
                    ? "Wznów automatyczne przewijanie"
                    : "Zatrzymaj automatyczne przewijanie"
                }
                aria-pressed={stopped}
                className={`p-2.5 ${CONTROL} ${FOCUS_RING}`}
              >
                {stopped ? (
                  <Play size={16} aria-hidden />
                ) : (
                  <Pause size={16} aria-hidden />
                )}
              </button>
            )}
          </div>
        </>
      )}
    </section>
  );
}
