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
        background: 'rgb(var(--bg-main) / <alpha-value>)',
        surface: 'rgb(var(--bg-surface) / <alpha-value>)',
        foreground: 'rgb(var(--text-main) / <alpha-value>)',
        muted: 'rgb(var(--text-main) / 0.7)',
        brand: {
          primary: 'rgb(var(--brand-primary) / <alpha-value>)',
          secondary: 'rgb(var(--brand-secondary) / <alpha-value>)',
        }
      },
      animation: {
        scroll: "scroll 35s linear infinite",
        pulse: "pulse 2s infinite",
        scan: "scan 3s infinite linear",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulse: {
          "0%, 100%": { opacity: "0.5", transform: "translate(-50%, -50%) scale(1)" },
          "50%": { opacity: "1", transform: "translate(-50%, -50%) scale(1.2)" },
        },
        scan: {
          "0%": { top: "10px", opacity: "0" },
          "20%, 80%": { opacity: "1" },
          "100%": { top: "50px", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;