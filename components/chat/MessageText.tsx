import Link from "next/link";
import { Fragment, type ReactNode } from "react";

import { BOOKSY_URL } from "@/data/navigation";

/**
 * Renderuje treść wiadomości czatu, zamieniając składnię [tekst](adres)
 * na klikalne linki. Obsługuje WYŁĄCZNIE linki — bez pogrubień, list
 * i nagłówków. Elementy Reacta budowane są ręcznie, bez
 * dangerouslySetInnerHTML.
 *
 * Treść pochodzi między innymi z modelu językowego, więc każdy adres
 * przechodzi przez allowlistę. Adres spoza allowlisty renderowany jest
 * jako zwykły tekst razem z całą składnią markdown.
 */

const LINK_PATTERN = /\[([^\]\n]*)\]\(([^()\s]*)\)/g;

type SafeHref =
  | { kind: "internal"; href: string }
  | { kind: "booksy"; href: string }
  | { kind: "contact"; href: string };

/** trailingSlash: true — ścieżki wewnętrzne muszą kończyć się slashem. */
function withTrailingSlash(path: string): string {
  const separator = path.search(/[?#]/);
  const pathname = separator === -1 ? path : path.slice(0, separator);
  const suffix = separator === -1 ? "" : path.slice(separator);

  if (pathname.endsWith("/")) return `${pathname}${suffix}`;

  return `${pathname}/${suffix}`;
}

function classify(rawHref: string): SafeHref | null {
  const href = rawHref.trim();

  if (!href) return null;

  // Znaki sterujące — odrzucamy zanim cokolwiek dopasujemy.
  if (/[\u0000-\u001F\u007F]/.test(href)) return null;

  if (href.startsWith("/")) {
    // "//evil.com" jest adresem protocol-relative, a "/\evil.com"
    // przeglądarki traktują tak samo. Oba wyglądają na ścieżkę względną,
    // ale wyprowadzają poza serwis.
    if (href[1] === "/" || href[1] === "\\") return null;

    return { kind: "internal", href: withTrailingSlash(href) };
  }

  if (href === BOOKSY_URL || href.startsWith(BOOKSY_URL)) {
    return { kind: "booksy", href };
  }

  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return { kind: "contact", href };
  }

  return null;
}

const LINK_CLASS =
  "text-white underline decoration-white/40 underline-offset-2 transition hover:decoration-white";

function renderLink(target: SafeHref, label: string, key: string): ReactNode {
  if (target.kind === "internal") {
    return (
      <Link key={key} href={target.href} className={LINK_CLASS}>
        {label}
      </Link>
    );
  }

  if (target.kind === "booksy") {
    return (
      <a
        key={key}
        href={target.href}
        target="_blank"
        rel="noopener noreferrer"
        className={LINK_CLASS}
      >
        {label}
      </a>
    );
  }

  return (
    <a key={key} href={target.href} className={LINK_CLASS}>
      {label}
    </a>
  );
}

export function MessageText({ children }: { children: string }) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let index = 0;

  // matchAll na świeżym regexie — LINK_PATTERN jest globalny i ma stan.
  for (const match of children.matchAll(LINK_PATTERN)) {
    const [full, label, rawHref] = match;
    const start = match.index ?? 0;

    if (start > lastIndex) {
      nodes.push(
        <Fragment key={`t${index++}`}>{children.slice(lastIndex, start)}</Fragment>,
      );
    }

    const target = classify(rawHref);

    if (target && label.trim()) {
      nodes.push(renderLink(target, label, `l${index++}`));
    } else {
      // Adres spoza allowlisty (albo pusta etykieta) — całość jako tekst.
      nodes.push(<Fragment key={`t${index++}`}>{full}</Fragment>);
    }

    lastIndex = start + full.length;
  }

  if (lastIndex < children.length) {
    nodes.push(
      <Fragment key={`t${index++}`}>{children.slice(lastIndex)}</Fragment>,
    );
  }

  return <>{nodes}</>;
}
