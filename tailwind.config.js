/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Institutional Colors
        primary: {
          green: '#2CAD3F',
          blue: '#0A4EB6',
          'dark-blue': '#042C51',
        },
        // Semantic Colors
        success: '#2CAD3F',
        info: '#0A4EB6',
        warning: '#f59e0b',
        error: '#ef4444',
        // Neutral Colors
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#0a0a0a',
        },
      },
      backgroundImage: {
        // Institutional Gradients
        'gradient-primary': 'linear-gradient(135deg, #2CAD3F 0%, #0A4EB6 100%)',
        'gradient-secondary':
          'linear-gradient(135deg, #042C51 0%, #0A4EB6 100%)',
        'gradient-accent':
          'linear-gradient(90deg, #2CAD3F 0%, #042C51 50%, #0A4EB6 100%)',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        mono: ['"Fira Code"', '"Courier New"', 'monospace'],
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
