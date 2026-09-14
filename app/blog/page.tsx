import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { BookingLink } from "@/components/ui/BookingLink";
import { Container } from "@/components/ui/Container";
import { blogPosts, postPath } from "@/data/blog";
import { BUSINESS } from "@/data/business";

export const metadata: Metadata = pageMetadata({
  title: "Blog o włosach – porady fryzjerów z Łodzi | Wojewoda Studio",
  description:
    "Porady o pielęgnacji, koloryzacji i stylizacji włosów od fryzjerów salonu Krystian Wojewoda Hair Design przy Piotrkowskiej w Łodzi.",
  path: "/blog/",
});

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050505] via-[#171717] to-[#343434] pt-32 text-white">
      <JsonLd data={breadcrumbSchema([{ name: "Blog", path: "/blog/" }])} />

      <AnimatedSection immediate className="py-20">
        <Container>
          <div className="mb-16 max-w-4xl">
            <nav
              aria-label="Okruszki"
              className="text-xs font-bold uppercase tracking-[0.28em] text-white/40"
            >
              <Link href="/" className="transition hover:text-white">
                Strona główna
              </Link>
              <span className="px-2 text-white/25">/</span>
              <span className="text-white/60">Blog</span>
            </nav>

            <p className="mb-4 mt-6 text-xs uppercase tracking-[0.45em] text-white/45">
              Blog
            </p>

            <h1 className="text-5xl font-black uppercase leading-tight md:text-7xl">
              Porady, trendy i pielęgnacja włosów
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Inspiracje, wskazówki ekspertów i praktyczna wiedza dotycząca
              pielęgnacji, koloryzacji oraz stylizacji włosów — pisane przez
              zespół salonu z Piotrkowskiej.
            </p>
          </div>

          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur transition duration-300 hover:-translate-y-2 hover:bg-white/[0.07]"
              >
                <div className="grid lg:grid-cols-[420px_1fr]">
                  <div className="relative h-[320px] overflow-hidden lg:h-full">
                    <Image
                      src={post.cover}
                      alt={post.coverAlt}
                      fill
                      sizes="(min-width: 1024px) 420px, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  <div className="flex flex-col justify-center p-8 md:p-10">
                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/40">
                      {post.dateLabel} · {post.category}
                    </p>

                    <h2 className="mt-5 text-3xl font-black uppercase leading-tight md:text-4xl">
                      <Link
                        href={postPath(post.slug)}
                        className="transition hover:text-white/70"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
                      {post.description}
                    </p>

                    <Link
                      href={postPath(post.slug)}
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
              {BUSINESS.name}
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase md:text-6xl">
              Potrzebujesz porady?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Umów konsultację w salonie. Pomożemy dobrać odpowiednią fryzurę,
              koloryzację i pielęgnację dopasowaną do Twoich włosów.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <BookingLink size="lg" />

              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex rounded-full border border-white/25 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] transition hover:bg-white hover:text-black"
              >
                {BUSINESS.phoneLabel}
              </a>
            </div>
          </div>
        </Container>
      </AnimatedSection>
    </main>
  );
}
