import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f3f7ff",
          100: "#dce7ff",
          200: "#b5ceff",
          300: "#80a8ff",
          400: "#4c81ff",
          500: "#1a5aff",
          600: "#1243cc",
          700: "#0d3199",
          800: "#081f66",
          900: "#040f33"
        }
      },
      boxShadow: {
        card: "0 15px 60px -25px rgba(15, 23, 42, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
