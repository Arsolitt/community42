import { SERVICES_IMG_URL } from '@/core/config/paths';

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
    images: [
      `${SERVICES_IMG_URL}/albums.png`
    ]
  },
  {
    slug: 'graphic-design',
    text: 'Графический дизайн',
    tags: ['logotypes', 'branding'],
    isNew: false,
    images: [
      `${SERVICES_IMG_URL}/albums.png`
    ]
  },
  {
    slug: 'branding-i-aydentika',
    text: 'Брендинг и айдентика',
    tags: ['branding', 'aydentika'],
    isNew: false,
    images: [
      `${SERVICES_IMG_URL}/albums.png`
    ]
  },
  {
    slug: 'motion-i-3d',
    text: 'Motion и 3D',
    tags: ['motion', '3D'],
    isNew: false,
    images: [
      `${SERVICES_IMG_URL}/albums.png`
    ]
  },
  {
    slug: 'fotosessii-i-retush',
    text: 'Фотосессии и ретушь',
    tags: ['fotosessii', 'reklamnaya-retush', 'photo'],
    isNew: false,
    images: [
      `${SERVICES_IMG_URL}/albums.png`
    ]
  },
  {
    slug: 'video-production',
    text: 'Видео-продакшн',
    tags: ['video'],
    isNew: false,
    images: [
      `${SERVICES_IMG_URL}/albums.png`
    ]
  },
  {
    slug: 'vypusknye-albumy',
    text: 'Выпускные альбомы',
    isNew: true,
    tags: [],
    images: [
      `${SERVICES_IMG_URL}/albums.png`
    ]
  }
] as const satisfies readonly ServiceElement[];
