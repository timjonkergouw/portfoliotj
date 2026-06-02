"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { InspirationSlide } from "@/app/projects/project-data";

type InspirationSlideshowProps = {
  slides: InspirationSlide[];
  showSource?: boolean;
};

type LoopedSlide = InspirationSlide & {
  key: string;
  slideIndex: number;
};

type OriginRect = {
  top: number;
  left: number;
  width: number;
  height: number;
};

type ExpandedModal = {
  slide: InspirationSlide;
  originRect: OriginRect;
  phase: "entering" | "open" | "leaving";
};

const DRAG_THRESHOLD_PX = 10;
const LOOP_COPIES = 3;
const AUTO_SCROLL_SPEED = 0.065;
const AUTO_SCROLL_HOVER_SPEED = 0.032;
const MAX_FRAME_DELTA_MS = 48;
const SPEED_LERP = 0.06;
const MODAL_TRANSITION_MS = 480;

function getTargetRect(): OriginRect {
  const width = Math.min(window.innerWidth * 0.88, 640);
  const height = Math.min(window.innerHeight * 0.52, 460);
  const captionOffset = 56;
  return {
    top: (window.innerHeight - height - captionOffset) / 2,
    left: (window.innerWidth - width) / 2,
    width,
    height,
  };
}

function getModalFrameStyle(
  expanded: ExpandedModal,
): React.CSSProperties {
  const target = getTargetRect();
  const useOrigin =
    expanded.phase === "entering" || expanded.phase === "leaving";

  return {
    top: useOrigin ? expanded.originRect.top : target.top,
    left: useOrigin ? expanded.originRect.left : target.left,
    width: useOrigin ? expanded.originRect.width : target.width,
    height: useOrigin ? expanded.originRect.height : target.height,
  };
}

