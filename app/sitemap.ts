import type { MetadataRoute } from "next";

const BASE_URL = "https://wojewodastudio.pl";

// Tylko strony indeksowane, wszystkie ze slashem na końcu (trailingSlash: true).
// Nie dodawać tu URL-i przekierowywanych (/umow/, /sklep/, /koszyk/,
// /kategorie/trendy/) ani starych adresów wpisów z korzenia.
const routes = [
  "/",
  "/blog/",
  "/blog/jak-dbac-o-skore-glowy/",
  "/blog/jaka-fryzura-pasuje-do-mojej-twarzy/",
  "/blog/kosmetyki-do-pielegnacji-zniszczonych-wlosow-lista-must-have/",
  "/cennik/",
  "/kontakt/",
  "/polityka-prywatnosci/",
  "/regulamin-salonu/",
  "/zespol/",
  "/zespol/aneta/",
  "/zespol/ania/",
  "/zespol/danuta/",
  "/zespol/julia/",
  "/zespol/krystian-wojewoda/",
  "/zespol/mariola-snieg/",
  "/zespol/marta/",
  "/zespol/monika/",
  "/zespol/romina/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
  }));
}
