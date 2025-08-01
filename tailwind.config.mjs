// tailwind.config.js
import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "gradient-x": "gradient-x 10s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundSize: {
        200: "200% 200%",
      },
    },
  },
  plugins: [],
});
