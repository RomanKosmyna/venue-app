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
        'hsla': 'hsla(0, 0%, 9%, 1)',
        'input-border': "hsla(0, 0%, 14.9%, 1)",
        'grey-1': '#A3A3A3',
        'hsla-grey-1': 'hsla(0,0%,100%,.14)'
      },
      screens: {
        'md': '860px'
      }
    },
  },
  plugins: [],
}
export default config
