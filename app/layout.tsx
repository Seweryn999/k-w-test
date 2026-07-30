import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/chat/ChatWidget";

export const metadata: Metadata = {
  metadataBase: new URL("https://wojewodastudio.pl"),
  title: "Krystian Wojewoda Hair Design",
  description:
    "Salon fryzjerski w Łodzi. Strzyżenie, koloryzacja i stylizacja włosów.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body>
        <Header />
        {children}
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
