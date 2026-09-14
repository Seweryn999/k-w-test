import type { NextConfig } from "next";

// Podsitemapy generowane przez Yoasta na starej stronie WordPress.
// Google ma je zaindeksowane — wszystkie kierujemy na jedną nową sitemapę.
const YOAST_SITEMAPS = [
  "post",
  "page",
  "product",
  "team",
  "category",
  "product_cat",
  "pa_producent",
  "author",
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/kosmetyki-do-pielegnacji-zniszczonych-wlosow-lista-must-have/",
        destination: "/blog/kosmetyki-do-pielegnacji-zniszczonych-wlosow-lista-must-have/",
        permanent: true,
      },
      {
        source: "/jaka-fryzura-pasuje-do-mojej-twarzy/",
        destination: "/blog/jaka-fryzura-pasuje-do-mojej-twarzy/",
        permanent: true,
      },
      {
        source: "/jak-dbac-o-skore-glowy/",
        destination: "/blog/jak-dbac-o-skore-glowy/",
        permanent: true,
      },
      {
        source: "/kategorie/trendy/",
        destination: "/blog/",
        permanent: true,
      },
      // /koszyk/ obsługuje proxy.ts (410 Gone) — redirecty z next.config
      // wykonują się przed proxy, więc wpis 301 przechwyciłby ten adres.
      {
        source: "/sklep/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/umow/",
        destination: "/kontakt/",
        permanent: true,
      },

      // --- Pozostałości po WordPressie ---
      {
        source: "/author/krystian-wojewoda/",
        destination: "/zespol/krystian-wojewoda/",
        permanent: true,
      },
      {
        source: "/feed/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/sitemap_index.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      ...YOAST_SITEMAPS.map((name) => ({
        source: `/${name}-sitemap.xml`,
        destination: "/sitemap.xml",
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
