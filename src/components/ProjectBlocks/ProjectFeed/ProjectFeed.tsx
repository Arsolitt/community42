import Image from 'next/image';
import Link from 'next/link';

import type { Project } from '@/shared/assets/projects';

import { PROJECTS_PATH } from '@/core/config/paths';
import { classNames } from '@/features/helpers/className';
import { projects as allProjects } from '@/shared/assets/projects';

import cls from './ProjectFeed.module.css';

const GROUP_1_SLUGS = new Set(['logotypes', 'branding', 'aydentika', 'ux-ui', 'vektornaya-graphika']);
const GROUP_2_SLUGS = new Set(['photo', 'fotosessii', 'video', 'reklamnaya-retush', 'motion', '3D']);

const getProjectGroup = (project: Project): 'group1' | 'group2' | 'none' => {
  const highestPriorityTag = project.tags.reduce((highest, current) => {
    return current.priority > highest.priority ? current : highest;
  }, project.tags[0]);

  if (GROUP_1_SLUGS.has(highestPriorityTag.slug)) {
    return 'group1';
  }
  if (GROUP_2_SLUGS.has(highestPriorityTag.slug)) {
    return 'group2';
  }

  return 'none';
};

interface ProjectFeedProps {
  className?: string;
  sourceProject: Project;
}

export const ProjectFeed = ({ className, sourceProject }: ProjectFeedProps) => {
  const sourceGroup = getProjectGroup(sourceProject);

  const relevantProjects = allProjects.filter((project) => {
    if (project.slug === sourceProject.slug) {
      return false;
    }
    const projectGroup = getProjectGroup(project);
    return sourceGroup === 'none' ? true : projectGroup === sourceGroup;
  });

  const sortedProjects = [...relevantProjects].sort((a, b) => {
    const [dayA, monthA, yearA] = a.date.split('.').map(Number);
    const [dayB, monthB, yearB] = b.date.split('.').map(Number);
    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);
    return dateB.getTime() - dateA.getTime();
  });

  const displayedProjects = sortedProjects.slice(0, 4);

  if (displayedProjects.length === 0) {
    return null;
  }

  return (
    <div className={classNames(cls.projectFeed, {}, [className])}>
      {displayedProjects.map((project) => (
        <Link href={`${PROJECTS_PATH}/${project.slug}`} key={project.slug} className={cls.projectItem}>
          <Image
            fill
            alt={project.name}
            className={cls.image}
            quality={90}
            sizes='(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw'
            src={project.image}
          />
        </Link>
      ))}
    </div>
  );
};
