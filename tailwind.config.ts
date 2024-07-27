import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "move-circle": {
          "0%, 100%": { transform: "translate(-100%, -50%)" },
          "50%": { transform: "translate(100%, -50%)" },
        },
      },
      animation: {
        "move-circle": "move-circle 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
