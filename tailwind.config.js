const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.js',
    ],
    darkMode: false,
    theme: {
        colors: {
            gray: colors.coolGray,
            blue: colors.blueGray,
            red: colors.rose,
            pink: colors.fuchsia,
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            }
        },
    },
    variants: {},
    plugins: [],
}