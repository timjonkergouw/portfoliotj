"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const projectCards = [
  {
    id: "1",
    name: "fioresque",
    image: "/fioresque oud.png",
    href: "/projects/fioresque",
    cardClass:
      "w-full md:absolute md:left-[2%] md:top-[4%] md:w-[440px] lg:w-[520px]",
  },
  {
    id: "2",
    name: "dartclub",
    image: "/dartcub oud.png",
    href: "/projects/dartclub",
    cardClass:
      "w-full md:absolute md:right-[4%] md:top-[7%] md:w-[320px] lg:w-[390px]",
  },
  {
    id: "3",
    name: "Quality Lodgings",
    image: "/ql oud.png",
    href: "/projects/quality-lodgings",
    cardClass:
      "w-full md:absolute md:left-1/2 md:top-[34%] md:w-[410px] md:-translate-x-1/2 lg:w-[500px]",
  },
  {
    id: "4",
    name: "ROSH",
    image: "/rosh oud.png",
    href: "/projects/rosh",
    cardClass:
      "w-full md:absolute md:right-[5%] md:top-[64%] md:w-[280px] lg:w-[330px]",
  },
  {
    id: "5",
    name: "VARA",
    image: "/vara oud.png",
    href: "/projects/vara",
    cardClass:
      "w-full md:absolute md:left-[2%] md:top-[67%] md:w-[460px] lg:w-[560px]",
  },
];

