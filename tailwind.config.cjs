/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      borderWidth: {
        '15': '15px',
        '25': '25px',
      },
      fontSize: {
        'tiny': '.5rem',
        'reg': '.6rem',
      },
    },
    screens: {
      'sm-min': '640px',
      'md-min': '768px',
      'lg-min': '1024px',
      'xl-min': '1280px',
      '2xl-min': '1536px',
    },
  }
}