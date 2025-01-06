import type { Tag } from '@/shared/assets/tags';
import type { Member } from '@/shared/assets/team';

export interface Project {
  id: string;
  name: string;
  likes: number;
  image: string;
  link: string;
  collaborators: Member['slug'][];
  tags: ProjectTag[];
}

interface ProjectTag {
  id: Tag['slug'];
  priority: number;
}

export const projects: Project[] = [
  {
    id: '0',
    name: 'Project 1',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: '/project-1',
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        id: 'ux-ui',
        priority: 1
      }
    ]
  },
  {
    id: '1',
    name: 'Project 2',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: '/project-1',
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        id: '1',
        priority: 1
      }
    ]
  },
  {
    id: '2',
    name: 'Project 3',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: '/project-1',
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        id: 'logotypes',
        priority: 1
      }
    ]
  },
  {
    id: '3',
    name: 'Project 4',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: '/project-1',
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        id: 'branding',
        priority: 1
      }
    ]
  },
  {
    id: '4',
    name: 'Project 5',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: '/project-1',
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        id: 'aydentika',
        priority: 1
      }
    ]
  },
  {
    id: '5',
    name: 'Project 6',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: '/project-1',
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        id: 'motion',
        priority: 1
      }
    ]
  },
  {
    id: '6',
    name: 'Project 7',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: '/project-1',
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        id: '3D',
        priority: 1
      }
    ]
  }
];
