import type { Tag } from './tags';

interface ServiceElement {
  images: string[];
  isNew: boolean;
  link: string;
  slug: string;
  tags: Tag['slug'][];
  text: string;
}

export type Service = typeof services[number];

export const services = [
  {
    slug: 'ux-ui-design',
    text: 'UX/UI дизайн',
    link: '/search?tags=ux-ui',
    tags: ['ux-ui'],
    isNew: false,
    images: [
      '/images/services/ux-ui-design-1.png',
      '/images/services/ux-ui-design-2.png',
      '/images/services/ux-ui-design-3.png',
      '/images/services/ux-ui-design-4.png'
    ]
  },
  {
    slug: 'graphic-design',
    text: 'Графический дизайн',
    link: '/search?tags=vektornaya-graphika%2Clogotypes',
    tags: ['logotypes', 'branding'],
    isNew: false,
    images: [
      '/images/services/graphical-design.png',
      '/images/services/ux-ui-design-2.png',
      '/images/services/ux-ui-design-3.png',
      '/images/services/ux-ui-design-4.png'
    ]
  },
  {
    slug: 'branding-i-aydentika',
    text: 'Брендинг и айдентика',
    link: '/search?tags=branding%2Caydentika',
    tags: ['branding', 'aydentika'],
    isNew: false,
    images: [
      '/images/services/graphical-design.png',
      '/images/services/ux-ui-design-2.png',
      '/images/services/ux-ui-design-3.png',
      '/images/services/ux-ui-design-4.png'
    ]
  },
  {
    slug: 'motion-i-3d',
    text: 'Motion и 3D',
    link: '/search?tags=3D%2Cmotion',
    tags: ['motion', '3D'],
    isNew: false,
    images: [
      '/images/services/motion.png',
      '/images/services/ux-ui-design-2.png',
      '/images/services/ux-ui-design-3.png',
      '/images/services/ux-ui-design-4.png'
    ]
  },
  {
    slug: 'fotosessii-i-retush',
    text: 'Фотосессии и ретушь',
    link: '/search?tags=fotosessii%2Creklamnaya-retush%2Cphoto',
    tags: ['fotosessii', 'reklamnaya-retush', 'photo'],
    isNew: false,
    images: [
      '/images/services/photoshoots.png',
      '/images/services/ux-ui-design-2.png',
      '/images/services/ux-ui-design-3.png',
      '/images/services/ux-ui-design-4.png'
    ]
  },
  {
    slug: 'video-production',
    text: 'Видео-продакшн',
    link: '/search?tags=video',
    tags: ['video'],
    isNew: false,
    images: [
      '/images/services/ux-ui-design-1.png',
      '/images/services/ux-ui-design-2.png',
      '/images/services/ux-ui-design-3.png',
      '/images/services/ux-ui-design-4.png'
    ]
  },
  {
    slug: 'vypusknye-albumy',
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
] as const satisfies readonly ServiceElement[];
