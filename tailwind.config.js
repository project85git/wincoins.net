/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollbarGutter: {
        stable: "stable",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
