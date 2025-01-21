/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        smooch: ['Smooch Sans', 'sans-serif'], // Smooch Sans fontu tanımlandı
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blush: {
          200: "#fcf4a3", // bg-blush-200
        },
        peach: {
          200: "#d4fcb2", // bg-peach-200
          300:"#abc991",
          100:"#b9cda9"
        },
        antep:{
          200:"#a8ec74"
        },
        lacivert:{
          200:"#335c67",
          100:"#97e2e6",
          300:"#223f47"
        }

      },
    },
  },
  plugins: [require("daisyui")],
};
