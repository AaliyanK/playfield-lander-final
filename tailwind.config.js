/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#88B772",
        paper: "#F6F3EE",
        ink: "#0B0B0C",
        inkSoft: "#2B2B2B",
        rule: "rgba(0, 0, 0, 0.08)",
        veil: "rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        serif: ["var(--font-test-signifier)", "serif"],
        sans: ["var(--font-consolas)", "monospace"],
        mono: ["var(--font-consolas)", "monospace"],
      },
      fontSize: {
        "display-xl": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-l": [
          "2.5rem",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
        ],
        "body-m": ["1.125rem", { lineHeight: "1.6" }],
        "caption-s": ["0.875rem", { lineHeight: "1.4" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
        38: "9.5rem",
        42: "10.5rem",
        46: "11.5rem",
        50: "12.5rem",
        54: "13.5rem",
        58: "14.5rem",
        62: "15.5rem",
        66: "16.5rem",
        70: "17.5rem",
        74: "18.5rem",
        78: "19.5rem",
        82: "20.5rem",
        86: "21.5rem",
        90: "22.5rem",
        94: "23.5rem",
        98: "24.5rem",
        102: "25.5rem",
        106: "26.5rem",
        110: "27.5rem",
        114: "28.5rem",
        118: "29.5rem",
        120: "30rem",
      },
      borderRadius: {
        xl: "1rem",
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        "scale-in": "scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        drift: "drift 20s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        drift: {
          "0%, 100%": { transform: "translateX(0) translateY(0)" },
          "25%": { transform: "translateX(10px) translateY(-5px)" },
          "50%": { transform: "translateX(-5px) translateY(10px)" },
          "75%": { transform: "translateX(-10px) translateY(-5px)" },
        },
      },
    },
  },
  plugins: [],
};
