import { notFound } from 'next/navigation';
import console from 'node:console';
import fs from 'node:fs';
import path from 'node:path';

import type { ProjectSlug } from '@/data/projects/data';

import { ProjectPageLayout } from '@/components/ProjectPageLayout/ProjectPageLayout';
import { projectBySlug } from '@/data/projects';
import { projects as allProjects } from '@/shared/assets/projects';

export async function generateStaticParams() {
  const projectsDirPath = path.join(process.cwd(), 'src', 'app', 'projects');
  let staticDirNames: string[] = [];

  try {
    const dirents = fs.readdirSync(projectsDirPath, { withFileTypes: true });
    staticDirNames = dirents
      .filter((dirent) => dirent.isDirectory() && dirent.name !== '[slug]')
      .map((dirent) => dirent.name);
  } catch (error) {
    console.error('Could not read static project directories:', error);
    return allProjects.map((project) => ({
      slug: project.slug
    }));
  }

  const dynamicProjects = allProjects.filter((project) => !staticDirNames.includes(project.slug));

  return dynamicProjects.map((project) => ({
    slug: project.slug
  }));
}

const Project = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = projectBySlug(slug as ProjectSlug);

  if (!project) {
    return notFound();
  }

  return (
    <ProjectPageLayout project={project}></ProjectPageLayout>
  );
};

export default Project;
