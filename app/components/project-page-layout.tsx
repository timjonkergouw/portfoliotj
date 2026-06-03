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

const paperBackgroundStyle = {
  backgroundImage: "url('/paperlayout.png')",
  backgroundRepeat: "repeat-y",
  backgroundSize: "100% auto",
  backgroundPosition: "top center",
} as const;

function SectionHeading({ title }: { title: string }) {
  return <h2 className="site-section-heading">{title}</h2>;
}

type ProjectPageLayoutProps = {
  project: Project;
};

export default function ProjectPageLayout({ project }: ProjectPageLayoutProps) {
  return (
    <main
      className="font-body site-page min-h-screen font-bold text-[#292441]"
      style={paperBackgroundStyle}
    >
      <div className="site-shell">
        <SiteHeader />

        <div className="mt-4 border-t-4 border-[#292441] pt-10">
          <Link
            href="/#projects"
            className="btn-accent-sm"
          >
            Terug naar projecten
          </Link>

          <div className="mt-6 grid gap-6 sm:mt-8 sm:gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#CA5521]">
                No.{project.number}
              </p>
              {project.headerLogo ? (
                <div
                  className={`relative mt-3 w-full ${
                    project.headerLogoClassName ??
                    "h-[140px] max-w-[640px] md:h-[200px] md:max-w-[900px]"
                  }`}
                >
                  <Image
                    src={project.headerLogo}
                    alt={`${project.title} logo`}
                    fill
                    sizes={
                      project.headerLogoSizes ??
                      "(min-width: 768px) 900px, 640px"
                    }
                    className="object-contain object-left"
                  />
                </div>
              ) : null}
              <h1 className="font-heading mt-2 text-4xl uppercase leading-[0.9] sm:text-5xl md:text-6xl lg:text-7xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-[520px] text-base font-bold leading-tight tracking-[-0.03em] sm:mt-6 sm:text-lg">
                {project.intro}
              </p>
            </div>
            <div className="relative h-[220px] w-full sm:h-[260px] lg:h-[340px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-contain object-bottom"
                priority
                unoptimized={project.image.endsWith(".gif")}
              />
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
              <div className="mt-4 flex flex-col gap-8 sm:mt-6">
                <div className="max-w-[900px] space-y-4 text-base leading-relaxed sm:text-lg md:text-xl">
                  {section.description.split("\n\n").map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
                <div className="mx-auto w-full max-w-[390px]">
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
              <p className="mt-4 max-w-[900px] text-base leading-relaxed sm:mt-6 sm:text-lg md:text-xl">
                {section.description}
              </p>
            )}

            {section.flipInspirationCards &&
            section.flipInspirationCards.length > 0 ? (
              <FlipInspirationCards cards={section.flipInspirationCards} />
            ) : null}

            {section.inspirationSlides &&
            section.inspirationSlides.length > 0 ? (
              <InspirationSlideshow slides={section.inspirationSlides} />
            ) : null}

            {section.afterInspiration ? (
              <p className="mt-6 max-w-[900px] text-base leading-relaxed sm:mt-8 sm:text-lg md:text-xl">
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
              <div className="mt-8">
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
              <p className="mt-6 max-w-[900px] text-base leading-relaxed sm:mt-8 sm:text-lg md:text-xl">
                {section.afterFigma}
              </p>
            ) : null}

            {section.logoScrollShowcase ? (
              <LogoScrollShowcase config={section.logoScrollShowcase} />
            ) : null}

            {section.websiteEmbedUrl &&
            section.websiteEmbedLayout !== "mobile-side" ? (
              <div className="mt-8">
                <h4 className="font-heading text-xl uppercase text-[#292441] md:text-2xl">
                  Live website
                </h4>
                <div className="mt-4 overflow-hidden border-2 border-[#292441]/30 bg-[#E9E7DA]/40">
                  <iframe
                    title={`${project.title} website preview`}
                    src={section.websiteEmbedUrl}
                    className="h-[520px] w-full md:h-[680px]"
                    allowFullScreen
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
