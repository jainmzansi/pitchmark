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
      'blue': {
        DEFAULT: '#D7E9F7'
      },
      'tan': {
        DEFAULT: '#F9F3DF'
      },
      'green': {
        DEFAULT: '#488674'
      },
      'pink': {
        DEFAULT: '#F1B8A7'
      },
      'white': {
        DEFAULT: '#FFFFFF'
      },
      'black': {
        DEFAULT: '#000000'
      }     
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
