import { BOOKSY_URL } from "@/data/navigation";
import { team } from "@/data/team";

export type FaqEntry = {
  /** Single words or multi-word phrases. Phrases score higher when fully matched. */
  keywords: string[];
  answer: string | (() => string);
};

export const SMALL_TALK: FaqEntry[] = [
  {
    keywords: [
      "cześć",
      "czesc",
      "hej",
      "halo",
      "dzień dobry",
      "dobry wieczor",
      "dobry wieczór",
      "siema",
      "witam",
      "yo",
    ],
    answer:
      "Cześć! W czym mogę pomóc? Mogę podpowiedzieć w sprawach cennika, zespołu, godzin otwarcia, pielęgnacji i rezerwacji.",
  },
  {
    keywords: [
      "dziękuję",
      "dziekuje",
      "dzięki",
      "dzieki",
      "thx",
      "super dzięki",
      "ok dzięki",
    ],
    answer: "Nie ma problemu! Jeśli będziesz mieć więcej pytań, pisz śmiało.",
  },
  {
    keywords: ["do widzenia", "pa", "papa", "bye", "narazie", "na razie"],
    answer:
      "Do zobaczenia! Pamiętaj, że wizytę możesz zarezerwować online przez Booksy lub telefonicznie: +48 730 796 861.",
  },
  {
    keywords: [
      "kim jesteś",
      "kim jestes",
      "jesteś botem",
      "jestes botem",
      "jak się nazywasz",
      "jak sie nazywasz",
      "kto ty",
      "co umiesz",
    ],
    answer:
      "Jestem wirtualnym asystentem salonu Krystian Wojewoda Hair Design. Odpowiem na pytania o cennik, zespół, godziny otwarcia, usługi i rezerwacje.",
  },
];

