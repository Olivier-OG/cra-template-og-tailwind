module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    screens: {
      tablet: '480px',
      laptop: '768px',
      desktop: '1024px',
      tv: '1200px',
    },
    fontFamily: {
      sans: ['Roboto'],
    },
    extend: {},
  },
  plugins: [],
}
