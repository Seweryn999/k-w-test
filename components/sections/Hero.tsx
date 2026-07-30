"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, ArrowUpRight, MapPin } from "lucide-react";

import logo from "@/assets/images/logo.png";
import { heroPhoto } from "@/data/salon-gallery";
import { BOOKSY_URL } from "@/data/navigation";

/** Wysokość sticky headera — svh zamiast vh, bo na mobile pasek adresu chowa się i wraca. */
const HERO_HEIGHT = "min-h-[calc(100svh-80px)]";

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className={`relative mt-20 ${HERO_HEIGHT} w-full overflow-hidden bg-black text-white`}
    >
      {/* Fallback pod obrazem — zapobiega białemu błyskowi przed dekodowaniem. */}
      <div aria-hidden className="absolute inset-0 bg-black" />

      {/*
        Obraz LCP. W Next 16 `priority` jest zdeprecjonowane na rzecz `preload`,
        które wstrzykuje <link rel="preload"> do <head>. `preload` samo ustawia
        fetchPriority="high" — nie dublujemy go osobnym propem.
        `placeholder="blur"` działa, bo `heroPhoto.src` to import statyczny.
      */}
      <Image
        src={heroPhoto.src}
        alt={heroPhoto.alt}
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        className="object-cover object-[center_45%] opacity-80"
      />

      {/*
        Trzy warstwy przyciemnienia zamiast jednego globalnego zaciemnienia zdjęcia:
        1) poziomo — pod H1 i lidem po lewej,
        2) pionowo — pod dolnym paskiem z adresem,
        3) górny cień — żeby menu było czytelne na jasnej części kadru.
        Prawa strona zostaje najjaśniejsza, bo kafle mają własne tło i backdrop-blur.
      */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-black via-black/72 to-black/25"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/75 to-transparent"
      />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 0.8 }}
        className={`relative z-10 mx-auto flex ${HERO_HEIGHT} max-w-[1500px] flex-col justify-end px-4 pb-8 pt-10 sm:px-6 lg:px-8`}
      >
        <div className="grid gap-10 pb-28 lg:grid-cols-[1fr_430px] lg:items-end">
          <div>
            <div className="mb-7 flex w-fit max-w-full items-center gap-4 rounded-full border border-white/20 bg-white/[0.12] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-2xl">
              {/*
                Bez `preload` — logo ma 38px i konkurowałoby w <head> o pasmo
                ze zdjęciem hero, które jest właściwym elementem LCP.
              */}
              <Image
                src={logo}
                alt="Krystian Wojewoda Hair Design"
                width={38}
                height={38}
                loading="eager"
              />

              <span className="text-xs uppercase tracking-[0.28em] text-white/75">
                Łódź · Ogrody Geyera
              </span>
            </div>

            <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] [text-shadow:0_2px_30px_rgba(0,0,0,0.55)] sm:text-7xl lg:text-8xl xl:text-[6.6rem]">
              Krystian
              <br />
              Wojewoda
              <br />
              Hair Design
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/80 [text-shadow:0_1px_16px_rgba(0,0,0,0.6)] sm:text-lg">
              Nowoczesne koloryzacje, precyzyjne strzyżenia i metamorfozy
              wykonywane przez doświadczony zespół w Łodzi.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full border border-white/25 bg-white/[0.15] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.26),0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition hover:bg-white hover:text-black ${FOCUS_RING}`}
              >
                Umów wizytę
              </a>

              <Link
                href="/cennik"
                className={`rounded-full border border-white/20 bg-black/35 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl transition hover:bg-white/15 ${FOCUS_RING}`}
              >
                Zobacz cennik
              </Link>
            </div>
          </div>

          <div className="grid gap-3">
            <Link
              href="/#opinie"
              className={`flex h-[82px] items-center justify-between gap-5 rounded-[1.35rem] border border-sky-400/30 bg-gradient-to-br from-sky-400/20 to-sky-500/5 px-6 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl transition hover:border-sky-400/60 hover:from-sky-400/30 ${FOCUS_RING}`}
            >
              <p className="whitespace-nowrap text-[2rem] font-black leading-none tracking-[-0.05em]">
                300+
              </p>

              <p className="max-w-[135px] text-right text-xs leading-5 text-white/65">
                pozytywnych opinii klientów
              </p>
            </Link>

            <div className="flex h-[82px] items-center justify-between gap-5 rounded-[1.35rem] border border-sky-400/30 bg-gradient-to-br from-sky-400/20 to-sky-500/5 px-6 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl">
              <p className="whitespace-nowrap text-[2rem] font-black leading-none tracking-[-0.06em]">
                1996
              </p>

              <p className="max-w-[135px] text-right text-xs leading-5 text-white/65">
                rok założenia salonu
              </p>
            </div>

            <a
              href="tel:+48730796861"
              className={`group flex h-[82px] items-center justify-between gap-5 rounded-[1.35rem] border border-sky-400/30 bg-gradient-to-br from-sky-400/20 to-sky-500/5 px-6 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl transition hover:border-sky-400/60 hover:from-sky-400/30 ${FOCUS_RING}`}
            >
              <div>
                <p className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.14em] text-white/50">
                  <Phone size={13} aria-hidden />
                  Telefon
                </p>

                <p className="mt-2 whitespace-nowrap text-[1.65rem] font-black leading-none tracking-[-0.04em]">
                  +48 730 796 861
                </p>
              </div>

              <p className="flex shrink-0 items-center gap-1 text-xs text-white/65 transition group-hover:text-white">
                Zadzwoń
                <ArrowUpRight size={13} aria-hidden />
              </p>
            </a>
          </div>
        </div>

        <div className="hidden rounded-[1.5rem] border border-white/12 bg-black/40 p-5 backdrop-blur-2xl md:flex md:items-center md:justify-between">
          <p className="flex items-center gap-2 text-sm font-bold text-white/80">
            <MapPin size={16} aria-hidden />
            Piotrkowska 293/305, Łódź
          </p>

          <p className="text-sm text-white/55">
            Koloryzacja · strzyżenie · pielęgnacja · metamorfozy
          </p>
        </div>
      </motion.div>
    </section>
  );
}
