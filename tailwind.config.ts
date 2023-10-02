import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'background': 'hsla(0, 0%, 3.9%, 1)',
        'background-input-field': 'hsla(0, 0%, 6.9%, 1)',
        'hover-card-background': 'hsla(0, 0%, 8%, 1)',
        'hsla': 'hsla(0, 0%, 9%, 1)',
        'input-border': "hsla(0, 0%, 14.9%, 1)",
        'grey-1': '#A3A3A3',
        'hsla-white-1': 'hsla(0,0%,93%)',
        'hsla-grey-1': 'hsla(0,0%,100%,.14)'
      },
      fontSize: {
        'clamp-heading-1': 'clamp(2.2rem, 3.6vw, 4.2rem)',
        'clamp-heading-2': 'clamp(2rem, 3.5vw, 4rem)',
        'clamp-heading-3': 'clamp(1.6rem, 3vw, 3rem)'
      },
      screens: {
        'md': '640px',
        'lg': '1100px'
      }
    },
  },
  plugins: [],
}
export default config
