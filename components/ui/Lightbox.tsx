"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type LightboxPhoto = {
  src: string;
  alt: string;
};

type LightboxProps = {
  photos: LightboxPhoto[];
  index: number;
  label: string;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

const FOCUSABLE = "button, [href], [tabindex]:not([tabindex='-1'])";

export function Lightbox({
  photos,
  index,
  label,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const photo = photos[index];

  const showPrevious = useCallback(() => {
    onIndexChange((index - 1 + photos.length) % photos.length);
  }, [index, photos.length, onIndexChange]);

  const showNext = useCallback(() => {
    onIndexChange((index + 1) % photos.length);
  }, [index, photos.length, onIndexChange]);

  // Trzymamy w DOM sąsiadów bieżącego zdjęcia (opacity-0, ale realnie pobierane),
  // dzięki czemu nawigacja strzałkami jest natychmiastowa.
  const mounted = useMemo(() => {
    const total = photos.length;

    return Array.from(
      new Set([(index - 1 + total) % total, index, (index + 1) % total]),
    );
  }, [index, photos.length]);

  // Blokada scrolla body — z kompensacją szerokości paska przewijania,
  // żeby treść pod overlayem nie przeskakiwała.
  useEffect(() => {
    const { overflow, paddingRight } = document.body.style;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, []);

  // Focus na przycisk zamknięcia po otwarciu, powrót do kafla po zamknięciu.
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;

    closeButtonRef.current?.focus();

    return () => previouslyFocused?.focus?.();
  }, []);

  // Esc, strzałki i pułapka na focus (Tab / Shift+Tab nie wychodzi poza dialog).
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);

      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || !dialogRef.current?.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, showPrevious, showNext]);

  // Zamykamy tylko przy kliknięciu w tło — klik w samo zdjęcie ma być bezpieczny.
  const closeOnBackdrop = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${label} — zdjęcie ${index + 1} z ${photos.length}`}
      onClick={closeOnBackdrop}
      className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm"
    >
      <div className="flex shrink-0 items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-white/45">
          {index + 1} / {photos.length}
        </p>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Zamknij powiększenie zdjęcia"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <X size={20} />
        </button>
      </div>

      <div
        onClick={closeOnBackdrop}
        className="relative flex min-h-0 flex-1 items-center justify-center px-3 pb-3 sm:px-8 sm:pb-8"
      >
        <div className="relative h-full w-full max-w-6xl">
          {mounted.map((position) => (
            <Image
              key={photos[position].src}
              src={photos[position].src}
              alt={position === index ? photos[position].alt : ""}
              aria-hidden={position !== index}
              fill
              loading="eager"
              decoding="async"
              sizes="(min-width: 1024px) 90vw, 100vw"
              className={`object-contain transition-opacity duration-200 motion-reduce:transition-none ${
                position === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-center gap-4 px-5 pb-6 sm:pb-8">
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Poprzednie zdjęcie"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ChevronLeft size={22} />
        </button>

        <p className="max-w-md text-center text-sm leading-6 text-white/55">
          {photo.alt}
        </p>

        <button
          type="button"
          onClick={showNext}
          aria-label="Następne zdjęcie"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>,
    document.body,
  );
}
