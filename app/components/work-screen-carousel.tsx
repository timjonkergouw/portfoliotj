"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { WorkScreenSlide } from "@/app/projects/project-data";

type WorkScreenCarouselProps = {
  slides: WorkScreenSlide[];
};

const SWIPE_THRESHOLD_PX = 48;

function CarouselArrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 32 120"
      aria-hidden
      className="h-[min(38vh,300px)] w-auto sm:h-[min(44vh,360px)] md:h-[min(50vh,420px)]"
    >
      <path
        d={
          direction === "left"
            ? "M26 6 L8 60 L26 114"
            : "M6 6 L24 60 L6 114"
        }
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WorkScreenCarousel({ slides }: WorkScreenCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  useEffect(() => {
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((current) => {
        const next = Math.min(slides.length - 1, Math.max(0, index));
        return next === current ? current : next;
      });
    },
    [slides.length],
  );

  const goPrev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        goPrev();
      } else if (event.key === "ArrowRight") {
        goNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) {
      return;
    }

    const currentX = event.touches[0]?.clientX ?? touchStartX.current;
    touchDeltaX.current = currentX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null) {
      return;
    }

    if (touchDeltaX.current <= -SWIPE_THRESHOLD_PX) {
      goNext();
    } else if (touchDeltaX.current >= SWIPE_THRESHOLD_PX) {
      goPrev();
    }

    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < slides.length - 1;

  return (
    <section className="relative left-1/2 mt-10 w-dvw max-w-dvw -translate-x-1/2">
      <div
        className="relative h-[100svh] overflow-hidden bg-black"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        <div
          className={`flex h-full ${reduceMotion ? "" : "transition-transform duration-520 ease-[cubic-bezier(0.22,0.61,0.36,1)]"}`}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.src}
              className="relative h-full w-full shrink-0"
              aria-hidden={slide.src !== slides[activeIndex]?.src}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                className="object-contain px-10 py-4 sm:px-14 sm:py-6"
                draggable={false}
                priority={slide.src === slides[0]?.src}
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={goPrev}
          disabled={!canGoPrev}
          aria-label="Vorige slide"
          className="absolute inset-y-0 left-0 z-10 flex w-12 items-center justify-center text-[#6B665C] transition-colors duration-200 hover:text-[#9A9689] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#CA5521] disabled:pointer-events-none disabled:opacity-0 sm:w-16 md:w-20"
        >
          <CarouselArrow direction="left" />
        </button>

        <button
          type="button"
          onClick={goNext}
          disabled={!canGoNext}
          aria-label="Volgende slide"
          className="absolute inset-y-0 right-0 z-10 flex w-12 items-center justify-center text-[#6B665C] transition-colors duration-200 hover:text-[#9A9689] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#CA5521] disabled:pointer-events-none disabled:opacity-0 sm:w-16 md:w-20"
        >
          <CarouselArrow direction="right" />
        </button>

        <p className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-[0.14em] text-[#E9E7DA]/55 sm:bottom-8 sm:text-sm">
          {activeIndex + 1} / {slides.length}
          <span className="md:hidden"> · swipe</span>
        </p>
      </div>
    </section>
  );
}
