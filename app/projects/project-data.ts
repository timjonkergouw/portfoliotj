type ProjectSectionId = "idea" | "design" | "develop";

export type InspirationSlide = {
  src: string;
  caption: string;
  source?: string;
  alt?: string;
  thumbClassName?: string;
  modalClassName?: string;
};

export type FlipInspirationCard = {
  src: string;
  alt: string;
  source: string;
  backText: string;
};

type LogoScrollFrame = {
  src: string;
  alt: string;
  note?: string;
};

type LogoScrollGradient = {
  from: string;
  to: string;
};

type LogoScrollShowcaseTheme = {
  background?: string;
  text: string;
  progress?: string;
  progressTrack?: string;
};

export type LogoScrollShowcaseConfig = {
  frames: LogoScrollFrame[];
  gradients?: LogoScrollGradient[];
  solidBackground?: string;
  theme?: LogoScrollShowcaseTheme;
  textBeforeImage?: boolean;
  imagesFillHeight?: boolean;
  compactScroll?: boolean;
  /** Side-by-side text/image columns with opposite scroll directions. */
  dualColumnScroll?: boolean;
  /** Total pinned scroll length in viewport heights (higher = slower). */
  pinScrollVh?: number;
  textStepLogo?: string;
  textStepLogoAlt?: string;
};

type ProjectSection = {
  id: ProjectSectionId;
  title: string;
  description: string;
  afterInspiration?: string;
  figmaEmbedUrl?: string;
  figmaFileUrl?: string;
  afterFigma?: string;
  websiteEmbedUrl?: string;
  websiteUrl?: string;
  websiteEmbedLayout?: "full" | "mobile-side";
  logoScrollShowcase?: LogoScrollShowcaseConfig;
  inspirationSlides?: InspirationSlide[];
  secondarySlides?: InspirationSlide[];
  flipInspirationCards?: FlipInspirationCard[];
};

export type Project = {
  number: string;
  title: string;
  image: string;
  homeCardImage: string;
  homeCardClass: string;
  headerLogo?: string;
  headerLogoClassName?: string;
  headerLogoSizes?: string;
  intro: string;
  sections: ProjectSection[];
};

const homeProjectCardClasses = {
  fioresque:
    "w-full max-w-[520px] justify-self-center md:absolute md:left-[2%] md:top-[4%] md:max-w-none md:w-[min(42vw,440px)] lg:w-[min(38vw,500px)]",
  dartclub:
    "w-full max-w-[390px] justify-self-center md:absolute md:right-[4%] md:top-[7%] md:max-w-none md:w-[min(32vw,320px)] lg:w-[min(28vw,360px)]",
  "quality-lodgings":
    "w-full max-w-[500px] justify-self-center md:absolute md:left-1/2 md:top-[34%] md:max-w-none md:w-[min(40vw,410px)] md:-translate-x-1/2 lg:w-[min(36vw,460px)]",
  rosh: "w-full max-w-[330px] justify-self-center md:absolute md:right-[5%] md:top-[64%] md:max-w-none md:w-[min(28vw,280px)] lg:w-[min(26vw,310px)]",
  vara: "w-full max-w-[560px] justify-self-center md:absolute md:left-[2%] md:top-[67%] md:max-w-none md:w-[min(44vw,460px)] lg:w-[min(40vw,520px)]",
} as const;

