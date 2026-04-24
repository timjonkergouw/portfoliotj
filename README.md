# Portfolio Tim Jonkergouw

Een interactieve portfolio-website gebouwd met Next.js (App Router), met focus op:
- een custom hero met animaties en image carousel,
- een visueel sterke about-sectie,
- floating project cards met klikbare projectpagina's.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Projectstructuur

Belangrijkste bestanden:

- `app/page.tsx`  
  Hoofdpagina met hero, about, projects en footer.
- `app/projects/[slug]/page.tsx`  
  Dynamische projectdetailpagina's.
- `app/layout.tsx`  
  Root layout + lokale fontconfiguratie.
- `app/globals.css`  
  Globale styles en animatie keyframes.
- `public/`  
  Alle gebruikte afbeeldingen en fonts.

## Fonts

Lokale fonts via `next/font/local`:

- `public/fonts/AlteHaasGroteskBold.ttf`
- `public/fonts/AlteHaasGroteskRegular.ttf`

## Features

- Hero section met gradient-overgangen gekoppeld aan carousel-switches.
- Carousel met meerdere hero-figuren die in/uit schuiven.
- Overlap layering voor een 3D-look tussen tekst en visual assets.
- About-sectie met eigen copy en image captions.
- Projects-sectie met floating animaties en doorklik naar detailpagina's.

## Installatie en lokaal draaien

```bash
npm install
npm run dev
```

Open daarna [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev      # Start development server
npm run lint     # ESLint checks
npm run build    # Production build
npm run start    # Start production server
```

## Aanpassen van content

Meest gebruikte plekken:

- Hero instellingen (carousel, timing, gradient): `app/page.tsx`
- About teksten: `app/page.tsx`
- Projects data (titels, afbeeldingen, links): `app/page.tsx`
- Algemene animaties: `app/globals.css`

## Deployment

Deze app kan direct gedeployed worden op [Vercel](https://vercel.com/), maar werkt ook op andere Node.js hostingplatformen.
