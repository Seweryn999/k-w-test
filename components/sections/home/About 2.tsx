import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";

export function About() {
  return (
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
  );
}
