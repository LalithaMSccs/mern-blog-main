/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        // Fade-in-down keyframes
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)', // Start above
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)', // End at normal position
          },
        },
        'zoom-in': {
          '0%': {
            transform: 'scale(0)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'slide-down': {
          '0%': {
            transform: 'translateY(-90px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'slidein': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out forwards',
        'zoom-in': 'zoom-in 1s ease-out forwards',
        'slide-down': 'slide-down 1s ease-out forwards',
        'slidein': 'slidein 1s ease 300ms forwards',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),
  ],
};
