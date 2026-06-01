import { notFound } from "next/navigation";
import ProjectPageLayout from "@/app/components/project-page-layout";
import { getProject, projectSlugs } from "@/app/projects/project-data";

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return <ProjectPageLayout project={project} />;
}
