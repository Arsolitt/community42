import Image from 'next/image';
import Link from 'next/link';

import type { Project } from '@/shared/assets/projects';

import { classNames } from '@/features/helpers/className';
import { projects as allProjects } from '@/shared/assets/projects';

import cls from './ProjectFeed.module.scss';

// Определяем группы тегов по их slug
const GROUP_1_SLUGS = new Set(['logotypes', 'branding', 'aydentika', 'ux-ui', 'vektornaya-graphika']);
const GROUP_2_SLUGS = new Set(['photo', 'fotosessii', 'video', 'reklamnaya-retush', 'motion', '3D']);

// Функция для определения группы проекта
const getProjectGroup = (project: Project): 'group1' | 'group2' | 'none' => {
  if (project.tags.some((tag) => GROUP_1_SLUGS.has(tag.slug))) {
    return 'group1';
  }
  if (project.tags.some((tag) => GROUP_2_SLUGS.has(tag.slug))) {
    return 'group2';
  }
  return 'none';
};

interface ProjectFeedProps {
  className?: string;
  sourceProject: Project;
}

export const ProjectFeed = ({ className, sourceProject }: ProjectFeedProps) => {
  const sourceGroup = getProjectGroup(sourceProject);

  // Фильтруем проекты: оставляем те, что из той же группы и не являются sourceProject
  const relevantProjects = allProjects.filter((project) => {
    if (project.slug === sourceProject.slug) {
      return false; // Исключаем сам проект-источник
    }
    const projectGroup = getProjectGroup(project);
    // Если группа источника не определена, показываем все (кроме источника)
    // Иначе показываем только проекты из той же группы
    return sourceGroup === 'none' ? true : projectGroup === sourceGroup;
  });

  // Сортируем релевантные проекты по дате
  const sortedProjects = [...relevantProjects].sort((a, b) => {
    const [dayA, monthA, yearA] = a.date.split('.').map(Number);
    const [dayB, monthB, yearB] = b.date.split('.').map(Number);
    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);
    return dateB.getTime() - dateA.getTime();
  });

  // Берем первые 4
  const displayedProjects = sortedProjects.slice(0, 4);

  if (displayedProjects.length === 0) {
    return null; // Не рендерим ничего, если нет подходящих проектов
  }

  return (
    <div className={classNames(cls.projectFeed, {}, [className])}>
      {displayedProjects.map((project) => (
        <Link href={project.link} key={project.slug} className={cls.projectItem}>
          <Image
            fill
            alt={project.name}
            className={cls.image}
            quality={90}
            sizes='(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw'
            src={project.image}
          />
        </Link>
      ))}
    </div>
  );
};
