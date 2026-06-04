import Image from "next/image";
import Link from "next/link";
import DesktopExperienceNotice from "@/app/components/desktop-experience-notice";
import { getHomeProjectCards } from "@/app/projects/project-data";
import HomeHero from "./home-hero";

const projectCards = getHomeProjectCards();

export default function Home() {
  return (
    <div className="font-body text-[#E9E7DA]">
      <DesktopExperienceNotice />
      <HomeHero />

      <section className="px-4 pb-12 pt-6 text-[#292441] sm:px-6 sm:pb-16 sm:pt-8 md:px-10 lg:px-12">
        <div className="site-shell">
          <div className="h-6 w-full bg-[#CA5521]" />

          <div className="grid gap-8 py-10 sm:gap-10 sm:py-14 md:grid-cols-2 md:items-start md:py-16">
            <div>
              <h3 className="font-heading text-4xl uppercase text-[#292441] sm:text-5xl md:text-6xl">
                over mij
              </h3>
              <p className="mt-4 max-w-[520px] text-base font-bold leading-tight tracking-[-0.03em] text-[#1A1633] sm:mt-6 sm:text-lg md:text-xl">
                Hoi, ik ben Tim Jonkergouw, ik ben 20 jaar oud en momenteel bezig
                met de bachelor HBO-ICT aan Fontys. Mijn focus ligt voornamelijk op
                front-end development en media creation. Ik houd ervan om creatief
                bezig te zijn en originele concepten tot leven te brengen.
                <br />
                <br />
                In het eerste semester ben ik begonnen met de orientatiefase,
                waarbij ik een breed beeld heb gekregen van de gehele
                ICT-industrie. Al snel ontdekte ik dat front-end en media mijn
                grootste interesses waren. Daarom heb ik in het tweede semester
                gekozen voor de richting media, waarin ik veel heb gewerkt aan
                ontwerpen en ook al een aanzienlijk deel heb geprogrammeerd. Hier
                heb ik ook mijn propodeuse mee gehaald. In het derde semester ben
                ik overgestapt naar front-end development. Nu, in het vierde
                semester, ben ik bezig met media creation.
              </p>
            </div>
            <div className="relative h-[240px] overflow-hidden sm:h-[300px] md:h-[380px]">
              <Image
                src="/about me foto.png"
                alt="About me foto"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                loading="lazy"
              />
              <p className="font-body absolute bottom-3 left-3 z-10 text-sm font-bold text-[#E9E7DA] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] md:text-base">
                Behalen van Propodeuse in 2024/2025.
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:gap-10 md:grid-cols-2 md:items-start">
            <div className="relative h-[220px] overflow-hidden sm:h-[280px] md:h-[340px]">
              <Image
                src="/st jan bw.png"
                alt="St Jan oud"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                loading="lazy"
              />
              <p className="font-body absolute bottom-3 left-3 z-10 text-sm font-bold text-[#E9E7DA] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] md:text-base">
                Sint Jans kathedraal, &rsquo;s-Hertogenbosch
              </p>
            </div>
            <p className="text-base font-bold leading-tight tracking-[-0.03em] text-[#1A1633] sm:text-lg md:text-xl">
              Ik kom uit &rsquo;s-Hertogenbosch, waar ik samenwoon met mijn ouders
              en mijn zusje. Naast mijn studie ben ik actief als voetballer bij
              FC Engelen Jo23-1, waar ik de vaste linksbuiten ben. Voetbal is al
              een passie van mij sinds ik een heel klein jongetje ben.
              <br />
              <br />
              In mijn vrije tijd ga ik graag op stap met vrienden, want
              gezelligheid vind ik erg belangrijk. Daarnaast ben ik een groot
              liefhebber van darten, een sport die ik regelmatig samen met
              vrienden beoefen en waar ik ook graag naar kijk. Ook game ik graag
              in mijn vrije tijd, waarbij EA FC en GTA V de meest gespeelde
              titels zijn.
            </p>
          </div>

          <div className="flex justify-center py-10 sm:py-12">
            <Link href="/about" className="btn-primary-lg">
              Lees meer
            </Link>
          </div>

          <div id="projects" className="py-0">
            <div className="h-6 w-full bg-[#CA5521]" />
            <h3 className="font-heading py-0 text-center text-[clamp(3rem,14vw,7rem)] leading-none uppercase text-[#292441] md:text-[clamp(5rem,12vw,9rem)]">
              Projecten
            </h3>
            <div className="h-6 w-full bg-[#CA5521]" />
          </div>

          <div className="relative grid justify-items-center gap-6 py-8 sm:gap-8 sm:py-10 md:block md:min-h-[820px] lg:min-h-[1000px]">
            {projectCards.map((project) => (
              <Link
                key={project.id}
                href={project.href}
                className={`project-card group relative z-0 block p-0 hover:z-20 focus-visible:z-20 ${project.cardClass}`}
              >
                <div className="project-card-inner origin-center transition-transform duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.06] group-focus-visible:scale-[1.06]">
                  <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[#CA5521] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      No.{project.id}
                    </p>
                    <h4 className="font-heading text-lg uppercase text-[#E9E7DA] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] sm:text-xl">
                      {project.name}
                    </h4>
                  </div>
                  <div className="relative h-[180px] w-full overflow-hidden rounded-none sm:h-[200px] md:h-[230px] lg:h-[260px]">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(min-width: 1024px) 560px, (min-width: 768px) 440px, 100vw"
                      className="object-contain object-center"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="h-6 w-full bg-[#CA5521]" />
        </div>
      </section>
    </div>
  );
}
