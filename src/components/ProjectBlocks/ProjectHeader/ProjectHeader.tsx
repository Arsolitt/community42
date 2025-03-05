import type { Project } from '@/shared/assets/projects';

import { classNames } from '@/features/helpers/className';
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs';
import { Typography } from '@/shared/ui/Typography';

import { ProjectTags } from './ProjectTags';

import cls from './ProjectHeader.module.scss';

interface ProjectHeaderProps {
  className?: string;
  project: Project;
}

export const ProjectHeader = ({ project, className }: ProjectHeaderProps) => {
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
    <div className={classNames(cls.header, {}, [className])}>
      <div className={cls.headerNavigation}>
        <ProjectTags tags={project.tags} />
        <Breadcrumbs links={links} />
      </div>
      <Typography className={cls.headerTitle} variant='h1'>{project?.name}</Typography>
    </div>
  );
};
