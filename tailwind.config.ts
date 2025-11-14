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
          // Fondo base claro, tipo crema mediterránea
          cream: "#fdf7ef",
          // Arena / beige cálido para detalles
          sand: "#e8d3b0",
          sandLight: "#f5e8cf",
          // Color de texto principal
          ink: "#1b2733",
          // Verdes / azules del concepto "bosque + canal"
          forest: "#265b52",
          forestLight: "#3f7b6b",
          ocean: "#0f2f3a",
          oceanLight: "#1c4654",
          // Dorado suave para acentos
          accent: "#c9913b"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "serif"]
      },
      boxShadow: {
        "soft-lg": "0 25px 50px -12px rgba(15, 23, 42, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
