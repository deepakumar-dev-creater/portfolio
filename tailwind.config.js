module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
 
    extend: {
      colors: {
        blue: {
          450: '#1597E5'
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/Hero_image-copy.jpeg')",
        "services":"url('/.webp')",
      },
    },
  },
  variants: {
    extend: {
  
    },
  },
  plugins: [],
};
