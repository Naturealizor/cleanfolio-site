// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./src/**/*.{html,js,svelte,ts}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

const path = require('path');

module.exports = {
  content: [
    path.join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
    path.join(__dirname, './components/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

// module.exports = {
//   content: ['./src/**/*.{html,js,svelte,ts}'],
//   theme: {
//     extend: {
//       borderWidth: {
//         '15': '15px',
//         '25': '25px',
//       },
//       fontSize: {
//         'tiny': '.5rem',
//         'reg': '.6rem',
//       },
//       fontFamily: {
//         'futura': ['Futura Md BT Medium'],
//         'josefin': ['Josefin Sans Medium'],
//         'josefin-lite': ['Josefin Sans Light'],
//         'basker': ['Baskervville'],
//       },
//       colors: {
        
        
//       },
//     },
//     backgroundImage: {
      
//     },
//     variants: {
//       display: ["group-hover"]
//     },
//     screens: {
//       // '2xl': {'max': '1535px'},
//       // => @media (max-width: 1535px) { ... }
      
//       // 'lap': { 'max': '1440px' },
      
//       // 'xl': {'max': '1320px'},
//       // => @media (max-width: 1279px) { ... }
      
//       // 'md-b': { 'max': '1125px'},
      
//       // 'lg': {'max': '1023px'},
//       // => @media (max-width: 1023px) { ... }


//       // 'md': {'max': '767px'},
//       // => @media (max-width: 767px) { ... }

//       // 'sm': {'max': '639px'},
//       // => @media (max-width: 639px) { ... }

// // ---------------------------------------------------------------------------------------------------

//       'sm-min': '640px',
//       // => @media (min-width: 640px) { ... }

//       'md-min': '768px',
//       // => @media (min-width: 768px) { ... }

//       'lg-min': '1024px',
//       // => @media (min-width: 1024px) { ... }

//       'xl-min': '1280px',
//       // => @media (min-width: 1280px) { ... }

//       '2xl-min': '1536px',
//       // => @media (min-width: 1536px) { ... }
//     },
//     plugins: [],
//   }
// }
