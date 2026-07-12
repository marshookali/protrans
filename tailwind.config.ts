import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base surfaces — neutral black/white identity (no green undertone)
        asphalt: {
          DEFAULT: "#131313", // near-black base
          soft: "#1B1B1B", // raised surface / cards
          line: "#2C2C2C", // hairline dividers on dark
        },
        paper: {
          DEFAULT: "#F4F4F2", // neutral off-white
          soft: "#E8E8E6",
          line: "#D6D6D4",
        },
        ink: "#131313",
        // Accents
        signal: {
          DEFAULT: "#FF5B29", // signal orange — the single brand accent
          soft: "#FF7A50",
          deep: "#E23F10",
        },
        // Secondary "accent" collapsed to a monochrome steel-gray so the whole
        // palette stays black/white + orange. Every `cold` class now reads neutral.
        cold: {
          DEFAULT: "#B4B4B4",
          soft: "#DADADA",
          deep: "#7C7C7C",
        },
      },
      fontFamily: {
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter: "-0.03em",
      },
      fontWeight: {
        "400": "400",
        "500": "500",
        "600": "600",
        "700": "700",
        "800": "800",
        "900": "900",
      },
      maxWidth: {
        shell: "1320px",
      },
      transitionTimingFunction: {
        // premium easing curves
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
        entrance: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "route-dash": {
          to: { strokeDashoffset: "0" },
        },
        "marker-run": {
          "0%": { offsetDistance: "0%" },
          "100%": { offsetDistance: "100%" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.6)", opacity: "0.8" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        "scroll-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.22,1,0.36,1) infinite",
        "scroll-x": "scroll-x 34s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
