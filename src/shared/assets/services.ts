export interface Service {
  id: number;
  image: string;
  text: string;
  link: string;
  isNew?: boolean
  images: string[]
}

export const services: Service[] = [
  {
    id: 1,
    image: "/images/services/ux-ui-design-1.png",
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
    image: "/images/services/graphical-design.png",
    text: "Графический дизайн",
    link: "/services/graphical-design",
    images: []
  },
  {
    id: 3,
    image: "/images/services/graphical-design.png",
    text: "Брендинг и айдентика",
    link: "/services/branding-and-identity",
    images: []
  },
  {
    id: 4,
    image: "/images/services/graphical-design.png",
    text: "Промышленный дизайн",
    link: "/services/industrial-design.png",
    images: []
  },
  {
    id: 5,
    image: "/images/services/motion.png",
    text: "Motion и 3D",
    link: "/services/motion",
    images: []
  },
  {
    id: 6,
    image: "/images/services/photoshoots.png",
    text: "Фотосессии и ретушь",
    link: "/services/photoshoots",
    images: []
  },
  {
    id: 7,
    image: "/images/services/ux-ui-design.png",
    text: "Видео-продакшн",
    link: "/services/video-production",
    images: []
  },
  {
    id: 8,
    image: "/images/services/albums.png",
    text: "Выпускные альбомы",
    link: "/services/albums",
    isNew: true,
    images: []
  },
];
