import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";

export function Location() {
  return (
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
  );
}
