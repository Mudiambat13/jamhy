/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        'jamhy-blue': '#1a365d',
        'jamhy-gray': '#4a5568',
      },
    },
  },
  plugins: [],
}

