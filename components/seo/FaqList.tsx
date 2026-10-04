import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageSchema, type FaqItem } from "@/lib/schema";

/**
 * Widoczna lista pytań i odpowiedzi razem z odpowiadającym jej FAQPage.
 *
 * Tak jak w Breadcrumbs: oba elementy siedzą w jednym komponencie, żeby nie
 * dało się wystawić markupu FAQ bez pokrycia w treści strony (Google
 * traktuje to jako spam). Odpowiedzi są w <details>, ale pozostają w HTML-u,
 * więc robot widzi pełną treść.
 */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <>
      <JsonLd data={faqPageSchema(items)} />

      <div className="grid gap-4 lg:grid-cols-2">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur open:bg-white/[0.06]"
          >
            {/* <summary> dopuszcza jeden nagłówek jako bezpośrednie dziecko. */}
            <summary className="cursor-pointer list-none marker:content-none">
              <h3 className="flex items-start justify-between gap-4 text-lg font-black leading-snug">
                {item.question}
                <span
                  aria-hidden
                  className="mt-1 shrink-0 text-white/35 transition group-open:rotate-45"
                >
                  +
                </span>
              </h3>
            </summary>

            <p className="mt-4 leading-7 text-white/65">{item.answer}</p>
          </details>
        ))}
      </div>
    </>
  );
}
