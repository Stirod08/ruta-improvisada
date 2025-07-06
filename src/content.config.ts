import { z, defineCollection } from 'astro:content';
// Define un `loader` y un `schema` para cada colección
const municipios = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    authors: z.array(z.string()).default(['admin']),
    tags: z.array(z.string()).default(['others']),
  }),
});

export const collections = { municipios };
