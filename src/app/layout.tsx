import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Практический ИИ для бизнеса",
    template: "%s",
  },
  description:
    "Практический ИИ для бизнеса: кейсы внедрения, статьи, руководства и база знаний. Автоматизация продаж, ИИ-ассистенты, аналитика и интеграции с CRM.",
  keywords: [
    "ИИ-автоматизация",
    "искусственный интеллект",
    "внедрение ИИ",
    "автоматизация продаж",
    "ИИ-ассистент",
    "база знаний",
  ],
  openGraph: {
    title: "Практический ИИ для бизнеса",
    description: "Кейсы внедрения, статьи и руководства: как ИИ меняет реальные процессы, без хайпа.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-graphite font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-wine focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          К основному содержанию
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
