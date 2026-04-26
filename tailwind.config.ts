import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0D1B2A",
        navy2: "#10243A",
        teal: "#1B8CA6",
        tealLight: "#2FB8D8",
        amber: "#F4A014",
        success: "#1A9E6E",
        purpleAi: "#6B4FA0",
        card: "#F7FAFC",
        textPrimary: "#2E3A47",
        textSecondary: "#6B7C8D"
      },
      boxShadow: {
        glow: "0 0 28px rgba(47, 184, 216, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
