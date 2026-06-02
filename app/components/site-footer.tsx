import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const aboutLinks = [
  { label: "Foto collage", href: "/about#foto-collage" },
  { label: "Over mij", href: "/about#over-mij" },
  { label: "Diensten", href: "/about#diensten" },
  { label: "School", href: "/about#school" },
  { label: "Vaardigheden", href: "/about#vaardigheden" },
] as const;

const projectLinks = [
  { label: "Fioresque", href: "/projects/fioresque" },
  { label: "Dartclub", href: "/projects/dartclub" },
  { label: "Quality Lodgings", href: "/projects/quality-lodgings" },
  { label: "Rosh", href: "/projects/rosh" },
  { label: "VARA", href: "/projects/vara" },
] as const;

const contactLinks = [
  {
    label: "timjonkergouw@home.nl",
    href: "mailto:timjonkergouw@home.nl",
  },
  {
    label: "530960@student.fontys.nl",
    href: "mailto:530960@student.fontys.nl",
  },
  {
    label: "+31 6 22 35 05 86",
    href: "tel:+31622350586",
  },
] as const;

const footerLinkClass =
  "inline-flex items-center py-0.5 text-[11px] font-bold leading-tight text-[#E9E7DA]/85 transition hover:text-[#CA5521] sm:text-xs";

const contactLinkClass = `${footerLinkClass} max-w-full break-all sm:break-normal`;

type FooterColumnProps = {
  title: string;
  children: ReactNode;
};

function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div className="flex min-w-0 flex-col gap-1">
      <h2 className="font-heading text-base leading-none tracking-[0.08em] text-[#E9E7DA] sm:text-lg">
        {title}
      </h2>
      <ul className="flex flex-col">{children}</ul>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative mt-auto overflow-hidden rounded-t-[32px] bg-linear-to-b from-[#020118] to-[#292541] px-4 py-6 sm:rounded-t-[40px] sm:px-6 sm:py-7 md:px-10 md:py-8"
    >
      <p className="font-heading pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(1.75rem,8vw,3.25rem)] uppercase tracking-[0.08em] text-[#E9E7DA]/20 sm:block">
        Tim Jonkergouw
      </p>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-[minmax(0,160px)_repeat(3,minmax(0,1fr))] md:items-center md:gap-5 lg:gap-6">
          <Link
            href="/"
            aria-label="Ga naar homepagina"
            className="relative mx-auto block h-[56px] w-[132px] shrink-0 self-center transition hover:opacity-85 md:mx-0 md:h-[64px] md:w-[152px]"
          >
            <Image
              src="/tj logo beige.png"
              alt="TJ logo"
              fill
              sizes="(min-width: 768px) 152px, 132px"
              className="object-contain object-center md:object-left"
            />
          </Link>

          <div className="grid grid-cols-2 gap-x-4 gap-y-4 min-[420px]:gap-x-6 md:contents">
            <FooterColumn title="Over mij">
              {aboutLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </FooterColumn>

            <FooterColumn title="Projecten">
              {projectLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </FooterColumn>

            <div className="col-span-2 min-w-0 md:col-span-1">
              <FooterColumn title="Contact">
                {contactLinks.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className={contactLinkClass}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </FooterColumn>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