const projects: Record<string, Project> = {
  fioresque: {
    number: "1",
    title: "Fioresque",
    image: "/fioresque/fioresque.gif",
    homeCardImage: "/fioresque oud.png",
    homeCardClass: homeProjectCardClasses.fioresque,
    headerLogo: "/fioresque/fioresque logo zwart tekst wit.png",
    intro:
      "Een fictief fashionmerk-project waarin concept, visuele identiteit en digitale uitwerking samenkomen in drie fases: idea, design en develop.",
    sections: [
      {
        id: "idea",
        title: "Idee",
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
        title: "Ontwerp",
        description:
          "De inspiratie die ik heb opgedaan, heb ik meegenomen in het ontwerpen van de website. Zo heb ik, net als bij veel andere kledingwebsites, een grote hero section op de landingspagina geplaatst. Hier promoten merken vaak hun brand of de nieuwste collectie, en dat wilde ik ook terug laten komen in mijn ontwerp. Onder de hero section heb ik een aantal shirts uit de nieuwe collectie weergegeven. Daarnaast maken veel kledingmerken gebruik van rechte vlakken en een duidelijke gridstructuur. Dit zorgt ervoor dat de website overzichtelijk blijft en goed werkt op zowel desktop als mobiele apparaten. Deze aanpak heb ik daarom ook toegepast in mijn eigen ontwerp. Verder heb ik met behulp van AI een afbeelding gegenereerd van een bloementuin met een mooi landhuis. Deze afbeelding dient als extra visueel element op de website. Daaronder heb ik een korte tekst toegevoegd waarin meer wordt verteld over het merk en de achterliggende visie.",
        figmaEmbedUrl:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FzlNqaX4SkfsNBlGihl6H0P%2FFioresque-Showcase-Portfolio%3Fnode-id%3D0-1%26t%3D1koxl0FeFBdQwRGX-1",
        figmaFileUrl:
          "https://www.figma.com/design/zlNqaX4SkfsNBlGihl6H0P/Fioresque-Showcase-Portfolio?node-id=0-1&t=1koxl0FeFBdQwRGX-1",
        afterFigma:
          "Nadat ik deze basislay-out had gemaakt, ben ik begonnen met het ontwerpen van de kledingstukken. Voor de designs heb ik inspiratie gehaald uit elementen die veel voorkomen in de natuur, wat ook goed aansluit bij de naam Fioresque. Daarnaast heb ik gekeken naar dingen die ik zelf mooi en interessant vind. Door deze inspiratiebronnen te combineren, ben ik uiteindelijk tot de volgende designs gekomen.",
        logoScrollShowcase: {
          pinScrollVh: 1600,
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
        title: "Ontwikkeling",
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
    homeCardImage: "/dartcub oud.png",
    homeCardClass: homeProjectCardClasses.dartclub,
    headerLogo: "/dartclub/dartclub.svg",
    headerLogoClassName:
      "h-[200px] max-w-[800px] md:h-[300px] md:max-w-[1100px]",
    headerLogoSizes: "(min-width: 768px) 1100px, 800px",
    intro:
      "Een project rondom een dartclub waarin identiteit, visuele communicatie en digitale presentatie in drie fases zijn uitgewerkt.",
    sections: [
      {
        id: "idea",
        title: "Idee",
        description:
          "Mijn oorspronkelijke idee voor mijn persoonlijke project in het derde semester was het maken van een dartsapp. Met deze app zou je zelf een potje 501 kunnen spelen en daarnaast de uitslagen van alle professionele darttoernooien kunnen bekijken. Er was alleen één probleem: de API die de dartsuitslagen leverde was niet gratis. Daarom heb ik het idee aangepast en ben ik verder gegaan met een dartsapp waarin je ook een drankmodus kunt inschakelen. Omdat ik zelf graag een potje dart met vrienden en daar tussendoor weleens een drankje bij drink, leek het mij leuk om hier iets mee te doen. Ik kwam erachter dat er eigenlijk nog geen app bestond die darten combineert met drankspel-elementen. Daarom besloot ik om dit idee verder uit te werken en zelf te gaan maken.",
      },
      {
        id: "design",
        title: "Ontwerp",
        description:
          "Eerst ben ik gaan kijken naar andere grote apps voor inspiratie. Daarbij heb ik mij vooral gericht op mobiele apps, omdat ik zelf ook een Progressive Web App (PWA) wilde maken. Op die manier kunnen gebruikers de app eenvoudig op hun telefoon gebruiken en overal waar ze willen een potje darten spelen. Tijdens dit onderzoek heb ik gekeken naar verschillende layouts, navigatiestructuren en functies die veel voorkomen in succesvolle mobiele apps. Deze inzichten heb ik vervolgens meegenomen in het ontwerp van mijn eigen app.",
        flipInspirationCards: [
          {
            src: "/dartclub/inspiratie/dci1.svg",
            alt: "Mobiele app inspiratie 1",
            source: "Darts Score",
            backText:
              "Dit is een erg simpele layout die goed werkt. De focus ligt vooral op functionaliteit, waardoor de app duidelijk en gebruiksvriendelijk is. Wel oogt het ontwerp daardoor wat saai en mist het een unieke uitstraling.",
          },
          {
            src: "/dartclub/inspiratie/dci2.svg",
            alt: "Mobiele app inspiratie 2",
            source: "DartCounter",
            backText:
              "Dit is Target DartCounter, veruit de meest gebruikte dartsapp. Net als veel andere dartsapps heeft deze app een standaard, maar goed werkende layout. Wat vrijwel overal terugkomt, is een toetsenbord onderaan het scherm voor het invoeren van scores. Dit wilde ik daarom ook meenemen in mijn eigen design.",
          },
          {
            src: "/dartclub/inspiratie/dci3.svg",
            alt: "Mobiele app inspiratie 3",
            source: "Russ Bray Darts Scorer",
            backText:
              "Dit is de app van de legendarische darts caller Russ Bray. De app is vrij simpel en vooral bijzonder omdat de caller je score hardop uitspreekt wanneer je deze invoert. Ook hier zie je weer het toetsenbord onderaan en de score bovenin het scherm, wat zorgt voor een duidelijke en herkenbare structuur.",
          },
        ],
        afterInspiration:
          "Om deze designs te realiseren, ben ik in Figma begonnen met het ontwerpen van een groot deel van de pagina's. Op deze manier kon ik vooraf een strakke en functionele uitstraling neerzetten en een duidelijk beeld krijgen van hoe de app eruit zou komen te zien.",
        logoScrollShowcase: {
          pinScrollVh: 1400,
          solidBackground: "#EEEEEE",
          dualColumnScroll: true,
          imagesFillHeight: true,
          compactScroll: true,
          theme: {
            text: "#0A294F",
            progress: "#0A294F",
            progressTrack: "rgba(10, 41, 79, 0.2)",
          },
          textStepLogo: "/dartclub/dartclub.svg",
          textStepLogoAlt: "Dartclub",
          frames: [
            {
              src: "/dartclub/dartclub webdesign/hoofdscherm donkerblauw.svg",
              alt: "Dartclub hoofdscherm",
              note:
                "Op het hoofdscherm heb ik gekozen voor een vrij simpele layout, waarbij je duidelijk kunt kiezen wat je wilt spelen of wilt bekijken.",
            },
            {
              src: "/dartclub/dartclub webdesign/501 menu donkerblauw.svg",
              alt: "Dartclub 501 menu",
              note:
                "Als je vervolgens 501 wilt spelen, kom je op dit scherm terecht. Bovenaan kun je de spelers aanpassen. Daaronder kun je kiezen of je legs of sets wilt spelen en of je het checkout-percentage wilt tonen.",
            },
            {
              src: "/dartclub/dartclub webdesign/501 donkerblauw.svg",
              alt: "Dartclub 501 spelscherm",
              note:
                "Zodra je het spel start, kom je op dit scherm. Bovenaan zie je welke spelers aan de beurt zijn. Net als in de inspiratie zie je onderaan een toetsenbord, waarmee je eenvoudig de scores kunt invoeren.",
            },
            {
              src: "/dartclub/dartclub webdesign/501 borrelmenu donkerblauw.svg",
              alt: "Dartclub 501 borrelmenu",
              note:
                "Als je in plaats van normaal 501 de borrelversie wilt spelen, verschijnt er onderaan een extra optie. Hier kun je aangeven welk gemiddelde iemand gooit, zodat het spel voor iedereen eerlijk blijft. Ook kun je kiezen tussen easy, medium, hard of extreme. Dit werkt eigenlijk als een soort slokken-multiplier.",
            },
            {
              src: "/dartclub/dartclub webdesign/501 borrel score invoer donkerblauw.svg",
              alt: "Dartclub borrel score invoer",
              note:
                "Bij de drankmodus zitten aan sommige scores extra regels gekoppeld, zoals bijvoorbeeld bij een 180.",
            },
            {
              src: "/dartclub/dartclub webdesign/501 180 score pop up donkerblauw.svg",
              alt: "Dartclub 180 score pop-up",
              note:
                "Als het iemand lukt om een 180 te gooien, moeten alle spelers hun overige bier in een keer opdrinken.",
            },
            {
              src: "/dartclub/dartclub webdesign/slokken symbolen.svg",
              alt: "Dartclub slokken symbolen",
              note:
                "Verder heb je ook de “kleiner dan”-regel, die afhangt van je gemiddelde. Hierbij moet je een slok nemen als je lager gooit dan een bepaald getal. Dit getal is afhankelijk van het gemiddelde dat je hebt gekozen. Daarnaast geldt bijvoorbeeld dat je bij het gooien van een bed & breakfast (26) zelf een slok moet nemen.",
            },
            {
              src: "/dartclub/dartclub webdesign/stats donkerblauw.svg",
              alt: "Dartclub statistieken",
              note:
                "Ook kun je je statistieken bekijken. Hier zie je onder andere waar je in bent verbeterd, wat je hoogste uitgooi is, en andere persoonlijke spelelementen.",
            },
          ],
        },
      },
      {
        id: "develop",
        title: "Ontwikkeling",
        description:
          "Hierna ben ik begonnen met het omzetten van het design naar code. Dit heb ik gedaan in Cursor, waarbij ik gebruik heb gemaakt van Next.js en React.\n\nDaarnaast heb ik Supabase gekoppeld als database voor de webapp. Het probleem is alleen dat de gratis versie van Supabase automatisch wordt gedeactiveerd als je het twee weken niet gebruikt. Omdat ik geen betaalde versie heb en niet meer actief aan dit project werk, is er een grote kans dat de app niet meer goed werkt, bijvoorbeeld wanneer je een nieuwe speler probeert aan te maken.",
        websiteEmbedUrl: "https://dartclub.vercel.app/",
        websiteUrl: "https://dartclub.vercel.app/",
        websiteEmbedLayout: "mobile-side",
      },
    ],
  },
  "quality-lodgings": {
    number: "3",
    title: "Quality Lodgings",
    image: "/ql oud.png",
    homeCardImage: "/ql oud.png",
    homeCardClass: homeProjectCardClasses["quality-lodgings"],
    intro:
      "Een hospitality-project waarin merkbeleving, interface-design en technische uitwerking samenkomen voor een premium lodging-ervaring.",
    sections: [
      {
        id: "idea",
        title: "Idee",
        description:
          "Het uitgangspunt was een premium maar toegankelijke merkervaring voor accommodaties. Het concept richt zich op vertrouwen, comfort en een duidelijke beleving van kwaliteit voor gasten.",
      },
      {
        id: "design",
        title: "Ontwerp",
        description:
          "De visuele richting benadrukt rust, elegantie en helderheid. Typografie, beeldtaal en layout zijn ontworpen om informatie over verblijven overzichtelijk en aantrekkelijk te presenteren.",
      },
      {
        id: "develop",
        title: "Ontwikkeling",
        description:
          "In develop is het ontwerp omgezet naar een functionele webervaring met focus op navigatie, responsive gedrag en een heldere customer journey van oriëntatie tot contact.",
      },
    ],
  },
  rosh: {
    number: "4",
    title: "ROSH",
    image: "/rosh oud.png",
    homeCardImage: "/rosh oud.png",
    homeCardClass: homeProjectCardClasses.rosh,
    intro:
      "Een merkgericht project waarin strategie, design en development samen een complete digitale identiteit vormen.",
    sections: [
      {
        id: "idea",
        title: "Idee",
        description:
          "ROSH startte vanuit een helder merkverhaal en doelgroepbeeld. Het idee was een sterke, moderne identiteit neer te zetten die direct communiceert wat het merk uniek maakt.",
      },
      {
        id: "design",
        title: "Ontwerp",
        description:
          "De design-fase vertaalde het concept naar visuele bouwstenen: logo, kleuren, typografie en interfacecomponenten die samen een consistente merkbeleving vormen.",
      },
      {
        id: "develop",
        title: "Ontwikkeling",
        description:
          "Bij develop zijn de designs geïmplementeerd in een digitale omgeving met aandacht voor performance, schaalbaarheid en een soepele gebruikerservaring op verschillende schermformaten.",
      },
    ],
  },
  vara: {
    number: "5",
    title: "VARA",
    image: "/vara oud.png",
    homeCardImage: "/vara oud.png",
    homeCardClass: homeProjectCardClasses.vara,
    intro:
      "Een media-gericht project waarin conceptontwikkeling, visueel ontwerp en technische realisatie in drie stappen zijn doorlopen.",
    sections: [
      {
        id: "idea",
        title: "Idee",
        description:
          "Het concept voor VARA richtte zich op een herkenbare en toegankelijke media-ervaring. De basis was een duidelijke contentstructuur en een verhaal dat de doelgroep direct aanspreekt.",
      },
      {
        id: "design",
        title: "Ontwerp",
        description:
          "In design zijn layouts, hiërarchie en visuele stijl bepaald zodat content overzichtelijk en aantrekkelijk wordt gepresenteerd, met consistent gebruik van merkkleuren en typografie.",
      },
      {
        id: "develop",
        title: "Ontwikkeling",
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

export function getHomeProjectCards() {
  return projectSlugs.map((slug) => {
    const project = projects[slug];
    return {
      id: project.number,
      name: project.title,
      image: project.homeCardImage,
      href: `/projects/${slug}`,
      cardClass: project.homeCardClass,
    };
  });
}
