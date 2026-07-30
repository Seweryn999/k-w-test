import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";
import logo from "@/assets/images/logo.png";

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="group">
          <Image
            src={logo}
            alt="Krystian Wojewoda Hair Design"
            width={72}
            height={48}
            className="h-auto w-[72px] transition group-hover:opacity-70"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-semibold uppercase tracking-[0.18em] text-white/75 transition hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <MobileMenu />
      </Container>
    </header>
  );
}
