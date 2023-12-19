/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'font-family': ['Jost', 'sans-serif'],
      },
      colors: {
        'primary': '#326273',
        'secondary': '#5C9EAD',
        'tertiary': '#EEEEEE',
      }
    },
  },
  plugins: [],
}

