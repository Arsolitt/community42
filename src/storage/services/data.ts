import type { TagSlug } from "@storage/tags";

import { SERVICES_IMG_URL } from "@core/config/paths";

interface ServiceElement {
  images: string[];
  isNew: boolean;
  slug: string;
  tags: TagSlug[];
  text: string;
}

export type Service = typeof servicesArray[number];

export type ServiceSlug = typeof servicesArray[number]["slug"];

export const servicesArray = [
  {
    slug: "ux-ui-design",
    text: "UX/UI дизайн",
    tags: ["ux-ui"],
    isNew: false,
    images: [
      `${SERVICES_IMG_URL}/albums.png`
    ]
  },
  {
    slug: "graphic-design",
    text: "Графический дизайн",
    tags: ["logotypes", "vektornaya-graphika"],
    isNew: false,
    images: [
      `${SERVICES_IMG_URL}/albums.png`
    ]
  },
  {
    slug: "branding-i-aydentika",
    text: "Брендинг и айдентика",
    tags: ["branding", "aydentika"],
    isNew: false,
    images: [
      `${SERVICES_IMG_URL}/albums.png`
    ]
  },
  {
    slug: "motion-i-3d",
    text: "Motion и 3d",
    tags: ["motion", "3d"],
    isNew: false,
    images: [
      `${SERVICES_IMG_URL}/albums.png`
    ]
  },
  {
    slug: "fotosessii-i-retush",
    text: "Фотосессии и ретушь",
    tags: ["fotosessii", "reklamnaya-retush", "photo"],
    isNew: false,
    images: [
      `${SERVICES_IMG_URL}/albums.png`
    ]
  },
  {
    slug: "video-production",
    text: "Видео-продакшн",
    tags: ["video"],
    isNew: false,
    images: [
      `${SERVICES_IMG_URL}/albums.png`
    ]
  },
  {
    slug: "vypusknye-albumy",
    text: "Выпускные альбомы",
    isNew: true,
    tags: [],
    images: [
      `${SERVICES_IMG_URL}/albums.png`
    ]
  }
] as const satisfies readonly ServiceElement[];

export const services = servicesArray.reduce((acc, service) => {
  acc[service.slug] = service;
  return acc;
}, {} as Record<ServiceSlug, Service>);
