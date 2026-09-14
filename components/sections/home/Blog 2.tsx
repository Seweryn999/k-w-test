import Link from "next/link";
import Image from "next/image";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { blogPosts, postPath } from "@/data/blog";

export function Blog() {
  return (
    <AnimatedSection className="bg-gradient-to-b from-[#262626] via-[#171717] to-[#080808] py-24 text-white">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/45">
              Blog
            </p>

            <h2 className="text-4xl font-black uppercase md:text-6xl">
              Porady i trendy
            </h2>
          </div>

          <Link
            href="/blog"
            className="w-fit rounded-full border border-white/15 px-6 py-3 text-sm font-black uppercase transition hover:bg-white hover:text-black"
          >
            Wszystkie wpisy
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-3xl border border-sky-400/30 bg-gradient-to-br from-sky-400/20 to-sky-500/5 transition duration-300 hover:-translate-y-2 hover:border-sky-400/60 hover:from-sky-400/30"
            >
              <Link href={postPath(post.slug)} className="block">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={post.cover}
                    alt={post.coverAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40">
                    {post.dateLabel} · {post.category}
                  </p>

                  <h3 className="mt-4 text-2xl font-black leading-tight">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/60">
                    {post.description}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
