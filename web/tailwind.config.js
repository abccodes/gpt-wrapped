/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        title: ['75px', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
        subtitle: ['90px', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
        tertiaryheading: [
          '70px',
          { lineHeight: '1.1', letterSpacing: '-0.04em' },
        ],
        heading: ['50px', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
        subheading: ['38px', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
        paragraphlarge: [
          '40px',
          { lineHeight: '1.1', letterSpacing: '-0.04em' },
        ],
        cardtitle: ['30px', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
        paragraphmedium: [
          '30px',
          { lineHeight: '1.1', letterSpacing: '-0.04em' },
        ],
        paragraphsmall: [
          '25px',
          { lineHeight: '1.1', letterSpacing: '-0.04em' },
        ],
        paragraphtiny: [
          '20px',
          { lineHeight: '1.1', letterSpacing: '-0.04em' },
        ],
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
        mono: ['Space Grotesk', 'sans-serif'],
        regular: '400',
      },
      fontWeight: {
        semibold: '600',
        thin: '300',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        primary2: '#022B49',
        secondary: {
          DEFAULT: '#1976B9',
          alt: '#0E7490',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      backgroundImage: {
        'gradients-secondary-1': 'linear-gradient(to right, #0E7490, #073846)',
        'gradients-secondary-2': 'linear-gradient(to right, #1976B9, #023559)',
        'gradients-wrapped-1': 'linear-gradient(to right, #022B49, #011524)',
        'gradients-wrapped-2': 'linear-gradient(to right, #0E7490, #095469)',
        'gradients-wrapped-3': 'linear-gradient(to right, #1976B9, #105D94)',
        'gradients-wrapped-4': 'linear-gradient(to right, #022B49, #264459)',
        'gradients-wrapped-5':
          'linear-gradient(to right, rgba(2, 43, 73, 0.6), rgba(1, 21, 36, 0.6))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
