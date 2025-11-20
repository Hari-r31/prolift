import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: false, // no dark mode variants as per your setup
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Directly reference the CSS variable values
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        third: "var(--third)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        ring: "var(--ring)",
        destructive: "var(--destructive)",
        card: "var(--card)",
        input: "var(--input)",
        sidebar: "var(--sidebar)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(1, 151, 226, 0.3)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
