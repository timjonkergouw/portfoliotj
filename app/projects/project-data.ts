export type ProjectSectionId = "idea" | "design" | "develop";

export type InspirationSlide = {
  src: string;
  caption: string;
  source?: string;
  alt?: string;
  thumbClassName?: string;
  modalClassName?: string;
};

export type LogoScrollFrame = {
  src: string;
  alt: string;
  note?: string;
};

export type LogoScrollGradient = {
  from: string;
  to: string;
};

export type LogoScrollShowcaseConfig = {
  frames: LogoScrollFrame[];
  gradients: LogoScrollGradient[];
  pinHeightClass?: string;
};

export type ProjectSection = {
  id: ProjectSectionId;
  title: string;
  description: string;
  afterInspiration?: string;
  figmaEmbedUrl?: string;
  figmaFileUrl?: string;
  afterFigma?: string;
  websiteEmbedUrl?: string;
  websiteUrl?: string;
  logoScrollShowcase?: LogoScrollShowcaseConfig;
  images?: string[];
  inspirationSlides?: InspirationSlide[];
  secondarySlides?: InspirationSlide[];
};

export type Project = {
  number: string;
  title: string;
  image: string;
  headerLogo?: string;
  intro: string;
  sections: ProjectSection[];
};

export const projects: Record<string, Project> = {
  fioresque: {
    number: "1",
    title: "Fioresque",
    image: "/fioresque/fioresque.gif",
    headerLogo: "/fioresque/fioresque logo zwart tekst wit.png",
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
            src: "/fioresque/inspiratie/arte inspiratie 1.svg",
            caption:
              "Strakke typografie en rustige kleuren die ik heb meegenomen in de basis van Fioresque.",
            source: "Arte Antwerp",
            alt: "Arte inspiratie",
          },
          {
            src: "/fioresque/inspiratie/bagouve inspiratie 1.svg",
            caption:
              "Zachte tinten en speelse details die pasten bij de lente vibe van de collectie.",
            source: "Bagouve Artwear",
            alt: "Bagouve inspiratie",
          },
          {
            src: "/fioresque/inspiratie/eme inspiratie 1.svg",
            caption:
              "Minimalistische layouts met veel witruimte voor een clean en modern merkgevoel.",
            source: "Eme Studios",
            alt: "Eme inspiratie",
          },
          {
            src: "/fioresque/inspiratie/newamsterdam inspiratie 1.svg",
            caption:
              "Urban streetwear energie met opvallende graphics en sterke logo-plaatsing.",
            source: "New Amsterdam Surf Association",
            alt: "New Amsterdam inspiratie",
          },
          {
            src: "/fioresque/inspiratie/suspicious antwerp inspiratie 1.svg",
            caption:
              "Bold contrasten en grafische shirts die ik heb vertaald naar eigen Fioresque designs.",
            source: "Suspicious Antwerp",
            alt: "Suspicious Antwerp inspiratie",
          },
        ],
        afterInspiration:
          "Daarnaast ben ik op zoek gegaan naar een goede naam. Eerst kwam ik uit op Fiori, wat bloem betekent in het Italiaans. Deze naam heb ik verder uitgewerkt en ik heb er ook verschillende designs voor gemaakt. Uiteindelijk vond ik deze naam toch niet helemaal passen bij wat ik voor ogen had. Daarom heb ik besloten om alles te rebranden naar Fioresque. Deze naam vind ik net wat chiquer klinken, terwijl het nog steeds iets van het oorspronkelijke Fiori behoudt. Hierdoor blijft de link met bloemen en de inspiratie achter het merk bestaan.",
        secondarySlides: [
          {
            src: "/fioresque/fiori/Fiori logo 9.svg",
            caption: "Eerste logo-exploratie voor het merk Fiori.",
            alt: "Fiori logo",
            thumbClassName: "object-contain p-4",
            modalClassName: "object-contain p-4",
          },
          {
            src: "/fioresque/fiori/Fiori Tropisch tekst 5.svg",
            caption: "Typografie en tropische stijl binnen de Fiori branding.",
            alt: "Fiori tropisch tekst",
            thumbClassName: "object-contain p-4",
            modalClassName: "object-contain p-4",
          },
          {
            src: "/fioresque/fiori/Bloemhuis design 4.svg",
            caption: "Bloemhuis design als visueel onderdeel van de collectie.",
            alt: "Bloemhuis design",
            thumbClassName: "object-contain p-4",
            modalClassName: "object-contain p-4",
          },
          {
            src: "/fioresque/fiori/Vaas met tekst 6.svg",
            caption: "Vaas met tekst als experiment binnen de Fiori designs.",
            alt: "Vaas met tekst",
            thumbClassName: "object-contain p-7",
            modalClassName: "object-contain p-8",
          },
          {
            src: "/fioresque/fiori/Fiori fruit design 2 7.svg",
            caption: "Fruit design als speels element in de eerste ontwerpen.",
            alt: "Fiori fruit design",
            thumbClassName: "object-contain p-7",
            modalClassName: "object-contain p-8",
          },
        ],
      },
      {
        id: "design",
        title: "Design",
        description:
          "De inspiratie die ik heb opgedaan, heb ik meegenomen in het ontwerpen van de website. Zo heb ik, net als bij veel andere kledingwebsites, een grote hero section op de landingspagina geplaatst. Hier promoten merken vaak hun brand of de nieuwste collectie, en dat wilde ik ook terug laten komen in mijn ontwerp. Onder de hero section heb ik een aantal shirts uit de nieuwe collectie weergegeven. Daarnaast maken veel kledingmerken gebruik van rechte vlakken en een duidelijke gridstructuur. Dit zorgt ervoor dat de website overzichtelijk blijft en goed werkt op zowel desktop als mobiele apparaten. Deze aanpak heb ik daarom ook toegepast in mijn eigen ontwerp. Verder heb ik met behulp van AI een afbeelding gegenereerd van een bloementuin met een mooi landhuis. Deze afbeelding dient als extra visueel element op de website. Daaronder heb ik een korte tekst toegevoegd waarin meer wordt verteld over het merk en de achterliggende visie.",
        figmaEmbedUrl:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FzlNqaX4SkfsNBlGihl6H0P%2FFioresque-Showcase-Portfolio%3Fnode-id%3D0-1%26t%3D1koxl0FeFBdQwRGX-1",
        figmaFileUrl:
          "https://www.figma.com/design/zlNqaX4SkfsNBlGihl6H0P/Fioresque-Showcase-Portfolio?node-id=0-1&t=1koxl0FeFBdQwRGX-1",
        afterFigma:
          "Nadat ik deze basislay-out had gemaakt, ben ik begonnen met het ontwerpen van de kledingstukken. Voor de designs heb ik inspiratie gehaald uit elementen die veel voorkomen in de natuur, wat ook goed aansluit bij de naam Fioresque. Daarnaast heb ik gekeken naar dingen die ik zelf mooi en interessant vind. Door deze inspiratiebronnen te combineren, ben ik uiteindelijk tot de volgende designs gekomen.",
        logoScrollShowcase: {
          pinHeightClass: "h-[520vh]",
          frames: [
            {
              src: "/fioresque/logos scroll effect/logo frame zwart.svg",
              alt: "Fioresque logo frame zwart",
              note:
                "Donkere basisvariant die focust op contrast en een strakke, premium uitstraling.",
            },
            {
              src: "/fioresque/logos scroll effect/logo frame wit.svg",
              alt: "Fioresque logo frame wit",
              note:
                "Lichte tegenhanger van het hoofdlogo, bedoeld voor rustige en minimalistische layouts.",
            },
            {
              src: "/fioresque/logos scroll effect/logo frame blurry.svg",
              alt: "Fioresque logo frame blurry",
              note:
                "Experimentele blur-versie die beweging en een meer artistieke sfeer toevoegt.",
            },
            {
              src: "/fioresque/logos scroll effect/logo frame pixel.svg",
              alt: "Fioresque logo frame pixel",
              note:
                "Pixel-invloed voor een speels digitaal karakter binnen de identiteit.",
            },
            {
              src: "/fioresque/logos scroll effect/logo frame poppetjes.svg",
              alt: "Fioresque logo frame poppetjes",
              note:
                "Illustratieve variant met meer persoonlijkheid en een toegankelijke, creatieve vibe.",
            },
            {
              src: "/fioresque/logos scroll effect/logo frame kwal.svg",
              alt: "Fioresque logo frame kwal",
              note:
                "Natuur-geinspireerde richting waarin organische vormen centraal staan.",
            },
            {
              src: "/fioresque/logos scroll effect/logo frame papegaai.svg",
              alt: "Fioresque logo frame papegaai",
              note:
                "Meer tropische benadering met levendige energie die past bij het concept.",
            },
            {
              src: "/fioresque/logos scroll effect/logo frame bloempad.svg",
              alt: "Fioresque logo frame bloempad",
              note:
                "Visuele link met bloemen en groei, als vertaling van de merknaam Fioresque.",
            },
            {
              src: "/fioresque/logos scroll effect/logo frame bloem.svg",
              alt: "Fioresque logo frame bloem",
              note:
                "Finale bloem-variant waarin de natuurlijke kern van het merk het duidelijkst terugkomt.",
            },
          ],
          gradients: [
            { from: "#F8F8F8", to: "#DCDCDC" },
            { from: "#141414", to: "#3A3A3A" },
            { from: "#2B2437", to: "#6A5A8B" },
            { from: "#1E3A8A", to: "#FACC15" },
            { from: "#6E5B4A", to: "#D8CBBE" },
            { from: "#0A2A39", to: "#3A8FAF" },
            { from: "#0E3B2E", to: "#5A8F3A" },
            { from: "#3C7B2E", to: "#D8B93F" },
            { from: "#0B1026", to: "#3B4A7D" },
          ],
        },
      },
      {
        id: "develop",
        title: "Develop",
        description:
          "In de develop-fase heb ik de designs uitgewerkt naar een website. Hierbij heb ik gezorgd voor een overzichtelijke structuur, een responsive design voor zowel desktop als mobiel en een duidelijke opbouw waarmee bezoekers makkelijk de collectie kunnen bekijken en meer te weten komen over het verhaal achter het merk. Helaas ben ik er niet aan toe gekomen om de website volledig af te maken. Ook staan er op sommige plekken nog teksten van de eerdere Fiori-versie van de website. Ondanks dat is de basis van de website wel aanwezig en geeft deze al een goed beeld van hoe het eindresultaat eruit zou moeten zien. Deze website heb ik gemaakt met HTML en CSS. Tegenwoordig werk ik eigenlijk altijd met Next.js en React, maar voor dit project heb ik ervoor gekozen om het op deze manier te bouwen. Daarnaast heb ik gebruikgemaakt van Cursor AI. Dit werkte erg handig en gaf mij meer inzicht in de code en de oplossingen die werden voorgesteld. Hierdoor kon ik beter begrijpen wat er precies gebeurde tijdens het ontwikkelen van de website. Ik kan wel zeggen dat dit tot nu toe mijn leukste project is geweest. Ik maak er soms nog steeds designs voor, omdat ik het echt heel leuk vind om ermee bezig te zijn. Als ik ooit weer wat meer vrije tijd heb, lijkt het me vet om dit idee verder uit te werken en misschien zelfs echt door te ontwikkelen.",
        websiteEmbedUrl: "https://fiori-artwear.vercel.app/index.html",
        websiteUrl: "https://fiori-artwear.vercel.app/index.html",
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
