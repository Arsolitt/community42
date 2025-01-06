import type { Tag } from '@/shared/assets/tags';

export interface Service {
  id: string;
  text: string;
  link: string;
  isNew?: boolean;
  tags: Tag['id'][];
  images: string[];
}

export const services: Service[] = [
  {
    id: '1',
    text: 'UX/UI дизайн',
    link: '/services/ux-ui-desing',
    tags: ['0'],
    images: [
      '/images/services/ux-ui-design-1.png',
      '/images/services/ux-ui-design-2.png',
      '/images/services/ux-ui-design-3.png',
      '/images/services/ux-ui-design-4.png'
    ]
  },
  {
    id: '2',
    text: 'Графический дизайн',
    link: '/services/graphical-design',
    tags: ['1', '2'],
    images: [
      '/images/services/graphical-design.png',
      '/images/services/ux-ui-design-2.png',
      '/images/services/ux-ui-design-3.png',
      '/images/services/ux-ui-design-4.png'
    ]
  },
  {
    id: '3',
    text: 'Брендинг и айдентика',
    link: '/services/branding-and-identity',
    tags: ['3', '4'],
    images: [
      '/images/services/graphical-design.png',
      '/images/services/ux-ui-design-2.png',
      '/images/services/ux-ui-design-3.png',
      '/images/services/ux-ui-design-4.png'
    ]
  },
  {
    id: '4',
    text: 'Промышленный дизайн',
    link: '/services/industrial-design.png',
    tags: [],
    images: [
      '/images/services/graphical-design.png',
      '/images/services/ux-ui-design-2.png',
      '/images/services/ux-ui-design-3.png',
      '/images/services/ux-ui-design-4.png'
    ]
  },
  {
    id: '5',
    text: 'Motion и 3D',
    link: '/services/motion',
    tags: ['5', '6'],
    images: [
      '/images/services/motion.png',
      '/images/services/ux-ui-design-2.png',
      '/images/services/ux-ui-design-3.png',
      '/images/services/ux-ui-design-4.png'
    ]
  },
  {
    id: '6',
    text: 'Фотосессии и ретушь',
    link: '/services/photoshoots',
    tags: ['8', '9', '10'],
    images: [
      '/images/services/photoshoots.png',
      '/images/services/ux-ui-design-2.png',
      '/images/services/ux-ui-design-3.png',
      '/images/services/ux-ui-design-4.png'
    ]
  },
  {
    id: '7',
    text: 'Видео-продакшн',
    link: '/services/video-production',
    tags: ['7'],
    images: [
      '/images/services/ux-ui-design-1.png',
      '/images/services/ux-ui-design-2.png',
      '/images/services/ux-ui-design-3.png',
      '/images/services/ux-ui-design-4.png'
    ]
  },
  {
    id: '8',
    text: 'Выпускные альбомы',
    link: '/services/albums',
    isNew: true,
    tags: [],
    images: [
      '/images/services/albums.png',
      '/images/services/ux-ui-design-2.png',
      '/images/services/ux-ui-design-3.png',
      '/images/services/ux-ui-design-4.png'
    ]
  }
];
