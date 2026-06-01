import Image from "next/image";
import Link from "next/link";

const navLinkClass =
  "relative pb-1 transition after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#292441] after:transition-transform after:duration-300 hover:after:scale-x-100";

export default function SiteHeader() {
  return (
    <header className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 pb-6 md:gap-4">
      <nav className="font-heading flex items-center gap-2 text-sm uppercase tracking-[0.08em] md:gap-6 md:text-2xl">
        <Link href="/about" className={navLinkClass}>
          about
        </Link>
        <Link href="/#projects" className={navLinkClass}>
          projects
        </Link>
        <Link href="/#contact" className={navLinkClass}>
          contact
        </Link>
      </nav>

      <Link
        href="/"
        aria-label="Ga naar homepagina"
        className="relative mx-auto block h-[52px] w-[140px] md:h-[88px] md:w-[270px]"
      >
        <Image
          src="/tj logo.png"
          alt="TJ logo"
          fill
          sizes="(min-width: 768px) 270px, 140px"
          className="object-contain"
          priority
        />
      </Link>

      <div className="flex items-center justify-end gap-2 md:gap-4">
        <Link href="#" aria-label="LinkedIn" className="transition hover:opacity-70">
          <Image
            src="/linkedin.png"
            alt="LinkedIn"
            width={36}
            height={36}
            className="h-8 w-8 object-contain md:h-11 md:w-11"
          />
        </Link>
        <Link href="#" aria-label="Instagram" className="transition hover:opacity-70">
          <Image
            src="/instagram.png"
            alt="Instagram"
            width={36}
            height={36}
            className="h-8 w-8 object-contain md:h-11 md:w-11"
          />
        </Link>
      </div>
    </header>
  );
}
