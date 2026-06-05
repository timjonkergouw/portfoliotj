import Image from "next/image";
import Link from "next/link";

type HomeProject = {
  id: string;
  name: string;
  summary: string;
  image: string;
  href: string;
};

type HomeProjectsShowcaseProps = {
  projects: HomeProject[];
};

export default function HomeProjectsShowcase({
  projects,
}: HomeProjectsShowcaseProps) {
  return (
    <div className="py-8 sm:py-10">
      <ul className="flex flex-col gap-3 sm:gap-4">
        {projects.map((project, index) => (
          <li key={project.href}>
            <Link
              href={project.href}
              className="home-project-row group block focus-visible:outline-none"
            >
              <article
                className={`home-project-row-inner grid items-center gap-4 border-4 border-[#292441] bg-[#E9E7DA]/55 p-4 transition-[transform,background-color,box-shadow,border-color] duration-300 ease-out group-hover:translate-x-1 group-hover:border-[#CA5521] group-hover:bg-[#E9E7DA] group-hover:shadow-[8px_8px_0_rgba(41,36,65,0.14)] group-focus-visible:translate-x-1 group-focus-visible:border-[#CA5521] group-focus-visible:bg-[#E9E7DA] group-focus-visible:shadow-[8px_8px_0_rgba(41,36,65,0.14)] sm:gap-5 sm:p-5 md:grid-cols-[88px_minmax(0,1fr)_220px] md:gap-6 lg:grid-cols-[104px_minmax(0,1fr)_260px] ${
                  index % 2 === 1 ? "md:home-project-row-alt" : ""
                }`}
              >
                <p className="font-heading text-[2.5rem] leading-none text-[#CA5521] sm:text-5xl md:text-[3.25rem]">
                  {project.id.padStart(2, "0")}
                </p>

                <div className="min-w-0">
                  <h4 className="font-heading text-2xl uppercase leading-[0.95] text-[#292441] sm:text-3xl md:text-4xl lg:text-[2.75rem]">
                    {project.name}
                  </h4>
                  <p className="mt-2 max-w-[520px] text-xs font-bold leading-snug tracking-[-0.02em] text-[#292441]/75 sm:text-sm">
                    {project.summary}
                  </p>
                </div>

                <div
                  className={`home-project-thumb relative justify-self-end overflow-hidden border-4 border-[#292441] bg-white p-2 shadow-[5px_6px_0_rgba(41,36,65,0.12)] transition-[transform,box-shadow] duration-300 group-hover:shadow-[7px_9px_0_rgba(41,36,65,0.16)] md:justify-self-auto ${
                    index % 2 === 0
                      ? "home-project-thumb-tilt-a"
                      : "home-project-thumb-tilt-b"
                  }`}
                >
                  <div className="relative h-[88px] w-[112px] sm:h-[96px] sm:w-[124px] md:h-[132px] md:w-full">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(min-width: 768px) 260px, 124px"
                      className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
