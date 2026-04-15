/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      colors: {
        neutral: {
          925: '#121212',
          950: '#0a0a0a',
        },
      },
      maxWidth: {
        article: '48rem',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-headings': theme('colors.neutral.900'),
            '--tw-prose-body': theme('colors.neutral.600'),
            '--tw-prose-links': theme('colors.neutral.900'),
            maxWidth: 'none',
            fontSize: '1.0625rem',
            lineHeight: '1.8',
            h1: { fontWeight: '800', letterSpacing: '-0.04em', lineHeight: '1.1', fontSize: '2.25rem' },
            h2: { fontWeight: '700', letterSpacing: '-0.025em', marginTop: '2.5em', marginBottom: '0.75em', fontSize: '1.5rem', paddingBottom: '0.5em', borderBottom: '1px solid ' + theme('colors.neutral.100') },
            h3: { fontWeight: '600', marginTop: '2em', fontSize: '1.2rem', letterSpacing: '-0.01em' },
            p: { marginTop: '1.25em', marginBottom: '1.25em' },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            code: {
              backgroundColor: theme('colors.neutral.100'),
              color: theme('colors.neutral.800'),
              padding: '0.2em 0.4em',
              borderRadius: '0.375rem',
              fontSize: '0.875em',
              fontWeight: '500',
            },
            blockquote: {
              borderLeftWidth: '3px',
              borderLeftColor: theme('colors.neutral.200'),
              padding: '0 0 0 1.25rem',
              fontStyle: 'normal',
              color: theme('colors.neutral.500'),
              fontSize: '1.0625rem',
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:last-of-type::after': { content: 'none' },
            table: {
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.9375rem',
            },
            thead: {
              borderBottom: '2px solid ' + theme('colors.neutral.200'),
            },
            'thead th': {
              padding: '0.75rem 1rem',
              fontWeight: '600',
              fontSize: '0.8125rem',
              color: theme('colors.neutral.500'),
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            },
            'tbody td': {
              padding: '0.75rem 1rem',
              borderBottom: '1px solid ' + theme('colors.neutral.100'),
            },
            'tbody tr:last-child td': { borderBottom: 'none' },
            img: {
              borderRadius: '1.5rem',
              boxShadow: '0 8px 30px -6px rgb(0 0 0 / 0.08)',
            },
            hr: { borderColor: theme('colors.neutral.150'), marginTop: '3em', marginBottom: '3em' },
            a: {
              color: theme('colors.neutral.900'),
              textDecoration: 'underline',
              textDecorationColor: theme('colors.neutral.300'),
              textUnderlineOffset: '3px',
              transition: 'text-decoration-color 0.2s',
            },
            'a:hover': {
              textDecorationColor: theme('colors.neutral.900'),
            },
            'ul > li::marker': { color: theme('colors.neutral.400') },
            'ol > li::marker': { color: theme('colors.neutral.500'), fontWeight: '600' },
            strong: { color: theme('colors.neutral.900'), fontWeight: '600' },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
