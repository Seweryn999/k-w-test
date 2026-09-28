// SZKIC DO WERYFIKACJI — treść merytoryczna do akceptacji przez salon.
import salon01 from "@/assets/images/salon-01.webp";
import { priceRangeLabel } from "@/data/pricing";

import type { Service } from "./types";

export const strzyzenieMeskie: Service = {
  slug: "strzyzenie-meskie",
  name: "Strzyżenie męskie",
  h1: "Strzyżenie męskie w Łodzi",
  metaTitle: "Strzyżenie męskie Łódź – fryzjer męski | Wojewoda Studio",
  metaDescription:
    "Strzyżenie męskie w Łodzi przy Piotrkowskiej 293/305 — krótkie i długie włosy, korekta brody, pasemka. Mycie i modelowanie w cenie. Umów wizytę w Booksy.",
  cardDescription:
    "Klasyczne i nowoczesne cięcia na krótkie i dłuższe włosy, z myciem, modelowaniem i korektą brody.",
  lead: "Męska fryzura ma dobrze wyglądać bez pół godziny przed lustrem. W salonie przy Piotrkowskiej w Łodzi strzyżemy mężczyzn od początku istnienia salonu — Krystian Wojewoda zaczynał zawodową drogę właśnie jako fryzjer męski. Każde strzyżenie obejmuje mycie i modelowanie.",
  image: salon01,
  imageAlt:
    "Rząd czarnych foteli fryzjerskich przy długim drewnianym blacie z lustrami w salonie Krystian Wojewoda Hair Design w Łodzi",
  sections: [
    {
      heading: "Cięcia na krótkie i długie włosy",
      paragraphs: [
        "Strzyżenie męskie wyceniamy w zależności od długości włosów. Krótkie formy — od klasycznych cięć po nowoczesne fryzury z wyraźnym przejściem — wymagają precyzji przy karku i skroniach. Dłuższe męskie fryzury potrzebują więcej pracy nożyczkami, żeby układały się naturalnie.",
      ],
      subsections: [
        {
          heading: "Korekta brody",
          paragraphs: [
            "Do strzyżenia możemy dodać delikatną korektę i podcięcie brody. Nie jesteśmy barberem — nie wykonujemy zaawansowanego modelowania brody ani usług barberskich.",
          ],
        },
        {
          heading: "Kolor dla mężczyzn",
          paragraphs: [
            "Wykonujemy także męskie pojaśnienia, pasemka, farbowanie i tuszowanie siwizny (cover) — te pozycje mają w cenniku osobne, niższe wyceny dla krótkich fryzur.",
          ],
        },
      ],
    },
    {
      heading: "Dlaczego warto umówić się z wyprzedzeniem",
      paragraphs: [
        "Salon jest otwarty od poniedziałku do piątku do 21:00, więc łatwo znaleźć termin po pracy — ale popularne godziny wieczorne szybko się zapełniają. W Booksy widać wolne terminy u konkretnego stylisty i można zarezerwować wizytę o każdej porze.",
      ],
    },
  ],
  prices: [
    { label: "Strzyżenie męskie (krótkie i długie włosy)", tag: "strzyzenie-meskie" },
    { label: "Korekta brody", tag: "broda" },
  ],
  faq: [
    {
      question: "Ile kosztuje strzyżenie męskie w Łodzi?",
      answer: `Strzyżenie męskie kosztuje u nas ${priceRangeLabel("strzyzenie-meskie")}, zależnie od długości włosów i stylisty. Korekta brody to dodatkowo ${priceRangeLabel("broda")}.`,
    },
    {
      question: "Czy strzyżecie brodę?",
      answer:
        "Wykonujemy delikatną korektę i podcięcie brody. Nie prowadzimy usług barberskich ani zaawansowanego modelowania brody.",
    },
    {
      question: "Czy można umówić się wieczorem?",
      answer:
        "Tak. Od poniedziałku do piątku salon jest otwarty do 21:00, a w soboty do 15:00. Wolne terminy sprawdzisz w Booksy.",
    },
  ],
  related: ["strzyzenie-damskie", "koloryzacja-wlosow", "pasemka-rozswietlanie"],
  relatedPosts: ["jak-dbac-o-skore-glowy"],
  specialists: ["krystian-wojewoda", "monika", "julia"],
};
