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
      colors: {
        background: "#1a1a1a",
        secondary: "#15223d",
        foreground: "#f2f2f2",
        muted: "rgba(242, 242, 242, 0.7)",
        accent: {
          DEFAULT: "#3b82f6",
          hover: "#1d4ed8",
          secondary: "#aceca1",
          orange: "#ff6b35",
        },
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