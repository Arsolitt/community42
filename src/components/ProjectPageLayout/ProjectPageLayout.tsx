import React from 'react';

import type { Project } from '@storage/projects';

import styles from './ProjectPageLayout.module.css';

import { ProjectFeed } from '@/components/ProjectBlocks/ProjectFeed';
import { ProjectFeedback } from '@/components/ProjectBlocks/ProjectFeedback';
import { ProjectHeader } from '@/components/ProjectBlocks/ProjectHeader';
import { ProjectTeam } from '@/components/ProjectBlocks/ProjectTeam';
import { projectLikes } from '@storage/projects';

import { ImgLarge } from '../ProjectBlocks/ImgLarge';

interface ProjectPageLayoutProps {
  children?: React.ReactNode;
  project: Project;
}

export const ProjectPageLayout: React.FC<ProjectPageLayoutProps> = ({ project, children }) => {
  return (
    <div className={styles.wrapper}>
      <ProjectHeader project={project} />
      <ImgLarge alt={project.name} src={project.image} />
      {children}
      <ProjectTeam collaborators={project.collaborators} />
      <ProjectFeedback
        likes={projectLikes(project.slug)}
        creationDate={project.date}
        creationTimeText={project.creationTimeText}
      />
      <ProjectFeed sourceProject={project} />
    </div>
  );
};
