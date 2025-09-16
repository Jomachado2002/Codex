/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-knight': '#151931',
        'plunge-pool': '#00FFCC',
        'mazarine-blue': '#2A407E',
        'dazzling-blue': '#3850A0',
        'cloud-white': '#F2F2ED',
        'accent-green': '#BBF84C',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}