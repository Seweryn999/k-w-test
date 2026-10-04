// SZKIC DO WERYFIKACJI — treść merytoryczna do akceptacji przez salon.
import salon08 from "@/assets/images/salon-08.webp";
import { priceRangeLabel } from "@/data/pricing";

import type { Service } from "./types";

export const fryzurySlubne: Service = {
  slug: "fryzury-slubne",
  name: "Fryzury ślubne i upięcia",
  h1: "Fryzury ślubne i upięcia w Łodzi",
  metaTitle: "Fryzury ślubne Łódź – upięcia, fale | Wojewoda Studio",
  metaDescription:
    "Fryzury ślubne, weselne i wieczorowe w Łodzi przy Piotrkowskiej 293/305: upięcia, fale hollywoodzkie, próbna fryzura przed ślubem. Umów termin z wyprzedzeniem.",
  cardDescription:
    "Upięcia ślubne, weselne i wieczorowe oraz fale hollywoodzkie — z próbną fryzurą przed wielkim dniem.",
  lead: "Fryzura ślubna musi przetrwać ceremonię, sesję zdjęciową i całą noc na parkiecie — i przez cały ten czas wyglądać tak, jak ją sobie wymarzyłaś. Upięcia ślubne, weselne i wieczorowe wykonują w naszym salonie przy Piotrkowskiej w Łodzi dwie stylistki z wieloletnim doświadczeniem: Aneta i Monika.",
  image: salon08,
  imageAlt:
    "Stanowiska fryzjerskie z lustrami i drewnianym zegarem w salonie Krystian Wojewoda Hair Design w Ogrodach Geyera w Łodzi",
  sections: [
    {
      heading: "Kto wykonuje fryzury ślubne",
      paragraphs: [
        "Aneta od 25 lat specjalizuje się we fryzjerstwie damskim i efektownych upięciach — pracowała m.in. przy Fashion Week i Wyborach Miss Ziemi Łódzkiej. Monika uwielbia fryzury okolicznościowe i wieczorowe, a doświadczenie zdobywała u boku szkoleniowców Wella, L'Oréal i Rr Line. Tylko one dwie wykonują w salonie upięcia ślubne, weselne i wieczorowe.",
      ],
    },
    {
      heading: "Jak przygotować się do fryzury ślubnej",
      paragraphs: [
        "Najlepsze efekty daje plan rozłożony w czasie. Termin fryzury na dzień ślubu rezerwuj z dużym wyprzedzeniem — w sezonie weselnym soboty zajmują się szybko.",
      ],
      subsections: [
        {
          heading: "Fryzura próbna",
          paragraphs: [
            "Na próbnym upięciu testujemy fryzurę razem z welonem, ozdobami i — jeśli to możliwe — makijażem. Sprawdzamy, jak upięcie trzyma się przez kilka godzin i co ewentualnie zmienić. Zabierz zdjęcia sukni i inspiracji.",
          ],
        },
        {
          heading: "Koloryzacja i strzyżenie przed ślubem",
          paragraphs: [
            "Jeśli planujesz zmianę koloru, zrób ją kilka tygodni przed ślubem, a nie w ostatnim tygodniu — kolor zdąży się ustabilizować, a ewentualne poprawki nie będą robione w pośpiechu. Tuż przed ślubem wystarczy odświeżenie końcówek i tonowanie.",
          ],
        },
        {
          heading: "Fale hollywoodzkie",
          paragraphs: [
            "Klasyczne, błyszczące fale to alternatywa dla upięcia — sprawdzają się na ślubie cywilnym, studniówce czy gali. Wykonujemy je także jako osobną usługę.",
          ],
        },
      ],
    },
  ],
  prices: [
    { label: "Upięcie (ślubne, weselne, wieczorowe)", tag: "upiecie" },
    { label: "Upięcie próbne", tag: "upiecie-probne" },
    { label: "Fale hollywoodzkie", tag: "fale-hollywoodzkie" },
  ],
  faq: [
    {
      question: "Ile kosztuje fryzura ślubna w Łodzi?",
      answer: `Upięcie ślubne, weselne lub wieczorowe kosztuje u nas ${priceRangeLabel("upiecie")}, a upięcie próbne ${priceRangeLabel("upiecie-probne")}. Fale hollywoodzkie to ${priceRangeLabel("fale-hollywoodzkie")}. Cena zależy od długości i gęstości włosów oraz stopnia trudności fryzury.`,
    },
    {
      question: "Kto w salonie wykonuje fryzury ślubne?",
      answer:
        "Fryzury wieczorowe, ślubne i weselne upinają wyłącznie Aneta i Monika. Rezerwując termin, wybierz jedną z nich.",
    },
    {
      question: "Czy warto zrobić fryzurę próbną?",
      answer:
        "Tak. Na upięciu próbnym sprawdzamy fryzurę z welonem i ozdobami oraz to, jak trzyma się przez kilka godzin. Dzięki temu w dniu ślubu nie ma niespodzianek.",
    },
    {
      question: "Z jakim wyprzedzeniem rezerwować fryzurę na ślub?",
      answer:
        "Im wcześniej, tym lepiej — w sezonie weselnym soboty szybko się zapełniają. Termin próbnej fryzury najlepiej zaplanować na kilka tygodni przed ślubem.",
    },
  ],
  related: ["koloryzacja-wlosow", "regeneracja-wlosow", "strzyzenie-damskie"],
  relatedPosts: ["jaka-fryzura-pasuje-do-mojej-twarzy"],
  specialists: ["aneta", "monika"],
};
