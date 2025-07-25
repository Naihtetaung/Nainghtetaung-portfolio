// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        destructive: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--foreground))',
        background: 'hsl(var(--background))',
        // add others as needed
      },
      fontFamily: {
        heading: ['var(--font-heading)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