export const FAQ: FaqEntry[] = [
  {
    keywords: [
      "godziny otwarcia",
      "godziny",
      "otwarte",
      "otwarcia",
      "kiedy otwarte",
      "czynne",
      "pracujecie",
      "do kiedy",
      "od kiedy",
      "weekend",
      "niedziela",
      "sobota",
      "poniedziałek",
      "poniedzialek",
    ],
    answer:
      "Jesteśmy otwarci od poniedziałku do piątku w godzinach 9:00–20:30 oraz w sobotę 9:00–15:00. W niedzielę salon jest zamknięty.",
  },
  {
    keywords: [
      "adres",
      "gdzie jesteście",
      "gdzie jestescie",
      "gdzie się znajdujecie",
      "gdzie",
      "lokalizacja",
      "mapa",
      "dojazd",
      "ulica",
      "piotrkowska",
      "łódź",
      "lodz",
      "ogrody geyera",
    ],
    answer:
      "Znajdziesz nas na ul. Piotrkowskiej 293/305 w Łodzi (Ogrody Geyera). Mapę i wskazówki dojazdu znajdziesz na stronie Kontakt.",
  },
  {
    keywords: [
      "telefon",
      "numer telefonu",
      "skontaktować się",
      "skontaktowac sie",
      "kontakt",
      "zadzwonić",
      "zadzwon",
      "zadzwoń",
      "numer",
      "email",
      "mail",
      "adres email",
      "napisać",
      "napisac",
    ],
    answer:
      "Możesz do nas zadzwonić: +48 730 796 861 lub napisać na salonkwhd@gmail.com. Odpowiemy najszybciej jak się da.",
  },
  {
    keywords: [
      "rezerwacja",
      "zarezerwować",
      "zarezerwowac",
      "umówić wizytę",
      "umowic wizyte",
      "umówić się",
      "umowic sie",
      "umow",
      "wizyta",
      "wizytę",
      "wizyte",
      "booksy",
      "zapisać się",
      "zapisac sie",
      "zapisać",
      "termin",
      "wolny termin",
      "online",
      "rezerwacja online",
    ],
    answer: `Najszybciej zarezerwujesz wizytę online przez Booksy: ${BOOKSY_URL}. Możesz też zadzwonić pod +48 730 796 861 lub napisać na salonkwhd@gmail.com.`,
  },
  {
    keywords: [
      "cennik",
      "cena",
      "ceny",
      "kosztuje",
      "koszt",
      "płaci",
      "zł",
      "drogo",
      "tanio",
    ],
    answer:
      "Strzyżenie damskie kosztuje 190–260 zł, farbowanie ze strzyżeniem 440–520 zł, a strzyżenie męskie 120–150 zł. Ceny pozostałych usług (koloryzacje, balayage, pasemka, tonowanie, fryzury wieczorowe) znajdziesz na stronie Cennik — zależą od stylisty i długości włosów. Ceny dla Krystiana i Marioli dzielą się na Standard i VIP.",
  },
  {
    keywords: [
      "strzyżenie",
      "strzyzenie",
      "ścięcie",
      "sciecie",
      "obciecie",
      "obcięcie",
      "podcięcie",
      "podciecie",
      "krótsze włosy",
      "krotsze wlosy",
    ],
    answer:
      "Strzyżenie damskie: 190–260 zł. Strzyżenie męskie: 120–150 zł (zależnie od długości włosów). Strzyżenie dziecięce do 6 lat: 70–110 zł.",
  },
  {
    keywords: [
      "koloryzacja",
      "farbowanie",
      "balayage",
      "ombre",
      "sombre",
      "pasemka",
      "tonowanie",
      "rozjaśnianie",
      "rozjasnianie",
      "kolor włosów",
      "kolor wlosow",
      "zmiana koloru",
      "przefarbować",
      "przefarbowac",
    ],
    answer:
      "Koloryzacje (farbowanie, balayage, sombre/ombre, pasemka, rozjaśnianie, tonowanie) zaczynają się od ok. 130 zł za tonowanie do 530–570 zł za pełną koloryzację z pasemkami i strzyżeniem. W cenę koloryzacji wliczone jest strzyżenie i modelowanie. Dokładną cenę najlepiej ustalić podczas konsultacji (50 zł, odejmowane od ceny usługi).",
  },
  {
    keywords: [
      "broda",
      "barber",
      "męskie strzyżenie",
      "meskie strzyzenie",
      "fryzura męska",
      "fryzura meska",
    ],
    answer:
      "Wykonujemy delikatną korektę i podcięcie brody (30–40 zł) oraz strzyżenie męskie (120–150 zł, zależnie od długości włosów). Nie wykonujemy zaawansowanych usług barberskich ani modelowania brody.",
  },
  {
    keywords: [
      "zespół",
      "zespol",
      "fryzjer",
      "fryzjerzy",
      "stylista",
      "stylistka",
      "kto pracuje",
      "kto strzyże",
      "kto strzyze",
      "pracownicy",
      "personel",
      "ile osób pracuje",
      "ile osob pracuje",
      "ile osób",
      "ile osob",
      "ilu fryzjerów",
      "ilu fryzjerow",
      "ile fryzjerów",
      "ile fryzjerow",
      "ile stylistów",
      "ile stylistow",
      "liczba fryzjerów",
      "liczba fryzjerow",
    ],
    answer: () =>
      `W naszym zespole pracuje ${team.length} osób: ${team
        .map((member) => `${member.name} ("${member.nickname}")`)
        .join(", ")}. Profile każdej osoby znajdziesz na stronie Zespół.`,
  },
  {
    keywords: [
      "ślub",
      "slub",
      "wesele",
      "weselne",
      "wieczorowa",
      "wieczorowe",
      "upięcie",
      "upiecie",
      "upięcia",
      "upiecia",
      "fryzura na wesele",
      "fryzura na ślub",
      "fryzura na slub",
    ],
    answer:
      "Fryzury wieczorowe, ślubne i weselne wykonują Aneta i Monika — najlepiej umówić wizytę (najlepiej z próbą fryzury) z odpowiednim wyprzedzeniem przed wydarzeniem.",
  },
  {
    keywords: [
      "pielęgnacja",
      "pielegnacja",
      "kosmetyki",
      "olaplex",
      "k18",
      "kevin murphy",
      "eleven australia",
      "zniszczone włosy",
      "zniszczone wlosy",
      "regeneracja",
      "wzmocnić włosy",
      "wzmocnic wlosy",
      "suche włosy",
      "suche wlosy",
    ],
    answer:
      "Oferujemy zabiegi pielęgnacyjne i dobór kosmetyków (Olaplex, K18, Eleven Australia, Kevin Murphy) do regeneracji zniszczonych, suchych i osłabionych włosów. Zabieg pielęgnacyjny dodawany do usługi kosztuje 100–150 zł. Więcej wskazówek znajdziesz w naszych artykułach na blogu.",
  },
  {
    keywords: [
      "skóra głowy",
      "skora glowy",
      "łupież",
      "lupiez",
      "przetłuszcza",
      "przetluszcza",
      "swędzi",
      "swedzi",
      "podrażniona",
      "podrazniona",
    ],
    answer:
      "Pielęgnacja skóry głowy (suchej, przetłuszczającej się lub podrażnionej) to podstawa zdrowych włosów — dobieramy odpowiedni szampon i zabiegi indywidualnie. Praktyczne wskazówki znajdziesz w artykule \"Jak dbać o skórę głowy\" na naszym blogu.",
  },
  {
    keywords: [
      "blog",
      "artykuł",
      "artykul",
      "porady",
      "wpis",
      "wpisy",
      "czytać",
      "czytac",
    ],
    answer:
      "Na blogu znajdziesz artykuły: \"Kosmetyki do pielęgnacji zniszczonych włosów\", \"Jaka fryzura pasuje do mojej twarzy?\" oraz \"Jak dbać o skórę głowy\".",
  },
  {
    keywords: [
      "jaka fryzura",
      "fryzura do twarzy",
      "kształt twarzy",
      "ksztalt twarzy",
      "twarz okrągła",
      "twarz okragla",
      "twarz owalna",
      "twarz kwadratowa",
      "twarz trójkątna",
      "twarz trojkatna",
      "dobrać fryzurę",
      "dobrac fryzure",
    ],
    answer:
      "Dobór fryzury zależy od kształtu twarzy (okrągła, owalna, kwadratowa, trójkątna) — np. do twarzy okrągłej dobrze sprawdzają się dłuższe włosy bez mocnego cieniowania, a do trójkątnej klasyczny bob. Pełen przewodnik znajdziesz w artykule \"Jaka fryzura pasuje do mojej twarzy?\" na blogu, a najlepszą rekomendację dostaniesz podczas konsultacji u nas w salonie.",
  },
  {
    keywords: [
      "dziecko",
      "dziecięce",
      "dzieciece",
      "dziecka",
      "dla dziecka",
      "mały",
      "mala",
    ],
    answer:
      "Strzyżenie dziecięce dla dzieci poniżej 6 lat kosztuje 70–110 zł.",
  },
  {
    keywords: [
      "konsultacja",
      "doradzić",
      "doradzic",
      "nie wiem co wybrać",
      "nie wiem co wybrac",
      "porada",
    ],
    answer:
      "Konsultacja kosztuje 50 zł, a jej koszt jest odejmowany od ceny usługi, jeśli zostanie zrealizowana w salonie. To dobry sposób, by dobrać fryzurę, kolor lub pielęgnację razem ze stylistą.",
  },
  {
    keywords: [
      "vip",
      "standard",
      "cennik vip",
      "różnica cennik",
      "roznica cennik",
    ],
    answer:
      "U Krystiana i Marioli obowiązują dwa cenniki: VIP — dla klientek z minimum jedną wizytą przed 1 sierpnia 2016, oraz STANDARD — dla nowych klientek i osób, których pierwsza wizyta odbyła się po tej dacie.",
  },
];

export const FALLBACK_ANSWER =
  "Nie jestem pewien, jak odpowiedzieć na to pytanie. Zadzwoń do nas: +48 730 796 861, napisz na salonkwhd@gmail.com, albo zarezerwuj wizytę online przez Booksy.";

export const GREETING =
  "Cześć! Jestem asystentem Krystian Wojewoda Hair Design. Mogę pomóc w sprawach cennika, zespołu, godzin otwarcia, pielęgnacji i rezerwacji. O co chcesz zapytać?";
