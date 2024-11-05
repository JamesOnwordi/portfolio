/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spicyRice: ['"Spicy Rice"', "serif"],
        aclonica: ['"Aclonica"', "sans-serif"],
        kurale: ['"Kurale"', "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        wool: "#DDDEDE",
        coldSky: "#375A73",
        caramel: "#c2B3A9",
        cookies: "#a48e7f",
        frost: "#6991AA",
      },
    },
  },
  plugins: [],
};
