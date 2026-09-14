import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navigation } from "@/data/navigation";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050505] via-[#171717] to-[#343434] pt-32 text-white">
      <section className="py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-5 text-xs uppercase tracking-[0.55em] text-white/40">
              Błąd 404
            </p>

            <h1 className="text-5xl font-black uppercase leading-[0.95] md:text-7xl">
              Nie ma takiej strony
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/65">
              Adres, którego szukasz, nie istnieje lub został zmieniony. Wróć na
              stronę główną albo przejdź bezpośrednio do jednej z sekcji salonu.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-neutral-200"
              >
                Strona główna
              </Link>

              <Link
                href="/kontakt"
                className="inline-flex rounded-full border border-white/20 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] transition hover:bg-white hover:text-black"
              >
                Kontakt
              </Link>
            </div>

            <div className="mt-14 border-t border-white/10 pt-8">
              <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                Popularne strony
              </p>

              <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white/60 underline-offset-4 transition hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
