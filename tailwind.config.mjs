/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        pa: {
          taupe: '#95887b',
          accent: '#ba3b26',
          secondary: '#f5a91c',
          blue: '#1e4e89',
          orange: '#e5732d',
          primary: '#791715',
          cream: '#fff8ec',
          ink: '#211815'
        }
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        glow: '0 24px 80px rgba(121, 23, 21, 0.22)'
      }
    }
  },
  plugins: []
};
