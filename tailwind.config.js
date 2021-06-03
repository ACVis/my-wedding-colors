module.exports = {
  // sets utility css to !important
  important: true,
  purge: {
    // enabled: false,
    content: ["./src/**/*.{js,ts,jsx,tsx}"]
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
