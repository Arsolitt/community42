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
    slug: "ux-ui-digital-products",
    text: "UX/UI и цифровые продукты",
    tags: ["ux-ui"],
    isNew: false,
    images: [
      `${SERVICES_IMG_URL}/fallback.png`
    ]
  },
  {
    slug: "branding-i-aydentika",
    text: "Брендинг и айдентика",
    tags: ["identity"],
    isNew: false,
    images: [
      `${SERVICES_IMG_URL}/fallback.png`
    ]
  },
  {
    slug: "graphic-design",
    text: "Графический дизайн",
    tags: ["logotypes", "graphics-illustration"],
    isNew: false,
    images: [
      `${SERVICES_IMG_URL}/fallback.png`
    ]
  },
  {
    slug: "industrial-design",
    text: "Промышленный дизайн",
    isNew: false,
    tags: [],
    images: [
      `${SERVICES_IMG_URL}/fallback.png`
    ]
  },
  {
    slug: "motion-i-3d",
    text: "Motion и 3D",
    tags: ["motion", "3d"],
    isNew: false,
    images: [
      `${SERVICES_IMG_URL}/fallback.png`
    ]
  },
  {
    slug: "photo-video",
    text: "Фото и видео",
    tags: ["commercial-photo", "commercial-video"],
    isNew: false,
    images: [
      `${SERVICES_IMG_URL}/fallback.png`
    ]
  },

] as const satisfies readonly ServiceElement[];

export const services = servicesArray.reduce((acc, service) => {
  acc[service.slug] = service;
  return acc;
}, {} as Record<ServiceSlug, Service>);
