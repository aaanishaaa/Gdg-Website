/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Product Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
