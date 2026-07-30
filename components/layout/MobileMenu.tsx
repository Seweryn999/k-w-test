"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowDown } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { BOOKSY_URL, navigation } from "@/data/navigation";

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70";

/** Wspólna typografia dla wszystkich pozycji menu — podstron i sekcji. */
const NAV_ITEM =
  "flex items-center justify-between gap-4 border-b border-white/10 py-5 text-3xl font-black uppercase leading-none transition hover:text-white/70";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setIsOpen(false), []);

  // Blokada scrolla body + kompensacja paska przewijania, żeby strona
  // pod menu nie przeskakiwała w bok przy otwarciu.
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

  // Esc zamyka menu; po zamknięciu focus wraca na hamburger.
  useEffect(() => {
    if (!isOpen) {
      openButtonRef.current?.focus?.();
      return;
    }

    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  /**
   * Na stronie głównej przewijamy ręcznie — natywna nawigacja do #opinie
   * potrafi nie zadziałać, bo w tej samej klatce zdejmowana jest blokada
   * scrolla z body. Z podstron wracamy przez router.
   */
  const goToOpinie = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    close();

    if (pathname !== "/") {
      router.push("/#opinie");
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    requestAnimationFrame(() => {
      document.getElementById("opinie")?.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  };

  return (
    <div className="md:hidden">
      <button
        ref={openButtonRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Otwórz menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className={`relative z-[100000] rounded-full p-1 text-white ${FOCUS_RING}`}
      >
        <Menu size={28} aria-hidden />
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu główne"
          className="fixed inset-0 z-[999999] isolate bg-black text-white"
        >
          <div aria-hidden className="absolute inset-0 z-0 bg-black" />

          <div className="relative z-10 flex min-h-dvh flex-col bg-black">
            <div className="flex items-center justify-between border-b border-white/10 px-7 py-5">
              <div className="flex h-11 w-11 items-center justify-center border border-white/40 text-sm font-bold tracking-[0.25em]">
                KW
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={close}
                aria-label="Zamknij menu"
                className={`rounded-full p-1 text-white ${FOCUS_RING}`}
              >
                <X size={30} aria-hidden />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center px-7">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className={`${NAV_ITEM} ${FOCUS_RING}`}
                >
                  {item.label}
                </Link>
              ))}

              {/*
                Opinie to sekcja strony głównej, nie podstrona — ta sama
                typografia co reszta, ale strzałka w dół sygnalizuje, że
                link przewija, a nie przenosi na nowy adres.
              */}
              <Link
                href="/#opinie"
                onClick={goToOpinie}
                className={`${NAV_ITEM} text-white/75 ${FOCUS_RING}`}
              >
                Opinie
                <ArrowDown
                  size={20}
                  aria-hidden
                  className="shrink-0 text-white/35"
                />
              </Link>
            </nav>

            <div className="border-t border-white/10 px-7 pb-8 pt-5">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className={`flex h-14 w-full items-center justify-center rounded-full bg-white text-sm font-bold uppercase tracking-[0.25em] text-black transition hover:bg-white/90 ${FOCUS_RING}`}
              >
                Umów wizytę
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
