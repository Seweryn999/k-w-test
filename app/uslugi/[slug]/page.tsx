import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FaqList } from "@/components/seo/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceCard } from "@/components/services/ServiceCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { BookingLink } from "@/components/ui/BookingLink";
import { Container } from "@/components/ui/Container";
import { getPost, postPath } from "@/data/blog";
import { BUSINESS } from "@/data/business";
import { priceRangeLabel, pricingRules } from "@/data/pricing";
import {
  getService,
  relatedServices,
  serviceSpan,
  servicePath,
  services,
  SERVICES_PATH,
} from "@/data/services";
import { getTeamMember } from "@/data/team";
import { serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

/**
 * Szablon strony usługi. Nie zawiera treści żadnej konkretnej usługi —
 * wszystko przychodzi z rejestru w data/services. Strony generują się
 * statycznie przy buildzie; adres spoza rejestru zwraca 404.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return {};

  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: servicePath(service.slug),
  });
}

/** Zasady z cennika, które klient powinien znać przed rezerwacją każdej usługi. */
const PRICE_NOTE = pricingRules.find((rule) => rule.startsWith("Ostateczna cena"));

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const path = servicePath(service.slug);
  const { min, max } = serviceSpan(service);
  const related = relatedServices(service);
  const posts = service.relatedPosts.map(getPost);
  const specialists = service.specialists.map(getTeamMember);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050505] via-[#171717] to-[#2a2a2a] pt-32 text-white">
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description: service.metaDescription,
          path,
          image: service.image.src,
          lowPrice: min,
          highPrice: max,
        })}
      />

      <section className="py-16 md:py-20">
        <Container>
          <AnimatedSection immediate>
            <Breadcrumbs
              crumbs={[
                { name: "Usługi", path: SERVICES_PATH },
                { name: service.name, path },
              ]}
              className="mb-10 block"
            />

            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/45">
                  {BUSINESS.address.street} · {BUSINESS.address.city}
                </p>

                <h1 className="text-4xl font-black uppercase leading-tight md:text-6xl">
                  {service.h1}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
                  {service.lead}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <BookingLink size="lg" />

                  <a
                    href="#cennik"
                    className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] transition hover:bg-white hover:text-black"
                  >
                    Sprawdź ceny
                  </a>
                </div>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-start">
            <AnimatedSection className="space-y-14">
              {service.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-3xl font-black uppercase leading-tight md:text-4xl">
                    {section.heading}
                  </h2>

                  <div className="mt-6 space-y-5 text-lg leading-8 text-white/65">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}

                    {section.list && (
                      <ul className="list-disc space-y-2 pl-6">
                        {section.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {section.subsections?.map((sub) => (
                    <div key={sub.heading} className="mt-8">
                      <h3 className="text-xl font-black uppercase text-white md:text-2xl">
                        {sub.heading}
                      </h3>

                      <div className="mt-3 space-y-4 text-lg leading-8 text-white/65">
                        {sub.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </AnimatedSection>

            {/*
              Cennik usługi — kwoty liczone z data/pricing.ts po tagach, więc
              zmiana cennika aktualizuje tę ramkę sama.
            */}
            <AnimatedSection className="lg:sticky lg:top-32">
              <aside
                id="cennik"
                className="scroll-mt-32 rounded-3xl border border-sky-400/30 bg-gradient-to-br from-sky-400/15 to-sky-500/5 p-7"
              >
                <h2 className="text-2xl font-black uppercase">Cena usługi</h2>

                <dl className="mt-6 space-y-4">
                  {service.prices.map((price) => (
                    <div
                      key={price.tag}
                      className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4"
                    >
                      <dt className="text-sm font-bold uppercase leading-5 text-white/70">
                        {price.label}
                      </dt>
                      <dd className="whitespace-nowrap text-lg font-black">
                        {priceRangeLabel(price.tag)}
                      </dd>
                    </div>
                  ))}
                </dl>

                {PRICE_NOTE && (
                  <p className="mt-5 text-sm leading-6 text-white/55">{PRICE_NOTE}</p>
                )}

                <div className="mt-6 grid gap-3">
                  <BookingLink size="lg" />

                  <Link
                    href="/cennik"
                    className="text-center text-xs font-black uppercase tracking-[0.3em] text-white/60 transition hover:text-white"
                  >
                    Pełny cennik salonu →
                  </Link>
                </div>
              </aside>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {specialists.length > 0 && (
        <section className="pb-16">
          <Container>
            <AnimatedSection className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
              <h2 className="text-3xl font-black uppercase md:text-4xl">
                Kto wykonuje tę usługę
              </h2>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {specialists.map((member) => (
                  <li key={member.slug}>
                    <Link
                      href={`/zespol/${member.slug}/`}
                      className="block rounded-2xl border border-white/10 p-5 transition hover:bg-white hover:text-black"
                    >
                      <span className="block text-lg font-black uppercase">
                        {member.name}
                      </span>
                      <span className="mt-1 block text-sm opacity-60">{member.role}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </Container>
        </section>
      )}

      <section className="pb-16">
        <Container>
          <AnimatedSection>
            <h2 className="mb-10 text-3xl font-black uppercase md:text-4xl">
              Pytania o usługę: {service.name.toLowerCase()}
            </h2>

            <FaqList items={service.faq} />
          </AnimatedSection>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <AnimatedSection>
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className="text-3xl font-black uppercase md:text-4xl">
                Powiązane usługi
              </h2>

              <Link
                href={SERVICES_PATH}
                className="text-xs font-black uppercase tracking-[0.3em] text-white/60 transition hover:text-white"
              >
                Wszystkie usługi →
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <ServiceCard key={item.slug} service={item} />
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {posts.length > 0 && (
        <section className="pb-16">
          <Container>
            <AnimatedSection className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
              <h2 className="text-3xl font-black uppercase md:text-4xl">
                Przeczytaj na blogu
              </h2>

              <ul className="mt-6 space-y-3">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={postPath(post.slug)}
                      className="text-lg font-bold text-white/80 transition hover:text-white"
                    >
                      → {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </Container>
        </section>
      )}

      <section className="pb-24">
        <Container>
          <AnimatedSection className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 text-center backdrop-blur md:p-12">
            <h2 className="text-3xl font-black uppercase md:text-5xl">
              Umów wizytę przy Piotrkowskiej
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Wolne terminy u wszystkich stylistów sprawdzisz w kalendarzu
              online. Salon znajdziesz pod adresem {BUSINESS.address.street} w
              Łodzi ({BUSINESS.address.venue}).
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
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
