/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const rotateX = plugin(function ({ addUtilities }) {
    addUtilities({
        '.rotate-y-180': {
            transform: 'rotateY(180deg)',
        },
    });
});
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1216px',
        },
        fontFamily: {
            noto: ['Noto Sans, sans-serif'],
        },
        colors: {
            white: '#ffffff',
            black: '#000',
            orange:'#ff6154',
            gray: '#4b587c',
            lightGray: '#4b587c',
            darkGray: '#eef2ff',
            backgroundLight:'#f5f8ff',
            background:'#fff',
            borderLight:"#d9e1ec"
        },
        extend: {
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray'),
                        fontSize: '1.125rem',
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/line-clamp'), rotateX, require('@tailwindcss/typography')],
};
