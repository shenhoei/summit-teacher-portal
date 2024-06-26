/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        textcolor:{
          "main":"#858585",
          "light":"#979797"
        },
        summit:{
          "blue-primary":"#1C51E1",
          "blue-primary-20":"rgba(28, 81, 225, 0.2)",
          "blue-primary-10":"rgba(28, 81, 225, 0.1)",
          "blue-secondary":"#4C6FFF",
          "blue-secondary-20":"rgba(76, 111, 255, 0.2)",
          "blue-light":"#EDF1FF",
          "blue-dark":"#0054a6",
          "gray-85":"#858585",
          "gray-97":"#979797",
          "gray-FA":"#FAFAFA",
          "gray-disabled":"#C7C7C7",
          "gray-stroke":"#CECECE",
          "gray-dark":"#7A7A7A",
          "red-primary":"#FF0000",
          "red-primary-20":"rgba(255, 0, 0, 0.2)",
          "yellow-primary":"#FFA903",
          "yellow-primary-20":"rgba(255, 169, 3, 0.2)",
          "green-primary":"#4CBB17",
          "green-primary-20":"rgba(76, 187, 23, 0.2)"
        },
      },
    },
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji"
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji"
      ],
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900"
    },
  },
  plugins: [],
};

