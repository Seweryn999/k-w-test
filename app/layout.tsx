import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { StickyBooking } from "@/components/layout/StickyBooking";
import { OG_IMAGE, OG_IMAGE_ALT, SITE_NAME, SITE_URL } from "@/lib/seo";

const DEFAULT_TITLE = "Krystian Wojewoda Hair Design";
const DEFAULT_DESCRIPTION =
  "Salon fryzjerski w Łodzi. Strzyżenie, koloryzacja i stylizacja włosów.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: SITE_NAME,
    url: `${SITE_URL}/`,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_IMAGE_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      {/*
        Dolny padding na mobile robi miejsce pod przyklejony pasek rezerwacji,
        żeby nie zasłaniał ostatniej linijki stopki.
      */}
      <body className="pb-[76px] md:pb-0">
        <Header />
        {children}
        <Footer />
        <StickyBooking />
        <ChatWidget />
      </body>
    </html>
  );
}
