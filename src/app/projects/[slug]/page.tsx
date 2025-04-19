import { notFound } from 'next/navigation';

import { ProjectPageLayout } from '@/components/ProjectPageLayout/ProjectPageLayout';
import { projects } from '@/shared/assets/projects';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

const Project = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <>
      <ProjectPageLayout project={project}>
      </ProjectPageLayout>
    </>
  );
};

export default Project;
