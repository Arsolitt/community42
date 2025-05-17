import React from 'react';

import type { Project } from '@/data/projects';

import { ProjectFeed } from '@/components/ProjectBlocks/ProjectFeed';
import { ProjectFeedback } from '@/components/ProjectBlocks/ProjectFeedback';
import { ProjectHeader } from '@/components/ProjectBlocks/ProjectHeader';
import { ProjectTeam } from '@/components/ProjectBlocks/ProjectTeam';

import { ImgLarge } from '../ProjectBlocks/ImgLarge';

interface ProjectPageLayoutProps {
  children?: React.ReactNode;
  project: Project;
}

export const ProjectPageLayout: React.FC<ProjectPageLayoutProps> = ({ project, children }) => {
  return (
    <div className='max-w-[1920px] mx-auto px-11'>
      <ProjectHeader project={project} />
      <ImgLarge alt={project.name} src={project.image} />
      {children}
      <ProjectTeam collaborators={project.collaborators} />
      <ProjectFeedback
        likes={project.likes}
        creationDate={project.date}
        creationTimeText={project.creationTimeText}
      />
      <ProjectFeed sourceProject={project} />
    </div>
  );
};
