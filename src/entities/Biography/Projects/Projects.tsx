import Image from 'next/image';
import Link from 'next/link';

import type { Project } from '@/shared/assets/projects';

import { classNames } from '@/features/helpers/className';
import { LikeIcon } from '@/shared/assets/icons';
import { Typography } from '@/shared/ui/Typography';

import cls from './Projects.module.scss';

interface ProjectsProps {
  className?: string;
  projects: readonly Project[];
}

export const Projects = (props: ProjectsProps) => {
  const { projects, className } = props;

  return (
    <section className={classNames(cls.Projects, {}, [className])}>
      {projects.map((p) => (
        <div key={p.slug} className={cls.project}>
          <Link href={p.link}>
            <Image alt='image' height={251} src={p.image} width={444} />
          </Link>
          <div className={cls.projectInfo}>
            <Typography style={{ fontWeight: '600', fontSize: '18px' }} variant='h4'>
              <Link href={p.link}>
                {p.name}
              </Link>
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
