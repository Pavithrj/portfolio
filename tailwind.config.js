import { fontFamily } from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0, transform: "translateY(-10px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
            },
            animation: {
                fadeIn: "fadeIn 1s ease-in-out forwards",
                fadeInDelay: "fadeIn 1s ease-in-out 0.3s backwards",
            },
            fontFamily: {
                sans: ["var(--font-sora)", ...fontFamily.sans],
            }
        }
    },
    plugins: []
};