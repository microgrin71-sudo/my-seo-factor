/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: '#6366f1',
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: { article: '48rem' },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-headings': theme('colors.neutral.900'),
            '--tw-prose-body': theme('colors.neutral.600'),
            '--tw-prose-links': '#6366f1',
            maxWidth: 'none',
            fontSize: '1.0625rem',
            lineHeight: '1.8',
            h1: { fontFamily: theme('fontFamily.heading').join(', '), fontWeight: '800', letterSpacing: '-0.04em', lineHeight: '1.1', fontSize: '2.25rem' },
            h2: { fontFamily: theme('fontFamily.heading').join(', '), fontWeight: '700', letterSpacing: '-0.025em', marginTop: '2.5em', marginBottom: '0.75em', fontSize: '1.5rem', paddingBottom: '0.5em', borderBottom: '1px solid ' + theme('colors.neutral.100') },
            h3: { fontFamily: theme('fontFamily.heading').join(', '), fontWeight: '600', marginTop: '2em', fontSize: '1.2rem' },
            p: { marginTop: '1.25em', marginBottom: '1.25em' },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            code: { backgroundColor: theme('colors.neutral.100'), color: theme('colors.neutral.800'), padding: '0.2em 0.4em', borderRadius: '0.375rem', fontSize: '0.875em', fontWeight: '500' },
            blockquote: { borderLeftWidth: '3px', borderLeftColor: '#6366f133', padding: '0 0 0 1.25rem', fontStyle: 'normal', color: theme('colors.neutral.500') },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:last-of-type::after': { content: 'none' },
            table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' },
            thead: { borderBottom: '2px solid ' + theme('colors.neutral.200') },
            'thead th': { padding: '0.75rem 1rem', fontWeight: '600', fontSize: '0.8125rem', color: theme('colors.neutral.500'), textTransform: 'uppercase', letterSpacing: '0.05em' },
            'tbody td': { padding: '0.75rem 1rem', borderBottom: '1px solid ' + theme('colors.neutral.100') },
            'tbody tr:last-child td': { borderBottom: 'none' },
            img: { borderRadius: '1.5rem', boxShadow: '0 8px 30px -6px rgb(0 0 0 / 0.08)' },
            a: { color: '#6366f1', textDecoration: 'underline', textDecorationColor: '#6366f144', textUnderlineOffset: '3px', transition: 'text-decoration-color 0.2s' },
            'a:hover': { textDecorationColor: '#6366f1' },
            'ul > li::marker': { color: theme('colors.neutral.400') },
            'ol > li::marker': { color: theme('colors.neutral.500'), fontWeight: '600' },
            strong: { color: theme('colors.neutral.900'), fontWeight: '600' },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
