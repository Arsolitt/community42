import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import { LocomativeScrollProvider } from "@/core/providers/LocomativeScroll";
import { Navbar } from "@/widgets/Navbar";
import "@/core/styles/globals.scss";
import { PageTransitionsProvider } from "@/core/providers/PageTransitions";

const raleway = Raleway({ subsets: ["latin", "cyrillic"], preload: true });

export const metadata: Metadata = {
  title: "Комьюнити",
  description:
    "Комьюнити - команда специалистов креативной индустрии. Разрабатываем дизайн, запускаем рекламные кампании, создаём фото и видео продукты.",
  keywords: ["Комьюнити", "Комьюнити. Дизайн. Продакшн. Реклама"],
  verification: {
    yandex: "e1b495ca3573a6c8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={raleway.className} suppressHydrationWarning={true}>
        <PageTransitionsProvider>
          <LocomativeScrollProvider>
            {children}
          </LocomativeScrollProvider>
        </PageTransitionsProvider>
        <Navbar />
      </body>
    </html>
  );
}
