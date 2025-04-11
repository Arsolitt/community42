'use client';

import Link from 'next/link';
import { useMemo } from 'react';

import type { Service } from '@/shared/assets/services';

import { classNames } from '@/features/helpers/className';
import { useFilteredProjects } from '@/features/hooks/useFilteredProjects';
import { projects as allProjects } from '@/shared/assets/projects';
import { services as allServices } from '@/shared/assets/services';
import { ImageSet } from '@/shared/ui/ImageSet/ImageSet';
import { RouterLink } from '@/shared/ui/RouterLink';
import { Typography } from '@/shared/ui/Typography';

import cls from './ServicesList.module.scss';

interface ServicesListProps {
  className?: string;
}

const ServiceItem = ({ service }: { service: Service }) => {
  const filteredProjects = useFilteredProjects('', service.tags, allProjects);

  const projectImages = useMemo(() => {
    return filteredProjects.map((project) => project.image).slice(0, 4);
  }, [filteredProjects]);

  const imagesToShow = projectImages.length > 0 ? projectImages : service.images;

  return (
    <div key={service.slug} className={cls.item}>
      <Link href={`/search?tags=${service.tags.join('%2C')}`}>
        <ImageSet className={cls.item__image} height={154} images={imagesToShow} width={280} />
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
