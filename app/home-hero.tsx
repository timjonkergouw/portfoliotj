"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const heroFigures = ["/mannetje 1.png", "/mannetje 2.png", "/mannetje 3.png"];
const heroGradients = [
  { from: "#020118", to: "#292541" },
  { from: "#292541", to: "#9A3A0F" },
  { from: "#9A3A0F", to: "#020118" },
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
          className={`absolute inset-0 z-0 transition-opacity duration-[1500ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
            isFigureAnimating ? "opacity-100" : "opacity-0"
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
            <p className="font-heading text-2xl text-[#E9E7DA] md:text-4xl">
              EST.
            </p>
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
              className={`object-contain will-change-transform ${
                isFigureAnimating
                  ? "transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                  : "transition-none"
              } ${
                isFigureAnimating ? "-translate-x-[220%]" : "translate-x-0"
              }`}
            />

            {incomingFigure !== null ? (
              <Image
                key={`incoming-${incomingFigure}`}
                src={heroFigures[incomingFigure]}
                alt="Hero mannetje incoming"
                fill
                sizes="(min-width: 1024px) 480px, (min-width: 768px) 360px, 250px"
                className={`object-contain will-change-transform ${
                  isFigureAnimating
                    ? "transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                    : "transition-none"
                } ${
                  isFigureAnimating ? "translate-x-0" : "translate-x-[220%]"
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
              <span className="text-lg md:text-2xl">&rsquo;s-</span>
              Hertogenbosch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
