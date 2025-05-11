'use client';
import { useMemo } from 'react';

import type { ProjectCollaborator } from '@/shared/assets/projects';
import type { Member } from '@/shared/assets/team';

import { classNames } from '@/features/helpers/className';
import { projects } from '@/shared/assets/projects';

import { BiographyLeftBlock, BiographyRightBlock } from './Blocks';
import { Projects } from './Projects';

import cls from './Biography.module.scss';

interface BiographyProps {
  className?: string;
  member: Member;
}

export const Biography = ({ className, member }: BiographyProps) => {
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const collabors = p.collaborators as ProjectCollaborator[];
      return collabors.some((c) => c.slug === member.slug);
    });
  }, [member.slug]);

  const finalProjects = member.slug ? filteredProjects : projects;

  return (
    <section className={classNames(cls.Biography, {}, [className, 'pb-48'])}>
      <div className='container'>
        <BiographyLeftBlock collaborator={member} />
        <BiographyRightBlock fullSizeImage={member.fullsizeImage} name={member.name} />
      </div>
      <Projects projects={finalProjects} />
    </section>
  );
};
