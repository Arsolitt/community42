import type { Tag } from '@/shared/assets/tags';
import type { Member } from '@/shared/assets/team';

interface ProjectElement {
  collaborators: Member['slug'][];
  image: string;
  likes: number;
  link: string;
  name: string;
  slug: string;
  tags: ProjectTag[];
}

export type Project = typeof projects[number];

type ProjectTag = Tag & {
  priority: number;
};

const PROJECTS_PATH = '/projects';

export const projects = [
  {
    name: 'Логотип магазина монобукетов Modo',
    slug: 'logotip-magazina-monobuketov-modo',
    likes: 10,
    image: '/images/projects/logotip-magazina-monobuketov-modo.png',
    link: `${PROJECTS_PATH}/logotip-magazina-monobuketov-modo`,
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        slug: 'logotypes',
        text: 'Логотипы',
        priority: 3
      },
      {
        slug: 'photo',
        text: 'Фото',
        priority: 2
      },
      {
        slug: 'flowers',
        text: 'Цветы',
        priority: 1
      }
    ]
  },
  {
    name: 'Project 2',
    slug: 'project-2',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: `${PROJECTS_PATH}/project-2`,
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        slug: 'vektornaya-graphika',
        text: 'Векторная графика',
        priority: 1
      }
    ]
  },
  {
    name: 'Project 3',
    slug: 'project-3',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: `${PROJECTS_PATH}/project-3`,
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        slug: 'logotypes',
        text: 'Логотипы',
        priority: 1
      }
    ]
  },
  {
    name: 'Project 4',
    slug: 'project-4',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: `${PROJECTS_PATH}/project-4`,
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        slug: 'branding',
        text: 'Брендинг',
        priority: 1
      }
    ]
  },
  {
    name: 'Project 5',
    slug: 'project-5',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: `${PROJECTS_PATH}/project-5`,
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        slug: 'aydentika',
        text: 'Айдентика',
        priority: 1
      }
    ]
  },
  {
    name: 'Project 6',
    slug: 'project-6',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: `${PROJECTS_PATH}/project-6`,
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        slug: 'motion',
        text: 'Motion',
        priority: 1
      }
    ]
  },
  {
    name: 'Project 7',
    slug: 'project-7',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: `${PROJECTS_PATH}/project-7`,
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        slug: '3D',
        text: '3D',
        priority: 1
      }
    ]
  },
  {
    name: 'Графическая выставка в Севастополе',
    slug: 'project-8',
    likes: 15,
    image: '/images/last-project.png',
    link: '/project-1',
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        slug: '3D',
        text: '3D',
        priority: 1
      },
      {
        slug: 'motion',
        text: 'Motion',
        priority: 1
      },
      {
        slug: 'photo',
        text: 'Фото',
        priority: 2
      }
    ]
  }
] as const satisfies readonly ProjectElement[];
