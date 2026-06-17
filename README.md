# portfoliotj — notes for future me

My personal portfolio site. School projects, a bit about who I am, and contact info. This repo is mine — not a team handover. When I come back to this in six months and forgot how anything works, this file is the reminder.

---

## What this is

A single-page-style portfolio built with Next.js. Five project case studies (Fioresque, Dartclub, Quality Lodgings, VARA, ROSH), an about page, and a homepage with a hero, short intro, and project index.

Some pages go further than static text: auto-scrolling inspiration carousels, scroll-driven logo showcases (Fioresque + Dartclub), a fullscreen color strip on VARA, Figma embeds, and live Vercel iframes (Fioresque, Dartclub, QL, VARA, ROSH). Most of that behaviour lives in reusable components; the actual copy and media paths sit in one big data file.

Hosted on Vercel. Push to GitHub → Vercel rebuilds.

**Live site:** [INSERT VERCEL LINK]

---

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**

No database, no CMS. Content is mostly hardcoded in `project-data.ts` and `about-data.ts`.

---

## Run it locally

From the project root:

```bash
npm install
npm run dev
```

Open http://localhost:3000

Before deploying or when something feels off in prod:

```bash
npm run build
npm run start
```

Lint if I touched a lot of files:

```bash
npm run lint
```

---

## Folder map (where to look first)

```
app/
  page.tsx                    → homepage
  home-hero.tsx               → hero with rotating figures + gradient
  layout.tsx                  → fonts, global footer
  globals.css                 → site-wide styles, buttons, background

  about/
    page.tsx                  → about page layout
    about-data.ts             → services, school timeline, skills, photos
    about-interactive.tsx     → client bits (tabs, skill animation)
    about-photo-collage.tsx   → top collage
    about-over-mij-photos.tsx → polaroid scatter in Over mij

  projects/
    project-data.ts           → ★ almost all project content lives here
    [slug]/page.tsx           → dynamic route, one template for all projects

  components/
    site-header.tsx / site-footer.tsx
    project-page-layout.tsx   → shared project page shell + section rendering
    home-projects-showcase.tsx
    inspiration-slideshow.tsx → Fioresque-style carousel (hover pauses on card)
    logo-scroll-showcase.tsx  → Fioresque + Dartclub scroll showcase
    color-palette-carousel.tsx
    stylescape-viewer.tsx
    work-screen-carousel.tsx  → QL design fullscreen slideshow
    website-embed-preview.tsx → Vercel iframe + optional Refresh button
    flip-inspiration-cards.tsx
    desktop-experience-notice.tsx

public/
  logoprojects/               → project logos (home + headers)
  fioresque/, dartclub/, ql/, vara/, rosh/  → project assets
  carrouselfotos/             → about photos
  fonts/                      → Alte Haas Grotesk
  portfolio.svg               → repeating body background
```

---

## Things to remember when I continue

**Content changes** → start in `app/projects/project-data.ts`. Sections support description, Figma URLs, Vercel embeds, slideshows, palette colors, stylescape image, etc. About page copy → `about-data.ts`.

**Figma links** → use the embed URL format (`figma.com/embed?embed_host=share&url=...`), not the normal design link. Copy the pattern from Fioresque or VARA in `project-data.ts`.

**Project header** → one `image` per project (logo). Optional `pageLogo` if the page needs a different file (Dartclub uses `dartclub logo transparant.svg`). Don't set `image` and a duplicate header logo — layout only shows one logo next to the title.

**Vercel embed placement** → default embed shows at the bottom of a section (“Live website”). For embed right under the section text (ROSH develop), set `websiteEmbedAfterDescription: true`. VARA develop uses `websiteEmbedShowRefresh: true` so users can reset the iframe after clicking through to the Fontys minor page.

**Full-bleed blocks** → carousels and showcases break out of the content column with `w-dvw` and negative margins. Normal text uses `site-section-body` so it lines up with the pill-shaped section headings (same as about page).

**Performance** → heavy project components are `dynamic()` imported in `project-page-layout.tsx`. Don't eagerly import slideshow/showcase stuff on the homepage.

**Mobile** → `desktop-experience-notice.tsx` shows once on small screens. Some interactions (scroll showcases, big carousels) are desktop-first by design.

**Next.js version** → this project uses a newer Next with breaking changes vs older tutorials. Check `node_modules/next/dist/docs/` or `AGENTS.md` before assuming old App Router patterns still apply.

**Assets** → replace files in `public/` keeping the same path, or update the path in `project-data.ts`. Project logos for the home list: `/logoprojects/*.svg`.

**Project order** → object key order in `project-data.ts` + `number` field control homepage order. Currently: 1 Fioresque, 2 Dartclub, 3 QL, 4 VARA, 5 ROSH.

---

## Pages quick reference

| Route | What's there |
|-------|----------------|
| `/` | Hero, over mij preview, project list |
| `/about` | Collage, over mij, diensten, school, skills |
| `/projects/fioresque` | Idea / design / develop + logo scroll + Figma |
| `/projects/dartclub` | Idea / design / develop + flip cards + scroll showcase + mobile Vercel |
| `/projects/quality-lodgings` | Opdracht + design with fullscreen before/after carousel |
| `/projects/vara` | Idea / design (palette + stylescape + Figma) / develop + Vercel |
| `/projects/rosh` | Idea / design (Figma) / develop (custom editor Vercel) |

---

## Contact (on the site footer anyway)

- timjonkergouw@home.nl
- 530960@student.fontys.nl
- +31 6 22 35 05 86
