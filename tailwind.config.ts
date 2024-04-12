import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#1e1e1e",
        red700: "#A23338",
        red900: "#80282C",
        ligthDark: "#d9d9d9",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        jura: ["var(--font-jura)"],
        play_fair: ["var(--font-playFair)"],
        oswald: ["var(--font-oswald)"],
      },
    },
  },
  plugins: [],
};
export default config;
