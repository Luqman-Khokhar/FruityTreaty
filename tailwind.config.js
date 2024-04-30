/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // Other PostCSS plugins as needed
  ],
  content:  [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  cSpell: {
    enabled: true,
    files: [
      '**/*.{js,jsx,ts,tsx,html,css}',
      '!node_modules/**/*', // Exclude node_modules directory
    ],
  },
};
