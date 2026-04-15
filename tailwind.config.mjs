/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-headings': theme('colors.gray.900'),
            '--tw-prose-body': theme('colors.gray.700'),
            '--tw-prose-links': theme('colors.violet.600'),
            maxWidth: 'none',
            h1: { fontWeight: '800', letterSpacing: '-0.025em' },
            h2: { fontWeight: '700', letterSpacing: '-0.02em', marginTop: '2em' },
            h3: { fontWeight: '600' },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            code: {
              backgroundColor: theme('colors.gray.100'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
              fontWeight: '500',
            },
            blockquote: {
              borderLeftColor: theme('colors.violet.500'),
              backgroundColor: theme('colors.violet.50'),
              padding: '1rem 1.5rem',
              borderRadius: '0 0.5rem 0.5rem 0',
              fontStyle: 'normal',
            },
            table: {
              width: '100%',
              borderCollapse: 'separate',
              borderSpacing: '0',
              overflow: 'hidden',
              borderRadius: '0.75rem',
              border: '1px solid ' + theme('colors.gray.200'),
            },
            thead: {
              backgroundColor: theme('colors.gray.50'),
            },
            'thead th': {
              padding: '0.75rem 1rem',
              fontWeight: '600',
              fontSize: '0.875rem',
              color: theme('colors.gray.600'),
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              borderBottom: '2px solid ' + theme('colors.gray.200'),
            },
            'tbody td': {
              padding: '0.75rem 1rem',
              borderBottom: '1px solid ' + theme('colors.gray.100'),
            },
            'tbody tr:last-child td': {
              borderBottom: 'none',
            },
            'tbody tr:nth-child(even)': {
              backgroundColor: theme('colors.gray.50'),
            },
            img: {
              borderRadius: '0.75rem',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
