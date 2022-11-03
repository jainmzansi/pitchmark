/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/pages/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'Pitchmark-Success': "url('https://ik.imagekit.io/pathventures/pitchmark/New/Pitchmark-Success.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667455497275')",
      }
    },
    colors: {
      'pitchmark-blue': '#D7E9F7',
      'pitchmark-tan': '#F9F3DF',
      'pitchmark-green': '#488674',
      'pitchmark-pink': '#F1B8A7',
    }
  },
  plugins: [],
}
