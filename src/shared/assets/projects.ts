export interface Project {
  id: number;
  name: string;
  likes: number;
  image: string;
  link: string;
  collaborators: string[];
  tags: Tag[];
}

interface Tag {
  id: number;
  name: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Project 1',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: '/project-1',
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        id: 1,
        name: 'Графический дизайн'
      },
      {
        id: 2,
        name: 'Геймдизайн'
      }
    ]
  },
  {
    id: 2,
    name: 'Project 2',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: '/project-1',
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        id: 1,
        name: 'Графический дизайн'
      },
      {
        id: 2,
        name: 'Геймдизайн'
      }
    ]
  },
  {
    id: 3,
    name: 'Project 3',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: '/project-1',
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        id: 1,
        name: 'Графический дизайн'
      },
      {
        id: 2,
        name: 'Геймдизайн'
      }
    ]
  },
  {
    id: 4,
    name: 'Project 4',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: '/project-1',
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        id: 1,
        name: 'Графический дизайн'
      },
      {
        id: 2,
        name: 'Геймдизайн'
      }
    ]
  },
  {
    id: 5,
    name: 'Project 5',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: '/project-1',
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        id: 1,
        name: 'Графический дизайн'
      },
      {
        id: 2,
        name: 'Геймдизайн'
      }
    ]
  },
  {
    id: 6,
    name: 'Project 6',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: '/project-1',
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        id: 1,
        name: 'Графический дизайн'
      },
      {
        id: 2,
        name: 'Геймдизайн'
      }
    ]
  },
  {
    id: 7,
    name: 'Project 7',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: '/project-1',
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        id: 1,
        name: 'Графический дизайн'
      },
      {
        id: 2,
        name: 'Геймдизайн'
      }
    ]
  }
];
