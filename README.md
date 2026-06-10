# Portfolio Tim Jonkergouw

Dit is de broncode van mijn portfolio-website: de site waar ik mezelf laat zien en mijn schoolprojecten presenteer. Alles wat je op de live site ziet (teksten, foto's, projectpagina's, animaties) komt uit dit project.

Je hoeft niet te kunnen programmeren om de site te **bekijken** of om te snappen **wat erin zit**. Voor **tekst of plaatjes aanpassen** heb je wel een beetje hulp nodig of moet je in bestanden durven kijken — daaronder leg ik uit waar wat staat.

---

## Wat is dit eigenlijk?

Stel je een map op je computer voor met alle onderdelen van de website: pagina's, teksten, afbeeldingen en instellingen. Die map is dit project. Met een programma (Node.js) kun je de site op je eigen computer starten, alsof die online staat. Zo kun je wijzigingen bekijken voordat je ze publiceert.

De site is gebouwd met **Next.js** — een veelgebruikt framework voor moderne websites. Daar hoef je als lezer niets van te weten; het is vooral de techniek erachter.

---

## Welke pagina's zijn er?

| Wat je in de browser typt | Wat je ziet |
|---------------------------|-------------|
| Startpagina (home) | Grote intro met foto's, korte tekst over mij en een overzicht van alle projecten |
| `/about` | Uitgebreide about-pagina: wie ik ben, diensten, schoolloopbaan en skills |
| `/projects/fioresque` | Project Fioresque |
| `/projects/dartclub` | Project Dartclub |
| `/projects/quality-lodgings` | Project Quality Lodgings |
| `/projects/vara` | Project VARA |
| `/projects/rosh` | Project ROSH |

Elke projectpagina heeft vaste onderdelen (bijvoorbeeld Idee, Ontwerp, Ontwikkeling) met tekst, afbeeldingen en soms ingesloten sites (Figma, Vercel).

Op een telefoon werkt de site ook, maar sommige onderdelen (grote slideshows, scroll-animaties) zijn bedoeld voor desktop. Op mobiel krijg je daar een korte melding over.

---

## De site lokaal bekijken (op je eigen computer)

Hiervoor moet **Node.js** op je computer staan. Dat kun je gratis downloaden op [nodejs.org](https://nodejs.org/) (kies de aanbevolen versie en installeer met de standaardopties).

Daarna, in een terminal (op Windows: PowerShell of Command Prompt):

1. Ga naar de map van dit project (waar dit bestand staat).
2. Voer eenmalig uit om alles te installeren:

```bash
npm install
```

3. Start de site:

```bash
npm run dev
```

4. Open in je browser: **http://localhost:3000**

De site draait nu op je eigen pc. Sluit de terminal of stop het proces om hem weer uit te zetten.

**Let op:** `localhost` betekent dat de site alleen op jouw computer zichtbaar is, niet op internet.

---

## Online zetten (publiceren)

De live versie staat meestal op **Vercel** (gratis hosting voor dit soort projecten). Als jij het project beheert:

1. Wijzigingen opslaan in Git (GitHub).
2. Vercel koppelt automatisch aan die repository en bouwt de site opnieuw.

Zonder Vercel/Git kun je lokaal een productieversie maken:

```bash
npm run build
npm run start
```

Dat is vooral handig om te testen of alles goed werkt vóór je online gaat.

---

## Waar staat wat? (voor als je iets wilt aanpassen)

Alles zit in mappen. De belangrijkste:

### `app/projects/project-data.ts`
**Hier staat bijna alle projectinhoud.** Per project: titel, intro, teksten per sectie, links naar Figma/Vercel, lijsten met afbeeldingen voor slideshows, kleurenpalet VARA, enzovoort. Als je een projecttekst wilt wijzigen, begin hier.

### `app/about/about-data.ts`
Teksten en data voor de about-pagina: diensten, school, skills, foto's voor de collage.

### `app/about/page.tsx` en `app/page.tsx`
De opbouw van de about-pagina en de homepage (welke blokken waar staan).

### `app/home-hero.tsx`
De grote bovenkant van de homepage (naam, wisselende foto's, achtergrond).

### `app/components/`
Herbruikbare onderdelen: menu, footer, slideshows, projectpagina-layout, enz. Meestal hoef je hier niet in te zijn tenzij je gedrag of layout wilt veranderen.

### `public/`
Alle **afbeeldingen, logo's, SVG's en lettertypes**. Bestanden hier kun je vervangen door een nieuw bestand met **dezelfde bestandsnaam**, of je past in `project-data.ts` het pad naar een nieuw bestand aan (bijv. `/logoprojects/vara.svg`).

---

## Handige commando's (overzicht)

| Commando | Wat het doet |
|----------|----------------|
| `npm install` | Eenmalig (of na updates): benodigde software voor het project downloaden |
| `npm run dev` | Site starten om te bekijken en te testen tijdens het werken |
| `npm run build` | Een definitieve versie van de site bouwen |
| `npm run start` | Die gebouwde versie lokaal draaien |
| `npm run lint` | Controleren op veelvoorkomende fouten in de code (voor developers) |

---

## Structuur in het kort

```
app/                 → pagina's en logica van de website
  page.tsx           → homepage
  about/             → about-pagina
  projects/          → projectpagina's + alle projectteksten (project-data.ts)
  components/        → menu, footer, carrousels, enz.
public/              → plaatjes, logo's, fonts
```

---

## Contact

- timjonkergouw@home.nl  
- 530960@student.fontys.nl  
- +31 6 22 35 05 86  

---

## Voor developers (kort)

Stack: Next.js 16, React 19, TypeScript, Tailwind CSS 4. Zware onderdelen (slideshows, scroll-showcases) worden lazy geladen op projectpagina's.
