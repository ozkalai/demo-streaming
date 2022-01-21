module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#017EFE',
        'gray': '#414141',
        'lightGray': '#D8D8D8',
        'black': '#1E1E1E',
        'white': "#FFFFFF"
      },
    },
    
    fontFamily: {
      'raleway': ['raleway', 'sans-serif'],
    },
  },
  plugins: [],
  
}