import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Zwraca 410 Gone dla adresów po sklepie WooCommerce ze starej wersji strony.
 *
 * Sklep nie ma odpowiednika w nowym serwisie i nie wróci, więc 410 zamiast 301:
 * Google deindeksuje 410 szybciej niż masowe przekierowania na stronę główną,
 * które i tak zostałyby uznane za soft 404.
 *
 * Przekierowania 301 (wpisy blogowe, /kategorie/trendy/, /umow/) zostają
 * w next.config.ts — tamte adresy mają realne odpowiedniki.
 */

// Ścieżki dokładne (bez segmentów potomnych).
const GONE_EXACT = new Set(["/shop", "/koszyk", "/wszystkie-produkty"]);

// Prefiksy — pasuje sam segment i wszystko poniżej.
const GONE_PREFIXES = ["/produkt", "/kategoria-produktu", "/producent"];

function isGone(pathname: string): boolean {
  // trailingSlash: true, więc normalizujemy oba warianty do postaci bez slasha.
  const path =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  if (GONE_EXACT.has(path)) return true;

  return GONE_PREFIXES.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`),
  );
}

function gonePage(): string {
  return `<!doctype html>
<html lang="pl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Strona została usunięta — Krystian Wojewoda Hair Design</title>
<style>
  *{ box-sizing: border-box; }
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: #050505;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.6;
  }
  main { max-width: 34rem; }
  p.eyebrow {
    margin: 0 0 1.25rem;
    font-size: .75rem;
    letter-spacing: .55em;
    text-transform: uppercase;
    color: rgba(255,255,255,.55);
  }
  h1 {
    margin: 0 0 1.5rem;
    font-size: clamp(2rem, 7vw, 3.25rem);
    line-height: 1.05;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: -.02em;
  }
  p.lead { margin: 0 0 2.25rem; color: rgba(255,255,255,.7); font-size: 1.05rem; }
  .actions { display: flex; flex-wrap: wrap; gap: 1rem; }
  a {
    display: inline-flex;
    padding: 1rem 2rem;
    border-radius: 999px;
    font-size: .8rem;
    font-weight: 900;
    letter-spacing: .18em;
    text-transform: uppercase;
    text-decoration: none;
    transition: background .2s, color .2s;
  }
  a.primary { background: #fff; color: #000; }
  a.primary:hover { background: #e5e5e5; }
  a.secondary { border: 1px solid rgba(255,255,255,.25); color: #fff; }
  a.secondary:hover { background: #fff; color: #000; }
</style>
</head>
<body>
<main>
  <p class="eyebrow">Błąd 410</p>
  <h1>Strona została usunięta</h1>
  <p class="lead">
    Sklep internetowy salonu został zamknięty i ta strona nie jest już dostępna.
    Po kosmetyki do pielęgnacji włosów zapytaj bezpośrednio w salonie —
    dobierzemy je do kondycji Twoich włosów.
  </p>
  <div class="actions">
    <a class="primary" href="/">Strona główna</a>
    <a class="secondary" href="/kontakt/">Kontakt</a>
  </div>
</main>
</body>
</html>
`;
}

export function proxy(request: NextRequest) {
  if (isGone(request.nextUrl.pathname)) {
    return new NextResponse(gonePage(), {
      status: 410,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=0, must-revalidate",
        "X-Robots-Tag": "noindex",
      },
    });
  }

  return NextResponse.next();
}

// Wartości matchera muszą być stałymi analizowanymi w czasie builda —
// nie da się ich zbudować z tablic wyżej. Warianty ze slashem i bez.
export const config = {
  matcher: [
    "/shop",
    "/shop/",
    "/koszyk",
    "/koszyk/",
    "/wszystkie-produkty",
    "/wszystkie-produkty/",
    "/produkt/:path*",
    "/kategoria-produktu/:path*",
    "/producent/:path*",
  ],
};
