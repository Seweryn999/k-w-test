import { CalendarCheck, HeartHandshake, PhoneCall, Wand2 } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";

const process = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Umawiasz wizytę",
    description:
      "Rezerwujesz online w Booksy albo dzwonisz — wybierasz termin i stylistę, z którym chcesz pracować.",
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

export function Process() {
  return (
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
  );
}
