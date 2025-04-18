import { Transition } from "vue";

module.exports = {
    content: ['./src/**/*.{html,js,vue}'],
    theme: {
        extend: {
            colors: {
                note: '#7A7D89',
                'deep-blue': "#283a5ae6",
                'dark-blue': '#37517e',
                'light-blue': '#E7F5FB',
                'sky-blue': '#31a9e1',
                'light-gray': '#F3F5FA'
            },
            screens: {
                'max-2xl': { 'max': '2560px' },
                'max-xl': { 'max': '1440px' },
                'max-lg': { 'max': '1024px' },
                'max-md': { 'max': '768px' },
                'max-sm': { 'max': '640px' },
                'max-xs': { 'max': '376px' },
            },


        },
    },
}
