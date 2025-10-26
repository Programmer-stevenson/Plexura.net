/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'plexura': {
          'deep-blue': '#0A1A2F',
          'midnight': '#142D4C',
          'azure': '#007BFF',
          'teal': '#00C2CB',
          'white': '#EAEAEA',
          'gray': '#A0A7B0',
          'mint': '#3EE4A8',
        }
      }
    },
  },
  plugins: [],
}