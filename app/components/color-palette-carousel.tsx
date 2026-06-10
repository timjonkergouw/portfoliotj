"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { PaletteColor } from "@/app/projects/project-data";

type ColorPaletteCarouselProps = {
  colors: PaletteColor[];
};

type LoopedColor = PaletteColor & {
  key: string;
  colorIndex: number;
};

const LOOP_COPIES = 3;
const AUTO_SCROLL_SPEED = 0.055;
const MAX_FRAME_DELTA_MS = 48;

function getContrastText(hex: string): string {
  const normalized = hex.replace("#", "");
  const r = Number.parseInt(normalized.slice(0, 2), 16);
  const g = Number.parseInt(normalized.slice(2, 4), 16);
  const b = Number.parseInt(normalized.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.62 ? "#292441" : "#FAF9F6";
}

export default function ColorPaletteCarousel({
  colors,
}: ColorPaletteCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const loopWidthRef = useRef(0);
  const isDragging = useRef(false);
  const pointerStartX = useRef(0);
  const scrollStartLeft = useRef(0);
  const isAdjustingScroll = useRef(false);
  const hasSetInitialScroll = useRef(false);
  const [scrollReady, setScrollReady] = useState(false);

  const loopedColors = useMemo<LoopedColor[]>(
    () =>
      Array.from({ length: LOOP_COPIES }, (_, copyIndex) =>
        colors.map((color, colorIndex) => ({
          ...color,
          colorIndex,
          key: `${copyIndex}-${colorIndex}-${color.hex}`,
        })),
      ).flat(),
    [colors],
  );

  const measureLoopWidth = useCallback(() => {
    const container = scrollRef.current;
    if (!container || colors.length === 0) {
      return 0;
    }

    const firstCard = container.querySelector<HTMLElement>("[data-color-card]");
    if (!firstCard) {
      return 0;
    }

    return colors.length * firstCard.offsetWidth;
  }, [colors.length]);

  const normalizeScroll = useCallback((adjustDragOrigin = false) => {
    const container = scrollRef.current;
    const loopWidth = loopWidthRef.current;

    if (!container || loopWidth <= 0 || isAdjustingScroll.current) {
      return;
    }

    const min = loopWidth * 0.5;
    const max = loopWidth * 1.5;

    if (container.scrollLeft < min) {
      isAdjustingScroll.current = true;
      container.scrollLeft += loopWidth;
      if (adjustDragOrigin) {
        scrollStartLeft.current += loopWidth;
      }
      isAdjustingScroll.current = false;
    } else if (container.scrollLeft > max) {
      isAdjustingScroll.current = true;
      container.scrollLeft -= loopWidth;
      if (adjustDragOrigin) {
        scrollStartLeft.current -= loopWidth;
      }
      isAdjustingScroll.current = false;
    }
  }, []);

  const initializeScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) {
      return;
    }

    const loopWidth = measureLoopWidth();
    if (loopWidth <= 0) {
      setScrollReady(false);
      return;
    }

    const previousLoopWidth = loopWidthRef.current;
    loopWidthRef.current = loopWidth;

    if (!hasSetInitialScroll.current) {
      container.scrollLeft = loopWidth;
      hasSetInitialScroll.current = true;
      setScrollReady(true);
      return;
    }

    if (previousLoopWidth > 0 && previousLoopWidth !== loopWidth) {
      const progress = container.scrollLeft / previousLoopWidth;
      container.scrollLeft = progress * loopWidth;
    }

    setScrollReady(true);
  }, [measureLoopWidth]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) {
      return;
    }

    const runInitialize = () => {
      initializeScroll();
    };

    runInitialize();
    const frameId = window.requestAnimationFrame(runInitialize);

    const resizeObserver = new ResizeObserver(runInitialize);
    resizeObserver.observe(container);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      hasSetInitialScroll.current = false;
      setScrollReady(false);
    };
  }, [initializeScroll, loopedColors]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) {
      return;
    }

    const onScroll = () => {
      if (!isDragging.current && !isAdjustingScroll.current) {
        normalizeScroll();
      }
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, [normalizeScroll]);

  useEffect(() => {
    if (!scrollReady) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    let animationId = 0;
    let lastTimestamp = 0;

    const tick = (timestamp: number) => {
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
      }

      const deltaMs = Math.min(timestamp - lastTimestamp, MAX_FRAME_DELTA_MS);
      lastTimestamp = timestamp;

      if (loopWidthRef.current <= 0) {
        initializeScroll();
      }

      const canAutoScroll =
        scrollRef.current &&
        !isDragging.current &&
        loopWidthRef.current > 0 &&
        scrollRef.current.scrollWidth > scrollRef.current.clientWidth;

      if (canAutoScroll && scrollRef.current) {
        scrollRef.current.scrollLeft += AUTO_SCROLL_SPEED * deltaMs;
        normalizeScroll();
      }

      animationId = window.requestAnimationFrame(tick);
    };

    animationId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(animationId);
  }, [scrollReady, normalizeScroll, initializeScroll]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!scrollRef.current || event.button !== 0) {
      return;
    }

    isDragging.current = true;
    pointerStartX.current = event.clientX;
    scrollStartLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.setPointerCapture(event.pointerId);
    scrollRef.current.style.cursor = "grabbing";
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !scrollRef.current) {
      return;
    }

    const deltaX = event.clientX - pointerStartX.current;
    scrollRef.current.scrollLeft = scrollStartLeft.current - deltaX;
    normalizeScroll(true);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container) {
      return;
    }

    isDragging.current = false;

    if (container.hasPointerCapture(event.pointerId)) {
      container.releasePointerCapture(event.pointerId);
    }
    container.style.cursor = "grab";

    normalizeScroll();
  };

  return (
    <div className="mt-8 -mx-6 md:-mx-12">
      <div
        ref={scrollRef}
        className="flex cursor-grab overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {loopedColors.map((color) => {
          const textColor = getContrastText(color.hex);

          return (
            <div
              key={color.key}
              data-color-card
              className="flex h-[200px] w-[min(42vw,240px)] shrink-0 flex-col justify-between p-4 md:h-[260px] md:w-[min(34vw,300px)] md:p-5"
              style={{ backgroundColor: color.hex }}
            >
              <p
                className="font-heading text-lg uppercase leading-tight md:text-xl"
                style={{ color: textColor }}
              >
                {color.name}
              </p>
              <p
                className="text-sm font-bold uppercase tracking-[0.12em] md:text-base"
                style={{ color: textColor }}
              >
                {color.hex}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
