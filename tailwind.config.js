/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF3EC',
        blush: '#F4DFDC',
        rose: {
          DEFAULT: '#C58A8B',
          deep: '#A5646A',
          light: '#DDA9A8',
        },
        cocoa: {
          DEFAULT: '#2B1710',
          light: '#4A2A1E',
        },
        caramel: '#D9A24B',
      },
      fontFamily: {
        display: ['"Fredoka"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(4deg)' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
