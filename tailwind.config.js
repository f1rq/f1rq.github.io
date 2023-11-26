/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {}
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                dark: {
                    "primary": "#1f2c47",
                    "secondary": "#6e85fa",
                    "accent": "#3e5fab",
                    "neutral": "#e5e7eb",
                    "base-100": "#0e1421",
                    "base-200": "#0f172a",
                    "base-300": "#444444",
                    "info": "#3abff8",
                    "success": "#36d399",
                    "warning": "#fbbd23",
                    "error": "#f87272",
                }
            }
        ],
    },
};