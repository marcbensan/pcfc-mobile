/** @type {import('tailwindcss').Config} */
module.exports = {
  include: ["./nativewind-env.d.ts", "./src/components/**/*.{js,jsx,ts,tsx}"],
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#eaeaea",
        secondary: "#eaeaea",
        tertiary: "#eaeaea",
      },
    },
  },
  plugins: [],
};
