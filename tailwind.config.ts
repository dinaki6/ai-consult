import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          DEFAULT: "#29292D",
          900: "#202023",
          800: "#323237",
          700: "#3C3C42",
          600: "#48484F",
        },
        wine: {
          DEFAULT: "#6B1428",
          soft: "#C8838B",
          dim: "#470D1B",
          hover: "#84203A",
        },
        mist: "#F6F1F3",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        shell: "1180px",
      },
      boxShadow: {
        wine: "0 0 0 1px rgba(107, 20, 40, 0.5), 0 18px 60px -25px rgba(107, 20, 40, 0.55)",
        card: "0 24px 70px -40px rgba(0, 0, 0, 0.9)",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "pulse-soft": "pulseSoft 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
