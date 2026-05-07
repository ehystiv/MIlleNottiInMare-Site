/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        wood: {
          950: '#0e0904',
          900: '#1c1408',
          800: '#251a0c',
          700: '#2e2010',
          600: '#3a2a14',
          500: '#4a3520',
        },
        gold: {
          300: '#f0d080',
          400: '#e8c060',
          500: '#d4a84b',
          600: '#b08030',
          700: '#8b6020',
        },
        rum: {
          300: '#f0a060',
          400: '#e88840',
          500: '#e07b39',
          600: '#c06020',
          700: '#9a4810',
        },
        parchment: {
          100: '#fdf8ef',
          200: '#f5ecd7',
          300: '#e8d8b8',
          400: '#c8b090',
          500: '#a08060',
          600: '#8a6e4a',
          700: '#6b5030',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
