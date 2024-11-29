
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Specify which files Tailwind should scan for class names
    "./public/index.html",        // Include HTML files for purging unused styles
  ],
  darkMode: 'class', 
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


