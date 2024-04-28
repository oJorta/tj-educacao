import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "primereact/resources/themes/lara-light-blue/theme.css";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Educação",
  description: "Site para o observatório da educação infantil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header/>
        
        <MaxWidthWrapper>
          {children}
        </MaxWidthWrapper>
      </body>
    </html>
  );
}
