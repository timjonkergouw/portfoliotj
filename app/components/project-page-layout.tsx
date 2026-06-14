import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/app/projects/project-data";
import SiteHeader from "@/app/components/site-header";

const FlipInspirationCards = dynamic(
  () => import("@/app/components/flip-inspiration-cards"),
);
const InspirationSlideshow = dynamic(
  () => import("@/app/components/inspiration-slideshow"),
);
const LogoScrollShowcase = dynamic(
  () => import("@/app/components/logo-scroll-showcase"),
);
const WorkScreenCarousel = dynamic(
  () => import("@/app/components/work-screen-carousel"),
);
const ColorPaletteCarousel = dynamic(
  () => import("@/app/components/color-palette-carousel"),
);
const StylescapeViewer = dynamic(
  () => import("@/app/components/stylescape-viewer"),
);
const WebsiteEmbedPreview = dynamic(
  () => import("@/app/components/website-embed-preview"),
);

function SectionHeading({ title }: { title: string }) {
  return <h2 className="site-section-heading">{title}</h2>;
}

type ProjectPageLayoutProps = {
  project: Project;
};

export default function ProjectPageLayout({ project }: ProjectPageLayoutProps) {
  return (
    <main className="font-body site-page min-h-screen font-bold text-[#292441]">
      <div className="site-shell">
        <SiteHeader />

        <div className="mt-4 border-t-4 border-[#292441] pt-10">
          <Link
            href="/#projects"
            className="btn-accent-sm"
          >
            Terug naar projecten
          </Link>

          <div className="mt-6 sm:mt-8">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#CA5521]">
              No.{project.number}
            </p>
            <div className="mt-3 flex items-start justify-between gap-4 sm:gap-6 md:gap-10 lg:gap-12">
              <div className="min-w-0 flex-1">
                <h1 className="font-heading text-4xl uppercase leading-[0.9] sm:text-5xl md:text-6xl lg:text-7xl">
                  {project.title}
                </h1>
                <p className="mt-4 max-w-[520px] text-base font-bold leading-tight tracking-[-0.03em] sm:mt-6 sm:text-lg">
                  {project.intro}
                </p>
              </div>
              <div
                className={`relative shrink-0 overflow-visible ${
                  project.headerLogoClassName ??
                  "h-[120px] w-[min(38vw,180px)] sm:h-[170px] sm:w-[min(34vw,240px)] md:h-[220px] md:w-[min(32vw,320px)] lg:h-[280px] lg:w-[min(30vw,400px)] xl:h-[320px] xl:w-[min(28vw,460px)]"
                }`}
              >
                <Image
                  src={project.pageLogo ?? project.image}
                  alt={`${project.title} logo`}
                  fill
                  sizes={
                    project.headerLogoSizes ??
                    "(min-width: 1280px) 460px, (min-width: 768px) 400px, 180px"
                  }
                  className="origin-right scale-[1.1] object-contain object-right"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {project.sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`${index === 0 ? "mt-14" : "mt-16"} border-t-4 border-[#292441] pt-10 md:pt-12`}
          >
            <SectionHeading title={section.title} />
            {section.websiteEmbedUrl &&
            section.websiteEmbedLayout === "mobile-side" ? (
              <div className="mt-4 grid gap-8 sm:mt-6 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-stretch lg:gap-10">
                <div className="flex flex-col">
                  <div className="site-section-body space-y-4 text-base leading-relaxed sm:text-lg md:text-xl">
                    {section.description.split("\n\n").map((paragraph) => (
                      <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                    ))}
                  </div>
                  {section.sectionLogo ? (
                    <div className="relative mt-8 h-[160px] w-full max-w-[520px] sm:mt-10 sm:h-[200px] lg:mt-auto lg:h-[min(32vh,280px)] lg:max-w-none">
                      <Image
                        src={section.sectionLogo}
                        alt={section.sectionLogoAlt ?? `${project.title} logo`}
                        fill
                        sizes="(min-width: 1024px) 520px, 100vw"
                        className="object-contain object-left"
                        loading="lazy"
                      />
                    </div>
                  ) : null}
                </div>
                <div className="mx-auto w-full max-w-[390px] lg:mx-0 lg:justify-self-end">
                  <div className="overflow-hidden rounded-[2rem] border-4 border-[#292441] bg-[#E9E7DA]/40 shadow-[0_12px_40px_rgba(41,36,65,0.12)]">
                    <div
                      className="mx-auto flex justify-center overflow-hidden"
                      style={{ width: "390px", height: "760px" }}
                    >
                      <div
                        className="overflow-hidden"
                        style={{ width: "351px", height: "760px" }}
                      >
                        <iframe
                          title={`${project.title} mobile preview`}
                          src={section.websiteEmbedUrl}
                          className="block border-0 bg-white"
                          style={{
                            width: "390px",
                            height: "844px",
                            transform: "scale(0.9)",
                            transformOrigin: "top left",
                          }}
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </div>
                  {section.websiteUrl ? (
                    <Link
                      href={section.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 block text-center text-sm uppercase tracking-[0.08em] text-[#292441] underline underline-offset-4 hover:opacity-70"
                    >
                      Bekijk op Vercel
                    </Link>
                  ) : null}
                </div>
              </div>
            ) : (
              <div className="site-section-body mt-4 max-w-[900px] space-y-4 text-base leading-relaxed sm:mt-6 sm:text-lg md:text-xl">
                {section.description.split("\n\n").map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            )}

            {section.websiteEmbedUrl &&
            section.websiteEmbedAfterDescription &&
            section.websiteEmbedLayout !== "mobile-side" ? (
              <div className="site-section-body mt-8">
                <h4 className="font-heading text-xl uppercase text-[#292441] md:text-2xl">
                  Interactieve pagina
                </h4>
                <div className="mt-4">
                  <WebsiteEmbedPreview
                    embedUrl={section.websiteEmbedUrl}
                    title={`${project.title} interactieve pagina`}
                    showRefresh={section.websiteEmbedShowRefresh}
                  />
                </div>
                {section.websiteUrl ? (
                  <Link
                    href={section.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm uppercase tracking-[0.08em] text-[#292441] underline underline-offset-4 hover:opacity-70"
                  >
                    Open pagina in nieuw tabblad
                  </Link>
                ) : null}
              </div>
            ) : null}

            {section.flipInspirationCards &&
            section.flipInspirationCards.length > 0 ? (
              <FlipInspirationCards cards={section.flipInspirationCards} />
            ) : null}

            {section.inspirationSlides &&
            section.inspirationSlides.length > 0 ? (
              <InspirationSlideshow slides={section.inspirationSlides} />
            ) : null}

            {section.paletteColors && section.paletteColors.length > 0 ? (
              <ColorPaletteCarousel colors={section.paletteColors} />
            ) : null}

            {section.afterPalette ? (
              <p className="site-section-body mt-6 max-w-[900px] text-base leading-relaxed sm:mt-8 sm:text-lg md:text-xl">
                {section.afterPalette}
              </p>
            ) : null}

            {section.stylescape ? (
              <StylescapeViewer stylescape={section.stylescape} />
            ) : null}

            {section.afterStylescape ? (
              <div className="site-section-body mt-6 max-w-[900px] space-y-4 text-base leading-relaxed sm:mt-8 sm:text-lg md:text-xl">
                {section.afterStylescape.split("\n\n").map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            ) : null}

            {section.workScreenSlides && section.workScreenSlides.length > 0 ? (
              <WorkScreenCarousel slides={section.workScreenSlides} />
            ) : null}

            {section.afterInspiration ? (
              <p className="site-section-body mt-6 max-w-[900px] text-base leading-relaxed sm:mt-8 sm:text-lg md:text-xl">
                {section.afterInspiration}
              </p>
            ) : null}

            {section.secondarySlides && section.secondarySlides.length > 0 ? (
              <InspirationSlideshow
                slides={section.secondarySlides}
                showSource={false}
              />
            ) : null}

            {section.figmaEmbedUrl ? (
              <div className="site-section-body mt-8">
                <h4 className="font-heading text-xl uppercase text-[#292441] md:text-2xl">
                  Interactieve Figma
                </h4>
                <div className="mt-4 overflow-hidden border-2 border-[#292441]/30 bg-[#E9E7DA]/40">
                  <iframe
                    title={`${project.title} Figma prototype`}
                    src={section.figmaEmbedUrl}
                    className="h-[460px] w-full md:h-[620px]"
                    allowFullScreen
                  />
                </div>
                {section.figmaFileUrl ? (
                  <Link
                    href={section.figmaFileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm uppercase tracking-[0.08em] text-[#292441] underline underline-offset-4 hover:opacity-70"
                  >
                    Openen in Figma
                  </Link>
                ) : null}
              </div>
            ) : null}

            {section.afterFigma ? (
              <p className="site-section-body mt-6 max-w-[900px] text-base leading-relaxed sm:mt-8 sm:text-lg md:text-xl">
                {section.afterFigma}
              </p>
            ) : null}

            {section.logoScrollShowcase ? (
              <LogoScrollShowcase config={section.logoScrollShowcase} />
            ) : null}

            {section.websiteEmbedUrl &&
            !section.websiteEmbedAfterDescription &&
            section.websiteEmbedLayout !== "mobile-side" ? (
              <div className="site-section-body mt-8">
                <h4 className="font-heading text-xl uppercase text-[#292441] md:text-2xl">
                  Live website
                </h4>
                <div className="mt-4">
                  <WebsiteEmbedPreview
                    embedUrl={section.websiteEmbedUrl}
                    title={`${project.title} website preview`}
                    showRefresh={section.websiteEmbedShowRefresh}
                  />
                </div>
                {section.websiteUrl ? (
                  <Link
                    href={section.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm uppercase tracking-[0.08em] text-[#292441] underline underline-offset-4 hover:opacity-70"
                  >
                    Open website in nieuw tabblad
                  </Link>
                ) : null}
              </div>
            ) : null}
          </section>
        ))}

        <div className="pb-20 pt-16">
          <Link
            href="/#projects"
            className="btn-primary"
          >
            Alle projecten
          </Link>
        </div>
      </div>
    </main>
  );
}
