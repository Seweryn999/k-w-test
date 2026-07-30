"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Scissors,
  HeartHandshake,
  Award,
  Quote,
  Star,
  PhoneCall,
  CalendarCheck,
  Wand2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import pic1 from "@/assets/images/pic1.png";
import pic2 from "@/assets/images/pic2.png";
import pic3 from "@/assets/images/pic3.png";
import background from "@/assets/images/background.png";

import krystian from "@/assets/images/krystian.png";
import mariola from "@/assets/images/mariola.png";
import aneta from "@/assets/images/aneta.png";
import ania from "@/assets/images/ania.png";
import monika from "@/assets/images/monika.png";
import marta from "@/assets/images/marta.png";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";

const services = [
  {
    title: "Koloryzacja",
    description:
      "Naturalne odcienie, blondy, sombre, ombre i zaawansowane techniki koloryzacji.",
    image: pic2,
  },
  {
    title: "Strzyżenie",
    description:
      "Dopasowane cięcia damskie, męskie i dziecięce z naciskiem na kształt oraz styl.",
    image: pic3,
  },
  {
    title: "Pielęgnacja",
    description:
      "Profesjonalna regeneracja, odbudowa i dobór kosmetyków do kondycji włosów.",
    image: pic1,
  },
];

const process = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Umawiasz wizytę",
    description:
      "Telefonicznie lub przez Instagram wybierasz termin i stylistę, z którym chcesz pracować.",
  },
  {
    number: "02",
    icon: HeartHandshake,
    title: "Konsultacja",
    description:
      "Rozmawiamy o oczekiwaniach, stanie włosów i dopasowujemy plan działania do Twojego stylu życia.",
  },
  {
    number: "03",
    icon: Wand2,
    title: "Metamorfoza",
    description:
      "Koloryzacja, strzyżenie i stylizacja wykonywane technikami, które dają trwały, naturalny efekt.",
  },
  {
    number: "04",
    icon: CalendarCheck,
    title: "Opieka po wizycie",
    description:
      "Dobieramy pielęgnację domową i umawiamy kolejny termin, by efekt utrzymał się jak najdłużej.",
  },
];

const features = [
  {
    icon: Award,
    title: "30 lat doświadczenia",
    description:
      "Marka obecna na łódzkim rynku fryzjerskim od 1996 roku — sprawdzony zespół, sprawdzone techniki.",
  },
  {
    icon: Sparkles,
    title: "Premium kosmetyki",
    description:
      "Pracujemy na profesjonalnych markach kolorystycznych i pielęgnacyjnych dobieranych do kondycji włosów.",
  },
  {
    icon: Scissors,
    title: "Indywidualne podejście",
    description:
      "Każda fryzura projektowana jest pod kształt twarzy, strukturę włosa i codzienne potrzeby klientki.",
  },
  {
    icon: HeartHandshake,
    title: "Stała opieka",
    description:
      "Wracasz do tego samego stylisty, który znają historię Twoich włosów i dba o ich kondycję długofalowo.",
  },
];

const team = [
  {
    name: "Krystian Wojewoda",
    role: "Stylista / Fryzjer",
    image: krystian,
    slug: "krystian-wojewoda",
  },
  {
    name: "Mariola Śnieg",
    role: "Technik koloryzacji",
    image: mariola,
    slug: "mariola-snieg",
  },
  { name: "Aneta", role: "Starsza stylistka", image: aneta, slug: "aneta" },
  { name: "Ania", role: "Starsza stylistka", image: ania, slug: "ania" },
  { name: "Monika", role: "Starsza stylistka", image: monika, slug: "monika" },
  { name: "Marta", role: "Manager / Recepcja", image: marta, slug: "marta" },
];

const testimonials = [
  {
    name: "Agnieszka",
    source: "Booksy",
    text: "Przepięknie zrobiony kolor blond. Wygląda bardzo naturalnie, czyli tak jak mi zależało. To już trzecia wizyta i jestem bardzo zadowolona.",
  },
  {
    name: "Marta",
    source: "Booksy",
    text: "Bardzo fajna fryzura. Syn jest b.zadowolony.",
  },
  {
    name: "Paulina",
    source: "Booksy",
    text: "Polecam Panią Anetkę.",
  },
  {
    name: "Magdalena",
    source: "Booksy",
    text: "Jak zawsze wszystko super!",
  },
  {
    name: "Agata",
    source: "Booksy",
    text: "Cięcie u Ani jak zawsze PETARDA.",
  },
  {
    name: "Marta",
    source: "Booksy",
    text: "Kolejny raz skorzystałam z usług Julki. Jak zawsze pełen profesjonalizm i efekty lepsze od oczekiwanych. Polecam w 100%.",
  },
];

