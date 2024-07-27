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
        sans: ['var(--font-poppins)'],
        mono: ['var(--font-poppins)']
      },

      colors: {
        "cabecalho": "var(--cabecalho)",
        "button": "var(--button-top)",
        "color-green": "var(--color-green)",
        "title": "var(--title)",
        "principal": "var(--shape-principal)",
        "red": "var(--color-red)",
        "text": "var(--text-color)",
        "fundo": "var(--backgroud)"
      }
      
    },
  },
  plugins: [],
};
export default config;
