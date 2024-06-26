import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainAppWrapper from "@/components/components/MainAppWrapper/MainAppWrapper";
import { jura, nunito, oswald, playFair } from "@/util/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito} ${jura} ${playFair} ${oswald} `}>
        <MainAppWrapper>{children}</MainAppWrapper>
      </body>
    </html>
  );
}
