import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        coal: 'rgb(var(--coal) / <alpha-value>)',         
        oxford: 'rgb(var(--oxford) / <alpha-value>)',     
        eggshell: 'rgb(var(--eggshell) / <alpha-value>)', 
        sienna: 'rgb(var(--sienna) / <alpha-value>)',     
        mint: 'rgb(var(--mint) / <alpha-value>)',         
        muted: 'rgb(var(--eggshell) / 0.7)',             
      },
      animation: {
        scroll: "scroll 35s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;