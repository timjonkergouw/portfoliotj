type ProjectSectionId = "idea" | "design" | "develop" | "opdracht";

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

export type WorkScreenSlide = {
  src: string;
  alt: string;
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
  dualColumnScroll?: boolean;
  clickToAdvance?: boolean;
  clickAdvanceDurationMs?: number;
  scrollAdvanceCooldownMs?: number;
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
  sectionLogo?: string;
  sectionLogoAlt?: string;
  logoScrollShowcase?: LogoScrollShowcaseConfig;
  inspirationSlides?: InspirationSlide[];
  secondarySlides?: InspirationSlide[];
  flipInspirationCards?: FlipInspirationCard[];
  workScreenSlides?: WorkScreenSlide[];
};

export type Project = {
  number: string;
  title: string;
  image: string;
  pageLogo?: string;
  headerLogoClassName?: string;
  headerLogoSizes?: string;
  intro: string;
  sections: ProjectSection[];
};

const projects: Record<string, Project> = {
  fioresque: {
    number: "1",
    title: "Fioresque",
    image: "/logoprojects/fioresque.svg",
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
    image: "/logoprojects/dartclub.svg",
    pageLogo: "/dartclub/dartclub logo transparant.svg",
    headerLogoClassName:
      "h-[130px] w-[min(40vw,200px)] sm:h-[190px] sm:w-[min(36vw,280px)] md:h-[250px] md:w-[min(34vw,380px)] lg:h-[320px] lg:w-[min(32vw,480px)] xl:h-[360px] xl:w-[min(30vw,540px)]",
    headerLogoSizes: "(min-width: 1280px) 540px, (min-width: 768px) 480px, 200px",
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
          solidBackground: "#EEEEEE",
          dualColumnScroll: true,
          clickToAdvance: true,
          clickAdvanceDurationMs: 900,
          imagesFillHeight: true,
          compactScroll: true,
          theme: {
            text: "#0A294F",
            progress: "#0A294F",
            progressTrack: "rgba(10, 41, 79, 0.2)",
          },
          textStepLogo: "/dartclub/dartclub logo transparant.svg",
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
          "Hierna ben ik begonnen met het omzetten van het design naar code. Dit heb ik gedaan in Cursor, waarbij ik gebruik heb gemaakt van Next.js en React.\n\nDaarnaast heb ik Supabase gekoppeld als database voor de webapp. Het probleem is alleen dat de gratis versie van Supabase automatisch wordt gedeactiveerd als je het twee weken niet gebruikt. Omdat ik geen betaalde versie heb en niet meer actief aan dit project werk, is er een grote kans dat de app niet meer goed werkt, bijvoorbeeld wanneer je een nieuwe speler probeert aan te maken.\n\nOok kan het zijn dat ik de app heb aangepast en dat er nu nog maar twee standaard karakters zichtbaar zijn, genaamd Tim en Jeroen. Dit is puur bedoeld zodat mensen de website kunnen bekijken en zien hoe het werkt. Voel je dus vrij om een kijkje te nemen en een potje te starten.",
        websiteEmbedUrl: "https://dartclub.vercel.app/",
        websiteUrl: "https://dartclub.vercel.app/",
        websiteEmbedLayout: "mobile-side",
      },
    ],
  },
  "quality-lodgings": {
    number: "3",
    title: "Quality Lodgings",
    image: "/logoprojects/ql.svg",
    headerLogoClassName:
      "h-[120px] w-[min(38vw,180px)] sm:h-[170px] sm:w-[min(34vw,240px)] md:h-[220px] md:w-[min(32vw,320px)] lg:h-[280px] lg:w-[min(30vw,400px)] xl:h-[320px] xl:w-[min(28vw,460px)]",
    headerLogoSizes: "(min-width: 1280px) 460px, (min-width: 768px) 400px, 180px",
    intro:
      "Een hospitality-project waarin opdracht en design samenkomen voor een premium lodging-ervaring.",
    sections: [
      {
        id: "opdracht",
        title: "Opdracht",
        description:
          "In semester 2 kregen we de opdracht om voor Quality Lodgings een onderzoek te doen naar de gebruiksvriendelijkheid van hun website. Quality Lodgings is een bedrijf dat samenwerkt met luxe hotels in binnen- en buitenland en kamers voor deze hotels aanbiedt.\n\nDe website heeft een chique uitstraling en is mooi vormgegeven. Onze opdracht was om te analyseren wat er op het gebied van User Interface (UI) en User Experience (UX) verbeterd kon worden.\n\nVoor deze opdracht hadden we ongeveer drie tot vier weken de tijd. Daarom lag de focus volledig op het ontwerpen van verbeteringen en hoefden we niets te ontwikkelen. Zelf heb ik mij vooral gericht op de pagina \"Verras mij\", die hieronder wordt weergegeven.\n\nLet op: Quality Lodgings heeft hun website inmiddels wit gemaakt. In de sectie Design laat ik images zien van hoe de website er toen uitzag tijdens mijn onderzoek.",
        websiteEmbedUrl:
          "https://qualitylodgings.com/nl/discover-your-taste",
        websiteUrl: "https://qualitylodgings.com/nl/discover-your-taste",
      },
      {
        id: "design",
        title: "Design",
        description:
          "Binnen dit project heb ik gewerkt aan de pagina \"Verras mij\". Deze pagina is bedoeld voor mensen die nog niet weten waar ze naartoe willen of wat voor soort vakantie ze zoeken. Door een aantal korte vragen over interesses en voorkeuren te beantwoorden, helpt het systeem bij het vinden van een bestemming die het beste bij de gebruiker past.\n\nDe UX en UI van deze pagina waren echter niet optimaal. Daarom heb ik onderzoek gedaan naar de gebruikerservaring en op basis daarvan een nieuw ontwerp gemaakt.\n\nHieronder volgt een korte slideshow waarin ik de verbeterpunten van verschillende onderdelen van de pagina toelicht. Eerst laat ik zien hoe de pagina er oorspronkelijk uitzag, waarna ik in de volgende slide mijn vernieuwde ontwerp presenteer.",
        workScreenSlides: [
          {
            src: "/ql/verbeterpunten vind jouw style.svg",
            alt: "Verbeterpunten vind jouw stijl",
          },
          {
            src: "/ql/vind jouw stijl.svg",
            alt: "Vind jouw stijl — origineel",
          },
          {
            src: "/ql/verbeterpunten landen.svg",
            alt: "Verbeterpunten landen",
          },
          {
            src: "/ql/stap 1 landen.svg",
            alt: "Stap 1 landen — origineel",
          },
          {
            src: "/ql/verbeterpunten ligging.svg",
            alt: "Verbeterpunten ligging",
          },
          {
            src: "/ql/stap 2 ligging.svg",
            alt: "Stap 2 ligging — origineel",
          },
          {
            src: "/ql/verbeterpunten intresses.svg",
            alt: "Verbeterpunten interesses",
          },
          {
            src: "/ql/stap 3 intresses.svg",
            alt: "Stap 3 interesses — origineel",
          },
          {
            src: "/ql/verbeterpunten stijlen.svg",
            alt: "Verbeterpunten stijlen",
          },
          {
            src: "/ql/stap 4 stijlen.svg",
            alt: "Stap 4 stijlen — origineel",
          },
        ],
      },
    ],
  },
  rosh: {
    number: "4",
    title: "ROSH",
    image: "/logoprojects/rosh.svg",
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
    image: "/logoprojects/vara.svg",
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
      summary: project.intro,
      image: project.image,
      href: `/projects/${slug}`,
    };
  });
}
