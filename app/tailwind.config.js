/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"], // Regular
        "montserrat-bold": ["Montserrat-Bold"],
        "montserrat-extrabold": ["Montserrat-ExtraBold"],
        "montserrat-light": ["Montserrat-Light"],
        "montserrat-medium": ["Montserrat-Medium"],
        "montserrat-semibold": ["Montserrat-SemiBold"],
      },
    },
  },
  plugins: [],
}