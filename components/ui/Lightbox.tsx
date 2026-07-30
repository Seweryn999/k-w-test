"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import type { SalonPhoto } from "@/data/salon-gallery";

type LightboxProps = {
  photos: SalonPhoto[];
  /** Indeks otwartego zdjęcia albo null, gdy lightbox jest zamknięty. */
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function Lightbox({
  photos,
  index,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const reduce = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  /** Kafel, z którego otwarto lightbox — wraca do niego focus po zamknięciu. */
  const restoreFocusRef = useRef<HTMLElement | null>(null);

  const isOpen = index !== null;
  const count = photos.length;

  const goTo = useCallback(
    (next: number) => onIndexChange((next + count) % count),
    [count, onIndexChange],
  );

  // Zapamiętaj element, który miał focus przed otwarciem.
  useEffect(() => {
    if (isOpen) {
      restoreFocusRef.current = document.activeElement as HTMLElement | null;
      closeButtonRef.current?.focus();
    } else {
      restoreFocusRef.current?.focus?.();
    }
  }, [isOpen]);

  // Blokada scrolla body + kompensacja szerokości paska przewijania,
  // żeby strona pod spodem nie „skakała" w bok przy otwarciu.
  useEffect(() => {
    if (!isOpen) return;

    const { body, documentElement } = document;
    const scrollbar = window.innerWidth - documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPadding = body.style.paddingRight;

    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPadding;
    };
  }, [isOpen]);

  // Klawiatura: Esc zamyka, strzałki nawigują, Tab krąży wewnątrz dialogu.
  useEffect(() => {
    if (!isOpen || index === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goTo(index + 1);
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goTo(index - 1);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        "button:not([disabled])",
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, index, goTo, onClose]);

  const current = index === null ? null : photos[index];

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Galeria wnętrza salonu, zdjęcie ${(index ?? 0) + 1} z ${count}`}
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 backdrop-blur-xl sm:p-8"
          onClick={(event) => {
            // Kliknięcie w tło zamyka; kliknięcie w zdjęcie lub przycisk — nie.
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Zamknij galerię"
            className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-black/50 p-3 text-white/80 transition hover:border-white/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 sm:right-8 sm:top-8"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={() => goTo((index ?? 0) - 1)}
            aria-label="Poprzednie zdjęcie"
            className="absolute left-3 z-10 rounded-full border border-white/20 bg-black/50 p-3 text-white/80 transition hover:border-white/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 sm:left-8"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={() => goTo((index ?? 0) + 1)}
            aria-label="Następne zdjęcie"
            className="absolute right-3 z-10 rounded-full border border-white/20 bg-black/50 p-3 text-white/80 transition hover:border-white/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 sm:right-8"
          >
            <ChevronRight size={22} />
          </button>

          <figure className="relative flex max-h-full w-full max-w-6xl flex-col items-center gap-4">
            <div className="relative max-h-[76vh] w-full overflow-hidden rounded-2xl">
              <Image
                key={index}
                src={current.src}
                alt={current.alt}
                placeholder="blur"
                sizes="(min-width: 1280px) 1152px, 92vw"
                className="max-h-[76vh] w-full object-contain"
              />
            </div>

            <figcaption className="max-w-2xl text-center text-xs leading-5 text-white/55">
              {current.alt}
              <span className="mt-1 block tracking-[0.28em] text-white/35">
                {(index ?? 0) + 1} / {count}
              </span>
            </figcaption>
          </figure>

          {/*
            Sąsiednie kadry renderowane poza kadrem widoku — przeglądarka je pobiera,
            więc nawigacja strzałkami jest natychmiastowa. `display: none` nie zadziała,
            bo część przeglądarek pomija wtedy pobieranie.
          */}
          <div
            aria-hidden
            className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0"
          >
            {[(index ?? 0) - 1, (index ?? 0) + 1].map((neighbour) => {
              const photo = photos[(neighbour + count) % count];
              return (
                <Image
                  key={photo.src.src}
                  src={photo.src}
                  alt=""
                  sizes="(min-width: 1280px) 1152px, 92vw"
                />
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
