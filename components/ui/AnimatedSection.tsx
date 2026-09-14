"use client";

import { motion, useReducedMotion } from "framer-motion";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /**
   * Wyłącza stan początkowy dla sekcji, która jest widoczna od razu po
   * wejściu na stronę.
   *
   * Bez tego treść nad linią zgięcia trafia do HTML-a z `opacity: 0` i
   * rozmyciem, a odsłania się dopiero, gdy doładuje się i uruchomi
   * JavaScript. Przeglądarka liczy wtedy LCP od momentu animacji, a nie od
   * pierwszego malowania — czyli sami psujemy sobie wynik. Dotyczy nagłówka
   * H1 i zdjęcia głównego na podstronach.
   */
  immediate?: boolean;
};

export function AnimatedSection({
  children,
  className = "",
  id,
  immediate = false,
}: AnimatedSectionProps) {
  const reduce = useReducedMotion();
  const skip = immediate || reduce;

  return (
    <motion.section
      id={id}
      initial={skip ? false : { opacity: 0, y: 45, filter: "blur(10px)" }}
      whileInView={skip ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
