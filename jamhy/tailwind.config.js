/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'jamhy-blue': 'var(--jamhy-blue)',
      }
    },
  },
  plugins: [],
}

