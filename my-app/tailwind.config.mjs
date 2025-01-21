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
          100: "#b9cda9", // bg-peach-100
          200: "#d4fcb2", // bg-peach-200
          300: "#abc991", // bg-peach-300
        },
        antep: {
          200: "#a8ec74", // bg-antep-200
        },
        lacivert: {
          100: "#97e2e6", // bg-lacivert-100
          200: "#335c67", // bg-lacivert-200
          300: "#223f47", // bg-lacivert-300
        },
      },
      keyframes: {
        beat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.3)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.3)' },
          '70%': { transform: 'scale(1)' },
        },
      },
      animation: {
        beat: 'beat 1s infinite',
      },
    },
  },
  plugins: [require("daisyui")],
};