export default function InspirationSlideshow({
  slides,
  showSource = true,
}: InspirationSlideshowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const loopWidthRef = useRef(0);
  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const isTrackHovered = useRef(false);
  const closeTimeoutRef = useRef<number | null>(null);
  const pointerStartX = useRef(0);
  const scrollStartLeft = useRef(0);
  const isAdjustingScroll = useRef(false);
  const hasSetInitialScroll = useRef(false);
  const currentScrollSpeed = useRef(AUTO_SCROLL_SPEED);
  const [expanded, setExpanded] = useState<ExpandedModal | null>(null);
  const [scrollReady, setScrollReady] = useState(false);

  const loopedSlides = useMemo<LoopedSlide[]>(
    () =>
      Array.from({ length: LOOP_COPIES }, (_, copyIndex) =>
        slides.map((slide, slideIndex) => ({
          ...slide,
          slideIndex,
          key: `${copyIndex}-${slideIndex}-${slide.src}`,
        })),
      ).flat(),
    [slides],
  );

  const isModalOpen = expanded !== null && expanded.phase !== "leaving";

  const measureLoopWidth = useCallback(() => {
    const container = scrollRef.current;
    if (!container || slides.length === 0) {
      return 0;
    }

    const firstSlide = container.querySelector<HTMLElement>("[data-slide-card]");
    if (!firstSlide) {
      return 0;
    }

    const gap = Number.parseFloat(
      getComputedStyle(container).columnGap ||
        getComputedStyle(container).gap ||
        "16",
    );
    return slides.length * (firstSlide.offsetWidth + gap);
  }, [slides.length]);

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

  const beginClose = useCallback(() => {
    setExpanded((current) => {
      if (!current) {
        return null;
      }
      return { ...current, phase: "leaving" };
    });

    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }

    closeTimeoutRef.current = window.setTimeout(() => {
      setExpanded(null);
      closeTimeoutRef.current = null;
    }, MODAL_TRANSITION_MS);
  }, []);

  const expandedRef = useRef<ExpandedModal | null>(null);
  expandedRef.current = expanded;

  const openFromCard = useCallback(
    (slide: InspirationSlide, card: HTMLElement) => {
      if (expandedRef.current?.slide.src === slide.src) {
        beginClose();
        return;
      }

      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }

      const rect = card.getBoundingClientRect();
      const originRect = {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      };

      setExpanded({ slide, originRect, phase: "entering" });
    },
    [beginClose],
  );

  useEffect(() => {
    if (expanded?.phase !== "entering") {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setExpanded((current) =>
          current ? { ...current, phase: "open" } : null,
        );
      });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [expanded?.phase, expanded?.slide.src]);

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
  }, [initializeScroll, loopedSlides]);

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
        !expanded &&
        loopWidthRef.current > 0 &&
        scrollRef.current.scrollWidth > scrollRef.current.clientWidth;

      if (canAutoScroll && scrollRef.current) {
        const targetSpeed = isTrackHovered.current
          ? AUTO_SCROLL_HOVER_SPEED
          : AUTO_SCROLL_SPEED;
        currentScrollSpeed.current +=
          (targetSpeed - currentScrollSpeed.current) * SPEED_LERP;

        scrollRef.current.scrollLeft += currentScrollSpeed.current * deltaMs;
        normalizeScroll();
      }

      animationId = window.requestAnimationFrame(tick);
    };

    animationId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(animationId);
  }, [scrollReady, normalizeScroll, initializeScroll, expanded]);

  useEffect(() => {
    if (!expanded) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        beginClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [expanded, beginClose]);

  useEffect(
    () => () => {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    },
    [],
  );

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!scrollRef.current || event.button !== 0 || expanded) {
      return;
    }

    isDragging.current = true;
    hasDragged.current = false;
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

    if (Math.abs(deltaX) > DRAG_THRESHOLD_PX) {
      hasDragged.current = true;
    }

    scrollRef.current.scrollLeft = scrollStartLeft.current - deltaX;
    normalizeScroll(true);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container) {
      return;
    }

    const didDrag = hasDragged.current;

    isDragging.current = false;
    hasDragged.current = false;

    if (container.hasPointerCapture(event.pointerId)) {
      container.releasePointerCapture(event.pointerId);
    }
    container.style.cursor = "grab";

    normalizeScroll();

    if (!didDrag && !expanded) {
      const target = document.elementFromPoint(event.clientX, event.clientY);
      const slideEl = target?.closest<HTMLElement>("[data-slide-index]");
      const cardEl = slideEl?.querySelector<HTMLElement>("[data-slide-card]");
      if (slideEl && cardEl) {
        const slideIndex = Number(slideEl.dataset.slideIndex);
        const slide = slides[slideIndex];
        if (slide) {
          openFromCard(slide, cardEl);
        }
      }
    }
  };

  const openExpandedSlide = (slideIndex: number, card: HTMLElement | null) => {
    const slide = slides[slideIndex];
    if (!slide || !card) {
      return;
    }
    openFromCard(slide, card);
  };

  const targetRect = expanded ? getTargetRect() : null;
  const captionTop = targetRect
    ? targetRect.top + targetRect.height + 12
    : 0;

  return (
    <>
      <div className="mt-8 -mx-6 md:-mx-12">
        <div
          ref={scrollRef}
          className="flex cursor-grab items-center gap-4 overflow-x-auto px-6 py-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onMouseEnter={() => {
            isTrackHovered.current = true;
          }}
          onMouseLeave={() => {
            isTrackHovered.current = false;
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {loopedSlides.map((slide) => (
            <div
              key={slide.key}
              data-slide-index={slide.slideIndex}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  const card = event.currentTarget.querySelector<HTMLElement>(
                    "[data-slide-card]",
                  );
                  openExpandedSlide(slide.slideIndex, card);
                }
              }}
              className={`group shrink-0 px-1 py-3 transition-opacity duration-300 ${
                isModalOpen && expanded?.slide.src !== slide.src
                  ? "opacity-40"
                  : "opacity-100"
              }`}
            >
              <div
                data-slide-card
                className={`relative h-[200px] w-[280px] origin-center border-2 border-[#292441]/25 bg-[#E9E7DA]/50 transition-all duration-300 ease-out will-change-transform md:h-[240px] md:w-[340px] [@media(hover:hover)]:group-hover:scale-[1.06] [@media(hover:hover)]:group-hover:border-[#CA5521] ${
                  expanded?.slide.src === slide.src && isModalOpen
                    ? "opacity-0"
                    : ""
                }`}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={slide.src}
                    alt={slide.alt ?? ""}
                    fill
                    sizes="340px"
                    draggable={false}
                    unoptimized={slide.src.endsWith(".gif")}
                    className={`pointer-events-none ${slide.thumbClassName ?? "object-cover"}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {expanded ? (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
          <button
            type="button"
            aria-label="Sluit vergroting"
            className={`absolute inset-0 bg-[#020118]/70 transition-opacity duration-500 ${
              expanded.phase === "open" ? "opacity-100" : "opacity-0"
            }`}
            onClick={beginClose}
          />
          <div
            className="pointer-events-none fixed z-[51] overflow-hidden border-2 border-[#292441] bg-[#E9E7DA] shadow-[0_20px_60px_rgba(2,1,24,0.45)] transition-[top,left,width,height] duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
            style={getModalFrameStyle(expanded)}
          >
            {showSource && expanded.slide.source ? (
              <p
                className={`absolute left-0 top-0 z-10 bg-[#292441]/85 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#E9E7DA] transition-opacity duration-500 md:text-xs ${
                  expanded.phase === "open" ? "opacity-100" : "opacity-0"
                }`}
              >
                Bron: {expanded.slide.source}
              </p>
            ) : null}
            <Image
              src={expanded.slide.src}
              alt={expanded.slide.alt ?? ""}
              fill
              sizes="(min-width: 768px) 640px, 90vw"
              className={expanded.slide.modalClassName ?? "object-contain p-2"}
              priority
              unoptimized={expanded.slide.src.endsWith(".gif")}
            />
          </div>
          <p
            className={`pointer-events-none fixed z-[51] mx-auto max-w-[min(88vw,480px)] px-4 text-center text-sm leading-snug text-[#E9E7DA] transition-opacity duration-500 md:text-base ${
              expanded.phase === "open" ? "opacity-100" : "opacity-0"
            }`}
            style={{
              top: captionTop,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {expanded.slide.caption}
          </p>
          <button
            type="button"
            onClick={beginClose}
            className={`btn-accent-sm fixed z-[52] transition-all duration-500 ${
              expanded.phase === "open"
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
            style={{
              top: captionTop + 44,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            Sluiten
          </button>
        </div>
      ) : null}
    </>
  );
}
