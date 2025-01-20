/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blush: {
          200: "#fcf4a3", // bg-blush-200
        },
        peach: {
          200: "#d4fcb2", // bg-peach-200
        },
        antep:{
          200:"#a8ec74"
        }

      },
    },
  },
  plugins: [require("daisyui")],
};
