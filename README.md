# Tim Jonkergouw Portfolio

Persoonlijke portfolio-website gebouwd met Next.js App Router.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Pagina's

- `app/page.tsx` - Home met hero, about-preview, projects en footer.
- `app/about/page.tsx` - Uitgebreide about-pagina met services, school en skills.
- `app/projects/[slug]/page.tsx` - Dynamische projectdetailpagina.

## Belangrijkste bestanden

- `app/layout.tsx` - Root layout en lokale fonts.
- `app/globals.css` - Globale styles en keyframe-animaties.
- `public/` - Afbeeldingen en fonts.

## Lokaal draaien

```bash
npm install
npm run dev
```

Ga naar [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Content snel aanpassen

- Home content en projectkaart-data: `app/page.tsx`
- About content, school en skills: `app/about/page.tsx`
- Project detaildata (`slug` mapping): `app/projects/[slug]/page.tsx`

## Deployment

Deploy op [Vercel](https://vercel.com/) of een andere Node.js host.
