/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
      },
    },
  },
  plugins: [forms, daisyui],
};
