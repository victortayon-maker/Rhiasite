import type { Config } from 'tailwindcss'

// Identidade visual RHIA
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#521274',
          purple: '#8d47c4',
          graphite: '#423737',
          gold: '#e4ab2b',
        },
      },
    },
  },
  plugins: [],
}
export default config
