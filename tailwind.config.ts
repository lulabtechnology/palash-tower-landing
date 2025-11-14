import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        palash: {
          forest: "#0c2520",
          forestLight: "#13352d",
          ocean: "#042a3b",
          oceanLight: "#0a3c54",
          sand: "#d9b574",
          sandLight: "#f3e0b5"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "serif"]
      },
      boxShadow: {
        "soft-lg": "0 25px 50px -12px rgba(0,0,0,0.45)"
      }
    }
  },
  plugins: []
};

export default config;
