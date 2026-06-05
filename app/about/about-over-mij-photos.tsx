"use client";

import Image from "next/image";
import { useState } from "react";
import { overMijScatterPhotos } from "@/app/about/about-data";

export default function AboutOverMijPhotos() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div
        className="relative mx-auto hidden h-[500px] w-full max-w-[380px] lg:mx-0 lg:block lg:justify-self-end"
        aria-label="Persoonlijke foto's"
      >
        <div className="pointer-events-none absolute right-10 top-10 h-11 w-11 rotate-12 rounded-sm bg-[#CA5521] shadow-[4px_4px_0_#292441]" />
        <div className="pointer-events-none absolute bottom-24 left-6 h-8 w-8 -rotate-6 rounded-full border-4 border-[#292441] bg-[#E9E7DA]" />
        <div className="pointer-events-none absolute right-0 top-[46%] h-14 w-[6px] rounded-full bg-[#292441]/35" />

        {overMijScatterPhotos.map((photo, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={photo.src}
              className={`absolute ${photo.slotClass} ${isActive ? "z-50" : ""}`}
            >
              <button
                type="button"
                className={`group block origin-center border-0 bg-transparent p-0 transition-transform duration-300 ease-out ${
                  isActive ? "scale-[1.08]" : "hover:scale-[1.04]"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onFocus={() => setActiveIndex(index)}
                onBlur={() => setActiveIndex(null)}
                aria-label={photo.alt}
              >
                <div
                  className={`${photo.floatClass} ${
                    isActive ? "about-polaroid-paused" : ""
                  }`}
                >
                  <div className="overflow-hidden border-4 border-[#292441] bg-[#E9E7DA] p-1.5 shadow-[6px_8px_0_rgba(41,36,65,0.18)] transition-shadow duration-300 group-hover:shadow-[10px_12px_0_rgba(41,36,65,0.22)]">
                    <div
                      className="relative overflow-hidden"
                      style={{ width: photo.width, height: photo.height }}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="160px"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </button>
            </div>
          );
        })}
      </div>

      <div className="site-section-body mt-8 flex gap-3 overflow-x-auto pb-2 lg:hidden">
        {overMijScatterPhotos.map((photo) => (
          <div
            key={`mobile-${photo.src}`}
            className="shrink-0 overflow-hidden border-4 border-[#292441] bg-[#E9E7DA] p-1 shadow-[4px_5px_0_rgba(41,36,65,0.15)]"
          >
            <div
              className="relative"
              style={{ width: 120, height: 144 }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="120px"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
