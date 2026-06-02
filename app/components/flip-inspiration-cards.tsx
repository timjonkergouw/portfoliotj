"use client";

import Image from "next/image";
import { useState } from "react";
import type { FlipInspirationCard } from "@/app/projects/project-data";

type FlipInspirationCardsProps = {
  cards: FlipInspirationCard[];
};

export default function FlipInspirationCards({ cards }: FlipInspirationCardsProps) {
  const [flippedIndexes, setFlippedIndexes] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    setFlippedIndexes((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-8">
      {cards.map((card, index) => {
        const isFlipped = flippedIndexes.has(index);

        return (
          <button
            key={card.src}
            type="button"
            onClick={() => toggleCard(index)}
            className="w-[132px] shrink-0 text-left [perspective:1200px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#CA5521] sm:w-[156px] md:w-[180px]"
            aria-pressed={isFlipped}
            aria-label={
              isFlipped
                ? `${card.alt}, terug naar screenshot`
                : `${card.alt}, bekijk inspiratie`
            }
          >
            <div
              className={`relative aspect-[9/19] w-full transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""
                }`}
            >
              <div className="absolute inset-0 overflow-hidden border-2 border-[#292441]/25 bg-[#E9E7DA]/50 [backface-visibility:hidden]">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="180px"
                  className="object-contain object-top p-1"
                />
              </div>
              <div className="absolute inset-0 flex flex-col border-2 border-[#292441] bg-[#292441] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <p className="bg-[#E9E7DA]/15 px-2 py-1.5 text-[9px] font-bold uppercase tracking-[0.1em] text-[#E9E7DA] sm:text-[10px]">
                  Bron: {card.source}
                </p>
                <div className="flex flex-1 items-center justify-center p-2 sm:p-2.5">
                  <p className="text-center text-xs font-bold leading-snug text-[#E9E7DA] sm:text-sm">
                    {card.backText}
                  </p>
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
