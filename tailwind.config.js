/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind scans all your files
    theme: {
      extend: {
        fontFamily: {
          sans: ["InterVariable", "sans-serif"], // Set Inter as the default sans-serif font
        },
      },
    },
    plugins: [],
  };