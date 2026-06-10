import Image from "next/image";
import type { StylescapeConfig } from "@/app/projects/project-data";

type StylescapeViewerProps = {
  stylescape: StylescapeConfig;
};

export default function StylescapeViewer({ stylescape }: StylescapeViewerProps) {
  return (
    <div className="mt-8">
      <div className="relative aspect-[5393/982] w-full overflow-hidden border-4 border-[#292441] bg-white">
        <Image
          src={stylescape.src}
          alt={stylescape.alt}
          fill
          sizes="(min-width: 1024px) 1200px, 100vw"
          className="object-contain"
          draggable={false}
        />
      </div>
    </div>
  );
}
