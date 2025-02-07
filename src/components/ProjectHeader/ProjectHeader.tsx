import type { Project } from '@/shared/assets/projects';

import { Breadcrumbs } from '@/shared/ui/Breadcrumbs';

import { ProjectTags } from './ProjectTags';

interface ProjectHeaderProps {
  project: Project;
}

export const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  const mainTag = project.tags.reduce((highest, current) =>
    current.priority > highest.priority ? current : highest
  );
  const links = [
    {
      text: 'Работы',
      href: '/#services'
    },
    {
      text: mainTag.text,
      href: `/search?tags=${mainTag.slug}`
    },
    {
      text: project.name,
      href: `/projects/${project.slug}`
    }
  ];
  return (
    <>
      <Breadcrumbs links={links} />
      <ProjectTags tags={project.tags} />
    </>
  );
};
