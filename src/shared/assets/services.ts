import type { Tag } from './tags';

interface ServiceElement {
  images: string[];
  isNew: boolean;
  slug: string;
  tags: Tag['slug'][];
  text: string;
}

export type Service = typeof services[number];

export const services = [
  {
    slug: 'ux-ui-design',
    text: 'UX/UI дизайн',
    tags: ['ux-ui'],
    isNew: false,
    images: []
  },
  {
    slug: 'graphic-design',
    text: 'Графический дизайн',
    tags: ['logotypes', 'branding'],
    isNew: false,
    images: []
  },
  {
    slug: 'branding-i-aydentika',
    text: 'Брендинг и айдентика',
    tags: ['branding', 'aydentika'],
    isNew: false,
    images: []
  },
  {
    slug: 'motion-i-3d',
    text: 'Motion и 3D',
    tags: ['motion', '3D'],
    isNew: false,
    images: []
  },
  {
    slug: 'fotosessii-i-retush',
    text: 'Фотосессии и ретушь',
    tags: ['fotosessii', 'reklamnaya-retush', 'photo'],
    isNew: false,
    images: []
  },
  {
    slug: 'video-production',
    text: 'Видео-продакшн',
    tags: ['video'],
    isNew: false,
    images: []
  },
  {
    slug: 'vypusknye-albumy',
    text: 'Выпускные альбомы',
    isNew: true,
    tags: [],
    images: [
      '/images/services/albums.png'
    ]
  }
] as const satisfies readonly ServiceElement[];
