import Link from "next/link";

import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

/**
 * Okruszki: widoczna ścieżka nawigacji plus odpowiadający jej BreadcrumbList.
 *
 * Google potrafi pokazać w wyniku wyszukiwania ścieżkę
 * "wojewodastudio.pl › Zespół › Aneta" zamiast surowego adresu — klika się
 * lepiej i mówi użytkownikowi, gdzie trafi. Warunek: oznaczona ścieżka musi
 * mieć odpowiednik widoczny na stronie, dlatego oba elementy siedzą tutaj
 * razem i nie da się dodać jednego bez drugiego.
 *
 * Ostatni element jest tekstem, nie linkiem — to strona, na której już jesteśmy.
 */
type Crumb = {
  name: string;
  /** Ścieżka ze slashem na końcu, np. "/zespol/". */
  path: string;
};

export function Breadcrumbs({
  crumbs,
  className = "",
}: {
  crumbs: Crumb[];
  className?: string;
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <nav
        aria-label="Okruszki"
        className={`text-xs font-black uppercase tracking-[0.28em] text-white/40 ${className}`}
      >
        <Link href="/" className="transition hover:text-white">
          Strona główna
        </Link>

        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;

          return (
            <span key={crumb.path}>
              <span className="px-2 text-white/25">/</span>

              {isLast ? (
                <span className="text-white/60">{crumb.name}</span>
              ) : (
                <Link href={crumb.path} className="transition hover:text-white">
                  {crumb.name}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
