const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.js',
    ],
    darkMode: false,
    theme: {
        container: {
            center: true
        },
        colors: {
            gray: colors.trueGray,
            blue: colors.blueGray,
            red: colors.green,
            pink: colors.fuchsia,
            white: colors.white
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Playfair Display', 'serif'],
            mono: ['DM Mono', 'monospace']
          },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            colors: {
                blush: {
                  '50':  '#fdfcfb',
                  '100': '#fcf0ef',
                  '200': '#f9cbde',
                  '300': '#f19cbd',
                  '400': '#f06b97',
                  '500': '#e74878',
                  '600': '#ed254e',
                  '700': '#ae233f',
                  '800': '#811929',
                  '900': '#501015',
                },
                sunset: {
                  '50':  '#fcfbf9',
                  '100': '#faf0e5',
                  '200': '#f6d4c8',
                  '300': '#e9aa9a',
                  '400': '#df7b6b',
                  '500': '#cd5848',
                  '600': '#b23d30',
                  '700': '#8a2e25',
                  '800': '#60201a',
                  '900': '#3b140f',
                },
                chocolate: {
                  '50':  '#fcfbf7',
                  '100': '#f9f0d9',
                  '200': '#f3d9b0',
                  '300': '#e2b17d',
                  '400': '#cf854e',
                  '500': '#b6632e',
                  '600': '#98481e',
                  '700': '#743618',
                  '800': '#4f2513',
                  '900': '#32170c',
                },
                sepia: {
                  '50':  '#fafaf6',
                  '100': '#f7f0d9',
                  '200': '#ecddae',
                  '300': '#d2b97a',
                  '400': '#ae8f4b',
                  '500': '#8f6f2b',
                  '600': '#73551c',
                  '700': '#573f18',
                  '800': '#3b2b13',
                  '900': '#261a0d',
                },
                asparagus: {
                  '50':  '#f9f9f6',
                  '100': '#f3f0df',
                  '200': '#e3dfba',
                  '300': '#c0be86',
                  '400': '#909656',
                  '500': '#6f7633',
                  '600': '#595c23',
                  '700': '#45451d',
                  '800': '#2f2f16',
                  '900': '#1e1d10',
                },
                teal: {
                  '50':  '#f4f8f8',
                  '100': '#def0f6',
                  '200': '#b7e2ec',
                  '300': '#82c4d3',
                  '400': '#47a1b3',
                  '500': '#348193',
                  '600': '#2b6877',
                  '700': '#254e5c',
                  '800': '#1a3542',
                  '900': '#11202c',
                },
                denim: {
                  '50':  '#f5f9fa',
                  '100': '#def1fb',
                  '200': '#b9dff6',
                  '300': '#88bfe8',
                  '400': '#559ad6',
                  '500': '#4078c4',
                  '600': '#355cad',
                  '700': '#2b458a',
                  '800': '#1f2f62',
                  '900': '#121d3f',
                },
                royalblue: {
                  '50':  '#f6f9fb',
                  '100': '#e1f1fc',
                  '200': '#c0dcf9',
                  '300': '#94baf0',
                  '400': '#6993e4',
                  '500': '#536fda',
                  '600': '#4453c9',
                  '700': '#353ea6',
                  '800': '#252a79',
                  '900': '#151a4c',
                },
                indigo: {
                  '50':  '#f7fafb',
                  '100': '#e7f0fc',
                  '200': '#ced8f9',
                  '300': '#a8b4f1',
                  '400': '#878ce6',
                  '500': '#6e67dd',
                  '600': '#5a4acc',
                  '700': '#4438aa',
                  '800': '#2f267c',
                  '900': '#1a184c',
                },
                orchid: {
                  '50':  '#fafafb',
                  '100': '#f1f0fa',
                  '200': '#e2d5f6',
                  '300': '#c6aee9',
                  '400': '#b283d9',
                  '500': '#995ecb',
                  '600': '#7f42b4',
                  '700': '#5f318f',
                  '800': '#412262',
                  '900': '#241539',
                },
              }
        },
    },
    variants: {},
    plugins: [],
}