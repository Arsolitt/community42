'use client';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';

import { classNames } from '@/features/helpers/className';
import { team } from '@/shared/assets/team';

import { BiographyLeftBlock, BiographyRightBlock } from './Blocks';
import { Projects } from './Projects';

import cls from './Biography.module.scss';

interface BiographyProps {
  className?: string;
}

export const Biography = ({ className }: BiographyProps) => {
  const collaboratorSlug = useParams().slug;
  const collaborator = useMemo(
    () => team.find((t) => t.slug === collaboratorSlug),
    [collaboratorSlug]
  );

  return (
    <section className={classNames(cls.Biography, {}, [className])}>
      <div className='container'>
        <BiographyLeftBlock collaborator={collaborator} />
        <BiographyRightBlock
          fullSizeImage={collaborator?.fullsizeImage}
          name={collaborator?.name}
        />
      </div>
      <Projects collaboratorSlug={collaborator?.slug} />
    </section>
  );
};
