/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,tsx,js}"],
  theme: {
    extend: {
      colors: {
        blue: "#3294F8",
        "base-title": "#E7EDF4",
        "base-subtitle": "#C4D4E3",
        "base-text": "#AFC2D4",
        "base-span": "#7B96B2",
        "base-label": "#3A536B",
        "base-border": "#1C2F41",
        "base-post": "#112131",
        "base-profile": "#0B1B2B",
        "base-background": "#071422",
        "base-input": "#040F1A",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
