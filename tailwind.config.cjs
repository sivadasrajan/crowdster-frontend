/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0070f4",
          

 
          "secondary": "#baf477",
                    
          
           
          "accent": "#f93664",
                    
          
           
          "neutral": "#19262E",
                    
          
           
          "base-100": "#E0E5EB",
                    
          
           
          "info": "#5CC6DB",
                    
          
           
          "success": "#27E7D1",
                    
          
           
          "warning": "#C59A16",
                    
          
           
          "error": "#F60929",
        },
      },
    ],
  },
  extend: {
    colors: {
      gray: {
        100: '#FBFBFB',
        200: '#EAEAEA',
        300: '#DFDFDF',
        400: '#999999',
        500: '#7F7F7F',
        600: '#666666',
        700: '#4C4C4C',
        800: '#333333',
        900: '#191919',
      },
      blue: {
        100: '#E6F0FD',
        200: '#CCE2FC',
        300: '#99C5FA',
        400: '#66A9F7',
        500: '#338CF5',
        600: '#0070F4',
        700: '#0064DA',
        800: '#0059C2',
        900: '#004391',
      },
      teal: {
        100: '#E6FFFA',
        200: '#B2F5EA',
        300: '#81E6D9',
        400: '#4FD1C5',
        500: '#3ABAB4',
        600: '#319795',
        700: '#2C7A7B',
        800: '#285E61',
        900: '#234E52',
      },
    },
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}