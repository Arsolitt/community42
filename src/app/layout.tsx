import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import { Navbar } from "@/widgets/Navbar";
import "@/core/styles/globals.scss";

const raleway = Raleway({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Комьюнити",
  description: "Прикольное описание",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={raleway.className}>
        {children}
        <Navbar />
      </body>
    </html>
  );
}
