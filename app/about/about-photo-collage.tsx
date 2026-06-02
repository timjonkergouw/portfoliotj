import Image from "next/image";
import { columnConfigs, reelItemsByColumn } from "@/app/about/about-data";

export default function AboutPhotoCollage() {
  return (
    <section
      id="foto-collage"
      className="mt-8 hidden scroll-mt-24 overflow-x-auto pb-6 md:block"
    >
      <div className="relative min-w-[980px] border-t-4 border-[#292441]">
        <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-[300px] w-[32.6%] -translate-x-1/2 overflow-hidden bg-linear-to-b from-[#020118] to-[#292541]">
          <Image
            src="/st jan.svg"
            alt="St Jan achtergrond"
            fill
            sizes="(min-width: 768px) 32vw, 0px"
            className="object-cover opacity-22"
          />
          <div className="absolute inset-y-0 left-[30%] w-[10px] bg-[#1A1633]/45" />
          <div className="absolute inset-y-0 right-[28%] w-[10px] bg-[#1A1633]/45" />
          <div className="absolute left-[38%] top-1/2 z-10 h-[230px] w-[150px] -translate-y-1/2">
            <Image
              src="/tim4 1.svg"
              alt="Tim Jonkergouw"
              fill
              sizes="150px"
              className="object-contain"
            />
          </div>
          <div className="absolute left-[9%] top-1/2 z-10 -translate-y-1/2">
            <p className="font-heading text-4xl leading-[0.85] text-[#E9E7DA] md:text-5xl">
              Tim
            </p>
            <p className="font-heading text-4xl leading-[0.85] text-[#E9E7DA] md:text-5xl">
              Jonkergouw
            </p>
          </div>
          <div
            className="absolute bottom-0 left-0 h-4 w-full"
            style={{
              backgroundImage: "url('/paperlayout.png')",
              backgroundRepeat: "repeat-x",
              backgroundSize: "auto 100%",
              backgroundPosition: "center",
            }}
          />
        </div>

        <div className="relative h-[700px] overflow-hidden border-b-4 border-[#292441]">
          <div className="grid h-full grid-cols-12 gap-3 md:gap-4">
            {columnConfigs.map((column, columnIndex) => {
              const reelItems = reelItemsByColumn[columnIndex];
              return (
                <div
                  key={`column-${columnIndex}`}
                  className={`col-span-2 h-full overflow-hidden ${column.withTopOffset ? "pt-[316px]" : ""}`}
                >
                  <div
                    className="reel-track flex flex-col gap-3 md:gap-4"
                    style={{
                      animationDuration: `${column.speedSeconds}s`,
                      animationDirection: column.direction,
                    }}
                  >
                    {[0, 1].map((segmentIndex) => (
                      <div
                        key={`segment-${columnIndex}-${segmentIndex}`}
                        className="flex flex-col gap-3 md:gap-4"
                      >
                        {reelItems.map((item, itemIndex) =>
                          item.type === "photo" ? (
                            <div
                              key={`item-photo-${columnIndex}-${segmentIndex}-${itemIndex}`}
                              className="relative h-[190px] overflow-hidden"
                            >
                              <Image
                                src={item.src}
                                alt={`Carousel foto ${columnIndex + 1}-${itemIndex + 1}`}
                                fill
                                sizes="(min-width: 980px) 16vw, 160px"
                                className="object-cover"
                                loading="lazy"
                              />
                            </div>
                          ) : (
                            <div
                              key={`item-block-${columnIndex}-${segmentIndex}-${itemIndex}`}
                              className="w-full"
                              style={{
                                height: `${item.height}px`,
                                backgroundColor: item.color,
                              }}
                            />
                          ),
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
