/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
    extend: { 
        fontFamily: { 
            "lato": ['Lato', 'sans-serif'],
            "playwrite": ['Playwrite PL', 'cursive'],
            "quentiessential":["Quintessential", 'serif'],
            "quent":["Old Standard TT", 'serif'],
            "zeyada":["Zeyada", 'cursive'],
            "nova":["Nova Square", 'sans-serif']

        } 
    }, 
  },
  plugins: [],
}

