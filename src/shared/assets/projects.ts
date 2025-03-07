import type { Tag } from '@/shared/assets/tags';
import type { Member } from '@/shared/assets/team';

interface ProjectElement {
  collaborators: Member['slug'][];
  date: string;
  image: string;
  likes: number;
  link: string;
  name: string;
  slug: string;
  summary: string;
  tags: ProjectTag[];
}

export type Project = typeof projects[number];

type ProjectTag = Tag & {
  priority: number;
};

const PROJECTS_PATH = '/projects';

export const projects = [
  {
    name: 'Логотип магазина монобукетов Modo',
    date: '28.06.2024',
    slug: 'logotip-magazina-monobuketov-modo',
    summary: 'Modo – это новый цветочный сервис в Кемерово, ориентированный на моно (иногда и дуо) букеты. Ребята делают монобукеты с акцентом на цветы в категории премиум и люкс. Их магазин базируется в интернете, а заказ можно делать в мессенджерах Телграм, Вотсап и по телефону. Наша задача была в короткие сроки создать логотип, определииться с графическими элементами и создать некоторые шаблоны для оформления сторис, постов, рекламных банеров и т.п.',
    likes: 10,
    image: '/images/projects/logotip-magazina-monobuketov-modo/main.webp',
    link: `${PROJECTS_PATH}/logotip-magazina-monobuketov-modo`,
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        slug: 'logotypes',
        text: 'Логотипы',
        priority: 3
      },
      {
        slug: 'photo',
        text: 'Фото',
        priority: 1
      },
      {
        slug: 'flowers',
        text: 'Цветы',
        priority: 1
      }
    ]
  },
  {
    name: '3D-видео для новой космической темы оформления Лицея№23',
    date: '01.09.2024',
    slug: '3d-video-dlya-novoj-kosmicheskoj-temy-oformleniya-liceya-23',
    summary: 'Краткое описание проекта, бла-бла-бла, оно должно быть не слишком кратким и не слишком длинным',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: `${PROJECTS_PATH}/3d-video-dlya-novoj-kosmicheskoj-temy-oformleniya-liceya-23`,
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        slug: 'motion',
        text: 'Motion',
        priority: 1
      },
      {
        slug: '3D',
        text: '3D',
        priority: 2
      }
    ]
  },
  {
    name: 'Ребрендинг производителя электрощитовой продукции «Электрокомплект»',
    date: '31.08.2024',
    slug: 'rebrending-proizvoditelya-elektroshhitovoj-produkcii-elektrokomplekt',
    summary: 'Краткое описание проекта, бла-бла-бла, оно должно быть не слишком кратким и не слишком длинным',
    likes: 10,
    image: '/images/projects/rebrending-proizvoditelya-elektroshhitovoj-produkcii-elektrokomplekt/main.png',
    link: `${PROJECTS_PATH}/rebrending-proizvoditelya-elektroshhitovoj-produkcii-elektrokomplekt`,
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        slug: 'aydentika',
        text: 'Айдентика',
        priority: 2
      },
      {
        slug: 'logotypes',
        text: 'Логотипы',
        priority: 1
      },
      {
        slug: 'motion',
        text: 'Motion',
        priority: 1
      }
    ]
  },
  {
    name: 'Брендинг стоматологии «Эдемика»',
    date: '15.09.2024',
    slug: 'brending-stomatologii-edemika',
    summary: 'Краткое описание проекта, бла-бла-бла, оно должно быть не слишком кратким и не слишком длинным',
    likes: 10,
    image: '/images/projects/brending-stomatologii-edemika/main.png',
    link: `${PROJECTS_PATH}/brending-stomatologii-edemika`,
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        slug: 'branding',
        text: 'Брендинг',
        priority: 2
      },
      {
        slug: 'aydentika',
        text: 'Айдентика',
        priority: 1
      },
      {
        slug: 'ux-ui',
        text: 'UX/UI',
        priority: 1
      },
      {
        slug: 'logotypes',
        text: 'Логотипы',
        priority: 1
      },
      {
        slug: 'motion',
        text: 'Motion',
        priority: 1
      },
      {
        slug: '3D',
        text: '3D',
        priority: 1
      },
      {
        slug: 'video',
        text: 'Видео',
        priority: 1
      },
      {
        slug: 'photo',
        text: 'Фото',
        priority: 1
      }
    ]
  },
  {
    name: 'Project 5',
    date: '01.09.2024',
    slug: 'project-5',
    summary: 'Краткое описание проекта, бла-бла-бла, оно должно быть не слишком кратким и не слишком длинным',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: `${PROJECTS_PATH}/project-5`,
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        slug: 'aydentika',
        text: 'Айдентика',
        priority: 1
      }
    ]
  },
  {
    name: 'Project 6',
    date: '01.09.2024',
    slug: 'project-6',
    summary: 'Краткое описание проекта, бла-бла-бла, оно должно быть не слишком кратким и не слишком длинным',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: `${PROJECTS_PATH}/project-6`,
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        slug: 'motion',
        text: 'Motion',
        priority: 1
      }
    ]
  },
  {
    name: 'Project 7',
    date: '01.09.2024',
    slug: 'project-7',
    summary: 'Краткое описание проекта, бла-бла-бла, оно должно быть не слишком кратким и не слишком длинным',
    likes: 10,
    image: '/images/projects/project-1.png',
    link: `${PROJECTS_PATH}/project-7`,
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        slug: '3D',
        text: '3D',
        priority: 1
      }
    ]
  },
  {
    name: 'Графическая выставка в Севастополе',
    date: '01.09.2024',
    slug: 'project-8',
    summary: 'Краткое описание проекта, бла-бла-бла, оно должно быть не слишком кратким и не слишком длинным',
    likes: 15,
    image: '/images/last-project.png',
    link: '/project-1',
    collaborators: ['polina-customer-support', 'egor-3d-specialist'],
    tags: [
      {
        slug: '3D',
        text: '3D',
        priority: 1
      },
      {
        slug: 'motion',
        text: 'Motion',
        priority: 1
      },
      {
        slug: 'photo',
        text: 'Фото',
        priority: 2
      }
    ]
  }
] as const satisfies readonly ProjectElement[];
