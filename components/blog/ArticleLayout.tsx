import Image from "next/image";
import Link from "next/link";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { BookingLink } from "@/components/ui/BookingLink";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { BUSINESS } from "@/data/business";
import { getNeighbours, getPost, postPath } from "@/data/blog";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";

/**
 * Ramka każdego artykułu.
 *
 * Strona wpisu podaje tylko slug i treść — nagłówek, okruszki, zdjęcie,
 * nawigacja poprzedni/następny, dane strukturalne i CTA składają się tutaj
 * z rejestru w data/blog.ts. Dzięki temu nowy artykuł to jeden plik z treścią,
 * a nie dwadzieścia linijek metadanych do przepisania.
 */

/** Linki do usług doklejane pod każdym wpisem — z bloga w stronę oferty. */
const RELATED_LINKS = [
  { href: "/cennik", label: "Cennik usług fryzjerskich" },
  { href: "/zespol", label: "Poznaj stylistów salonu" },
  { href: "/kontakt", label: "Kontakt i dojazd" },
];

type ArticleLayoutProps = {
  /** Slug wpisu z data/blog.ts — musi zgadzać się z nazwą katalogu w app/blog. */
  slug: string;
  children: React.ReactNode;
};

export function ArticleLayout({ slug, children }: ArticleLayoutProps) {
  const post = getPost(slug);
  const { prev, next } = getNeighbours(slug);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050505] via-[#171717] to-[#343434] pt-32 text-white">
      <JsonLd
        data={blogPostingSchema({
          title: post.title,
          description: post.description,
          slug: post.slug,
          date: post.date,
          author: post.author,
          image: post.cover.src,
          keywords: post.keywords,
        })}
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Blog", path: "/blog/" },
          { name: post.title, path: postPath(post.slug) },
        ])}
      />

      <section className="py-20">
        <Container>
          <AnimatedSection immediate className="mb-12 max-w-4xl">
            {/*
              Widoczne okruszki mają pokrycie w BreadcrumbList powyżej —
              Google oczekuje, że oznaczona ścieżka istnieje też na stronie.
            */}
            <nav aria-label="Okruszki" className="text-xs font-bold uppercase tracking-[0.28em] text-white/40">
              <Link href="/" className="transition hover:text-white">
                Strona główna
              </Link>
              <span className="px-2 text-white/25">/</span>
              <Link href="/blog" className="transition hover:text-white">
                Blog
              </Link>
            </nav>

            <p className="mb-4 mt-6 text-xs uppercase tracking-[0.45em] text-white/45">
              {post.dateLabel} · {post.author} · {post.category}
            </p>

            <h1 className="text-4xl font-black uppercase leading-tight md:text-6xl">
              {post.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              {post.description}
            </p>
          </AnimatedSection>

          <AnimatedSection
            immediate
            className="relative mb-12 h-[320px] w-full overflow-hidden rounded-3xl md:h-[480px]"
          >
            <Image
              src={post.cover}
              alt={post.coverAlt}
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </AnimatedSection>

          <AnimatedSection className="max-w-3xl space-y-6 text-lg leading-8 text-white/65">
            {children}
          </AnimatedSection>

          <AnimatedSection className="mt-16 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              Sprawdź też
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {RELATED_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-bold text-white/80 transition hover:text-white"
                >
                  → {link.label}
                </Link>
              ))}
            </div>
          </AnimatedSection>

          {(prev || next) && (
            <AnimatedSection className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
              {prev ? (
                <Link href={prev.href} className="group flex flex-col text-left">
                  <span className="text-xs font-bold uppercase tracking-[0.35em] text-white/40">
                    ← Poprzedni artykuł
                  </span>
                  <span className="mt-2 text-xl font-black uppercase transition group-hover:text-white/70">
                    {prev.label}
                  </span>
                </Link>
              ) : (
                <span />
              )}

              {next ? (
                <Link
                  href={next.href}
                  className="group flex flex-col text-left sm:text-right"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.35em] text-white/40">
                    Następny artykuł →
                  </span>
                  <span className="mt-2 text-xl font-black uppercase transition group-hover:text-white/70">
                    {next.label}
                  </span>
                </Link>
              ) : (
                <span />
              )}
            </AnimatedSection>
          )}

          <AnimatedSection className="mt-20 rounded-3xl border border-white/10 bg-white/[0.05] p-8 text-center backdrop-blur md:p-12">
            <p className="text-xs uppercase tracking-[0.45em] text-white/45">
              Krystian Wojewoda Hair Design
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase md:text-6xl">
              Potrzebujesz porady?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Umów konsultację w naszym salonie przy Piotrkowskiej w Łodzi.
              Pomożemy dobrać fryzurę, koloryzację i pielęgnację pod kondycję
              Twoich włosów.
            </p>

            {/*
              Rezerwacja online jako pierwszy wybór, telefon jako zapasowy —
              w Booksy klient widzi wolne terminy bez czekania na oddzwonienie.
            */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <BookingLink size="lg" />

              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex rounded-full border border-white/25 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] transition hover:bg-white hover:text-black"
              >
                {BUSINESS.phoneLabel}
              </a>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}

export function ArticleHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="!mt-12 text-2xl font-black uppercase leading-tight text-white md:text-3xl">
      {children}
    </h2>
  );
}

export function ArticleParagraph({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}

export function ArticleList({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc space-y-3 pl-6">{children}</ul>;
}
