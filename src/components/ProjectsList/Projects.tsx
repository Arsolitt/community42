import Image from 'next/image';
import Link from 'next/link';

import type { Project } from '@/data/projects';

import { Typography } from '@/components/Typography';
import { PROJECTS_PATH } from '@/core/config/paths';
import { projectLikes } from '@/data/projects';
import { classNames } from '@/features/helpers/className';
import { LikeIcon } from '@/shared/assets/icons';

import cls from './Projects.module.css';

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
          <Link href={`${PROJECTS_PATH}/${p.slug}`} className={cls.projectImage}>
            <Image alt='image' height={251} src={p.image} width={444} />
          </Link>
          <div className={cls.projectInfo}>
            <Typography style={{ fontWeight: '600', fontSize: '18px' }} variant='h4'>
              <Link href={`${PROJECTS_PATH}/${p.slug}`} className={cls.projectName}>
                {p.name}
              </Link>
            </Typography>

            <div className={cls.likes}>
              <LikeIcon />
              <Typography style={{ fontWeight: '500', fontSize: '12px' }} variant='span'>
                {projectLikes(p.slug)}
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
