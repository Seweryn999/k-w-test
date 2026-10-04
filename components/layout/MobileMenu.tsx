"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowDown } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { BOOKSY_URL, navigation } from "@/data/navigation";
import logo from "@/assets/images/logo.png";

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70";

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
    <div className="lg:hidden">
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

      {/*
        Portal do <body>: nagłówek ma `z-50` i `backdrop-blur`, więc tworzy
        własny kontekst stosu i staje się blokiem zawierającym dla `fixed`.
        Menu renderowane w nim miało wysokość nagłówka i przegrywało z paskiem
        rezerwacji (z-900) i dymkiem czatu (z-1000), które wystawały na dole.
        Z <body> menu przykrywa oba, więc widać tylko jego własny przycisk.
      */}
      {isOpen &&
        createPortal(
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu główne"
            className="fixed inset-0 z-[999999] isolate h-dvh overflow-y-auto overscroll-contain bg-black text-white lg:hidden"
          >
            <div aria-hidden className="absolute inset-0 z-0 bg-black" />

            {/* min-h-full + przewijany rodzic: na niskich ekranach menu się przewija. */}
            <div className="relative z-10 flex min-h-full flex-col bg-black">
              <div className="flex items-center justify-between border-b border-white/10 px-7 py-5">
                {/* To samo logo i rozmiar co w nagłówku — menu nie zmienia „marki" w rogu. */}
                <Link
                  href="/"
                  onClick={close}
                  className={`rounded ${FOCUS_RING}`}
                >
                  <Image
                    src={logo}
                    alt="Krystian Wojewoda Hair Design – strona główna"
                    width={72}
                    height={48}
                    className="h-auto w-[72px]"
                  />
                </Link>

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

              <div
                className="border-t border-white/10 px-7 pt-5"
                style={{
                  paddingBottom: "calc(2rem + env(safe-area-inset-bottom))",
                }}
              >
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
          </div>,
          document.body,
        )}
    </div>
  );
}
