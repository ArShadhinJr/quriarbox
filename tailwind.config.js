/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'w2xl' : '70%', 
        'wxl' : '75%',
        'wlg' : '80%', 
        'wmd' : '85%', 
        'wsm' : '90%'
      }, 
      maxWidth: {
        'wall' : '95%'
      }, 
      colors: {
        'primary': '#F95C19',
        'sec': '#261134', 
        
      },
      backgroundImage: {
        'delivery': "url('/src/assets/delivery.jpg')",
        'quote': "url('/src/assets/quote.png')",
      }
    },
  },
  plugins: [],
}