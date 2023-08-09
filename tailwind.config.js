/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#181d38',
      },
    },
    borderRadius: {
      55: '55px',
    },
  },
  plugins: [],
};
