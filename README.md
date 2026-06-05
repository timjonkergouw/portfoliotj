# portfoliotj

Mijn portfolio-site. Gebouwd met Next.js, vooral om schoolprojecten te laten zien en een beetje over mezelf te vertellen.

## Starten

```bash
npm install
npm run dev
```

Daarna op http://localhost:3000

Productie:

```bash
npm run build
npm run start
```

## Wat zit erin

- `/` — home met hero, korte over-mij en projectenlijst
- `/about` — langere about met fotocollage, diensten, school en skills
- `/projects/[slug]` — projectpagina's (fioresque, dartclub, quality-lodgings, rosh, vara)

Op mobiel krijg je een melding dat desktop prettiger werkt. Sommige projectonderdelen (slideshows, scroll-showcases) zijn daar ook wat zwaarder.

## Waar pas je dingen aan

Meeste content staat in `app/projects/project-data.ts` (projectteksten, afbeeldingen, showcases).

About: `app/about/about-data.ts` en `app/about/page.tsx`.

Header/footer: `app/components/site-header.tsx` en `site-footer.tsx`.

Hero op home: `app/home-hero.tsx`.

Afbeeldingen en fonts: `public/`.

## Stack

Next.js 16, React 19, TypeScript, Tailwind 4.

## Contact

- timjonkergouw@home.nl
- 530960@student.fontys.nl
- +31 6 22 35 05 86
