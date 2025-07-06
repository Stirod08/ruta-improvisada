// import { defineCollection, z } from 'astro:content';
// //import { glob } from 'astro/loaders'; // Not available with legacy API

// const pueblos = defineCollection({
//   //loader: glob({ pattern: '**/*.md', base: './src/content/pueblos/' }),

//   schema: z.object({
//     title: z.string(),
//     slug: z.string(),
//     description: z.string(),
//     image: z.string().optional(),
//     departamento: z.string(),
//     region: z.string(),
//     distancia_desde_medellin_km: z.number(),
//     clima: z.string(),
//     temperatura_promedio: z.string(),
//     tiempo_estimada_desde_medellin: z.string(),
//     fecha_publicacion: z.coerce.date(),
//   }),
// });

// export const collections = { pueblos };
