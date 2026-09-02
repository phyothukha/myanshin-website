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

Astro's standard `src/` convention. `public/` is the one exception — Astro requires static, unprocessed assets to live outside `src/`.

```text
/
├── public/                        # static assets served as-is
├── src/
│   ├── assets/                    # images, fonts, and icons, grouped per page/section
│   │   ├── home-img/
│   │   ├── about-page/
│   │   ├── menu-img/
│   │   ├── tiktok-img/
│   │   ├── testimonial-img/
│   │   ├── location-img/
│   │   ├── blog-img/
│   │   └── icons/                 # custom local icons for astro-icon
│   ├── components/
│   │   ├── Header.astro           # shared across all pages
│   │   ├── Footer.astro           # shared across all pages
│   │   ├── PageHero.astro         # shared breadcrumb banner for inner pages
│   │   ├── AboutUs.astro          # shared teaser, used on / and /about
│   │   ├── TiktokGallery.astro    # shared, used on / and /about
│   │   ├── home/sections/         # page-specific sections for the homepage
│   │   │   ├── Hero.astro
│   │   │   ├── MenuCategories.astro
│   │   │   ├── Promotions.astro
│   │   │   ├── Testimonials.astro
│   │   │   ├── CtaBanner.astro
│   │   │   └── Articles.astro
│   │   └── about/sections/        # page-specific sections for /about
│   │       ├── Highlights.astro
│   │       ├── Journey.astro
│   │       ├── Team.astro
│   │       └── VisitRestaurants.astro
│   ├── data/
│   │   └── locations.ts           # branch data, shared by Footer + VisitRestaurants
│   ├── layouts/
│   │   └── Layout.astro           # shared <head>/meta, wraps Header + Footer
│   ├── pages/
│   │   ├── index.astro            # homepage (route: /)
│   │   └── about.astro            # about page (route: /about)
│   └── styles/
│       └── globals.css            # Tailwind import + theme tokens
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

Each new page goes under `src/pages/`, reusing `src/layouts/Layout.astro` and pulling in its own `src/components/<page>/sections/` folder for page-specific sections. Anything reused across two or more pages (`Header`, `Footer`, `PageHero`, `AboutUs`, `TiktokGallery`) stays flat in `src/components/`; if a page-specific section starts getting reused elsewhere, promote it out of its `sections/` folder the same way.

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
