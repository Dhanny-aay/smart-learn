/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ptserif': ['"PT Serif"', 'serif'],
      },
      backgroundImage: {
        'eli': "url('./Eli.png')",
      },
    },
  },
  plugins: [],
}
