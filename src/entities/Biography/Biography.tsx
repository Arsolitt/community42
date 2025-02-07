'use client';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';

import type { Member } from '@/shared/assets/team';

import { classNames } from '@/features/helpers/className';
import { projects } from '@/shared/assets/projects';
import { team } from '@/shared/assets/team';

import { BiographyLeftBlock, BiographyRightBlock } from './Blocks';
import { Projects } from './Projects';

import cls from './Biography.module.scss';

interface BiographyProps {
  className?: string;
}

export const Biography = ({ className }: BiographyProps) => {
  const collaboratorSlug = useParams().slug.toString() as Member['slug'];
  const collaborator = useMemo(() => team.find((t) => t.slug === collaboratorSlug), [collaboratorSlug]);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const collabors = p.collaborators as Member['slug'][];
      return collabors.includes(collaboratorSlug);
    });
  }, [collaboratorSlug]);

  const finalProjects = collaboratorSlug ? filteredProjects : projects;

  return (
    <section className={classNames(cls.Biography, {}, [className])}>
      <div className='container'>
        <BiographyLeftBlock collaborator={collaborator} />
        <BiographyRightBlock fullSizeImage={collaborator?.fullsizeImage} name={collaborator?.name} />
      </div>
      <Projects projects={finalProjects} />
    </section>
  );
};
