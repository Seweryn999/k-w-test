import Link from "next/link";

import { FaqList } from "@/components/seo/FaqList";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { homeFaq } from "@/data/home-faq";

export function Faq() {
  return (
    <AnimatedSection className="bg-gradient-to-b from-[#0c0c0c] via-[#141414] to-[#1c1c1c] py-24 text-white">
      <Container>
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/45">
            Pytania i odpowiedzi
          </p>

          <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">
            Szukasz najlepszego fryzjera w Łodzi?
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/60">
            Kilka odpowiedzi, które pomogą wybrać salon i usługę. Pytania o
            godziny otwarcia i dojazd znajdziesz na stronie{" "}
            <Link href="/kontakt" className="underline underline-offset-4 hover:text-white">
              kontakt
            </Link>
            .
          </p>
        </div>

        <FaqList items={homeFaq} />
      </Container>
    </AnimatedSection>
  );
}
