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
  const flowItems = config.frames.flatMap((frame, index) => {
    const imageItem =
      { type: "image" as const, frameIndex: index };
    const textItem = [{ type: "text" as const, frameIndex: index }];
    return [imageItem, ...textItem];
  });

  const totalSteps = Math.max(flowItems.length - 1, 1);
  const scaledStep = progress * totalSteps;
  const activeFlowIndex = Math.floor(scaledStep);
  const nextFlowIndex = Math.min(activeFlowIndex + 1, flowItems.length - 1);
  const localProgress = clamp(scaledStep - activeFlowIndex, 0, 1);
  const easedProgress = easeInOut(localProgress);

  const activeFlowItem = flowItems[activeFlowIndex] ?? flowItems[0];
  const nextFlowItem = flowItems[nextFlowIndex] ?? activeFlowItem;

  const gradientIndex = clamp(activeFlowItem.frameIndex, 0, Math.max(config.gradients.length - 1, 0));
  const nextGradientIndex = clamp(
    nextFlowItem.frameIndex,
    0,
    Math.max(config.gradients.length - 1, 0),
  );
  const currentGradient = config.gradients[gradientIndex] ?? {
    from: "#020118",
    to: "#292541",
  };
  const upcomingGradient = config.gradients[nextGradientIndex] ?? currentGradient;
  const shouldInterpolateGradient =
    activeFlowItem.type === "text" && nextFlowItem.frameIndex !== activeFlowItem.frameIndex;
  const gradientMix = shouldInterpolateGradient ? easedProgress : 0;
  const gradient = {
    from: mixHex(currentGradient.from, upcomingGradient.from, gradientMix),
    to: mixHex(currentGradient.to, upcomingGradient.to, gradientMix),
  };

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

  const sectionHeightClass = config.pinHeightClass ?? "h-[360vh]";

  return (
    <section
      ref={sectionRef}
      className={`relative left-1/2 mt-10 w-dvw max-w-dvw -translate-x-1/2 ${sectionHeightClass}`}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 overflow-hidden border-y-2 border-[#292441]/25">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to bottom, ${gradient.from}, ${gradient.to})`,
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center px-6 py-14 md:px-12">
          {reduceMotion ? (
            <div className="relative h-full w-full max-w-[720px]">
              <Image
                src={config.frames[0].src}
                alt={config.frames[0].alt}
                fill
                sizes="(min-width: 768px) 720px, 92vw"
                className="object-contain"
              />
            </div>
          ) : (
            <>
              <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 py-14 md:px-12"
                style={{
                  transform: `translate3d(${-easedProgress * 120}%, 0, 0)`,
                  opacity: clamp(1 - easedProgress * 0.18, 0, 1),
                }}
              >
                <div className="relative h-full w-full max-w-[760px]">
                  {activeFlowItem.type === "image" ? (
                    <Image
                      src={config.frames[activeFlowItem.frameIndex].src}
                      alt={config.frames[activeFlowItem.frameIndex].alt}
                      fill
                      sizes="(min-width: 768px) 720px, 92vw"
                      className="object-contain"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <p
                        className={`max-w-[760px] px-6 text-center text-base leading-relaxed md:px-10 md:text-2xl ${getNoteTextClass(config.frames[activeFlowItem.frameIndex].src)}`}
                      >
                        {config.frames[activeFlowItem.frameIndex].note ?? ""}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {nextFlowIndex !== activeFlowIndex ? (
                <div
                  className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 py-14 md:px-12"
                  style={{
                    transform: `translate3d(${(1 - easedProgress) * 120}%, 0, 0)`,
                    opacity: clamp((easedProgress - 0.02) / 0.98, 0, 1),
                  }}
                >
                  <div className="relative h-full w-full max-w-[760px]">
                    {nextFlowItem.type === "image" ? (
                      <Image
                        src={config.frames[nextFlowItem.frameIndex].src}
                        alt={config.frames[nextFlowItem.frameIndex].alt}
                        fill
                        sizes="(min-width: 768px) 720px, 92vw"
                        className="object-contain"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <p
                          className={`max-w-[760px] px-6 text-center text-base leading-relaxed md:px-10 md:text-2xl ${getNoteTextClass(config.frames[nextFlowItem.frameIndex].src)}`}
                        >
                          {config.frames[nextFlowItem.frameIndex].note ?? ""}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ) : null}
            </>
          )}
          </div>

          {!reduceMotion ? (
            <div className="absolute bottom-6 left-1/2 w-[220px] -translate-x-1/2">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E9E7DA]/25">
                <div
                  className="h-full rounded-full bg-[#E9E7DA] transition-[width] duration-100"
                  style={{ width: `${Math.round(progress * 100)}%` }}
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
