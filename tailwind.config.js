/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: '#1A365D',    // Deep Navy Blue
        secondary: '#F2A900',  // Warm Amber/Gold
        teal: '#55B7B3',       // Soft Teal
        
        // Supporting colors
        'light-gray': '#E8ECF0',  // Improved light gray with better contrast
        'dark-gray': '#333333',
        
        // Additional accent options
        'blue-accent': '#4A7AAB',  // Lighter Blue
        'teal-dark': '#368F8B',    // Darker Teal
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
