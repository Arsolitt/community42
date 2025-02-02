import type { Tag } from '@/shared/assets/tags';
import type { Member } from '@/shared/assets/team';

export interface Project {
  collaborators: Member['slug'][];
  id: string;
  image: string;
  likes: number;
  link: string;
  name: string;
  slug: string;
  tags: ProjectTag[];
}

interface ProjectTag {
  priority: number;
  slug: Tag['slug'];
}

export const projects: Project[] = [
  {
    id: '0',
    name: 'Project 1',
    slug: 'project-1',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: '/project-1',
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        slug: 'ux-ui',
        priority: 1
      }
    ]
  },
  {
    id: '1',
    name: 'Project 2',
    slug: 'project-2',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: '/project-1',
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        slug: '1',
        priority: 1
      }
    ]
  },
  {
    id: '2',
    name: 'Project 3',
    slug: 'project-3',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: '/project-1',
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        slug: 'logotypes',
        priority: 1
      }
    ]
  },
  {
    id: '3',
    name: 'Project 4',
    slug: 'project-4',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: '/project-1',
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        slug: 'branding',
        priority: 1
      }
    ]
  },
  {
    id: '4',
    name: 'Project 5',
    slug: 'project-5',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: '/project-1',
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        slug: 'aydentika',
        priority: 1
      }
    ]
  },
  {
    id: '5',
    name: 'Project 6',
    slug: 'project-6',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: '/project-1',
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        slug: 'motion',
        priority: 1
      }
    ]
  },
  {
    id: '6',
    name: 'Project 7',
    slug: 'project-7',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: '/project-1',
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        slug: '3D',
        priority: 1
      }
    ]
  },
  {
    id: '7',
    name: 'Графическая выставка в Севастополе',
    slug: 'project-8',
    likes: 15,
    image: '/images/last-project.png',
    link: '/project-1',
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        slug: '3D',
        priority: 1
      }
    ]
  }
];
