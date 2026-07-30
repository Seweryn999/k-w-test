"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BOOKSY_URL, navigation } from "@/data/navigation";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Otwórz menu"
        className="relative z-[100000] text-white"
      >
        <Menu size={28} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[999999] isolate bg-black text-white">
          <div className="absolute inset-0 z-0 bg-black" />

          <div className="relative z-10 flex min-h-dvh flex-col bg-black">
            <div className="flex items-center justify-between border-b border-white/10 px-7 py-5">
              <div className="flex h-11 w-11 items-center justify-center border border-white/40 text-sm font-bold tracking-[0.25em]">
                KW
              </div>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Zamknij menu"
                className="text-white"
              >
                <X size={30} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center px-7">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-white/10 py-5 text-3xl font-black uppercase leading-none"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="border-t border-white/10 px-7 pb-8 pt-5">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-full items-center justify-center bg-white text-sm font-bold uppercase tracking-[0.25em] text-black"
              >
                Umów wizytę
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
