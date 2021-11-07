module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/Hero_image-copy.jpeg')",
        "services":"url('/.webp')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
