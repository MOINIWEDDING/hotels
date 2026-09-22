/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta inspirada en Santa Fe Sosúa: aguas turquesa del Caribe,
        // verde palmera profundo y arena cálida.
        lagoon: {
          50: '#eefbfb',
          100: '#d3f4f4',
          200: '#a8e8e9',
          300: '#72d6d8',
          400: '#3cbcc0',
          500: '#219da3',
          600: '#1a7d84',
          700: '#19646b',
          800: '#1a5157',
          900: '#19444a',
          950: '#0a282c',
        },
        palm: {
          50: '#f2f7f2',
          100: '#dfebe0',
          200: '#c0d7c3',
          300: '#96ba9c',
          400: '#699873',
          500: '#497b54',
          600: '#376142',
          700: '#2d4e37',
          800: '#26402f',
          900: '#20362a',
          950: '#0e1c15',
        },
        sand: {
          50: '#fdfaf4',
          100: '#faf1e0',
          200: '#f3e1bc',
          300: '#eaca8c',
          400: '#deac5a',
          500: '#d29438',
          600: '#c07b2c',
          700: '#9f6127',
          800: '#814e26',
          900: '#6a4122',
          950: '#392110',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px -15px rgba(10, 40, 44, 0.35)',
      },
    },
  },
  plugins: [],
}
