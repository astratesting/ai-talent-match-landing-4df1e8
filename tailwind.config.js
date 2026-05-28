/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0F172A',
        electric: '#3B82F6',
        cobalt: '#1D4ED8',
        ice: '#DBEAFE',
        steel: '#94A3B8',
        ink: '#020617'
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Verdana', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 42px rgba(59, 130, 246, 0.35)',
        card: '0 24px 80px rgba(2, 6, 23, 0.45)'
      },
      backgroundImage: {
        'radial-grid': 'radial-gradient(circle at center, rgba(59,130,246,0.28) 0 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};
