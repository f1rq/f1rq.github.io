/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {},
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
          night: {
              ...require("daisyui/src/theming/themes")["night"],
              "accent": "#00467a",
              "primary": "#002946",
              "base-100": "#001c30"

          }
      }
    ],
},
};
