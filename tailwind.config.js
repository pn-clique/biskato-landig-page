/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../assets/bg-find-expert-1400-x2.png')",
      },
    },
  },
  plugins: [],
}
