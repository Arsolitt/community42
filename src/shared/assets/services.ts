export interface Service {
  id: number;
  text: string;
  link: string;
  isNew?: boolean
  images: string[]
}

export const services: Service[] = [
  {
    id: 1,
    text: "UX/UI дизайн",
    link: "/services/ux-ui-desing",
    images: [
      "/images/services/ux-ui-design-1.png",
      "/images/services/ux-ui-design-2.png",
      "/images/services/ux-ui-design-3.png",
      "/images/services/ux-ui-design-4.png",
    ]
  },
  {
    id: 2,
    text: "Графический дизайн",
    link: "/services/graphical-design",
    images: [
      "/images/services/graphical-design.png",
      "/images/services/ux-ui-design-2.png",
      "/images/services/ux-ui-design-3.png",
      "/images/services/ux-ui-design-4.png",
    ]
  },
  {
    id: 3,
    text: "Брендинг и айдентика",
    link: "/services/branding-and-identity",
    images: [
      "/images/services/graphical-design.png",
      "/images/services/ux-ui-design-2.png",
      "/images/services/ux-ui-design-3.png",
      "/images/services/ux-ui-design-4.png",
    ]
  },
  {
    id: 4,
    text: "Промышленный дизайн",
    link: "/services/industrial-design.png",
    images: [
      "/images/services/graphical-design.png",
      "/images/services/ux-ui-design-2.png",
      "/images/services/ux-ui-design-3.png",
      "/images/services/ux-ui-design-4.png",
    ]
  },
  {
    id: 5,
    text: "Motion и 3D",
    link: "/services/motion",
    images: [
      "/images/services/motion.png",
      "/images/services/ux-ui-design-2.png",
      "/images/services/ux-ui-design-3.png",
      "/images/services/ux-ui-design-4.png",
    ]
  },
  {
    id: 6,
    text: "Фотосессии и ретушь",
    link: "/services/photoshoots",
    images: [
      "/images/services/photoshoots.png",
      "/images/services/ux-ui-design-2.png",
      "/images/services/ux-ui-design-3.png",
      "/images/services/ux-ui-design-4.png",
    ]
  },
  {
    id: 7,
    text: "Видео-продакшн",
    link: "/services/video-production",
    images: [
      "/images/services/ux-ui-design-1.png",
      "/images/services/ux-ui-design-2.png",
      "/images/services/ux-ui-design-3.png",
      "/images/services/ux-ui-design-4.png",
    ]
  },
  {
    id: 8,
    text: "Выпускные альбомы",
    link: "/services/albums",
    isNew: true,
    images: [
      "/images/services/albums.png",
      "/images/services/ux-ui-design-2.png",
      "/images/services/ux-ui-design-3.png",
      "/images/services/ux-ui-design-4.png",
    ]
  },
];
