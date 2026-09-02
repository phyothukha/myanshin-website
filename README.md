# Myanshi — Myanmar Sushi shop

This project was migrated from Next.js to [Astro](https://astro.build), styled with [Tailwind CSS v4](https://tailwindcss.com).

## Getting Started

Install dependencies and start the dev server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) with your browser to see the result.

You can start editing the page by modifying [src/pages/index.astro](src/pages/index.astro). The page auto-updates as you edit the file.

## Project Structure

```text
/
├── public/              # static assets served as-is
├── src/
│   ├── layouts/
│   │   └── Layout.astro # shared <head>/meta + global styles
│   ├── pages/
│   │   └── index.astro  # site homepage (route: /)
│   └── styles/
│       └── global.css   # Tailwind import + theme tokens
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

Fonts (Geist Sans / Geist Mono) are self-hosted via `@fontsource-variable/geist` and `@fontsource-variable/geist-mono`, matching the optimized loading `next/font` previously provided.

## Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                           |
| :--------------- | :----------------------------------------------- |
| `pnpm install`   | Installs dependencies                            |
| `pnpm dev`       | Starts local dev server at `localhost:4321`      |
| `pnpm build`     | Build your production site to `./dist/`          |
| `pnpm preview`   | Preview your build locally, before deploying     |
| `pnpm astro ...` | Run CLI commands like `astro add`, `astro check` |

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
