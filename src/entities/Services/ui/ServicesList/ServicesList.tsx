'use client';

import Link from 'next/link';
import { useMemo } from 'react';

import type { Project, ProjectTag } from '@/shared/assets/projects';
import type { Service } from '@/shared/assets/services';

import { ImageSet } from '@/components/ImageSet/ImageSet';
import { RouterLink } from '@/components/RouterLink';
import { Typography } from '@/components/Typography';
import { classNames } from '@/features/helpers/className';
import { useFilteredProjects } from '@/features/hooks/useFilteredProjects';
import { projects as allProjects } from '@/shared/assets/projects';
import { services as allServices } from '@/shared/assets/services';

import cls from './ServicesList.module.scss';

interface ServicesListProps {
  className?: string;
}

const ServiceItem = ({ service }: { service: Service }) => {
  const findHighestPriorityTag = (project: Project): ProjectTag | undefined => {
    if (!project.tags) {
      return undefined;
    }
    return project.tags.reduce((highest, current) => {
      return current.priority > highest.priority ? current : highest;
    }, project.tags[0]);
  };

  const projectsWithHighestTagOnly = useMemo(() => {
    return allProjects.map((project) => {
      const highestTag = findHighestPriorityTag(project);
      return {
        ...project,
        tags: highestTag ? [highestTag] : []
      };
    });
  }, []);

  const filteredProjects = useFilteredProjects('', service.tags, projectsWithHighestTagOnly as unknown as Project[]);

  const projectImages = useMemo(() => {
    return filteredProjects.map((project) => project.image).slice(0, 4);
  }, [filteredProjects]);

  const imagesToShow = (projectImages.length > 0 && service.tags.length > 0) ? projectImages : service.images;

  return (
    <div key={service.slug} className={cls.item}>
      <Link href={`/search?tags=${service.tags.join('%2C')}`} className={cls.item__image}>
        <ImageSet images={imagesToShow} />
      </Link>
      {service.isNew && <div className={cls.item__new}>Новое</div>}
      <Link href={`/search?tags=${service.tags.join('%2C')}`}>
        <div className={cls.itemDescription}>
          <Typography style={{ fontWeight: '600', lineHeight: '120%' }} variant='p'>
            {service.text}
          </Typography>
          <RouterLink />
        </div>
      </Link>
    </div>
  );
};

export const ServicesList = ({ className }: ServicesListProps) => {
  return (
    <div className={classNames(cls.ServicesList, {}, [className])} id='services' style={{ scrollMarginTop: '30px' }}>
      {allServices.map((s) => (
        <ServiceItem key={s.slug} service={s} />
      ))}
    </div>
  );
};
