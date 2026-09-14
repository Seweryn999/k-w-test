"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";

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

export function Testimonials() {
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
  );
}
