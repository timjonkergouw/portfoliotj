export type ProjectSectionId = "idea" | "design" | "develop";

export type InspirationSlide = {
  src: string;
  caption: string;
  source: string;
  alt?: string;
};

export type ProjectSection = {
  id: ProjectSectionId;
  title: string;
  description: string;
  images?: string[];
  inspirationSlides?: InspirationSlide[];
};

export type Project = {
  number: string;
  title: string;
  image: string;
  intro: string;
  sections: ProjectSection[];
};

export const projects: Record<string, Project> = {
  fioresque: {
    number: "1",
    title: "Fioresque",
    image: "/fioresque/fioresque.gif",
    intro:
      "Een fictief fashionmerk-project waarin concept, visuele identiteit en digitale uitwerking samenkomen in drie fases: idea, design en develop.",
    sections: [
      {
        id: "idea",
        title: "Idea",
        description:
          "Fioresque is een idee dat ik had in mijn tweede semester, toen we volledige vrijheid kregen om een persoonlijk project te maken. Omdat ik het zelf leuk vind om bezig te zijn met kleding en design, leek het mij leuk om een eigen kledingmerk op te zetten. Vervolgens ben ik gaan kijken naar andere kledingmerken die ik zelf mooi vind en waarvan ik de stijl aansprekend vind. Die elementen heb ik vervolgens vertaald naar mijn eigen stijl. Tijdens deze opdracht stond de lente in volle bloei en daar wilde ik graag iets mee doen. Daarom wilde ik vrolijke en stijlvolle kleding ontwerpen die bij dat seizoen passen. Ik ben begonnen met het opdoen van inspiratie bij verschillende bedrijven, zoals hieronder weergegeven.",
        inspirationSlides: [
          {
            src: "/fioresque/arte inspiratie.png",
            caption:
              "Strakke typografie en rustige kleuren die ik heb meegenomen in de basis van Fioresque.",
            source: "Arte Antwerp",
            alt: "Arte inspiratie",
          },
          {
            src: "/fioresque/bagouve inspiratie.png",
            caption:
              "Zachte tinten en speelse details die pasten bij de lente vibe van de collectie.",
            source: "Bagouve Artwear",
            alt: "Bagouve inspiratie",
          },
          {
            src: "/fioresque/eme inspiratie.png",
            caption:
              "Minimalistische layouts met veel witruimte voor een clean en modern merkgevoel.",
            source: "Eme Studios",
            alt: "Eme inspiratie",
          },
          {
            src: "/fioresque/newamsterdam inspiratie.png",
            caption:
              "Urban streetwear energie met opvallende graphics en sterke logo-plaatsing.",
            source: "New Amsterdam Surf Association",
            alt: "New Amsterdam inspiratie",
          },
          {
            src: "/fioresque/suspicious antwerp inspiratie.png",
            caption:
              "Bold contrasten en grafische shirts die ik heb vertaald naar eigen Fioresque designs.",
            source: "Suspicious Antwerp",
            alt: "Suspicious Antwerp inspiratie",
          },
        ],
      },
      {
        id: "design",
        title: "Design",
        description:
          "Voor Fioresque heb ik logo's, typografie en shirt-designs uitgewerkt in een consistente visuele stijl. De focus lag op contrast tussen strakke merkteksten en organische illustraties, zodat elk product onderdeel voelt van hetzelfde merkverhaal.",
        images: [
          "/fioresque/fioresque logo zwart tekst wit.png",
          "/fioresque/fioresque flower logo tee.png",
          "/fioresque/jelly fish tee design.png",
          "/fioresque/fioresque flower field design.png",
        ],
      },
      {
        id: "develop",
        title: "Develop",
        description:
          "In de develop-fase heb ik de designs vertaald naar een digitale presentatie: een overzichtelijke webstructuur, responsive layouts en een visuele flow die de collectie en het merkverhaal duidelijk laat zien aan bezoekers.",
      },
    ],
  },
  dartclub: {
    number: "2",
    title: "Dartclub",
    image: "/dartcub oud.png",
    intro:
      "Een project rondom een dartclub waarin identiteit, visuele communicatie en digitale presentatie in drie fases zijn uitgewerkt.",
    sections: [
      {
        id: "idea",
        title: "Idea",
        description:
          "Het idee was een sterke clubidentiteit te creëren die energie, competitie en community uitstraalt. De basis lag in een duidelijk concept dat zowel online als offline herkenbaar is voor leden en bezoekers.",
      },
      {
        id: "design",
        title: "Design",
        description:
          "In de design-fase zijn kleurpalet, typografie en visuele elementen ontwikkeld die passen bij de sfeer van de club. Hierbij is gelet op leesbaarheid, contrast en een consistente uitstraling over alle uitingen.",
      },
      {
        id: "develop",
        title: "Develop",
        description:
          "Tijdens develop is het concept vertaald naar een digitale ervaring met een overzichtelijke structuur, responsive opbouw en een interface die de club en activiteiten helder presenteert.",
      },
    ],
  },
  "quality-lodgings": {
    number: "3",
    title: "Quality Lodgings",
    image: "/ql oud.png",
    intro:
      "Een hospitality-project waarin merkbeleving, interface-design en technische uitwerking samenkomen voor een premium lodging-ervaring.",
    sections: [
      {
        id: "idea",
        title: "Idea",
        description:
          "Het uitgangspunt was een premium maar toegankelijke merkervaring voor accommodaties. Het concept richt zich op vertrouwen, comfort en een duidelijke beleving van kwaliteit voor gasten.",
      },
      {
        id: "design",
        title: "Design",
        description:
          "De visuele richting benadrukt rust, elegantie en helderheid. Typografie, beeldtaal en layout zijn ontworpen om informatie over verblijven overzichtelijk en aantrekkelijk te presenteren.",
      },
      {
        id: "develop",
        title: "Develop",
        description:
          "In develop is het ontwerp omgezet naar een functionele webervaring met focus op navigatie, responsive gedrag en een heldere customer journey van oriëntatie tot contact.",
      },
    ],
  },
  rosh: {
    number: "4",
    title: "ROSH",
    image: "/rosh oud.png",
    intro:
      "Een merkgericht project waarin strategie, design en development samen een complete digitale identiteit vormen.",
    sections: [
      {
        id: "idea",
        title: "Idea",
        description:
          "ROSH startte vanuit een helder merkverhaal en doelgroepbeeld. Het idee was een sterke, moderne identiteit neer te zetten die direct communiceert wat het merk uniek maakt.",
      },
      {
        id: "design",
        title: "Design",
        description:
          "De design-fase vertaalde het concept naar visuele bouwstenen: logo, kleuren, typografie en interfacecomponenten die samen een consistente merkbeleving vormen.",
      },
      {
        id: "develop",
        title: "Develop",
        description:
          "Bij develop zijn de designs geïmplementeerd in een digitale omgeving met aandacht voor performance, schaalbaarheid en een soepele gebruikerservaring op verschillende schermformaten.",
      },
    ],
  },
  vara: {
    number: "5",
    title: "VARA",
    image: "/vara oud.png",
    intro:
      "Een media-gericht project waarin conceptontwikkeling, visueel ontwerp en technische realisatie in drie stappen zijn doorlopen.",
    sections: [
      {
        id: "idea",
        title: "Idea",
        description:
          "Het concept voor VARA richtte zich op een herkenbare en toegankelijke media-ervaring. De basis was een duidelijke contentstructuur en een verhaal dat de doelgroep direct aanspreekt.",
      },
      {
        id: "design",
        title: "Design",
        description:
          "In design zijn layouts, hiërarchie en visuele stijl bepaald zodat content overzichtelijk en aantrekkelijk wordt gepresenteerd, met consistent gebruik van merkkleuren en typografie.",
      },
      {
        id: "develop",
        title: "Develop",
        description:
          "De develop-fase bracht het ontwerp tot leven met een technische opbouw die content flexibel toont, goed presteert en op alle devices een consistente ervaring biedt.",
      },
    ],
  },
};

export const projectSlugs = Object.keys(projects);

export function getProject(slug: string): Project | undefined {
  return projects[slug];
}
