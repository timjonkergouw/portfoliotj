"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { LogoScrollShowcaseConfig } from "@/app/projects/project-data";

type LogoScrollShowcaseProps = {
  config: LogoScrollShowcaseConfig;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const easeInOut = (t: number) => t * t * (3 - 2 * t);

function resolvePinScrollVh(config: LogoScrollShowcaseConfig): number {
  return config.pinScrollVh ?? 360;
}

const getNoteTextClass = (src: string) =>
  src.includes("logo frame zwart")
    ? "text-[#111111] drop-shadow-none"
    : "text-[#E9E7DA] drop-shadow-[0_4px_18px_rgba(2,1,24,0.35)]";

function hexToRgb(hex: string): [number, number, number] {
  const cleanHex = hex.replace("#", "");
  const normalized =
    cleanHex.length === 3
      ? cleanHex
          .split("")
          .map((char) => `${char}${char}`)
          .join("")
      : cleanHex;

  const int = Number.parseInt(normalized, 16);
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
}

function mixHex(a: string, b: string, t: number): string {
  const [ar, ag, ab] = hexToRgb(a);
  const [br, bg, bb] = hexToRgb(b);
  const amount = clamp(t, 0, 1);

  const r = Math.round(ar + (br - ar) * amount);
  const g = Math.round(ag + (bg - ag) * amount);
  const bMix = Math.round(ab + (bb - ab) * amount);

  return `rgb(${r} ${g} ${bMix})`;
}

export default function LogoScrollShowcase({ config }: LogoScrollShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  const frameCount = config.frames.length;
  const isDartclubShowcase = config.frames.some((frame) =>
    frame.src.includes("/dartclub/"),
  );
  const dualColumnScroll =
    config.dualColumnScroll ?? isDartclubShowcase;
  const textBeforeImage =
    config.textBeforeImage ?? (isDartclubShowcase && !dualColumnScroll);
  const imagesFillHeight =
    config.imagesFillHeight ?? isDartclubShowcase;
  const compactScroll = config.compactScroll ?? isDartclubShowcase;
  const slideOffsetPercent = compactScroll ? 100 : 120;

  const flowItems = config.frames.flatMap((_, index) => {
    const imageItem = { type: "image" as const, frameIndex: index };
    const textItem = { type: "text" as const, frameIndex: index };
    return textBeforeImage ? [textItem, imageItem] : [imageItem, textItem];
  });

  const totalSteps = Math.max(flowItems.length - 1, 1);
  const scaledStep = progress * totalSteps;
  const activeFlowIndex = Math.floor(scaledStep);
  const nextFlowIndex = Math.min(activeFlowIndex + 1, flowItems.length - 1);
  const localProgress = clamp(scaledStep - activeFlowIndex, 0, 1);
  const easedProgress = easeInOut(localProgress);

  const activeFlowItem = flowItems[activeFlowIndex] ?? flowItems[0];
  const nextFlowItem = flowItems[nextFlowIndex] ?? activeFlowItem;

  const dualColumnStep =
    frameCount > 1 ? progress * (frameCount - 1) : 0;

  const solidBackground =
    config.solidBackground ??
    config.theme?.background ??
    (isDartclubShowcase ? "#EEEEEE" : undefined);
  const textColor =
    config.theme?.text ?? (isDartclubShowcase ? "#0A294F" : undefined);
  const useSolidBackground = Boolean(solidBackground);
  const gradients = config.gradients ?? [];
  let gradient = { from: "#020118", to: "#292541" };

  if (!useSolidBackground) {
    const gradientIndex = clamp(
      activeFlowItem.frameIndex,
      0,
      Math.max(gradients.length - 1, 0),
    );
    const nextGradientIndex = clamp(
      nextFlowItem.frameIndex,
      0,
      Math.max(gradients.length - 1, 0),
    );
    const currentGradient = gradients[gradientIndex] ?? gradient;
    const upcomingGradient = gradients[nextGradientIndex] ?? currentGradient;
    const shouldInterpolateGradient =
      activeFlowItem.type === "text" &&
      nextFlowItem.frameIndex !== activeFlowItem.frameIndex;
    const gradientMix = shouldInterpolateGradient ? easedProgress : 0;
    gradient = {
      from: mixHex(currentGradient.from, upcomingGradient.from, gradientMix),
      to: mixHex(currentGradient.to, upcomingGradient.to, gradientMix),
    };
  }

  const showcaseBackgroundStyle: React.CSSProperties = useSolidBackground
    ? { backgroundColor: solidBackground, backgroundImage: "none" }
    : {
        backgroundImage: `linear-gradient(to bottom, ${gradient.from}, ${gradient.to})`,
      };
  const slidePanelClass = useSolidBackground ? "bg-[#EEEEEE]" : "";
  const noteClassName = useSolidBackground
    ? "max-w-[760px] px-4 text-center text-sm font-bold leading-relaxed sm:px-6 sm:text-base md:px-8 md:text-xl lg:text-2xl"
    : "";
  const imageClassName = imagesFillHeight
    ? "object-contain object-top"
    : "object-contain";
  const getSlideLayerClass = (type: "image" | "text") =>
    type === "image" && imagesFillHeight
      ? `pointer-events-none absolute inset-0 ${slidePanelClass}`
      : `pointer-events-none absolute inset-0 flex items-center justify-center px-6 py-14 md:px-12 ${slidePanelClass}`;
  const getMediaFrameClass = (type: "image" | "text") =>
    type === "image" && imagesFillHeight
      ? `relative h-full w-full ${slidePanelClass}`
      : `relative h-full w-full max-w-[760px] ${slidePanelClass}`;

  const renderTextSlide = (frameIndex: number) => (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-4 px-4 sm:gap-5 sm:px-6 md:gap-6 md:px-8 ${slidePanelClass}`}
    >
      {config.textStepLogo ? (
        <div className="relative h-20 w-[280px] shrink-0 sm:h-24 sm:w-[340px] md:h-28 md:w-[400px] lg:h-32 lg:w-[480px]">
          <Image
            src={config.textStepLogo}
            alt={config.textStepLogoAlt ?? ""}
            fill
            sizes="480px"
            className="object-contain object-center"
          />
        </div>
      ) : null}
      <p
        className={
          useSolidBackground
            ? noteClassName
            : `max-w-[760px] text-center text-base leading-relaxed md:text-2xl ${getNoteTextClass(config.frames[frameIndex].src)}`
        }
        style={textColor ? { color: textColor } : undefined}
      >
        {config.frames[frameIndex].note ?? ""}
      </p>
    </div>
  );

  const renderImageSlide = (frameIndex: number) => (
    <div className={`relative h-full w-full ${slidePanelClass}`}>
      <Image
        src={config.frames[frameIndex].src}
        alt={config.frames[frameIndex].alt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className={imageClassName}
        priority={compactScroll || frameIndex < 2}
      />
    </div>
  );

  const renderFlowItem = (item: (typeof flowItems)[number]) => {
    if (item.type === "image") {
      return renderImageSlide(item.frameIndex);
    }

    return renderTextSlide(item.frameIndex);
  };

  useEffect(() => {
    config.frames.forEach((frame) => {
      const img = new window.Image();
      img.src = frame.src;
    });
    if (config.textStepLogo) {
      const logo = new window.Image();
      logo.src = config.textStepLogo;
    }
  }, [config.frames, config.textStepLogo]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyPreference = () => setReduceMotion(mediaQuery.matches);
    applyPreference();
    mediaQuery.addEventListener("change", applyPreference);
    return () => mediaQuery.removeEventListener("change", applyPreference);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = Math.max(rect.height - viewportHeight, 1);
      const distance = clamp(-rect.top, 0, totalScrollable);
      setProgress(distance / totalScrollable);
    };

    let rafId = 0;
    const onScrollOrResize = () => {
      if (rafId) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        handleScroll();
        rafId = 0;
      });
    };

    handleScroll();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [reduceMotion]);

  if (frameCount === 0) {
    return null;
  }

  const pinScrollVh = resolvePinScrollVh(config);

  const renderDualColumnShowcase = () => {
    const step = reduceMotion ? 0 : dualColumnStep;
    const stepSpacing = 120;

    return (
      <div className="relative h-full w-full overflow-hidden">
        {config.frames.map((frame, index) => (
          <div
            key={`dual-text-${frame.src}`}
            className={`absolute left-0 top-0 h-full w-1/2 will-change-transform ${slidePanelClass}`}
            style={{
              transform: `translate3d(0, ${(index - step) * stepSpacing}%, 0)`,
            }}
          >
            <div className="flex h-full items-center justify-center px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:pr-12">
              {renderTextSlide(index)}
            </div>
          </div>
        ))}

        {config.frames.map((frame, index) => (
          <div
            key={`dual-image-${frame.src}`}
            className={`absolute right-0 top-0 h-full w-1/2 will-change-transform ${slidePanelClass}`}
            style={{
              transform: `translate3d(0, ${(step - index) * stepSpacing}%, 0)`,
            }}
          >
            <div className="flex h-full items-center justify-center px-3 py-12 sm:px-4 sm:py-14 md:px-6 md:py-16 lg:pl-12">
              <div className="relative h-full w-full max-h-[min(88vh,920px)] max-w-[min(98%,520px)]">
                {renderImageSlide(index)}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderSequentialShowcase = () => (
    <>
      {reduceMotion ? (
        textBeforeImage ? (
          <div
            className={`absolute inset-0 flex items-center justify-center px-6 py-14 md:px-12 ${slidePanelClass}`}
          >
            {renderFlowItem({ type: "text", frameIndex: 0 })}
          </div>
        ) : (
          <div
            className={
              imagesFillHeight
                ? `relative h-full w-full ${slidePanelClass}`
                : "relative mx-auto h-full w-full max-w-[720px]"
            }
          >
            {renderFlowItem({ type: "image", frameIndex: 0 })}
          </div>
        )
      ) : (
        <>
          <div
            className={getSlideLayerClass(activeFlowItem.type)}
            style={{
              transform: `translate3d(${-easedProgress * slideOffsetPercent}%, 0, 0)`,
              opacity: compactScroll
                ? 1
                : clamp(1 - easedProgress * 0.18, 0, 1),
            }}
          >
            <div className={getMediaFrameClass(activeFlowItem.type)}>
              {renderFlowItem(activeFlowItem)}
            </div>
          </div>

          {nextFlowIndex !== activeFlowIndex ? (
            <div
              className={getSlideLayerClass(nextFlowItem.type)}
              style={{
                transform: `translate3d(${(1 - easedProgress) * slideOffsetPercent}%, 0, 0)`,
                opacity: compactScroll ? 1 : clamp((easedProgress - 0.02) / 0.98, 0, 1),
              }}
            >
              <div className={getMediaFrameClass(nextFlowItem.type)}>
                {renderFlowItem(nextFlowItem)}
              </div>
            </div>
          ) : null}
        </>
      )}
    </>
  );

  return (
    <section
      ref={sectionRef}
      className={`relative left-1/2 mt-10 w-dvw max-w-dvw -translate-x-1/2 ${useSolidBackground ? "bg-[#EEEEEE]" : ""}`}
      style={{ height: `${pinScrollVh}vh` }}
    >
      <div
        className={`sticky top-0 h-screen overflow-hidden ${useSolidBackground ? "bg-[#EEEEEE]" : ""}`}
        style={useSolidBackground ? showcaseBackgroundStyle : undefined}
      >
        <div
          className={`absolute inset-0 overflow-hidden border-y-2 border-[#292441]/25 ${useSolidBackground ? "bg-[#EEEEEE]" : ""}`}
        >
          <div
            className={`absolute inset-0 ${useSolidBackground ? "bg-[#EEEEEE]" : ""}`}
            style={showcaseBackgroundStyle}
          />

          <div className="absolute inset-0">
            {dualColumnScroll
              ? renderDualColumnShowcase()
              : renderSequentialShowcase()}
          </div>

          {!reduceMotion ? (
            <div className="absolute bottom-6 left-1/2 z-20 w-[220px] -translate-x-1/2">
              <div
                className="h-1.5 w-full overflow-hidden rounded-full"
                style={{
                  backgroundColor:
                    config.theme?.progressTrack ??
                    (useSolidBackground
                      ? "rgba(10, 41, 79, 0.2)"
                      : "rgba(233, 231, 218, 0.25)"),
                }}
              >
                <div
                  className="h-full rounded-full transition-[width] duration-100"
                  style={{
                    width: `${Math.round(progress * 100)}%`,
                    backgroundColor:
                      config.theme?.progress ??
                      (useSolidBackground ? "#0A294F" : "#E9E7DA"),
                  }}
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
