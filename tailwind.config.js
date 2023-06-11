/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        blueSky: {
          50: '#9ecee1',
          100: '#8bc4da',
          200: '#77bad4',
          300: '#64b0ce',
          400: '#50a6c8',
          500: '#3d9cc2',
          600: '#378caf',
          700: '#317d9b',
          800: '#2b6d88',
          900: '#255e74',
          950: '#1f4e61',
        },
      },
    },
  },
  plugins: [],
};
