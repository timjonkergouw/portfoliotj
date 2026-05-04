"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const slotPalette = ["#020118", "#292541", "#E9E7DA", "#B6AFA9", "#CA5521"];
const carouselPhotos = [
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
];
const services = [
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
];
const careerTimeline = [
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
];

const technicalSkills = [
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
];

const softSkills = [
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
];

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

const reelItemsByColumn = columnConfigs.map((_, columnIndex) =>
  buildReelItems(columnIndex),
);

export default function AboutPage() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [hasAnimatedSkills, setHasAnimatedSkills] = useState(false);
  const activeService = services[activeServiceIndex];
  const skillsSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToTimelineItem = (id: string) => {
    const target = document.getElementById(id);
    if (!target) {
      return;
    }

    const top = target.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    const section = skillsSectionRef.current;
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setHasAnimatedSkills(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <main
      className="font-body min-h-screen px-6 py-8 text-[#292441] md:px-12"
      style={{
        backgroundImage: "url('/paperlayout.png')",
        backgroundRepeat: "repeat-y",
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
      }}
    >
      <div className="mx-auto max-w-[1280px]">
        <header className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 pb-6 md:gap-4">
          <nav className="font-heading flex items-center gap-2 text-sm uppercase tracking-[0.08em] md:gap-6 md:text-2xl">
            <Link
              href="/about"
              className="relative pb-1 transition after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#292441] after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              about
            </Link>
            <Link
              href="/#projects"
              className="relative pb-1 transition after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#292441] after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              projects
            </Link>
            <Link
              href="/#contact"
              className="relative pb-1 transition after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#292441] after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              contact
            </Link>
          </nav>

          <Link
            href="/"
            aria-label="Ga naar homepagina"
            className="relative mx-auto block h-[52px] w-[140px] md:h-[88px] md:w-[270px]"
          >
            <Image
              src="/tj logo.png"
              alt="TJ logo"
              fill
              sizes="(min-width: 768px) 270px, 140px"
              className="object-contain"
              priority
            />
          </Link>

          <div className="flex items-center justify-end gap-2 md:gap-4">
            <Link
              href="#"
              aria-label="LinkedIn"
              className="transition hover:opacity-70"
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={36}
                height={36}
                className="h-8 w-8 object-contain md:h-11 md:w-11"
              />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="transition hover:opacity-70"
            >
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={36}
                height={36}
                className="h-8 w-8 object-contain md:h-11 md:w-11"
              />
            </Link>
          </div>
        </header>

        <section className="mt-8 hidden overflow-x-auto pb-6 md:block">
          <div className="relative min-w-[980px] border-t-4 border-[#292441]">
            <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-[300px] w-[32.6%] -translate-x-1/2 overflow-hidden bg-linear-to-b from-[#020118] to-[#292541]">
              <Image
                src="/st jan.png"
                alt="St Jan achtergrond"
                fill
                sizes="(min-width: 768px) 32vw, 0px"
                className="object-cover opacity-22"
              />
              <div className="absolute inset-y-0 left-[30%] w-[10px] bg-[#1A1633]/45" />
              <div className="absolute inset-y-0 right-[28%] w-[10px] bg-[#1A1633]/45" />
              <div className="absolute left-[38%] top-1/2 z-10 h-[230px] w-[150px] -translate-y-1/2">
                <Image
                  src="/leunend mannetje.png"
                  alt="Leunend mannetje"
                  fill
                  sizes="150px"
                  className="object-contain"
                />
              </div>
              <div className="absolute left-[9%] top-1/2 z-10 -translate-y-1/2">
                <p className="font-heading text-6xl leading-[0.85] text-[#E9E7DA]">
                  Tim
                </p>
                <p className="font-heading text-6xl leading-[0.85] text-[#E9E7DA]">
                  Jonkergouw
                </p>
              </div>
              <div
                className="absolute bottom-0 left-0 h-4 w-full"
                style={{
                  backgroundImage: "url('/paperlayout.png')",
                  backgroundRepeat: "repeat-x",
                  backgroundSize: "auto 100%",
                  backgroundPosition: "center",
                }}
              />
            </div>

            <div className="relative h-[700px] overflow-hidden border-b-4 border-[#292441]">
              <div className="grid h-full grid-cols-12 gap-3 md:gap-4">
                {columnConfigs.map((column, columnIndex) => {
                  const reelItems = reelItemsByColumn[columnIndex];
                  return (
                    <div
                      key={`column-${columnIndex}`}
                      className={`col-span-2 h-full overflow-hidden ${column.withTopOffset ? "pt-[316px]" : ""}`}
                    >
                      <div
                        className="reel-track flex flex-col gap-3 md:gap-4"
                        style={{
                          animationDuration: `${column.speedSeconds}s`,
                          animationDirection: column.direction,
                        }}
                      >
                        {[0, 1].map((segmentIndex) => (
                          <div
                            key={`segment-${columnIndex}-${segmentIndex}`}
                            className="flex flex-col gap-3 md:gap-4"
                          >
                            {reelItems.map((item, itemIndex) =>
                              item.type === "photo" ? (
                                <div
                                  key={`item-photo-${columnIndex}-${segmentIndex}-${itemIndex}`}
                                  className="relative h-[190px] overflow-hidden"
                                >
                                  <Image
                                    src={item.src}
                                    alt={`Carousel foto ${columnIndex + 1}-${itemIndex + 1}`}
                                    fill
                                    sizes="(min-width: 980px) 16vw, 160px"
                                    className="object-cover"
                                  />
                                </div>
                              ) : (
                                <div
                                  key={`item-block-${columnIndex}-${segmentIndex}-${itemIndex}`}
                                  className="w-full"
                                  style={{
                                    height: `${item.height}px`,
                                    backgroundColor: item.color,
                                  }}
                                />
                              ),
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 text-[#1A1633] md:py-14">
          <div className="max-w-[920px]">
            <h2 className="font-heading w-full rounded-full bg-[#292441] px-8 py-4 text-4xl uppercase text-[#E9E7DA] md:px-10 md:text-6xl">
              About me
            </h2>
            <p className="mt-4 text-lg leading-tight md:text-xl">
              Hi, my name is Tim Jonkergouw. I am 20 years old and I come from
              &rsquo;s-Hertogenbosch in the Netherlands. Currently, I am studying ICT,
              where I focus on Media Creation and front-end development.
              <br />
              <br />
              I have a strong passion for creativity, especially when it comes to
              designing and building digital experiences. What I enjoy most is the
              process of turning ideas and visual designs into fully functional and
              interactive webpages. Seeing a concept come to life in the browser gives
              me a lot of satisfaction.
              <br />
              <br />
              During my studies, I am continuously improving my skills in both design
              and development, learning how to create user-friendly and visually
              appealing interfaces. I like to experiment with different styles and
              technologies, and I am always motivated to expand my knowledge and stay
              up to date with the latest trends in web development.
              <br />
              <br />
              In the future, I hope to further develop myself as a front-end developer
              and contribute to creating engaging and high-quality digital products.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="font-heading w-full rounded-full bg-[#292441] px-8 py-4 text-4xl uppercase text-[#E9E7DA] md:px-10 md:text-6xl">
              Services
            </h3>

            <div className="mt-6 grid gap-8 md:grid-cols-2 md:items-start md:gap-12">
              <div className="hidden md:block">
                <div className="flex flex-col gap-3">
                  {services.map((service, index) => (
                    <button
                      key={service.title}
                      type="button"
                      onClick={() => setActiveServiceIndex(index)}
                      className={`font-heading relative w-fit pb-1 text-left text-3xl uppercase transition after:absolute after:bottom-0 after:left-0 after:h-[3px] after:transition-transform after:duration-300 ${activeServiceIndex === index
                        ? "text-[#292441] after:w-full after:scale-x-100 after:bg-[#CA5521]"
                        : "text-[#292441]/70 after:w-full after:scale-x-0 after:bg-[#292441] hover:text-[#292441] hover:after:scale-x-100"
                        }`}
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hidden min-h-[170px] border-l-4 border-[#292441] pl-6 md:block">
                <h4 className="font-heading text-3xl uppercase text-[#292441]">
                  {activeService.title}
                </h4>
                <p className="mt-3 text-lg leading-tight">{activeService.description}</p>
              </div>

              <div className="space-y-6 md:hidden">
                {services.map((service) => (
                  <article key={`mobile-${service.title}`} className="border-l-4 border-[#292441] pl-4">
                    <h4 className="font-heading text-3xl uppercase text-[#292441]">
                      {service.title}
                    </h4>
                    <p className="mt-2 text-lg leading-tight">{service.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 border-t-4 border-[#292441] pb-20 pt-10 md:pt-12">
            <h3 className="font-heading w-full rounded-full bg-[#292441] px-8 py-4 text-4xl uppercase text-[#E9E7DA] md:px-10 md:text-6xl">
              School
            </h3>

            <div className="relative mt-8">
              <div className="absolute bottom-[-34px] left-[calc(260px+2rem+28px)] top-6 hidden w-[6px] -translate-x-1/2 bg-linear-to-b from-[#292441] via-[#292441] to-transparent md:block" />

              <div className="space-y-14 md:space-y-20">
                {careerTimeline.map((item) => (
                  <div
                    key={item.id}
                    className="grid gap-4 md:grid-cols-[260px_56px_1fr] md:items-start md:gap-8"
                  >
                    <button
                      type="button"
                      onClick={() => scrollToTimelineItem(item.id)}
                      className="group text-left"
                    >
                      <p className="font-heading text-3xl uppercase text-[#292441]/85 transition group-hover:text-[#292441]">
                        {item.school}
                      </p>
                      <p className="text-lg leading-none text-[#292441]/85">{item.location}</p>
                    </button>

                    <div className="hidden justify-center pt-5 md:flex">
                      <button
                        type="button"
                        onClick={() => scrollToTimelineItem(item.id)}
                        aria-label={`Ga naar ${item.school}`}
                        className="relative z-10 h-6 w-6 rounded-full border-4 border-[#292441] bg-[#E9E7DA] transition duration-300 hover:scale-110 hover:bg-[#CA5521]"
                      />
                    </div>

                    <article
                      id={item.id}
                      className="scroll-mt-28 border-l-4 border-[#292441] pl-5"
                    >
                      <p className="font-heading text-base uppercase tracking-[0.08em] text-[#CA5521]">
                        {item.period}
                      </p>
                      <h4 className="font-heading mt-1 text-3xl uppercase text-[#292441]">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-lg leading-tight">{item.description}</p>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            ref={skillsSectionRef}
            className="mt-14 border-t-4 border-[#292441] pt-10 pb-16 md:pt-12 md:pb-20"
          >
            <h3 className="font-heading w-full rounded-full bg-[#292441] px-8 py-4 text-4xl uppercase text-[#E9E7DA] md:px-10 md:text-6xl">
              Skills
            </h3>

            <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-stretch md:gap-12">
              <div className="flex-1">
                <h3 className="font-heading text-3xl uppercase text-[#292441] md:text-4xl">
                  Technical Skills
                </h3>
                <div className="mt-8 space-y-8">
                  {technicalSkills.map((skill, index) => (
                    <div key={skill.title}>
                      <p className="font-heading text-2xl uppercase text-[#292441] md:text-3xl">
                        {skill.title}
                      </p>
                      <p className="mt-1 text-base text-[#292441]/85">{skill.description}</p>
                      <div className="relative mt-3 h-3 w-full overflow-hidden rounded-full bg-[#292441]">
                        <div
                          className="h-full rounded-full bg-[#CA5521] transition-[width] duration-1000 ease-out"
                          style={{
                            width: hasAnimatedSkills ? `${skill.value}%` : "0%",
                            transitionDelay: `${index * 140}ms`,
                          }}
                          aria-hidden
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-[2px] w-full shrink-0 bg-[#292441]/40 md:hidden" />

              <div
                className="hidden w-[6px] shrink-0 rounded-full bg-[#292441] md:block"
                aria-hidden
              />

              <div className="flex-1">
                <h3 className="font-heading text-3xl uppercase text-[#292441] md:text-4xl">
                  Soft Skills
                </h3>
                <div className="mt-8 space-y-8">
                  {softSkills.map((skill, index) => (
                    <div key={skill.title}>
                      <p className="font-heading text-2xl uppercase text-[#292441] md:text-3xl">
                        {skill.title}
                      </p>
                      <p className="mt-1 text-base text-[#292441]/85">{skill.description}</p>
                      <div className="relative mt-3 h-3 w-full overflow-hidden rounded-full bg-[#292441]">
                        <div
                          className="h-full rounded-full bg-[#CA5521] transition-[width] duration-1000 ease-out"
                          style={{
                            width: hasAnimatedSkills ? `${skill.value}%` : "0%",
                            transitionDelay: `${(index + technicalSkills.length) * 140}ms`,
                          }}
                          aria-hidden
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
