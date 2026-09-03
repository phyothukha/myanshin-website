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
│   ├── components/                # only components shared by 2+ pages live here
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── PageHero.astro         # shared breadcrumb banner for inner pages
│   │   ├── Pagination.astro       # shared, used on /blog
│   │   ├── AboutUs.astro          # shared teaser, used on / and /about
│   │   ├── TiktokGallery.astro    # shared, used on /, /about, and /contact
│   │   ├── Testimonials.astro     # shared, used on / and /menu
│   │   ├── VisitRestaurants.astro # shared, used on /about and /contact
│   │   └── NavProgress.astro      # shared, top-of-page navigation progress bar
│   ├── data/
│   │   ├── locations.ts           # branch data, shared by Footer + VisitRestaurants
│   │   ├── menu.ts                # menu catalog, shared by Promotions + MenuGrid
│   │   └── blog.ts                # blog posts, shared by Articles + /blog
│   ├── layouts/
│   │   └── Layout.astro           # shared <head>/meta, wraps Header + Footer
│   ├── pages/
│   │   ├── index.astro            # homepage (route: /)
│   │   ├── 404.astro              # not-found page (must stay a flat file)
│   │   ├── _sections/             # homepage-only sections (see below)
│   │   │   ├── Hero.astro
│   │   │   ├── MenuCategories.astro
│   │   │   ├── Promotions.astro
│   │   │   ├── CtaBanner.astro
│   │   │   └── Articles.astro
│   │   ├── about/
│   │   │   ├── index.astro        # about page (route: /about)
│   │   │   └── _sections/
│   │   │       ├── Highlights.astro
│   │   │       ├── Journey.astro
│   │   │       └── Team.astro
│   │   ├── menu/
│   │   │   ├── index.astro        # full menu (route: /menu)
│   │   │   └── _sections/
│   │   │       └── MenuGrid.astro
│   │   ├── contact/
│   │   │   ├── index.astro        # contact page (route: /contact)
│   │   │   └── _sections/
│   │   │       ├── BookingForm.astro
│   │   │       └── Faq.astro
│   │   └── blog/
│   │       ├── index.astro        # blog listing (route: /blog)
│   │       └── [slug].astro       # one route per post (route: /blog/<slug>)
│   └── styles/
│       └── globals.css            # Tailwind import + theme tokens
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

A page's own sections live right next to it, in a `_sections/` folder inside that page's own directory (`src/pages/about/_sections/`, `src/pages/menu/_sections/`, etc.) — not under `src/components/`. The underscore prefix is load-bearing, not stylistic: Astro treats every file under `src/pages/` as a route by default, so a plain `sections/Highlights.astro` would compile into a real, public (and broken — no layout/header/footer) page at `/about/sections/highlights`. A leading `_` is Astro's documented way to exclude a file or folder from routing entirely, so `_sections/` stays purely organizational. The homepage (`src/pages/index.astro`) has no dedicated subfolder of its own, so its sections sit in `src/pages/_sections/` instead, alongside it.

`src/components/` is reserved for components used by two or more pages (`Header`, `Footer`, `PageHero`, `Pagination`, `AboutUs`, `TiktokGallery`, `Testimonials`, `VisitRestaurants`, `NavProgress`). The moment a page-specific section in some `_sections/` folder starts getting reused elsewhere, promote it out into `src/components/` the same way. Content that multiple sections need regardless of where they live (menu items, branch info, blog posts) lives once in `src/data/` and gets imported wherever it's shown, instead of being re-typed per component.

Every route is a folder with its own `index.astro` (`about/index.astro`, `menu/index.astro`, `contact/index.astro`, `blog/index.astro`) rather than a flat `about.astro` file, so a page that grows nested routes later (like `/blog/<slug>`) doesn't need restructuring — it's already a folder. `index.astro` (the homepage, `/`) and `404.astro` are the only exceptions: Astro resolves `src/pages/index.astro` as the folder's own index already, and `404.astro` must stay a flat file at the pages root for Astro to recognize it as the not-found page.

`PageHero.astro` also exposes a default `<slot />` so a page can inject floating content over the banner — `/contact` uses it for the booking form card. The booking form itself has no backend: submitting it just swaps in a confirmation message client-side, nothing is actually sent or stored anywhere yet.

The Menu page's category filter (`MenuGrid.astro`) is client-rendered with a small inline script and supports deep links — `/menu?filter=drinks` pre-selects a tab on load, which is what the homepage's "Browse Menu" category rows link to.

`/blog` reads every entry in `src/data/blog.ts` and renders them all on one page — there's currently exactly one page of posts, so `Pagination.astro` renders with Prev/Next disabled and only "1" shown, rather than fabricating extra pages. `src/pages/blog/[slug].astro` generates a static route per post via `getStaticPaths()`, so adding a new post just means adding an entry to `blog.ts`.

Each post's `content` is a list of typed blocks (`heading` / `paragraph` / `list` / `image`) rather than a single string, so the detail page can render structured articles — numbered lists, an inline photo partway through, multiple `<h2>` sections — instead of one flat block of text. Author bylines (role, bio, avatar) are looked up from a shared `authors` map in the same file, keyed by name, so both the homepage teaser and every post by that author stay in sync automatically.

Fonts (Geist Sans / Geist Mono) are self-hosted via `@fontsource-variable/geist` and `@fontsource-variable/geist-mono`, matching the optimized loading `next/font` previously provided.

## Commands

All commands are run from the root of the project, from a terminal:

| Command          | Action                                           |
| :--------------- | :----------------------------------------------- |
| `pnpm install`   | Installs dependencies                            |
| `pnpm dev`       | Starts local dev server at `localhost:4321`      |
| `pnpm build`     | Build your production site to `./dist/`          |
| `pnpm preview`   | Preview your build locally, before deploying     |
| `pnpm astro ...` | Run CLI commands like `astro add`, `astro check` |

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
