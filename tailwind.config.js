/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "QueenBlue": "#4A7591",
        "Verdigris": "#4EB1AC",
        "PowderBlue": "#ACD6D6",
        "LightCarminePink": "#D96C6F",
        "Tumbleweed": "#E9AD94",
        "MainGray": "#262626",
      },
    },
    fontFamily: {
      MontserratLight: ["MontserratLight", 'sans-serif'],
      MontserratRegular: ["MontserratRegular", 'sans-serif'],
      MontserratMedium: ["MontserratMedium", 'sans-serif'],
      MontserratSemiBold: ["MontserratSemiBold", 'sans-serif'],
      MontserratBold: ["MontserratBold", 'sans-serif'],
      MontserratExtraBold: ["MontserratExtraBold", 'sans-serif'],
    },
  },
  plugins: [],
};
