import { defineCollection, z } from 'astro:content';

const sessions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    session_number: z.number(),
    date: z.coerce.date(),
    summary: z.string(),
    // Struttura narrativa
    book: z.object({
      number: z.number(),
      title: z.string(),
    }),
    type: z.enum(['storia', 'capitolo']),
    arc: z.string().optional(),       // nome dell'arco (solo per 'capitolo')
    arc_part: z.number().optional(),  // numero del capitolo nell'arco
    arc_total: z.number().optional(), // totale capitoli dell'arco
    // Diario di bordo
    player_journal: z.array(z.object({
      author: z.string(),
      text: z.string(),
    })).optional(),
    // Personaggi presenti
    characters: z.array(z.string()).optional(),
  }),
});

const characters = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    nation: z.string(),
    concept: z.string(),
    skills: z.array(z.string()),
    image: z.string().optional(),
    status: z.enum(['vivo', 'morto']).default('vivo'),
    background: z.array(z.string()).optional(),
    sorcery: z.string().optional(),
    virtue: z.object({
      tarot: z.string().optional(),
      name: z.string(),
    }).optional(),
    hubris: z.object({
      tarot: z.string().optional(),
      name: z.string(),
    }).optional(),
  }),
});

const npcs = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    description: z.string(),
    alignment: z.enum(['alleato', 'antagonista', 'neutrale']),
  }),
});

const factions = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    known_members: z.array(z.string()),
    goals: z.string(),
  }),
});

const lore = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    section: z.enum(['geografia', 'storia', 'magia', 'altro']),
    order: z.number().optional(),
  }),
});

export const collections = { sessions, characters, npcs, factions, lore };
