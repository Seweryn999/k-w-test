import { Award, HeartHandshake, Scissors, Sparkles } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";

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

export function Features() {
  return (
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
  );
}
