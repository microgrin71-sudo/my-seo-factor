import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  content: {
    collections: {
      blog: {
        schema: ({ z }) => ({
          title: z.string(),
          description: z.string().optional(),
          date: z.string().optional(),
          keywords: z.array(z.string()).optional(),
        }),
      },
    },
  },
});
