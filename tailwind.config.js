/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        shamel: ['FFShamelFamily', 'sans-serif']
      }
    }
  },
  darkMode: 'class',
  plugins: [
    require('flowbite/plugin')
  ]
}