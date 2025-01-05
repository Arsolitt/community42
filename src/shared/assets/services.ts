export interface Service {
  id: string;
  text: string;
  link: string;
  isNew?: boolean;
  images: string[];
}

export const services: Service[] = [
  {
    id: '019435db-b9e4-7455-8044-74a315471f38',
    text: 'UX/UI дизайн',
    link: '/services/ux-ui-desing',
    images: [
      '/images/services/ux-ui-design-1.png',
      '/images/services/ux-ui-design-2.png',
      '/images/services/ux-ui-design-3.png',
      '/images/services/ux-ui-design-4.png'
    ]
  },
  {
    id: '019435db-d372-70f7-a9b6-6e1179c072a6',
    text: 'Графический дизайн',
    link: '/services/graphical-design',
    images: [
      '/images/services/graphical-design.png',
      '/images/services/ux-ui-design-2.png',
      '/images/services/ux-ui-design-3.png',
      '/images/services/ux-ui-design-4.png'
    ]
  },
  {
    id: '019435db-e434-7388-ae84-43bf91fa5cc3',
    text: 'Брендинг и айдентика',
    link: '/services/branding-and-identity',
    images: [
      '/images/services/graphical-design.png',
      '/images/services/ux-ui-design-2.png',
      '/images/services/ux-ui-design-3.png',
      '/images/services/ux-ui-design-4.png'
    ]
  },
  {
    id: '019435db-f551-79f0-995d-153f237cea7b',
    text: 'Промышленный дизайн',
    link: '/services/industrial-design.png',
    images: [
      '/images/services/graphical-design.png',
      '/images/services/ux-ui-design-2.png',
      '/images/services/ux-ui-design-3.png',
      '/images/services/ux-ui-design-4.png'
    ]
  },
  {
    id: '019435dc-0473-781c-af3c-c9fd29294eec',
    text: 'Motion и 3D',
    link: '/services/motion',
    images: [
      '/images/services/motion.png',
      '/images/services/ux-ui-design-2.png',
      '/images/services/ux-ui-design-3.png',
      '/images/services/ux-ui-design-4.png'
    ]
  },
  {
    id: '019435dc-1813-7511-9a9b-27ae7919684f',
    text: 'Фотосессии и ретушь',
    link: '/services/photoshoots',
    images: [
      '/images/services/photoshoots.png',
      '/images/services/ux-ui-design-2.png',
      '/images/services/ux-ui-design-3.png',
      '/images/services/ux-ui-design-4.png'
    ]
  },
  {
    id: '019435dc-26c2-77b7-9475-4d58fbe8943f',
    text: 'Видео-продакшн',
    link: '/services/video-production',
    images: [
      '/images/services/ux-ui-design-1.png',
      '/images/services/ux-ui-design-2.png',
      '/images/services/ux-ui-design-3.png',
      '/images/services/ux-ui-design-4.png'
    ]
  },
  {
    id: '019435dc-34bf-7cda-9420-43c890a14312',
    text: 'Выпускные альбомы',
    link: '/services/albums',
    isNew: true,
    images: [
      '/images/services/albums.png',
      '/images/services/ux-ui-design-2.png',
      '/images/services/ux-ui-design-3.png',
      '/images/services/ux-ui-design-4.png'
    ]
  }
];
