import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-dark": "#C47F17",
        yellow: "#DBAC2C",
        "yellow-light": "#F1E9C9",
        "purple-dark": "#4B2995",
        purple: "#8047F8",
        "purple-light": "#EBE5F9",
        "base-title": "#272221",
        "base-subtitle": "#403937",
        "base-text": "#574F4D",
        "base-label": "#8D8686",
        "base-hover": "#D7D5D5",
        "base-button": "#E6E5E5",
        "base-input": "#EDEDED",
        "base-card": "#F3F2F2",
        background: "#FAFAFA",
        white: "#FFFFFF",
      },
      fontFamily: {
        roboto: "Roboto, sans-serif",
        baloo: "Baloo 2, sans-serif",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
