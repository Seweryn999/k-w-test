import { BOOKSY_URL } from "@/data/navigation";

/**
 * Jedyny sposób na wystawienie przycisku rezerwacji.
 *
 * Booksy to zewnętrzny serwis, więc link zawsze otwiera się w nowej karcie
 * z `rel="noopener"` — i zawsze niesie tę samą etykietę. Powtarzalne
 * nazewnictwo CTA ułatwia klientowi rozpoznanie "to jest ten przycisk",
 * a nam późniejsze śledzenie konwersji w jednym miejscu.
 */
type Variant = "solid" | "outline" | "glass";

const VARIANTS: Record<Variant, string> = {
  /** Główne CTA — biały przycisk na ciemnym tle, maksymalny kontrast. */
  solid: "bg-white text-black hover:bg-white/85",
  /** CTA drugoplanowe, obok innego przycisku. */
  outline: "border border-white/25 text-white hover:bg-white hover:text-black",
  /** Wersja pod zdjęcie — półprzezroczysta, żeby nie zabijać kadru. */
  glass:
    "border border-white/25 bg-white/[0.15] text-white backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.26)] hover:bg-white hover:text-black",
};

const SIZES = {
  md: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4 text-sm",
} as const;

type BookingLinkProps = {
  children?: React.ReactNode;
  variant?: Variant;
  size?: keyof typeof SIZES;
  className?: string;
};

export function BookingLink({
  children = "Umów wizytę",
  variant = "solid",
  size = "md",
  className = "",
}: BookingLinkProps) {
  return (
    <a
      href={BOOKSY_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="booksy"
      className={`inline-flex items-center justify-center rounded-full font-black uppercase tracking-[0.18em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      {children}
    </a>
  );
}
