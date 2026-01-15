/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'royal-green': {
                    DEFAULT: '#1B4D3E',
                    light: '#2D5F50',
                    dark: '#0A2A20',
                },
                'royal-gold': {
                    DEFAULT: '#D4AF37',
                    light: '#F4CF67',
                    dark: '#996515',
                }
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
