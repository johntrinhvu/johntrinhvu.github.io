/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        panel: "var(--panel)",
        panel2: "var(--panel2)",
        line: "var(--line)",
        periwinkle: "var(--periwinkle)",
        steel: "var(--steel)",
        navy: "var(--navy)",
        hi: "var(--hi)",
        lo: "var(--lo)",
        faint: "var(--faint)",
        glass: "var(--glass)",
      },
      fontFamily: {
        display: ["'Baloo 2'", "sans-serif"],
        body: ["'Nunito'", "sans-serif"],
      },
    },
  },
  plugins: [],
};