module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        fit: 'fit-content'
      },
      width: {
        fit: 'fit-content'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
