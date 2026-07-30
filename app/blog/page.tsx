import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import pic1 from "@/assets/images/pic1.png";
import pic2 from "@/assets/images/pic2.png";
import pic3 from "@/assets/images/pic3.png";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";

const posts = [
  {
    title: "Kosmetyki do pielęgnacji zniszczonych włosów – lista must have",
    date: "7 marca, 2022",
    category: "Trendy",
    image: pic1,
    href: "/blog/kosmetyki-do-pielegnacji-zniszczonych-wlosow-lista-must-have",
    excerpt:
      "Najważniejsze kosmetyki, które pomagają odbudować strukturę włosa i zachować zdrowy wygląd na co dzień.",
  },
  {
    title: "Jak dbać o skórę głowy",
    date: "7 marca, 2022",
    category: "Pielęgnacja",
    image: pic2,
    href: "/blog/jak-dbac-o-skore-glowy",
    excerpt:
      "Zdrowe włosy zaczynają się od zdrowej skóry głowy. Sprawdź najważniejsze zasady codziennej pielęgnacji.",
  },
  {
    title: "Jaka fryzura pasuje do mojej twarzy?",
    date: "27 grudnia, 2021",
    category: "Stylizacja",
    image: pic3,
    href: "/blog/jaka-fryzura-pasuje-do-mojej-twarzy",
    excerpt:
      "Dowiedz się, jak dobrać fryzurę do kształtu twarzy oraz własnego stylu życia.",
  },
];

export const metadata: Metadata = {
  title: "Blog - Krystian Wojewoda Hair Design",
  description:
    "Blog o pielęgnacji, koloryzacji i stylizacji włosów – porady salonu Krystian Wojewoda Hair Design w Łodzi.",
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050505] via-[#171717] to-[#343434] pt-32 text-white">
      <AnimatedSection className="py-20">
        <Container>
          <div className="mb-16 max-w-4xl">
            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/45">
              Blog
            </p>

            <h1 className="text-5xl font-black uppercase leading-tight md:text-7xl">
              Porady, trendy i pielęgnacja włosów
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Inspiracje, wskazówki ekspertów i praktyczna wiedza dotycząca
              pielęgnacji, koloryzacji oraz stylizacji włosów.
            </p>
          </div>

          <div className="grid gap-8">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur transition duration-300 hover:-translate-y-2 hover:bg-white/[0.07]"
              >
                <div className="grid lg:grid-cols-[420px_1fr]">
                  <div className="relative h-[320px] overflow-hidden lg:h-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 420px, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  <div className="flex flex-col justify-center p-8 md:p-10">
                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/40">
                      {post.date} · {post.category}
                    </p>

                    <h2 className="mt-5 text-3xl font-black uppercase leading-tight md:text-4xl">
                      {post.title}
                    </h2>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
                      {post.excerpt}
                    </p>

                    <Link
                      href={post.href}
                      className="mt-8 w-fit rounded-full border border-white/15 px-6 py-3 text-sm font-black uppercase transition hover:bg-white hover:text-black"
                    >
                      Czytaj więcej
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.05] p-8 text-center backdrop-blur md:p-12">
            <p className="text-xs uppercase tracking-[0.45em] text-white/45">
              Krystian Wojewoda Hair Design
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase md:text-6xl">
              Potrzebujesz porady?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Umów konsultację w salonie. Pomożemy dobrać odpowiednią fryzurę,
              koloryzację i pielęgnację dopasowaną do Twoich włosów.
            </p>

            <a
              href="tel:+48730796861"
              className="mt-8 inline-flex rounded-full border border-white px-8 py-4 font-black uppercase transition hover:bg-white hover:text-black"
            >
              +48 730 796 861
            </a>
          </div>
        </Container>
      </AnimatedSection>
    </main>
  );
}