const pricingHighlights = [
  { service: "Strzyżenie damskie", price: "od 190 zł" },
  { service: "Balayage / Sombre / Ombre + strzyżenie", price: "od 460 zł" },
  { service: "Pasemka + strzyżenie", price: "od 360 zł" },
  { service: "Strzyżenie męskie", price: "od 120 zł" },
];

const blogPosts = [
  {
    title: "Kosmetyki do pielęgnacji zniszczonych włosów – lista must have",
    date: "7 marca, 2022",
    category: "Trendy",
    image: pic1,
  },
  {
    title: "Jak dbać o skórę głowy",
    date: "7 marca, 2022",
    category: "Trendy",
    image: pic2,
  },
  {
    title: "Jaka fryzura pasuje do mojej twarzy?",
    date: "27 grudnia, 2021",
    category: "Trendy",
    image: pic3,
  },
];

export function HomeContent() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  const showPreviousTestimonial = () => {
    setTestimonialIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const showNextTestimonial = () => {
    setTestimonialIndex((current) => (current + 1) % testimonials.length);
  };

  useEffect(() => {
    if (isCarouselPaused) return;

    const interval = setInterval(() => {
      setTestimonialIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isCarouselPaused]);

  const getTestimonialOffset = (index: number) => {
    const total = testimonials.length;
    let diff = index - testimonialIndex;

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    return diff;
  };

  return (
    <>
      <AnimatedSection className="bg-gradient-to-b from-[#3a3a3a] via-[#1f1f1f] to-[#101010] py-24 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/45">
                O salonie
              </p>

              <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">
                Miejsce dla ludzi, którzy chcą wyglądać konkretnie
              </h2>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur">
              <p className="text-lg leading-8 text-white/68">
                Krystian Wojewoda Hair Design to salon fryzjerski w Łodzi
                specjalizujący się w koloryzacji, strzyżeniu, modelowaniu i
                pielęgnacji włosów. Zamiast przypadkowych usług stawiamy na
                dopasowanie fryzury do osoby, stylu życia i charakteru.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-sky-400/30 bg-gradient-to-br from-sky-400/20 to-sky-500/5 p-5">
                  <p className="text-3xl font-black">3657</p>
                  <p className="mt-2 text-sm text-white/50">opinii na Booksy</p>
                </div>

                <div className="rounded-2xl border border-sky-400/30 bg-gradient-to-br from-sky-400/20 to-sky-500/5 p-5">
                  <p className="text-3xl font-black">5.0</p>
                  <p className="mt-2 text-sm text-white/50">
                    średnia ocena Booksy
                  </p>
                </div>

                <div className="rounded-2xl border border-sky-400/30 bg-gradient-to-br from-sky-400/20 to-sky-500/5 p-5">
                  <p className="text-3xl font-black">Łódź</p>
                  <p className="mt-2 text-sm text-white/50">Ogrody Geyera</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="bg-gradient-to-b from-[#101010] via-[#161616] to-[#1f1f1f] py-24 text-white">
        <Container>
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/45">
              Jak to wygląda
            </p>

            <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">
              Od telefonu do nowej fryzury
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="group relative overflow-hidden rounded-3xl border border-sky-400/30 bg-gradient-to-br from-sky-400/20 to-sky-500/5 p-7 transition duration-300 hover:border-sky-400/60 hover:from-sky-400/30"
              >
                <span className="absolute -right-2 -top-6 text-7xl font-black text-sky-300/10 transition group-hover:text-sky-300/20">
                  {step.number}
                </span>

                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
                  <step.icon className="h-6 w-6" />
                </div>

                <h3 className="relative z-10 mt-6 text-xl font-black uppercase">
                  {step.title}
                </h3>

                <p className="relative z-10 mt-3 text-sm leading-6 text-white/65">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="bg-gradient-to-b from-[#1f1f1f] via-[#181818] to-[#292929] py-24 text-white">
        <Container>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/45">
                Usługi
              </p>

              <h2 className="max-w-3xl text-4xl font-black uppercase leading-tight md:text-6xl">
                Fryzura, która pracuje na Twój wizerunek
              </h2>
            </div>

            <Link
              href="/cennik"
              className="w-fit rounded-full border border-white/15 px-6 py-3 text-sm font-black uppercase transition hover:bg-white hover:text-black"
            >
              Zobacz cennik
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative min-h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-70 transition duration-700 group-hover:scale-110 group-hover:opacity-90"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/45">
                    Hair Design
                  </p>

                  <h3 className="text-4xl font-black uppercase">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-white/65">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="bg-gradient-to-b from-[#292929] via-[#1c1c1c] to-[#101010] py-24 text-white">
        <Container>
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/45">
              Dlaczego my
            </p>

            <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">
              Standard, do którego wracają klienci
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-sky-400/30 bg-gradient-to-br from-sky-400/20 to-sky-500/5 p-7 transition duration-300 hover:border-sky-400/60 hover:from-sky-400/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
                  <feature.icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-lg font-black uppercase leading-tight">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="relative overflow-hidden bg-gradient-to-br from-[#2f2f2f] via-[#111111] to-[#050505] py-28 text-white">
        <Image
          src={background}
          alt="Zespół Krystian Wojewoda Hair Design"
          fill
          className="object-cover opacity-28"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        <Container>
          <div className="relative z-10 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="max-w-xl">
              <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/45">
                Zespół
              </p>

              <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">
                Kilka osobowości. Jeden standard pracy.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/68">
                Zespół salonu łączy doświadczenie, technikę i wyczucie stylu.
                Dzięki temu każda wizyta jest prowadzona indywidualnie — od
                konsultacji po końcową stylizację.
              </p>

              <Link
                href="/zespol"
                className="mt-8 inline-flex rounded-full border border-white px-7 py-4 text-sm font-black uppercase transition hover:bg-white hover:text-black"
              >
                Poznaj zespół
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:grid-cols-6 lg:grid-cols-3">
              {team.map((person) => (
                <Link
                  key={person.slug}
                  href={`/zespol/${person.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover opacity-80 transition duration-500 group-hover:scale-110 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>

                  <p className="mt-2 truncate text-xs font-black uppercase tracking-wide">
                    {person.name}
                  </p>
                  <p className="truncate text-[0.65rem] uppercase tracking-[0.2em] text-white/45">
                    {person.role}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection
        id="opinie"
        className="bg-gradient-to-b from-[#050505] via-[#161616] to-[#222222] py-24 text-white"
      >
        <Container>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/45">
                Opinie
              </p>

              <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">
                Mówią o nas klientki i klienci
              </h2>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3">
              <div className="flex gap-1 text-white">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-black">4.8 / 5 · 300+ opinii</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-6">
            <button
              type="button"
              onClick={showPreviousTestimonial}
              aria-label="Poprzednie opinie"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] transition hover:bg-white hover:text-black"
            >
              <ChevronLeft size={22} />
            </button>

            <div
              onMouseEnter={() => setIsCarouselPaused(true)}
              onMouseLeave={() => setIsCarouselPaused(false)}
              className="relative h-[360px] w-full max-w-2xl sm:h-[320px]"
              style={{ perspective: "1600px" }}
            >
              {testimonials.map((testimonial, index) => {
                const offset = getTestimonialOffset(index);

                if (Math.abs(offset) > 1) return null;

                const isActive = offset === 0;

                return (
                  <motion.div
                    key={testimonial.name + testimonial.text}
                    onClick={() => !isActive && setTestimonialIndex(index)}
                    initial={false}
                    animate={{
                      x: `${offset * 78}%`,
                      scale: isActive ? 1 : 0.82,
                      rotateY: offset * -28,
                      opacity: isActive ? 1 : 0.35,
                      zIndex: isActive ? 30 : 10,
                    }}
                    transition={{ type: "spring", stiffness: 220, damping: 26 }}
                    className={`absolute left-1/2 top-1/2 h-[320px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-sky-400/30 bg-gradient-to-br from-sky-400/20 to-sky-500/5 p-8 shadow-2xl shadow-black/40 sm:h-[280px] sm:w-[360px] ${
                      isActive ? "cursor-default" : "cursor-pointer"
                    }`}
                  >
                    <div className="flex h-full flex-col">
                      <Quote className="h-8 w-8 shrink-0 text-sky-300/40" />

                      <p className="mt-5 line-clamp-5 flex-1 text-base leading-7 text-white/70">
                        {testimonial.text}
                      </p>

                      <div className="mt-6 flex items-center justify-between gap-4">
                        <p className="text-sm font-black uppercase tracking-[0.2em] text-white/45">
                          {testimonial.name}
                        </p>
                        {testimonial.source && (
                          <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white/35">
                            {testimonial.source}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={showNextTestimonial}
              aria-label="Następne opinie"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] transition hover:bg-white hover:text-black"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name + testimonial.text}
                type="button"
                onClick={() => setTestimonialIndex(index)}
                aria-label={`Pokaż opinię ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  index === testimonialIndex
                    ? "w-8 bg-white"
                    : "w-2 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="bg-gradient-to-b from-[#222222] via-[#191919] to-[#0c0c0c] py-24 text-white">
        <Container>
          <div className="grid gap-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/45">
                Cennik
              </p>

              <h2 className="text-4xl font-black uppercase leading-tight md:text-5xl">
                Przejrzyste ceny, bez niespodzianek
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-white/60">
                Pełen cennik z podziałem na koloryzacje, strzyżenia, zabiegi
                pielęgnacyjne oraz ceny Standard / VIP znajdziesz na osobnej
                stronie.
              </p>

              <Link
                href="/cennik"
                className="mt-8 inline-flex rounded-full border border-white px-7 py-4 text-sm font-black uppercase transition hover:bg-white hover:text-black"
              >
                Pełny cennik
              </Link>
            </div>

            <div className="grid gap-3">
              {pricingHighlights.map((item) => (
                <div
                  key={item.service}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-sky-400/20 to-sky-500/5 px-6 py-4"
                >
                  <p className="text-sm font-bold uppercase leading-5 text-white/75 md:text-base">
                    {item.service}
                  </p>

                  <p className="whitespace-nowrap text-lg font-black">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="bg-gradient-to-b from-[#0c0c0c] via-[#151515] to-[#262626] py-24 text-white">
        <Container>
          <div className="mb-10">
            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/45">
              Jak dojechać
            </p>

            <h2 className="text-4xl font-black uppercase md:text-6xl">
              Salon w Ogrodach Geyera
            </h2>
          </div>

          <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] lg:grid-cols-[390px_1fr]">
            <div className="p-5 md:p-7">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
                <video
                  src="/assets/videos/dojazd.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="h-auto w-full bg-black"
                />
              </div>
            </div>

            <div className="grid lg:grid-rows-[auto_1fr]">
              <div className="p-6 md:p-8">
                <h3 className="text-3xl font-black uppercase">
                  Piotrkowska 293/305, Łódź
                </h3>

                <p className="mt-4 max-w-2xl text-white/60">
                  Salon znajduje się na terenie Ogrodów Geyera. Obejrzyj krótką
                  instrukcję dojazdu albo otwórz lokalizację bezpośrednio w
                  Google Maps.
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Krystian%20Wojewoda%20Hair%20Design%20Piotrkowska%20293%2F305%20%C5%81%C3%B3d%C5%BA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-full border border-white px-6 py-3 text-sm font-black uppercase transition hover:bg-white hover:text-black"
                >
                  Otwórz w Google Maps
                </a>
              </div>

              <div className="min-h-[360px] overflow-hidden bg-white">
                <iframe
                  title="Mapa Krystian Wojewoda Hair Design"
                  src="https://www.google.com/maps?q=Krystian%20Wojewoda%20Hair%20Design%20Piotrkowska%20293%2F305%20%C5%81%C3%B3d%C5%BA&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="min-h-[360px] w-full border-0"
                />
              </div>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="bg-gradient-to-b from-[#262626] via-[#171717] to-[#080808] py-24 text-white">
        <Container>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/45">
                Blog
              </p>

              <h2 className="text-4xl font-black uppercase md:text-6xl">
                Porady i trendy
              </h2>
            </div>

            <Link
              href="/blog"
              className="w-fit rounded-full border border-white/15 px-6 py-3 text-sm font-black uppercase transition hover:bg-white hover:text-black"
            >
              Wszystkie wpisy
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="group overflow-hidden rounded-3xl border border-sky-400/30 bg-gradient-to-br from-sky-400/20 to-sky-500/5 transition duration-300 hover:-translate-y-2 hover:border-sky-400/60 hover:from-sky-400/30"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40">
                    {post.date} · {post.category}
                  </p>

                  <h3 className="mt-4 text-2xl font-black leading-tight">
                    {post.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </AnimatedSection>
    </>
  );
}
