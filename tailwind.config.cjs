/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Roboto Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-slice': 'linear-gradient(to left, #4F46E5, #EC4899)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ]
}