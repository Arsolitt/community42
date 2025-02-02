import type { Tag } from '@/shared/assets/tags';

export interface Service {
  id: string;
  images: string[];
  isNew?: boolean;
  link: string;
  tags: Tag['id'][];
  text: string;
}

export const services: Service[] = [
  {
    id: '1',
    text: 'UX/UI дизайн',
    link: '/search?tags=ux-ui',
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
    link: '/search?tags=vektornaya-graphika%2Clogotypes',
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
    link: '/search?tags=branding%2Caydentika',
    tags: ['3', '4'],
    images: [
      '/images/services/graphical-design.png',
      '/images/services/ux-ui-design-2.png',
      '/images/services/ux-ui-design-3.png',
      '/images/services/ux-ui-design-4.png'
    ]
  },
  // {
  //   id: '4',
  //   text: 'Промышленный дизайн',
  //   link: '/services/industrial-design.png',
  //   tags: [],
  //   images: [
  //     '/images/services/graphical-design.png',
  //     '/images/services/ux-ui-design-2.png',
  //     '/images/services/ux-ui-design-3.png',
  //     '/images/services/ux-ui-design-4.png'
  //   ]
  // },
  {
    id: '5',
    text: 'Motion и 3D',
    link: '/search?tags=3D%2Cmotion',
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
    link: '/search?tags=fotosessii%2Creklamnaya-retush%2Cphoto',
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
    link: '/search?tags=video',
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
    link: '/search',
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
