import type { Metadata } from "next";
import { Geist_Mono, Albert_Sans, Alumni_Sans_Pinstripe } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClickSpark from "@/components/ClickSpark";

const albertSans = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
});

const alumniSans = Alumni_Sans_Pinstripe({
  weight: "400",
  variable: "--font-alumni",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "АІ-база | Спільнота",
  description: "Закрита Telegram-спільнота на тему AI",
  metadataBase: new URL("https://ai-base.one"),
  openGraph: {
    title: "АІ-база | Спільнота",
    description: "Закрита Telegram-спільнота на тему AI.",
    url: "https://ai-base.one",
    siteName: "АІ-база",
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "АІ-база | Спільнота",
    description: "Закрита Telegram-спільнота на тему AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
        lang="uk"
        className={`${albertSans.variable} ${alumniSans.variable} ${geistMono.variable} h-full antialiased dark`}
      >
      <body className="min-h-full flex flex-col bg-lacquer-black text-champagne">
        <ClickSpark
          sparkColor="#d4af37"
          sparkSize={12}
          sparkRadius={20}
          sparkCount={8}
          duration={500}
        >
          <Header />
          <main className="flex-1 flex flex-col w-full relative">{children}</main>
          <Footer />
        </ClickSpark>
      </body>
    </html>
  );
}
