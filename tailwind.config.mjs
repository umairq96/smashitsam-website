/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brandRed: '#7A1515',
        brandDark: '#07090E',
        brandCream: '#F7F0E6',
        brandBlue: '#7D95D1',
      },
      fontFamily: {
        sans: ['Syne', 'sans-serif'],
      },
    },
  },
  plugins: [],
};