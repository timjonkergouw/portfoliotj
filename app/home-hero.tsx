"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const heroFigures = [
  "/tim4 1.svg",
  "/tim2 1.svg",
  "/tim6 1.svg",
  "/tim1 1.svg",
  "/tim5 1.svg",
  "/tim3 1.svg",
];
const heroGradients = [
  { from: "#020118", to: "#9A3A0F" },
  { from: "#292541", to: "#9A3A0F" },
  { from: "#292541", to: "#020118" },
  { from: "#9A3A0F", to: "#020118" },
  { from: "#9A3A0F", to: "#292541" },
  { from: "#020118", to: "#292541" },
];
const switchIntervalMs = 5500;
const transitionMs = 1500;

export default function HomeHero() {
  const [activeFigure, setActiveFigure] = useState(0);
  const [incomingFigure, setIncomingFigure] = useState<number | null>(null);
  const [isFigureAnimating, setIsFigureAnimating] = useState(false);
  const activeFigureRef = useRef(activeFigure);
  const isFigureAnimatingRef = useRef(isFigureAnimating);

  useEffect(() => {
    activeFigureRef.current = activeFigure;
  }, [activeFigure]);

  useEffect(() => {
    isFigureAnimatingRef.current = isFigureAnimating;
  }, [isFigureAnimating]);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const intervalId = setInterval(() => {
      if (isFigureAnimatingRef.current) {
        return;
      }

      const nextFigure =
        (activeFigureRef.current + 1) % heroFigures.length;
      setIncomingFigure(nextFigure);

      requestAnimationFrame(() => {
        setIsFigureAnimating(true);
      });
    }, switchIntervalMs);

    return () => clearInterval(intervalId);
  }, []);

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
  }, [incomingFigure, isFigureAnimating]);

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden rounded-b-[32px] sm:rounded-b-[48px] md:rounded-b-[56px]"
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
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <Image
          src="/st jan.svg"
          alt="St Jan"
          fill
          sizes="100vw"
          priority
          className="object-contain object-bottom opacity-35"
        />
      </div>

      <div className="site-shell relative flex min-h-[100svh] flex-col px-4 pb-8 pt-6 sm:px-6 sm:pb-10 sm:pt-8 md:px-10 lg:px-12">
        <div className="relative h-0">
          <div
            className="absolute left-1/2 top-0 z-[2] w-[min(82vw,320px)] -translate-x-1/2 sm:w-[360px] md:w-[400px] lg:w-[460px]"
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
          <div className="absolute right-[4%] top-8 z-[2] flex items-baseline gap-2 sm:right-[8%] sm:top-10 sm:gap-3 md:top-12">
            <p className="font-heading text-lg text-[#E9E7DA] sm:text-2xl md:text-3xl">
              EST.
            </p>
            <p className="text-xl text-[#CA5521] sm:text-3xl md:text-4xl">2005</p>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-1/2 z-[6] h-[min(84svh,920px)] w-[min(58vw,300px)] -translate-x-[78%] sm:w-[340px] md:h-[min(86svh,960px)] md:w-[420px] lg:w-[500px]">
          <Image
            key={`active-${activeFigure}`}
            src={heroFigures[activeFigure]}
            alt="Tim Jonkergouw"
            fill
            sizes="(min-width: 1024px) 500px, (min-width: 768px) 420px, 300px"
            className={`object-contain object-bottom will-change-transform ${isFigureAnimating
              ? "transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]"
              : "transition-none"
              } ${isFigureAnimating ? "-translate-x-[220%]" : "translate-x-0"}`}
          />

          {incomingFigure !== null ? (
            <Image
              key={`incoming-${incomingFigure}`}
              src={heroFigures[incomingFigure]}
              alt="Tim Jonkergouw incoming"
              fill
              sizes="(min-width: 1024px) 500px, (min-width: 768px) 420px, 300px"
              className={`object-contain object-bottom will-change-transform ${isFigureAnimating
                ? "transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                : "transition-none"
                } ${isFigureAnimating ? "translate-x-0" : "translate-x-[220%]"}`}
            />
          ) : null}
        </div>

        <div className="relative mt-10 flex flex-1 items-center justify-center sm:mt-14 md:mt-16">
          <div className="relative text-center">
            <div className="inline-block text-left">
              <h1 className="font-heading relative z-[2] text-[clamp(2.75rem,11vw,5.5rem)] uppercase leading-[0.85] tracking-[0] text-[#E9E7DA] md:text-[clamp(4rem,9vw,7rem)] lg:text-[120px]">
                Tim
              </h1>
              <div className="relative z-[8] inline-block">
                <h2 className="font-heading text-[clamp(2.75rem,11vw,5.5rem)] uppercase leading-[0.85] tracking-[0] text-[#E9E7DA] md:text-[clamp(4rem,9vw,7rem)] lg:text-[120px]">
                  Jonkergouw
                </h2>
                <span className="font-heading absolute left-full top-[-0.22em] ml-0.5 text-xl leading-none sm:ml-1 sm:text-3xl md:text-4xl">
                  ™
                </span>
              </div>
            </div>
            <p className="relative z-[8] mt-4 px-2 text-xs uppercase tracking-[0.16em] text-[#E9E7DA] sm:mt-6 sm:text-sm md:text-base">
              designer &amp; front-end develop
            </p>
          </div>
        </div>

        <div className="absolute bottom-[2%] left-4 z-[2] flex max-w-[min(92vw,360px)] items-end sm:left-6 md:left-10">
          <div className="flex items-center gap-1.5">
            <Image
              src="/location orange.png"
              alt="Location"
              width={22}
              height={28}
              className="h-auto w-6 shrink-0 sm:w-8"
            />
            <p className="text-base font-bold leading-tight text-[#E9E7DA] sm:text-xl md:text-2xl">
              <span className="text-sm sm:text-lg">&rsquo;s-</span>
              Hertogenbosch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
