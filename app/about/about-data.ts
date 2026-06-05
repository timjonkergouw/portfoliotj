export const slotPalette = ["#020118", "#292541", "#E9E7DA", "#B6AFA9", "#CA5521"];

export const carouselPhotos = [
  "/carrouselfotos/Foto frame Rome.png",
  "/carrouselfotos/foto frame purple festival.png",
  "/carrouselfotos/Foto frame voetbal.png",
  "/carrouselfotos/foto frame diploma.png",
  "/carrouselfotos/Foto frame darts.png",
  "/carrouselfotos/foto frame propodeuse.png",
  "/carrouselfotos/Foto frame guiness.png",
  "/carrouselfotos/foto frame rooftop.png",
  "/carrouselfotos/foto frame psv.png",
  "/carrouselfotos/Foto frame fontys foto.png",
] as const;

export const overMijScatterPhotos = [
  {
    src: "/carrouselfotos/Foto frame voetbal.png",
    alt: "Voetbal bij FC Engelen",
    slotClass: "left-[6%] top-[2%] z-20",
    floatClass: "about-polaroid-float-a",
    width: 148,
    height: 178,
  },
  {
    src: "/carrouselfotos/Foto frame darts.png",
    alt: "Darten met vrienden",
    slotClass: "right-[2%] top-[18%] z-30",
    floatClass: "about-polaroid-float-b",
    width: 132,
    height: 162,
  },
  {
    src: "/carrouselfotos/Foto frame Rome.png",
    alt: "Rome reis",
    slotClass: "left-0 top-[42%] z-10",
    floatClass: "about-polaroid-float-c",
    width: 140,
    height: 168,
  },
  {
    src: "/carrouselfotos/foto frame guiness.png",
    alt: "Guinness",
    slotClass: "right-[8%] bottom-[22%] z-40",
    floatClass: "about-polaroid-float-d",
    width: 148,
    height: 176,
  },
  {
    src: "/carrouselfotos/Foto frame fontys foto.png",
    alt: "Fontys",
    slotClass: "left-[22%] bottom-[2%] z-[25]",
    floatClass: "about-polaroid-float-e",
    width: 130,
    height: 158,
  },
] as const;

export const services = [
  {
    title: "Webdesign",
    description:
      "Ik ontwerp visueel sterke websites die passen bij jouw merkidentiteit. Van kleur en typografie tot structuur: alles wordt gericht op een professionele eerste indruk en duidelijke communicatie.",
  },
  {
    title: "Webdevelopment",
    description:
      "Ik bouw snelle en moderne websites met een nette codebasis. Daarbij let ik op performance, responsive gedrag en onderhoudbaarheid zodat je site niet alleen mooi is, maar ook technisch sterk blijft.",
  },
  {
    title: "UX/UI Design",
    description:
      "Ik vertaal gebruikersbehoeften naar logische schermen en duidelijke interacties. Met focus op gebruiksgemak zorg ik dat bezoekers zonder moeite vinden wat ze zoeken.",
  },
] as const;

export const careerTimeline = [
  {
    id: "timeline-fontys",
    school: "Fontys ICT",
    location: "Tilburg & Eindhoven",
    period: "Nu",
    title: "Momenteel HBO-ICT student",
    description:
      "Ik studeer nu HBO-ICT bij Fontys en focus mij op media creation en front-end development. Ik werk aan creatieve concepten, digitale beleving en het technisch uitwerken van sterke interfaces.",
  },
  {
    id: "timeline-maurick",
    school: "Maurick College",
    location: "Vught",
    period: "2023/2024",
    title: "Havo diploma behaald",
    description:
      "Op het Maurick College heb ik mijn havo diploma behaald in 2023/2024. Daar heb ik een sterke basis gelegd in discipline, samenwerken en doelgericht werken.",
  },
] as const;

export const technicalSkills = [
  {
    title: "Front-end Development",
    description: "Next, React, Typescript",
    value: 65,
  },
  {
    title: "Web, UI & UX Design",
    description: "Figma, Adobe Software",
    value: 80,
  },
  {
    title: "Gebruik van AI",
    description: "ChatGPT, Cursor, Claude",
    value: 70,
  },
] as const;

export const softSkills = [
  {
    title: "Communicatie",
    description: "Duidelijk communiceren",
    value: 75,
  },
  {
    title: "Samenwerken",
    description: "Goed kunnen werken met iedereen",
    value: 67,
  },
  {
    title: "Probleemoplossend vermogen",
    description: "Oplossingen bedenken bij problemen.",
    value: 70,
  },
] as const;

type ReelDirection = "normal" | "reverse";
type ReelItem =
  | { type: "photo"; src: string }
  | { type: "block"; height: number; color: string };

const columnConfigs = [
  {
    photoIndexes: [0, 1],
    blockHeights: [120, 156, 138],
    speedSeconds: 7.5,
    direction: "normal" as ReelDirection,
    sequence: ["photo", "block", "block", "photo", "block"] as const,
  },
  {
    photoIndexes: [2, 3],
    blockHeights: [102, 132, 114, 146],
    speedSeconds: 10.5,
    direction: "reverse" as ReelDirection,
    sequence: ["block", "photo", "block", "photo", "block", "block"] as const,
  },
  {
    photoIndexes: [4],
    blockHeights: [132, 152, 118],
    speedSeconds: 8.5,
    direction: "normal" as ReelDirection,
    sequence: ["block", "photo", "block", "block"] as const,
    withTopOffset: true,
  },
  {
    photoIndexes: [5],
    blockHeights: [116, 146],
    speedSeconds: 6.8,
    direction: "reverse" as ReelDirection,
    sequence: ["photo", "block", "block"] as const,
    withTopOffset: true,
  },
  {
    photoIndexes: [6, 7],
    blockHeights: [138, 108, 154],
    speedSeconds: 11.8,
    direction: "normal" as ReelDirection,
    sequence: ["photo", "block", "photo", "block", "block"] as const,
  },
  {
    photoIndexes: [8, 9],
    blockHeights: [110, 142, 124, 148],
    speedSeconds: 9.2,
    direction: "reverse" as ReelDirection,
    sequence: ["block", "photo", "block", "photo", "block", "block"] as const,
  },
];

function getSlotColor(columnIndex: number, blockIndex: number) {
  return slotPalette[(columnIndex * 3 + blockIndex * 2) % slotPalette.length];
}

function buildReelItems(columnIndex: number) {
  const column = columnConfigs[columnIndex];
  let photoCursor = 0;
  let blockCursor = 0;

  return column.sequence.map((item): ReelItem => {
    if (item === "photo") {
      const photoIndex = column.photoIndexes[photoCursor % column.photoIndexes.length];
      photoCursor += 1;
      return {
        type: "photo",
        src: carouselPhotos[photoIndex],
      };
    }

    const height = column.blockHeights[blockCursor % column.blockHeights.length];
    const color = getSlotColor(columnIndex, blockCursor);
    blockCursor += 1;
    return {
      type: "block",
      height,
      color,
    };
  });
}

export const reelItemsByColumn = columnConfigs.map((_, columnIndex) =>
  buildReelItems(columnIndex),
);

export { columnConfigs };
