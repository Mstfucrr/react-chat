
import tailwindcss from 'tailwindcss';

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D19C97",
        primaryDark: "#c5837c",
        secondary: "#EDF1FF",
      }
    }
  },
  plugins: [],
}
