import { notFound } from "next/navigation";
import { PortfolioExperience } from "../../components/PortfolioExperience";
import { getProject, projects } from "../../lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return <PortfolioExperience initialProject={project} />;
}
