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
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-headings': theme('colors.gray.900'),
            '--tw-prose-body': theme('colors.gray.700'),
            '--tw-prose-links': theme('colors.violet.600'),
            maxWidth: 'none',
            h1: { fontWeight: '800', letterSpacing: '-0.03em', lineHeight: '1.1' },
            h2: { fontWeight: '700', letterSpacing: '-0.02em', marginTop: '2.5em', marginBottom: '0.8em', fontSize: '1.5em' },
            h3: { fontWeight: '600', marginTop: '2em', fontSize: '1.25em' },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            code: {
              backgroundColor: theme('colors.violet.50'),
              color: theme('colors.violet.700'),
              padding: '0.2em 0.4em',
              borderRadius: '0.375rem',
              fontSize: '0.875em',
              fontWeight: '500',
            },
            blockquote: {
              borderLeftWidth: '4px',
              borderLeftColor: theme('colors.violet.400'),
              backgroundColor: theme('colors.violet.50'),
              padding: '1.25rem 1.5rem',
              borderRadius: '0 0.75rem 0.75rem 0',
              fontStyle: 'normal',
              color: theme('colors.gray.700'),
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:last-of-type::after': { content: 'none' },
            table: {
              width: '100%',
              borderCollapse: 'separate',
              borderSpacing: '0',
              overflow: 'hidden',
              borderRadius: '1rem',
              boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
            },
            thead: {
              background: 'linear-gradient(135deg, ' + theme('colors.violet.600') + ', ' + theme('colors.purple.600') + ')',
            },
            'thead th': {
              padding: '0.875rem 1.25rem',
              fontWeight: '600',
              fontSize: '0.8rem',
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              borderBottom: 'none',
            },
            'tbody td': {
              padding: '0.875rem 1.25rem',
              borderBottom: '1px solid ' + theme('colors.gray.100'),
            },
            'tbody tr:last-child td': { borderBottom: 'none' },
            'tbody tr:nth-child(even)': { backgroundColor: theme('colors.gray.50') },
            'tbody tr': { transition: 'background-color 0.15s' },
            img: {
              borderRadius: '1rem',
              boxShadow: '0 10px 25px -5px rgb(0 0 0 / 0.1)',
            },
            hr: { borderColor: theme('colors.gray.200'), marginTop: '3em', marginBottom: '3em' },
            a: {
              textDecoration: 'none',
              borderBottom: '1px solid ' + theme('colors.violet.200'),
              transition: 'border-color 0.2s, color 0.2s',
            },
            'a:hover': {
              borderBottomColor: theme('colors.violet.500'),
            },
            'ul > li::marker': { color: theme('colors.violet.400') },
            'ol > li::marker': { color: theme('colors.violet.500'), fontWeight: '600' },
            strong: { color: theme('colors.gray.900'), fontWeight: '700' },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
