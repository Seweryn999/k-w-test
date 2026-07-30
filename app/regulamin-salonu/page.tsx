import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Regulamin salonu | Krystian Wojewoda Hair Design",
  description:
    "Regulamin salonu Krystian Wojewoda Hair Design - rezerwacje, przedpłaty, odwołania wizyt i gwarancja usług.",
  alternates: { canonical: "/regulamin-salonu/" },
};

const sections = [
  {
    id: "rezerwacja-booksy",
    title: "1. Rezerwacja terminu przez portal Booksy",
    content: (
      <p className="leading-7">
        W celu rezerwacji terminu, telefonicznie lub przez portal Booksy, każdy
        klient zobowiązany jest do uiszczenia przedpłaty w wysokości zależnej od
        rodzaju usługi. W przypadku nieuiszczenia przedpłaty maksymalnie do 24h
        po rezerwacji, zostanie ona automatycznie anulowana.
      </p>
    ),
  },
  {
    id: "rezerwacja-telefoniczna-nowi",
    title: "2. Rezerwacja terminu telefonicznie przez nowych klientów",
    content: (
      <p className="leading-7">
        Niniejszy punkt regulaminu dotyczy wyłącznie nowych klientów
        umawiających się na wizytę po raz pierwszy drogą telefoniczną. Klienci
        są zobowiązani do dokonania przedpłaty przelewem na numer konta podany
        przy rezerwacji terminu. Przedpłata powinna zostać uiszczona w ciągu 48h
        od momentu dokonania rezerwacji. Brak uiszczenia przedpłaty w wymaganym
        terminie skutkuje anulowaniem rezerwacji.
      </p>
    ),
  },
  {
    id: "rezerwacja-telefoniczna-stali",
    title: "3. Rezerwacja terminu telefonicznie przez stałych klientów",
    content: (
      <p className="leading-7">
        W przypadku rezerwacji terminu telefonicznie przez stałych klientów,
        przedpłata nie jest wymagana.
      </p>
    ),
  },
  {
    id: "pozne-przybycie",
    title: "4. Późne przybycie",
    content: (
      <p className="leading-7">
        W celu poszanowania czasu zarówno naszych klientów, jak i naszego
        personelu, prosimy o punktualne przybycie na umówioną wizytę. Klienci,
        którzy spóźnią się więcej niż 20 minut, muszą liczyć się z ewentualną
        odmową wykonania usługi (decyzję o wykonaniu usługi, bądź jej anulowaniu
        podejmuje fryzjer) oraz poniesieniem częściowych kosztów za rezerwację
        terminu.
      </p>
    ),
  },
  {
    id: "anulowanie-wizyty",
    title: "5. Anulowanie wizyty",
    content: (
      <p className="leading-7">
        Jeśli musisz odwołać swoją wizytę, prosimy, abyś powiadomił nas o
        wszelkich anulowaniach lub zmianach terminu co najmniej 24 godziny przed
        wizytą (w przypadku wizyt poniedziałkowych czas na anulowanie to co
        najmniej 48h przed wizytą). Jeśli rezerwacja została dokonana tego
        samego dnia, prosimy o powiadomienie nas o tym co najmniej 4 godziny
        wcześniej. Anulowanie wizyty, które narusza te zasady, spowoduje utratę
        wcześniejszej przedpłaty lub rezerwacja kolejnego terminu będzie możliwa
        tylko i wyłącznie po wcześniejszym uregulowaniu 50% kwoty
        niezrealizowanej usługi (dotyczy klientów niemających konieczności
        uiszczenia przedpłaty).
      </p>
    ),
  },
  {
    id: "niestawienie-sie",
    title: "6. Niestawienie się na wizytę",
    content: (
      <p className="leading-7">
        Niestawienie się na wizytę bez wcześniejszego odwołania spowoduje utratę
        przedpłaty lub rezerwacja kolejnego terminu będzie możliwa tylko i
        wyłącznie po wcześniejszym uregulowaniu 50% kwoty niezrealizowanej
        usługi (dotyczy klientów niemających konieczności uiszczenia
        przedpłaty).
      </p>
    ),
  },
  {
    id: "gwarancja-uslug",
    title: "7. Gwarancja usług",
    content: (
      <p className="leading-7">
        Twoje zadowolenie jest dla nas najwyższym priorytetem. Jeśli nie jesteś
        w pełni zadowolony/a, prosimy o poinformowanie nas o tym podczas zabiegu
        lub w ciągu 24 godzin po wykonaniu usługi. Zobowiązujemy się wówczas do
        dokonania wszelkich koniecznych poprawek. Reklamacje dotyczące usługi
        koloryzacji przyjmujemy wyłącznie w terminie do 14 dni od daty jej
        wykonania. Po upływie tego czasu reklamacje nie będą rozpatrywane.
      </p>
    ),
  },
  {
    id: "historia-zdrowia",
    title: "8. Historia zdrowia",
    content: (
      <p className="leading-7">
        Dla Twojego komfortu i bezpieczeństwa prosimy o poinformowanie naszych
        specjalistów, jeśli masz alergie, jakiekolwiek problemy fizyczne lub
        niepełnosprawność, lub jeśli jesteś w ciąży. Jeśli podczas zabiegu
        odczuwasz dyskomfort lub jakiekolwiek inne objawy, prosimy o
        natychmiastowe powiadomienie usługodawcy.
      </p>
    ),
  },
];

export default function RegulaminPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050505] via-[#171717] to-[#343434] pt-32 text-white">
      <section className="py-20">
        <Container>
          <div className="mb-16 max-w-4xl">
            <p className="mb-5 text-xs uppercase tracking-[0.55em] text-white/40">
              Informacje prawne
            </p>

            <h1 className="text-5xl font-black uppercase leading-[0.95] md:text-7xl">
              Regulamin salonu
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
              Zasady rezerwacji, odwołania i realizacji wizyt w salonie Krystian
              Wojewoda Hair Design.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="mb-12 rounded-3xl border border-sky-400/30 bg-gradient-to-br from-sky-400/20 to-sky-500/5 p-6 md:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl">
              <p className="mb-5 text-xs uppercase tracking-[0.45em] text-white/40">
                Spis treści
              </p>

              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-white/70 hover:text-white"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-12 text-white/70">
              {sections.map((section) => (
                <div key={section.id} id={section.id}>
                  <h2 className="text-white/80 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 rounded">
                    {section.title}
                  </h2>
                  {section.content}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
