export type TeamMember = {
  name: string;
  nickname: string;
  role: string;
  slug: string;
  bio?: string;
  /** Extra search terms for the chatbot, e.g. job titles unique to this person. */
  extraKeywords?: string[];
};

export const team: TeamMember[] = [
  {
    name: "Krystian Wojewoda",
    nickname: "Zohan",
    role: "Stylista / Fryzjer",
    slug: "krystian-wojewoda",
    bio: "Stylista i fryzjer, założyciel salonu.",
  },
  {
    name: "Mariola Śnieg",
    nickname: "Mario",
    role: "Stylistka / Technik koloryzacji",
    slug: "mariola-snieg",
    bio: "Stylistka i technik koloryzacji.",
  },
  {
    name: "Danuta",
    nickname: "Danusia",
    role: "Starsza stylistka",
    slug: "danuta",
  },
  {
    name: "Aneta",
    nickname: "Andzia",
    role: "Starsza stylistka",
    slug: "aneta",
    bio: "25-letnie doświadczenie, specjalizuje się we fryzjerstwie damskim, koloryzacjach oraz efektownych upięciach i fryzurach wieczorowych.",
  },
  {
    name: "Ania",
    nickname: "Anka",
    role: "Starsza stylistka",
    slug: "ania",
  },
  {
    name: "Monika",
    nickname: "Monia",
    role: "Starsza stylistka",
    slug: "monika",
    bio: "Razem z Anetą wykonuje fryzury wieczorowe, ślubne i weselne.",
  },
  {
    name: "Romina",
    nickname: "Roma",
    role: "Młodsza stylistka",
    slug: "romina",
  },
  {
    name: "Julia",
    nickname: "Jula",
    role: "Młodsza stylistka",
    slug: "julia",
  },
  {
    name: "Marta",
    nickname: "Wieru",
    role: "Manager / Recepcja",
    slug: "marta",
    bio: "Zajmuje się recepcją i zarządzaniem salonem — dobra osoba do kontaktu w sprawach organizacyjnych.",
    extraKeywords: ["recepcja", "manager"],
  },
];
