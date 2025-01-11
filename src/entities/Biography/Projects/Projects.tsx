import Image from 'next/image';
import { useMemo } from 'react';

import { classNames } from '@/features/helpers/className';
import { LikeIcon } from '@/shared/assets/icons';
import { projects } from '@/shared/assets/projects';
import { Typography } from '@/shared/ui/Typography';

import cls from './Projects.module.scss';

interface ProjectsProps {
  className?: string;
  collaboratorSlug?: string;
}

export const Projects = (props: ProjectsProps) => {
  const { collaboratorSlug, className } = props;

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => p.collaborators.includes(collaboratorSlug));
  }, [collaboratorSlug]);

  const finalProjects = collaboratorSlug ? filteredProjects : projects;

  return (
    <section className={classNames(cls.Projects, {}, [className])}>
      {finalProjects.map((p) => (
        <div key={p.id} className={cls.project}>
          <Image
            alt='image'
            height={251}
            src={p.image}
            width={444}
            layout='responsive'
          />
          <div className={cls.projectInfo}>
            <Typography
              style={{ fontWeight: '600', fontSize: '18px' }}
              variant='h4'
            >
              {p.name}
            </Typography>

            <div className={cls.likes}>
              <LikeIcon />
              <Typography
                style={{ fontWeight: '500', fontSize: '12px' }}
                variant='span'
              >
                {p.likes}
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
