import SiteHeader from "@/app/components/site-header";
import { AboutServices, AboutSkills } from "@/app/about/about-interactive";
import AboutOverMijPhotos from "@/app/about/about-over-mij-photos";
import AboutPhotoCollage from "@/app/about/about-photo-collage";
import { careerTimeline } from "@/app/about/about-data";

export default function AboutPage() {
  return (
    <main className="font-body site-page min-h-screen text-[#292441]">
      <div className="site-shell">
        <SiteHeader />

        <AboutPhotoCollage />

        <section className="py-10 text-[#1A1633] md:py-14">
          <div id="over-mij" className="scroll-mt-24">
            <h2 className="site-section-heading">Over mij</h2>
            <div className="mt-4 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(280px,400px)] lg:items-start lg:gap-6 xl:gap-8">
              <p className="site-section-body text-lg leading-tight md:text-xl">
                Hoi, mijn naam is Tim Jonkergouw. Ik ben 20 jaar oud en kom uit
                &rsquo;s-Hertogenbosch in Nederland. Op dit moment studeer ik ICT, met de
                richting Media Creation en front-end development.
                <br />
                <br />
                Ik heb veel interesse in creativiteit, vooral in het ontwerpen en bouwen
                van digitale ervaringen. Wat ik het leukste vind, is het omzetten van
                ideeën en ontwerpen naar werkende en interactieve websites. Het is voor mij
                heel tof om te zien hoe iets dat je bedenkt ook echt in de browser tot
                leven komt.
                <br />
                <br />
                Tijdens mijn studie ben ik steeds bezig met het verbeteren van mijn skills
                in zowel design als development. Ik leer hoe ik gebruiksvriendelijke en
                mooie interfaces kan maken. Ik vind het leuk om te experimenteren met
                verschillende stijlen en technieken en ik ben altijd gemotiveerd om nieuwe
                dingen te leren en bij te blijven met de laatste ontwikkelingen in web
                development.
                <br />
                <br />
                In de toekomst wil ik mezelf verder ontwikkelen als front-end developer en
                bijdragen aan het maken van goede en interessante digitale producten.
              </p>
              <AboutOverMijPhotos />
            </div>
          </div>

          <AboutServices />

          <div
            id="school"
            className="mt-14 scroll-mt-24 border-t-4 border-[#292441] pb-20 pt-10 md:pt-12"
          >
            <h3 className="site-section-heading">School</h3>

            <div className="site-section-body relative mt-8">
              <div className="absolute bottom-[-34px] left-[calc(260px+2rem+28px)] top-6 hidden w-[6px] -translate-x-1/2 bg-linear-to-b from-[#292441] via-[#292441] to-transparent md:block" />

              <div className="space-y-14 md:space-y-20">
                {careerTimeline.map((item) => (
                  <div
                    key={item.id}
                    className="grid gap-4 md:grid-cols-[260px_56px_1fr] md:items-start md:gap-8"
                  >
                    <a href={`#${item.id}`} className="group text-left">
                      <p className="font-heading text-3xl uppercase text-[#292441]/85 transition group-hover:text-[#292441]">
                        {item.school}
                      </p>
                      <p className="text-lg leading-none text-[#292441]/85">
                        {item.location}
                      </p>
                    </a>

                    <div className="hidden justify-center pt-5 md:flex">
                      <a
                        href={`#${item.id}`}
                        aria-label={`Ga naar ${item.school}`}
                        className="relative z-10 h-6 w-6 rounded-full border-4 border-[#292441] bg-[#E9E7DA] transition duration-300 hover:scale-110 hover:bg-[#CA5521]"
                      />
                    </div>

                    <article
                      id={item.id}
                      className="scroll-mt-28 border-l-4 border-[#292441] pl-5"
                    >
                      <p className="font-heading text-base uppercase tracking-[0.08em] text-[#CA5521]">
                        {item.period}
                      </p>
                      <h4 className="font-heading mt-1 text-3xl uppercase text-[#292441]">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-lg leading-tight">{item.description}</p>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <AboutSkills />
        </section>
      </div>
    </main>
  );
}
