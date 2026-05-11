/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Хвойно-зелёный — основной фон Hero/Promo, как фон логотипа АРЧИ
        forest: {
          50:  '#E9EFE3',
          100: '#C9D5BE',
          200: '#9DAD90',
          400: '#5C6B52',
          600: '#384235',
          800: '#1F2A1E',
          900: '#131C12',
        },
        // Кремово-песочный — светлые секции, текст на тёмно-зелёном
        sand: {
          50:  '#FBF7EC',
          100: '#F4ECD8',
          200: '#E8DBB7',
          300: '#D5C290',
          400: '#B89E62',
        },
        // Золотой — обводка логотипа, акценты, активные пилюли
        gold: {
          200: '#EFD68C',
          400: '#D4A84B',
          500: '#BB8E2E',
          600: '#946F22',
        },
        // Тёмный текст на кремовом, чуть с зелёным подтоном
        ink: {
          50:  '#F5EBD8',
          400: '#4A5247',
          600: '#2E3A2A',
          800: '#1B231A',
          900: '#0F1810',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        card: '0 8px 24px -16px rgba(15, 24, 16, 0.18)',
      },
    },
  },
  plugins: [],
}
