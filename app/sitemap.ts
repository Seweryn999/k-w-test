import type { MetadataRoute } from "next";

import { blogPosts, postPath } from "@/data/blog";
import { team } from "@/data/team";
import { SITE_URL } from "@/lib/seo";

/**
 * Sitemapa składana z tych samych rejestrów, z których budują się strony —
 * nowy artykuł czy nowa osoba w zespole trafia tu sama. Ręczna lista adresów
 * zawsze prędzej czy później rozjedzie się z rzeczywistością.
 *
 * Wszystkie adresy ze slashem na końcu, bo tak działa `trailingSlash: true`.
 * NIE dodawać tu adresów, które są przekierowywane (/umow/, /sklep/,
 * /koszyk/, /kategorie/trendy/) ani starych adresów wpisów z korzenia —
 * sitemapa ma zawierać wyłącznie strony, które faktycznie odpowiadają 200.
 *
 * `priority` i `changeFrequency` to tylko podpowiedzi dla robota: strona
 * główna i rezerwacja najwyżej, dokumenty prawne najniżej.
 */

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const staticEntries: Entry[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/cennik/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/kontakt/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/zespol/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog/", priority: 0.7, changeFrequency: "weekly" },
  { path: "/regulamin-salonu/", priority: 0.3, changeFrequency: "yearly" },
  { path: "/polityka-prywatnosci/", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const teamEntries: Entry[] = team.map((member) => ({
    path: `/zespol/${member.slug}/`,
    priority: 0.6,
    changeFrequency: "yearly",
  }));

  const postEntries = blogPosts.map((post) => ({
    url: `${SITE_URL}${postPath(post.slug)}`,
    // Data publikacji wpisu — jedyne miejsce, gdzie znamy realny lastmod.
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [
    ...[...staticEntries, ...teamEntries].map((entry) => ({
      url: `${SITE_URL}${entry.path}`,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
    })),
    ...postEntries,
  ];
}
