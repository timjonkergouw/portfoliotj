import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const projects = {
  fioresque: {
    title: "Fioresque",
    image: "/fioresque oud.png",
  },
  dartclub: {
    title: "Dartclub",
    image: "/dartcub oud.png",
  },
  "quality-lodgings": {
    title: "Quality Lodgings",
    image: "/ql oud.png",
  },
  rosh: {
    title: "ROSH",
    image: "/rosh oud.png",
  },
  vara: {
    title: "VARA",
    image: "/vara oud.png",
  },
} as const;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0E0C24] px-6 py-10 text-[#E9E7DA] md:px-12">
      <div className="mx-auto max-w-[1100px]">
        <Link
          href="/"
          className="font-heading inline-block rounded-md bg-[#CA5521] px-4 py-2 text-sm uppercase tracking-[0.08em]"
        >
          Back
        </Link>

        <h1 className="font-heading mt-8 text-5xl uppercase md:text-7xl">
          {project.title}
        </h1>

        <div className="relative mt-8 h-[340px] overflow-hidden md:h-[520px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 1100px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </main>
  );
}
