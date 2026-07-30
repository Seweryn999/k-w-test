import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";

type ArticleNavLink = {
  href: string;
  label: string;
};

type ArticleLayoutProps = {
  date: string;
  author: string;
  category: string;
  title: string;
  image?: StaticImageData;
  children: React.ReactNode;
  prev?: ArticleNavLink;
  next?: ArticleNavLink;
};

export function ArticleLayout({
  date,
  author,
  category,
  title,
  image,
  children,
  prev,
  next,
}: ArticleLayoutProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050505] via-[#171717] to-[#343434] pt-32 text-white">
      <section className="py-20">
        <Container>
          <AnimatedSection className="mb-12 max-w-4xl">
            <Link
              href="/blog"
              className="text-xs font-bold uppercase tracking-[0.35em] text-white/45 transition hover:text-white"
            >
              ← Powrót do bloga
            </Link>

            <p className="mb-4 mt-6 text-xs uppercase tracking-[0.45em] text-white/45">
              {date} · {author} · {category}
            </p>

            <h1 className="text-4xl font-black uppercase leading-tight md:text-6xl">
              {title}
            </h1>
          </AnimatedSection>

          {image && (
            <AnimatedSection className="relative mb-12 h-[320px] w-full overflow-hidden rounded-3xl md:h-[480px]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </AnimatedSection>
          )}

          <AnimatedSection className="max-w-3xl space-y-6 text-lg leading-8 text-white/65">
            {children}
          </AnimatedSection>

          {(prev || next) && (
            <AnimatedSection className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
              {prev ? (
                <Link
                  href={prev.href}
                  className="group flex flex-col text-left"
                >
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
              Umów konsultację w salonie. Pomożemy dobrać odpowiednią fryzurę,
              koloryzację i pielęgnację dopasowaną do Twoich włosów.
            </p>

            <a
              href="tel:+48730796861"
              className="mt-8 inline-flex rounded-full border border-white px-8 py-4 font-black uppercase transition hover:bg-white hover:text-black"
            >
              +48 730 796 861
            </a>
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
