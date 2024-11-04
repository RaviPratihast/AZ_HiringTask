/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #05445E, #D2E3FF)",
      },
    },
  },
  plugins: [],
};
