

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.html"],
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.2rem",
			"1.5xl": "1.4rem",
      "2xl": "1.6rem",
      "3xl": "1.7rem",
			"3.5xl": "2rem",
      "4xl": "2.5rem",
      "5xl": "3rem",
      "6xl": "4rem"
    },
    extend: {
      colors: {
        primary: {
          100: "#E6F6FE",
          200: "#C0EAFC",
          300: "#9ADDFB",
          400: "#4FC3F7",
          500: "#03A9F4",
          600: "#0398DC",
          700: "#026592",
          800: "#014C6E",
          900: "#013349"
        },
        gray: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c"
        }
      },
      lineHeight: {
        hero: "4.5rem"
      }
    },
		fontFamily: {
			fontHind: ['Hind', 'sans-serif'],
		}
  },
  plugins: []
}
