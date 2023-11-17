/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      fijoRed: '#FF4243',
      fijoBackground: '#F6F6F6',
      fijoGray: '#7C7B7B',
      fijoWhite: '#FFFFFF',
      fijoGreen: '#49BB00',
      fijoBlack: '#212121',
    },
  },
  plugins: [],
};