export default function Home() {
  const heroFigures = ["/mannetje 1.png", "/mannetje 2.png", "/mannetje 3.png"];
  const heroGradients = [
    { from: "#020118", to: "#292541" },
    { from: "#292541", to: "#9A3A0F" },
    { from: "#9A3A0F", to: "#020118" },
  ];
  const switchIntervalMs = 5500;
  const transitionMs = 1500;
  const [activeFigure, setActiveFigure] = useState(0);
  const [incomingFigure, setIncomingFigure] = useState<number | null>(null);
  const [isFigureAnimating, setIsFigureAnimating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isFigureAnimating) {
        return;
      }

      const nextFigure = (activeFigure + 1) % heroFigures.length;
      setIncomingFigure(nextFigure);

      requestAnimationFrame(() => {
        setIsFigureAnimating(true);
      });
    }, switchIntervalMs);

    return () => clearInterval(intervalId);
  }, [activeFigure, isFigureAnimating, heroFigures.length, switchIntervalMs]);

  useEffect(() => {
    if (!isFigureAnimating || incomingFigure === null) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setActiveFigure(incomingFigure);
      setIncomingFigure(null);
      setIsFigureAnimating(false);
    }, transitionMs);

    return () => clearTimeout(timeoutId);
  }, [incomingFigure, isFigureAnimating, transitionMs]);

  return (
    <div
      className="font-body text-[#E9E7DA]"
      style={{
        backgroundImage: "url('/paperlayout.png')",
        backgroundRepeat: "repeat-y",
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
      }}
    >
      <section
        className="relative min-h-screen overflow-hidden rounded-b-[56px]"
        style={{
          backgroundImage: "url('/paperlayout.png')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, ${heroGradients[activeFigure].from}, ${heroGradients[activeFigure].to})`,
          }}
        />
        {incomingFigure !== null ? (
          <div
            className={`absolute inset-0 z-0 transition-opacity duration-[1500ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] ${isFigureAnimating ? "opacity-100" : "opacity-0"
              }`}
            style={{
              backgroundImage: `linear-gradient(to bottom, ${heroGradients[incomingFigure].from}, ${heroGradients[incomingFigure].to})`,
            }}
          />
        ) : null}
        <Image
          src="/st jan.png"
          alt="St Jan"
          fill
          sizes="100vw"
          priority
          className="z-[1] object-cover object-center opacity-35"
        />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1280px] flex-col px-6 pb-10 pt-8 md:px-12">
          <div className="relative h-0">
            <div
              className="absolute left-1/2 top-0 z-[2] w-[320px] -translate-x-1/2 md:w-[430px] lg:w-[520px]"
              style={{ aspectRatio: "15 / 7" }}
            >
              <Image
                src="/tj logo beige.png"
                alt="TJ logo"
                fill
                sizes="(min-width: 1024px) 520px, (min-width: 768px) 430px, 320px"
                className="object-contain"
                priority
              />
            </div>
            <div className="absolute right-[8%] top-10 z-[2] flex items-baseline gap-3 md:right-[12%] md:top-12 md:gap-4">
              <p className="font-heading text-2xl text-[#E9E7DA] md:text-4xl">EST.</p>
              <p className="text-3xl text-[#CA5521] md:text-5xl">2005</p>
            </div>
          </div>

          <div className="relative mt-16 flex flex-1 items-center justify-center">
            <div
              className="absolute left-1/2 top-1/2 z-[6] w-[250px] translate-x-[-78%] translate-y-[-52%] md:w-[360px] lg:w-[480px]"
              style={{ aspectRatio: "7 / 10" }}
            >
              <Image
                key={`active-${activeFigure}`}
                src={heroFigures[activeFigure]}
                alt="Hero mannetje"
                fill
                sizes="(min-width: 1024px) 480px, (min-width: 768px) 360px, 250px"
                className={`object-contain will-change-transform ${isFigureAnimating
                  ? "transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                  : "transition-none"
                  } ${isFigureAnimating ? "-translate-x-[220%]" : "translate-x-0"
                  }`}
              />

              {incomingFigure !== null ? (
                <Image
                  key={`incoming-${incomingFigure}`}
                  src={heroFigures[incomingFigure]}
                  alt="Hero mannetje incoming"
                  fill
                  sizes="(min-width: 1024px) 480px, (min-width: 768px) 360px, 250px"
                  className={`object-contain will-change-transform ${isFigureAnimating
                    ? "transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                    : "transition-none"
                    } ${isFigureAnimating ? "translate-x-0" : "translate-x-[220%]"
                    }`}
                />
              ) : null}
            </div>
            <div className="relative text-center">
              <div className="inline-block text-left">
                <h1 className="font-heading relative z-[2] text-6xl uppercase leading-[0.85] tracking-[0] text-[#E9E7DA] sm:text-7xl md:text-8xl lg:text-[140px]">
                  Tim
                </h1>
                <div className="relative z-[8] inline-block">
                  <h2 className="font-heading text-6xl uppercase leading-[0.85] tracking-[0] text-[#E9E7DA] sm:text-7xl md:text-8xl lg:text-[140px]">
                    Jonkergouw
                  </h2>
                  <span className="font-heading absolute left-full top-[-0.22em] ml-1 text-3xl leading-none md:ml-2 md:text-5xl lg:text-6xl">
                    ™
                  </span>
                </div>
              </div>
              <p className="relative z-[8] mt-6 text-base uppercase tracking-[0.2em] text-[#E9E7DA] md:text-lg">
                designer &amp; front-end develop
              </p>
            </div>
          </div>

          <div className="absolute bottom-[2%] left-6 z-[2] flex items-end md:left-12">
            <div className="flex items-center gap-1.5">
              <Image
                src="/location orange.png"
                alt="Location"
                width={22}
                height={28}
                className="h-auto w-8 md:w-10"
              />
              <p className="text-2xl font-bold text-[#E9E7DA] md:text-3xl">
                <span className="text-lg md:text-2xl">&rsquo;s-</span>Hertogenbosch
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 pt-8 text-[#292441] md:px-12">
        <div className="mx-auto max-w-[1280px]">
          <div className="h-6 w-full bg-[#CA5521]" />

          <div className="grid gap-10 py-16 md:grid-cols-2 md:items-start">
            <div>
              <h3 className="font-heading text-5xl uppercase text-[#292441] md:text-7xl">
                about me
              </h3>
              <p className="mt-6 max-w-[520px] text-lg font-bold leading-tight tracking-[-0.03em] text-[#1A1633] md:text-xl">
                Hoi, ik ben Tim Jonkergouw, ik ben 20 jaar oud en momenteel bezig
                met de bachelor HBO-ICT aan Fontys. Mijn focus ligt voornamelijk op
                front-end development en media creation. Ik houd ervan om creatief
                bezig te zijn en originele concepten tot leven te brengen.
                <br />
                <br />
                In het eerste semester ben ik begonnen met de orientatiefase,
                waarbij ik een breed beeld heb gekregen van de gehele
                ICT-industrie. Al snel ontdekte ik dat front-end en media mijn
                grootste interesses waren. Daarom heb ik in het tweede semester
                gekozen voor de richting media, waarin ik veel heb gewerkt aan
                ontwerpen en ook al een aanzienlijk deel heb geprogrammeerd. Hier
                heb ik ook mijn propodeuse mee gehaald. In het derde semester ben
                ik overgestapt naar front-end development. Nu, in het vierde
                semester, ben ik bezig met media creation.
              </p>
            </div>
            <div className="relative h-[340px] overflow-hidden md:h-[420px]">
              <Image
                src="/about me foto.png"
                alt="About me foto"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <p className="font-body absolute bottom-3 left-3 z-10 text-sm font-bold text-[#E9E7DA] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] md:text-base">
                Behalen van Propodeuse in 2024/2025.
              </p>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="relative h-[260px] overflow-hidden md:h-[360px]">
              <Image
                src="/st jan bw.png"
                alt="St Jan oud"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <p className="font-body absolute bottom-3 left-3 z-10 text-sm font-bold text-[#E9E7DA] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] md:text-base">
                Sint Jans kathedraal, &rsquo;s-Hertogenbosch
              </p>
            </div>
            <p className="text-lg font-bold leading-tight tracking-[-0.03em] text-[#1A1633] md:text-xl">
              Ik kom uit &rsquo;s-Hertogenbosch, waar ik samenwoon met mijn ouders
              en mijn zusje. Naast mijn studie ben ik actief als voetballer bij
              FC Engelen Jo23-1, waar ik de vaste linksbuiten ben. Voetbal is al
              een passie van mij sinds ik een heel klein jongetje ben.
              <br />
              <br />
              In mijn vrije tijd ga ik graag op stap met vrienden, want
              gezelligheid vind ik erg belangrijk. Daarnaast ben ik een groot
              liefhebber van darten, een sport die ik regelmatig samen met
              vrienden beoefen en waar ik ook graag naar kijk. Ook game ik graag
              in mijn vrije tijd, waarbij EA FC en GTA V de meest gespeelde
              titels zijn.
            </p>
          </div>

          <div className="flex justify-center py-14">
            <button
              type="button"
              className="font-heading rounded-xl bg-[#292541] px-[6.25rem] py-7 text-3xl uppercase tracking-[0.08em] text-[#E9E7DA] transition hover:opacity-90"
            >
              Read More
            </button>
          </div>

          <div className="py-0">
            <div className="h-6 w-full bg-[#CA5521]" />
            <h3 className="font-heading py-0 text-center text-7xl leading-none uppercase text-[#292441] md:text-[11rem]">
              Projects
            </h3>
            <div className="h-6 w-full bg-[#CA5521]" />
          </div>

          <div className="relative grid gap-8 py-10 md:block md:min-h-[1140px]">
            {projectCards.map((project) => (
              <Link
                key={project.id}
                href={project.href}
                className={`project-card relative block overflow-hidden p-0 ${project.cardClass}`}
              >
                <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#CA5521] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    No.{project.id}
                  </p>
                  <h4 className="font-heading text-xl uppercase text-[#E9E7DA] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] md:text-2xl">
                    {project.name}
                  </h4>
                </div>
                <div className="relative h-[220px] w-full overflow-hidden rounded-none md:h-[250px] lg:h-[290px]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(min-width: 1024px) 560px, (min-width: 768px) 440px, 100vw"
                    className="object-contain object-center"
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="h-6 w-full bg-[#CA5521]" />
        </div>
      </section>

      <footer className="relative overflow-hidden rounded-t-[56px] bg-linear-to-b from-[#020118] to-[#292541] px-6 py-16 md:px-12">
        <p className="font-heading pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-5xl uppercase tracking-[0.08em] text-[#E9E7DA]/25 md:text-8xl lg:text-[130px]">
          Tim Jonkergouw
        </p>
        <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center gap-6 text-center md:flex-row md:justify-center md:gap-16">
          {["ABOUT ME", "PROJECTS", "CONTACT"].map((item) => (
            <p key={item} className="font-heading text-2xl tracking-[0.08em] md:text-3xl">
              {item}
            </p>
          ))}
        </div>
      </footer>
    </div>
  );
}
