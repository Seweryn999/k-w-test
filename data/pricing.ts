export type PriceRow = {
  service: string;
  standard: string;
  vip: string;
};

export type OtherPriceRow = {
  service: string;
  price: string;
};

export const mainPrices: PriceRow[] = [
  { service: "Strzyżenie damskie", standard: "220–260", vip: "190–230" },
  { service: "Farbowanie + Strzyżenie **", standard: "480–520", vip: "440–480" },
  { service: "Farbowanie odrostu + Strzyżenie", standard: "350–390", vip: "320–360" },
  { service: "Baleyage / Sombre / Ombre + Strzyżenie **", standard: "500–540", vip: "460–500" },
  { service: "Pasemka / Rozświetlanie + Strzyżenie **", standard: "460–500", vip: "420–460" },
  { service: "Farbowanie + Pasemka + Strzyżenie **", standard: "530–570", vip: "490–530" },
  { service: "Rozjaśnianie + Farba + Strzyżenie **", standard: "530–570", vip: "490–530" },
  { service: "Demakijaż **", standard: "140–160", vip: "130–150" },
  { service: "Modyfikacja **", standard: "210–230", vip: "200–220" },
  { service: "Tonowanie **", standard: "130–170", vip: "120–160" },
  { service: "Modelowanie", standard: "90–120", vip: "90–120" },
  { service: "Fale / Loki do usługi", standard: "100–120", vip: "90–100" },
  { service: "Cover + Strzyżenie **", standard: "360–420", vip: "330–390" },
  { service: "Zabieg pielęgnacyjny do usługi", standard: "100–150", vip: "100–150" },
  { service: "Strzyżenie męskie włosy krótkie", standard: "130", vip: "120" },
  { service: "Strzyżenie męskie włosy długie", standard: "150", vip: "140" },
  { service: "Broda ***", standard: "40", vip: "30" },
  { service: "Pojaśnienie + Strzyżenie **", standard: "370", vip: "350" },
  { service: "Farbowanie + Strzyżenie **", standard: "390", vip: "370" },
  { service: "Rozjaśnianie + Farba **", standard: "460", vip: "420" },
  { service: "Pasemka + Strzyżenie **", standard: "390", vip: "360" },
  { service: "Cover + Strzyżenie **", standard: "280", vip: "260" },
  { service: "Strzyżenie dziecięce <6 lat **", standard: "110", vip: "70" },
  { service: "Konsultacja *", standard: "50", vip: "–" },
];

export const otherPrices: OtherPriceRow[] = [
  { service: "Strzyżenie Damskie", price: "170–210" },
  { service: "Farbowanie + Strzyżenie **", price: "430–470" },
  { service: "Farbowanie Odrostu + Strzyżenie", price: "300–340" },
  { service: "Baleyage/Sombre/Ombre + Strzyżenie **", price: "450–490" },
  { service: "Pasemka/Rozświetlenie + Strzyżenie **", price: "420–460" },
  { service: "Farbowanie + Pasemka + Strzyżenie **", price: "470–510" },
  { service: "Rozjaśnianie + Farba + Strzyżenie **", price: "470–510" },
  { service: "Refleksy Airtouch **", price: "650–750" },
  { service: "Demakijaż **", price: "130–150" },
  { service: "Modyfikacja **", price: "200–220" },
  { service: "Tonowanie **", price: "120–160" },
  { service: "Trwała", price: "430–490" },
  { service: "Modelowanie", price: "90–120" },
  { service: "Fale/Loki", price: "150–180" },
  { service: "Fale Hollywoodzkie **", price: "200–250" },
  { service: "Upięcie **", price: "350–400" },
  { service: "Upięcie próbne", price: "300–350" },
  { service: "Cover + Strzyżenie", price: "330–390" },
  { service: "Zabieg Pielęgnacyjny do usługi", price: "100–150" },
  { service: "Pielęgnacja + Modelowanie", price: "150–240" },
  { service: "Zabieg Enviro **", price: "350–450" },
  { service: "Strzyżenie Męskie włosy krótkie", price: "100" },
  { service: "Strzyżenie Męskie włosy długie", price: "120" },
  { service: "Broda ***", price: "30" },
  { service: "Pojaśnianie + Strzyżenie **", price: "340" },
  { service: "Farbowanie + Strzyżenie **", price: "360" },
  { service: "Rozjaśnianie + Farba + Strzyżenie **", price: "400" },
  { service: "Pasemka + Strzyżenie **", price: "360" },
  { service: "Cover + Strzyżenie **", price: "250" },
  { service: "Strzyżenie Dziecięce <6 lat **", price: "70" },
  { service: "Strzyżenie Dziecięce 6-12 lat **", price: "90" },
  { service: "Konsultacja *", price: "–" },
];

export const pricingRules: string[] = [
  "Do Krystiana i Marioli obowiązują dwa cenniki: VIP dla klientek, które odbyły minimum jedną wizytę przed 1 sierpnia 2016 oraz STANDARD dla nowych klientek i osób, które pierwszą wizytę odbyły po 1 sierpnia 2016.",
  "Fryzury wieczorowe, ślubne i weselne upina jedynie Aneta i Monika.",
  "W cenę koloryzacji i trwałej wliczone jest również strzyżenie i modelowanie.",
  "W cenę tonowania nie jest wliczone modelowanie.",
  "Ostateczna cena zależy od długości i gęstości włosa, zużycia materiału oraz trudności wykonania.",
  "Nie ma możliwości strzyżenia bez mycia.",
  "Konsultacja kosztuje 50 zł — kwota w całości odejmowana jest przy zrealizowanej usłudze.",
  "Każda koloryzacja bez strzyżenia: minus 60 zł.",
  "Wykonujemy jedynie delikatną korektę i podcięcie brody. Nie wykonujemy usług barberskich ani zaawansowanego modelowania brody.",
];
