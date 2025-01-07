import Image from 'next/image';

import { classNames } from '@/features/helpers/className';
import { LikeIcon } from '@/shared/assets/icons';
import type { Project } from '@/shared/assets/projects';
// import { projects } from '@/shared/assets/projects';
import { Typography } from '@/shared/ui/Typography';

import cls from './Projects.module.scss';

interface ProjectsProps {
  projects: Project[];
  // collaboratorSlug?: string;
  className?: string;
}

export const Projects = (props: ProjectsProps) => {
  const { projects, className } = props;

  // const filteredProjects = useMemo(() => {
  //   return projects.filter((p) => p.collaborators.includes(collaboratorSlug));
  // }, [collaboratorSlug]);
  //
  // const finalProjects = collaboratorSlug ? filteredProjects : projects;

  return (
    <section className={classNames(cls.Projects, {}, [className])}>
      {projects.map((p) => (
        <div className={cls.project} key={p.id}>
          <Image src={p.image} alt='image' width={444} height={251} />
          <div className={cls.projectInfo}>
            <Typography variant='h4' style={{ fontWeight: '600', fontSize: '18px' }}>
              {p.name}
            </Typography>

            <div className={cls.likes}>
              <LikeIcon />
              <Typography variant='span' style={{ fontWeight: '500', fontSize: '12px' }}>
                {p.likes}
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
