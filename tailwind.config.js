/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        blueSky: {
          100: '#64b0ce',
          150: '#3d9cc2',
        },
      },
    },
  },
  plugins: [],
};
