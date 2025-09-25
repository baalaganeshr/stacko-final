/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'stacko-sans': ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        'stacko-mono': ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        primary: '#6B46C1',
        secondary: '#8B5CF6',
        surface: 'rgba(255, 255, 255, 0.04)',
        border: 'rgba(255, 255, 255, 0.08)',
        muted: '#9CA3AF',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #6B46C1 0%, #000000 100%)',
      },
    },
  },
  plugins: [],
}