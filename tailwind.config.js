import {nextui} from '@nextui-org/theme'
import { color } from 'framer-motion'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      boxShadow: {
        '3xl': '0rem 0rem .625rem -0.3125rem rgba(0, 0, 0, 0.9)',
      },
      colors: {
        'gray-primary': '#8F9094',
      }      
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
