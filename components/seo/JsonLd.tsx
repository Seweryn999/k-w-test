/**
 * Wstrzykuje dane strukturalne jako <script type="application/ld+json">.
 *
 * Znak "<" zamieniamy na jego odpowiednik unicode — JSON.stringify nie
 * czyści treści, a bez tego tekst przekazany do schematu mógłby zamknąć tag
 * i wstrzyknąć własny znacznik do dokumentu.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
