# Mille Notti in Mare

Sito di documentazione per la campagna 7th Sea ambientata a Théah.
Hub narrativo: La Taverna del Pescecane Smarrito.

## Sviluppo

```bash
npm install
npm run dev
```

## Aggiungere contenuto

### Nuova sessione

Crea un file in `src/content/sessions/session-XXX.mdx`:

```mdx
---
title: "Titolo della sessione"
session_number: 4
date: 2026-05-01
summary: "Breve descrizione per l'indice."
---

Testo della sessione...
```

#### Aggiungere voci al Diario di Bordo

Il Diario di Bordo contiene le impressioni dei giocatori, scritte dal punto di vista del personaggio.
Per aggiungere voci, usa il campo opzionale `player_journal` nel frontmatter della sessione:

```mdx
---
title: "Titolo della sessione"
session_number: 4
date: 2026-05-01
summary: "Breve descrizione per l'indice."
player_journal:
  - author: "Nome del PG"
    text: "Testo scritto dal giocatore dal punto di vista del personaggio."
  - author: "Altro PG"
    text: "Un altro punto di vista sulla stessa sessione."
---

Testo della sessione...
```

Ogni voce appare nella pagina della sessione sotto la sezione "Diari di Bordo", stilizzata come citazione.

### Nuovo personaggio (PG)

Crea un file in `src/content/characters/nome-personaggio.mdx`.

Campi frontmatter richiesti: `name`, `nation`, `background`, `skills` (array).

### Nuovo PNG

Crea un file in `src/content/npcs/nome-png.mdx`.

Campi: `name`, `role`, `description`, `alignment` (alleato | antagonista | neutrale).

### Nuova fazione

Crea un file in `src/content/factions/nome-fazione.mdx`.

Campi: `name`, `description`, `known_members` (array), `goals`.

### Lore

Crea un file in `src/content/lore/titolo.mdx`.

Campi: `title`, `section` (geografia | storia | magia | altro), `order` (numero opzionale per ordinare).

## Build

```bash
npm run build
```

Il sito statico viene generato in `dist/`.
