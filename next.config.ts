import type { NextConfig } from "next";

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
      {
        source: "/koszyk/",
        destination: "/",
        permanent: true,
      },
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
    ];
  },
};

export default nextConfig;
