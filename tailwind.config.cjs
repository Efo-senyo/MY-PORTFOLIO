/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        violentRed: '#E10600',
      },
      fontFamily: {
        heading: ['Khand', 'system-ui', 'sans-serif'],
        body: ['Switzer', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

