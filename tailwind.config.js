/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Accents sampled from the INNO-NEST logo (bubble + "NEST" lettering).
        aqua: '#38b8c0',
        leaf: '#6cc35a',
      },
    },
  },
  plugins: [],
};
