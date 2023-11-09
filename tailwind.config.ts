import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        anjir: ["Aguafina Script", "cursive"],
      },
      colors: {
        primary: "#AD881E",
        secondary: "#C9A227",
        tertiary: "#B69121",
      },
    },
  },
};
export default config;
