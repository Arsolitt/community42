import type { Metadata } from "next";

import { Raleway } from "next/font/google";
import React from "react";

import { Navbar } from "@/components/Navbar";
import { LocomativeScrollProvider } from "@core/providers/LocomativeScroll";

import "@core/styles/globals.css";

const raleway = Raleway({ subsets: ["latin", "cyrillic"], preload: true });

export const metadata: Metadata = {
  title: "Комьюнити",
  description:
    "Комьюнити - команда специалистов креативной индустрии. Разрабатываем сайты и цифровые платформы, формируем бренды и айдентику, создаём достойные продукты",
  keywords: ["Комьюнити", "Комьюнити. Дизайн. Разработка. Контент"],
  verification: {
    yandex: "e1b495ca3573a6c8"
  }
};
const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang='ru'>
      <body className={raleway.className} suppressHydrationWarning>
        <LocomativeScrollProvider>{children}</LocomativeScrollProvider>
        <Navbar />
      </body>
    </html>
  );
};

export default RootLayout;
