import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainAppWrapper from "@/components/components/MainAppWrapper/MainAppWrapper";
import { jura, nunito, oswald, playFair } from "@/util/fonts";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "COE - ",
  description: "Página admin do COE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${nunito} ${jura} ${playFair} ${oswald} `}>
        <SessionProvider>
          <MainAppWrapper>{children}</MainAppWrapper>
        </SessionProvider>
      </body>
    </html>
  );
}
