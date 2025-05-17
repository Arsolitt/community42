'use client';
import { useMemo } from 'react';

import type { TeamMember } from '@/data/team';

import { projectsByTeamMember } from '@/data/projects/utils';
import { classNames } from '@/features/helpers/className';

import { Projects } from '../ProjectsList';
import { BiographyLeftBlock } from './LeftBlock';
import { BiographyRightBlock } from './RightBlock';

import cls from './Biography.module.css';

interface BiographyProps {
  className?: string;
  member: TeamMember;
}

export const Biography = ({ className, member }: BiographyProps) => {
  const filteredProjects = useMemo(() => {
    return projectsByTeamMember(member);
  }, [member.slug]);

  return (
    <section className={classNames(cls.Biography, {}, [className, 'pb-48'])}>
      <div className='container'>
        <BiographyLeftBlock collaborator={member} />
        <BiographyRightBlock fullSizeImage={member.fullsizeImage} name={member.name} />
      </div>
      <Projects projects={filteredProjects} />
    </section>
  );
};
