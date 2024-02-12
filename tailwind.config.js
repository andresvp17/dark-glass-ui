/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'force-violet-50': '#f4f2ff',
        'force-violet-100': '#ece8ff',
        'force-violet-200': '#dbd3ff',
        'force-violet-300': '#c0b0ff',
        'force-violet-400': '#a284ff',
        'force-violet-500': '#8652ff',
        'force-violet-600': '#772ef9',
        'force-violet-700': '#681ce5',
        'force-violet-800': '#5817c0',
        'force-violet-900': '#49159d',
        'force-violet-950': '#26095d'
      }
    }
  },
  plugins: []
}
