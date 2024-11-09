/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#2563eb",
        secondary:"#00CED1"
      }
    },
  },
  plugins: [],
}

// 2563eb