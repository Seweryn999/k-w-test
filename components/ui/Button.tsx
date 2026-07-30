import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "light" | "dark";
};

export function Button({ href, children, variant = "light" }: ButtonProps) {
  const styles =
    variant === "light"
      ? "bg-white text-black hover:bg-neutral-200"
      : "bg-black text-white border border-white/20 hover:bg-neutral-900";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-medium transition ${styles}`}
    >
      {children}
    </Link>
  );
}
