/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('./images/2.jpg')",
        'custom-gradient': 'linear-gradient(50deg, #2857a4 0%, #403066 74%)',
      },
      colors: {
        't-blue': '#0D0D60',
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'], // Adding the custom font stack to the sans family
      },
    },
  },
  plugins: [],
}
