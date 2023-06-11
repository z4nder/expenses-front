/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef8ff',
          100: '#d8eeff',
          200: '#bae1ff',
          300: '#8bd1ff',
          400: '#55b6ff',
          500: '#2d95ff',
          600: '#267ffa',
          700: '#0f5ee6',
          800: '#134cba',
          900: '#164392',
          950: '#122b59'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
