import Image from 'next/image';

import type { Project } from '@/shared/assets/projects';

import { classNames } from '@/features/helpers/className';
import { LikeIcon } from '@/shared/assets/icons';
// import { projects } from '@/shared/assets/projects';
import { Typography } from '@/shared/ui/Typography';

import cls from './Projects.module.scss';

interface ProjectsProps {
  // collaboratorSlug?: string;
  className?: string;
  projects: Project[];
}

export const Projects = (props: ProjectsProps) => {
  const { projects, className } = props;

  return (
    <section className={classNames(cls.Projects, {}, [className])}>
      {projects.map((p) => (
        <div key={p.id} className={cls.project}>
          <Image alt='image' height={251} src={p.image} width={444} />
          <div className={cls.projectInfo}>
            <Typography style={{ fontWeight: '600', fontSize: '18px' }} variant='h4'>
              {p.name}
            </Typography>

            <div className={cls.likes}>
              <LikeIcon />
              <Typography style={{ fontWeight: '500', fontSize: '12px' }} variant='span'>
                {p.likes}
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
