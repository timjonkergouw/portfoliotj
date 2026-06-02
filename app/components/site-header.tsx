import Image from "next/image";
import Link from "next/link";

const navLinkClass =
  "relative pb-1 transition after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#292441] after:transition-transform after:duration-300 hover:after:scale-x-100";

export default function SiteHeader() {
  return (
    <header className="grid grid-cols-[1fr_auto_1fr] items-center gap-1.5 pb-4 sm:gap-2 sm:pb-5 md:gap-3 md:pb-6">
      <nav className="font-heading flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] uppercase tracking-[0.08em] sm:text-xs md:gap-5 md:text-xl">
        <Link href="/about" className={navLinkClass}>
          over mij
        </Link>
        <Link href="/#projects" className={navLinkClass}>
          projecten
        </Link>
        <Link href="/#contact" className={navLinkClass}>
          contact
        </Link>
      </nav>

      <Link
        href="/"
        aria-label="Ga naar homepagina"
        className="relative mx-auto block h-[42px] w-[112px] sm:h-[48px] sm:w-[128px] md:h-[68px] md:w-[210px]"
      >
        <Image
          src="/tj logo.png"
          alt="TJ logo"
          fill
          sizes="(min-width: 768px) 210px, 128px"
          className="object-contain"
          priority
        />
      </Link>

      <div className="flex items-center justify-end gap-1.5 sm:gap-2 md:gap-3">
        <Link href="#" aria-label="LinkedIn" className="transition hover:opacity-70">
          <Image
            src="/linkedin.png"
            alt="LinkedIn"
            width={36}
            height={36}
            className="h-6 w-6 object-contain sm:h-7 sm:w-7 md:h-9 md:w-9"
          />
        </Link>
        <Link href="#" aria-label="Instagram" className="transition hover:opacity-70">
          <Image
            src="/instagram.png"
            alt="Instagram"
            width={36}
            height={36}
            className="h-6 w-6 object-contain sm:h-7 sm:w-7 md:h-9 md:w-9"
          />
        </Link>
      </div>
    </header>
  );
}
