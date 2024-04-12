import { Nunito_Sans, Jura, Playfair, Oswald } from "next/font/google";

const nunito_init = Nunito_Sans({
  subsets: ["latin"],
  weight: ["1000", "200", "400", "600", "800"],
  variable: "--font-nunito",
});

const jura_init = Jura({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jura",
});

const playfair_init = Playfair({
  subsets: ["latin"],
  weight: ["300", "500", "700", "900"],
  variable: "--font-playFair",
});

const oswald_init = Oswald({
  subsets: ["latin"],
  weight: ["300", "500", "700", "400", "200"],
  variable: "--font-oswald",
});

export const nunito = nunito_init.variable;
export const oswald = oswald_init.variable;
export const jura = jura_init.variable;
export const playFair = playfair_init.variable;
