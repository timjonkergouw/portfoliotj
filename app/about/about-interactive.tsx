"use client";

import { useEffect, useRef, useState } from "react";
import {
  services,
  softSkills,
  technicalSkills,
} from "@/app/about/about-data";

export function AboutServices() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const activeService = services[activeServiceIndex];

  return (
    <div id="diensten" className="mt-10 scroll-mt-24">
      <h3 className="site-section-heading">Diensten</h3>

      <div className="mt-6 grid gap-8 md:grid-cols-2 md:items-start md:gap-12">
        <div className="hidden md:block">
          <div className="flex flex-col gap-3">
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                onClick={() => setActiveServiceIndex(index)}
                className={`font-heading relative w-fit pb-1 text-left text-3xl uppercase transition after:absolute after:bottom-0 after:left-0 after:h-[3px] after:transition-transform after:duration-300 ${
                  activeServiceIndex === index
                    ? "text-[#292441] after:w-full after:scale-x-100 after:bg-[#CA5521]"
                    : "text-[#292441]/70 after:w-full after:scale-x-0 after:bg-[#292441] hover:text-[#292441] hover:after:scale-x-100"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        <div className="hidden min-h-[170px] border-l-4 border-[#292441] pl-6 md:block">
          <h4 className="font-heading text-3xl uppercase text-[#292441]">
            {activeService.title}
          </h4>
          <p className="mt-3 text-lg leading-tight">{activeService.description}</p>
        </div>

        <div className="space-y-6 md:hidden">
          {services.map((service) => (
            <article
              key={`mobile-${service.title}`}
              className="border-l-4 border-[#292441] pl-4"
            >
              <h4 className="font-heading text-3xl uppercase text-[#292441]">
                {service.title}
              </h4>
              <p className="mt-2 text-lg leading-tight">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AboutSkills() {
  const [hasAnimatedSkills, setHasAnimatedSkills] = useState(false);
  const skillsSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = skillsSectionRef.current;
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setHasAnimatedSkills(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="vaardigheden"
      ref={skillsSectionRef}
      className="mt-14 scroll-mt-24 border-t-4 border-[#292441] pt-10 pb-16 md:pt-12 md:pb-20"
    >
      <h3 className="site-section-heading">Vaardigheden</h3>

      <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-stretch md:gap-12">
        <div className="flex-1">
          <h3 className="font-heading text-3xl uppercase text-[#292441] md:text-4xl">
            Technische vaardigheden
          </h3>
          <div className="mt-8 space-y-8">
            {technicalSkills.map((skill, index) => (
              <div key={skill.title}>
                <p className="font-heading text-2xl uppercase text-[#292441] md:text-3xl">
                  {skill.title}
                </p>
                <p className="mt-1 text-base text-[#292441]/85">{skill.description}</p>
                <div className="relative mt-3 h-3 w-full overflow-hidden rounded-full bg-[#292441]">
                  <div
                    className="h-full rounded-full bg-[#CA5521] transition-[width] duration-1000 ease-out"
                    style={{
                      width: hasAnimatedSkills ? `${skill.value}%` : "0%",
                      transitionDelay: `${index * 140}ms`,
                    }}
                    aria-hidden
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[2px] w-full shrink-0 bg-[#292441]/40 md:hidden" />

        <div
          className="hidden w-[6px] shrink-0 rounded-full bg-[#292441] md:block"
          aria-hidden
        />

        <div className="flex-1">
          <h3 className="font-heading text-3xl uppercase text-[#292441] md:text-4xl">
            Soft skills
          </h3>
          <div className="mt-8 space-y-8">
            {softSkills.map((skill, index) => (
              <div key={skill.title}>
                <p className="font-heading text-2xl uppercase text-[#292441] md:text-3xl">
                  {skill.title}
                </p>
                <p className="mt-1 text-base text-[#292441]/85">{skill.description}</p>
                <div className="relative mt-3 h-3 w-full overflow-hidden rounded-full bg-[#292441]">
                  <div
                    className="h-full rounded-full bg-[#CA5521] transition-[width] duration-1000 ease-out"
                    style={{
                      width: hasAnimatedSkills ? `${skill.value}%` : "0%",
                      transitionDelay: `${(index + technicalSkills.length) * 140}ms`,
                    }}
                    aria-hidden
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
