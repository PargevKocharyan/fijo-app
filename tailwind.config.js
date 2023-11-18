/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "rgb(var(--red) / <alpha-value>)",
        background: "rgb(var(--background) / <alpha-value>)",
        gray: "rgb(var(--gray) / <alpha-value>)",
        white: "rgb(var(--white) / <alpha-value>)",
        green: "rgb(var(--green) / <alpha-value>)",
        black: "rgb(var(--black) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
