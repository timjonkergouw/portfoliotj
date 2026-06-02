# Tim Jonkergouw Portfolio

Persoonlijke portfolio-website van Tim Jonkergouw. De site presenteert projecten, een uitgebreide about-pagina en contactgegevens. Gebouwd met de Next.js App Router.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Pagina's

| Route | Beschrijving |
|-------|--------------|
| `/` | Home met hero, about-preview, projectoverzicht |
| `/about` | About-pagina met fotocollage, diensten, school en vaardigheden |
| `/projects/[slug]` | Projectdetail (Idee, Ontwerp, Ontwikkeling) |

Beschikbare project-slugs: `fioresque`, `dartclub`, `quality-lodgings`, `rosh`, `vara`.

## Projectstructuur

```
app/
  layout.tsx                 # Root layout, fonts, globale footer
  page.tsx                   # Homepage
  home-hero.tsx              # Hero met wisselende figuren en gradient
  globals.css                # Globale styles en animaties
  about/
    page.tsx                 # About-pagina (server component)
    about-data.ts            # Teksten, carousel- en skills-data
    about-photo-collage.tsx  # Fotocollage (server)
    about-interactive.tsx    # Diensten-tabs en skills-animatie (client)
  projects/
    project-data.ts          # Alle projectcontent en home-kaarten
    [slug]/page.tsx          # Dynamische projectpagina
  components/
    site-header.tsx
    site-footer.tsx
    desktop-experience-notice.tsx
    project-page-layout.tsx
    inspiration-slideshow.tsx
    flip-inspiration-cards.tsx
    logo-scroll-showcase.tsx
public/                      # Afbeeldingen, SVG's en fonts
```

## Lokaal draaien

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Commando | Doel |
|----------|------|
| `npm run dev` | Development server |
| `npm run build` | Productie-build |
| `npm run start` | Productie-server (na build) |
| `npm run lint` | ESLint |

## Content aanpassen

- **Home en projectkaarten:** `app/projects/project-data.ts` (`getHomeProjectCards`, velden per project)
- **Projectdetail (tekst, slides, showcases):** `app/projects/project-data.ts`
- **About (diensten, school, skills, collage):** `app/about/about-data.ts` en `app/about/page.tsx`
- **Footerlinks:** `app/components/site-footer.tsx`
- **Navigatie:** `app/components/site-header.tsx`
- **Hero:** `app/home-hero.tsx`
- **Statische assets:** `public/`

## Performance

- Zware projectcomponenten (slideshow, flip cards, logo-scroll) worden lazy geladen op projectpagina's.
- De about-pagina gebruikt server components waar mogelijk; alleen interactieve blokken zijn client-side.
- Afbeeldingen onder de fold gebruiken lazy loading waar van toepassing.

## Deployment

Deploy op [Vercel](https://vercel.com/) of een andere host met Node.js-ondersteuning. Standaard flow:

```bash
npm run build
npm run start
```

## Contact (footer)

- timjonkergouw@home.nl
- 530960@student.fontys.nl
- +31 6 22 35 05 86
