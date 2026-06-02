import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/app/projects/project-data";
import InspirationSlideshow from "@/app/components/inspiration-slideshow";
import LogoScrollShowcase from "@/app/components/logo-scroll-showcase";
import SiteHeader from "@/app/components/site-header";

const paperBackgroundStyle = {
  backgroundImage: "url('/paperlayout.png')",
  backgroundRepeat: "repeat-y",
  backgroundSize: "100% auto",
  backgroundPosition: "top center",
} as const;

function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="font-heading w-full rounded-full bg-[#292441] px-8 py-4 text-4xl uppercase text-[#E9E7DA] md:px-10 md:text-6xl">
      {title}
    </h2>
  );
}

type ProjectPageLayoutProps = {
  project: Project;
};

export default function ProjectPageLayout({ project }: ProjectPageLayoutProps) {
  return (
    <main
      className="font-body min-h-screen px-6 py-8 font-bold text-[#292441] md:px-12"
      style={paperBackgroundStyle}
    >
      <div className="mx-auto max-w-[1280px]">
        <SiteHeader />

        <div className="mt-4 border-t-4 border-[#292441] pt-10">
          <Link
            href="/#projects"
            className="font-heading inline-block rounded-md bg-[#CA5521] px-3 py-1.5 text-xs uppercase tracking-[0.08em] text-[#E9E7DA] transition hover:opacity-90"
          >
            Back to projects
          </Link>

          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#CA5521]">
                No.{project.number}
              </p>
              {project.headerLogo ? (
                <div className="relative mt-3 h-[56px] w-[280px] md:h-[72px] md:w-[360px]">
                  <Image
                    src={project.headerLogo}
                    alt={`${project.title} logo`}
                    fill
                    sizes="(min-width: 768px) 360px, 280px"
                    className="object-contain object-left"
                  />
                </div>
              ) : null}
              <h1 className="font-heading mt-2 text-6xl uppercase leading-[0.9] md:text-8xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-[520px] text-lg font-bold leading-tight tracking-[-0.03em]">
                {project.intro}
              </p>
            </div>
            <div className="relative h-[280px] w-full md:h-[380px]">
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
            <p className="mt-6 max-w-[900px] text-lg leading-relaxed md:text-xl">
              {section.description}
            </p>

            {section.inspirationSlides &&
            section.inspirationSlides.length > 0 ? (
              <InspirationSlideshow slides={section.inspirationSlides} />
            ) : null}

            {section.afterInspiration ? (
              <p className="mt-8 max-w-[900px] text-lg leading-relaxed md:text-xl">
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
                <h4 className="font-heading text-2xl uppercase text-[#292441] md:text-3xl">
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
                    Open in Figma
                  </Link>
                ) : null}
              </div>
            ) : null}

            {section.afterFigma ? (
              <p className="mt-8 max-w-[900px] text-lg leading-relaxed md:text-xl">
                {section.afterFigma}
              </p>
            ) : null}

            {section.logoScrollShowcase ? (
              <LogoScrollShowcase config={section.logoScrollShowcase} />
            ) : null}

            {section.websiteEmbedUrl ? (
              <div className="mt-8">
                <h4 className="font-heading text-2xl uppercase text-[#292441] md:text-3xl">
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

            {section.images && section.images.length > 0 ? (
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {section.images.map((src) => (
                  <div
                    key={src}
                    className="relative aspect-4/3 overflow-hidden border-2 border-[#292441]/20 bg-[#E9E7DA]/40"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-contain p-4"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </section>
        ))}

        <div className="pb-20 pt-16">
          <Link
            href="/#projects"
            className="font-heading inline-block rounded-xl bg-[#292541] px-8 py-3 text-xl uppercase tracking-[0.08em] text-[#E9E7DA] transition hover:opacity-90 md:px-10 md:text-2xl"
          >
            Alle projects
          </Link>
        </div>
      </div>
    </main>
  );
}
