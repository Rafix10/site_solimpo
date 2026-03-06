/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#deb052',
          dark: '#c9982e',
        },
        dark: {
          DEFAULT: '#1a1a2e',
          light: '#2d2d44',
        }
      },
    },
  },
  plugins: [],
}
