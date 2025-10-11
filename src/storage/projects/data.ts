import type { TagWithPriority } from "@storage/tags";
import type { TeamMemberWithRole } from "@storage/team";

import { PROJECT_IMG_URL } from "@core/config/paths";
import { teamMemberWithRole } from "@storage/team";

import { videoDlyaNovojKosmicheskojTemyOformleniyaLiceya } from "./data/3d/3d-video-dlya-novoj-kosmicheskoj-temy-oformleniya-liceya-23";
import { rebrendingProizvoditelyaElektroshhitovojProdukciiElektrokomplekt } from "./data/aydentika/rebrending-proizvoditelya-elektroshhitovoj-produkcii-elektrokomplekt";
import { brendingStomatologiiEdemika } from "./data/branding/brending-stomatologii-edemika";
import { logotipMagazinaMonobuketovModo } from "./data/logotypes/logotip-magazina-monobuketov-modo";

export type ProjectCollaborator = TeamMemberWithRole | {
  role: string;
  name: string;
  link: string;
};

export interface ProjectElement {
  collaborators: ProjectCollaborator[];
  creationTimeText: string;
  date: string;
  image: string;
  name: string;
  slug: string;
  summary: string;
  tags: TagWithPriority[];
}

export type ProjectSlug = (typeof projectsArray)[number]["slug"];

export type ProjectTag = (typeof projectsArray)[number]["tags"][number];

export type Project = (typeof projectsArray)[number];

const projectsArray = [
  logotipMagazinaMonobuketovModo,
  videoDlyaNovojKosmicheskojTemyOformleniyaLiceya,
  rebrendingProizvoditelyaElektroshhitovojProdukciiElektrokomplekt,
  brendingStomatologiiEdemika,
  {
    name: "Фирменные Motion-видео для стоматологии «Эдемика»",
    date: "10.10.2024",
    slug: "firmennye-motion-video-dlya-stomatologii-edemika",
    summary: "Краткое описание проекта, бла-бла-бла, оно должно быть не слишком кратким и не слишком длинным",
    image: `${PROJECT_IMG_URL}/firmennye-motion-video-dlya-stomatologii-edemika/main.webp`,
    creationTimeText: "Создано за 10 дней",
    collaborators: [
      teamMemberWithRole("konstantin-graphic-designer", "Руководитель")
    ],
    tags: [
      {
        slug: "motion",
        text: "Motion",
        priority: 2
      },
      {
        slug: "beauty-medicine",
        text: "Бьюти и медицина",
        priority: 1
      }
    ]
  },
  {
    name: "Сайт стоматологии «Эдемика»",
    date: "20.12.2024",
    slug: "sait-stomatologii-edemika",
    summary: "Краткое описание проекта, бла-бла-бла, оно должно быть не слишком кратким и не слишком длинным",
    image: `${PROJECT_IMG_URL}/sait-stomatologii-edemika/main.webp`,
    creationTimeText: "Создано за 10 дней",
    collaborators: [
      teamMemberWithRole("konstantin-graphic-designer", "Руководитель")
    ],
    tags: [
      {
        slug: "ux-ui",
        text: "UX/UI",
        priority: 3
      },
      {
        slug: "video",
        text: "Видео",
        priority: 1
      },
      {
        slug: "photo",
        text: "Фото",
        priority: 1
      },
      {
        slug: "beauty-medicine",
        text: "Бьюти и медицина",
        priority: 1
      }
    ]
  },
  {
    name: "Система подарочных сертификатов для стоматологии «Эдемика»",
    date: "15.02.2025",
    slug: "sistema-podarochnyh-sertifikatov-dlya-stomatologii-edemika",
    summary: "Краткое описание проекта, бла-бла-бла, оно должно быть не слишком кратким и не слишком длинным",
    image: `${PROJECT_IMG_URL}/sistema-podarochnyh-sertifikatov-dlya-stomatologii-edemika/main.webp`,
    creationTimeText: "Создано за 10 дней",
    collaborators: [
      teamMemberWithRole("konstantin-graphic-designer", "Руководитель")
    ],
    tags: [
      {
        slug: "branding",
        text: "Брендинг",
        priority: 1
      },
      {
        slug: "ux-ui",
        text: "UX/UI",
        priority: 2
      },
      {
        slug: "beauty-medicine",
        text: "Бьюти и медицина",
        priority: 1
      }
    ]
  },
  {
    name: "Навигация и проработка зоны отдыха в стоматологии «Эдемика»",
    date: "01.10.2024",
    slug: "navigatsiya-i-prorabotka-zon-otdyha-v-stomatologii-edemika",
    summary: "Краткое описание проекта, бла-бла-бла, оно должно быть не слишком кратким и не слишком длинным",
    image: `${PROJECT_IMG_URL}/navigatsiya-i-prorabotka-zon-otdyha-v-stomatologii-edemika/main.webp`,
    creationTimeText: "Создано за 10 дней",
    collaborators: [
      teamMemberWithRole("konstantin-graphic-designer", "Руководитель"),
      teamMemberWithRole("polina-web-designer", "Дизайнер")
    ],
    tags: [
      {
        slug: "branding",
        text: "Брендинг",
        priority: 1
      },
      {
        slug: "aydentika",
        text: "Айдентика",
        priority: 2
      },
      {
        slug: "beauty-medicine",
        text: "Бьюти и медицина",
        priority: 1
      }
    ]
  },

  {
    name: "Видео для магазина монобукетов Modo",
    date: "28.06.2024",
    slug: "video-dlya-magazina-monobuketov-modo",
    summary: "Краткое описание проекта, бла-бла-бла, оно должно быть не слишком кратким и не слишком длинным",
    image: `${PROJECT_IMG_URL}/video-dlya-magazina-monobuketov-modo/main.webp`,
    creationTimeText: "Создано за 10 дней",
    collaborators: [
      teamMemberWithRole("konstantin-graphic-designer", "Руководитель")
    ],
    tags: [
      {
        slug: "video",
        text: "Видео",
        priority: 2
      },
      {
        slug: "flowers",
        text: "Цветы",
        priority: 1
      }
    ]
  },
  {
    name: "Айдентика сервиса доставки автомобилей из Японии «Лайкмобиль»",
    date: "05.01.2025",
    slug: "aydentika-servisa-dostavki-avtomobilej-iz-yaponi-likemobil",
    summary: "Краткое описание проекта, бла-бла-бла, оно должно быть не слишком кратким и не слишком длинным",
    image: `${PROJECT_IMG_URL}/aydentika-servisa-dostavki-avtomobilej-iz-yaponi-likemobil/main.webp`,
    creationTimeText: "Создано за 10 дней",
    collaborators: [
      teamMemberWithRole("konstantin-graphic-designer", "Руководитель")
    ],
    tags: [
      {
        slug: "branding",
        text: "Брендинг",
        priority: 1
      },
      {
        slug: "aydentika",
        text: "Айдентика",
        priority: 2
      },
      {
        slug: "logotypes",
        text: "Логотипы",
        priority: 1
      },
      {
        slug: "motion",
        text: "Motion",
        priority: 1
      }
    ]
  },
  {
    name: "Лэндинг услуг по Видеонаблюдению для интернет-провайдера Goodline бизнес",
    date: "22.03.2024",
    slug: "landing-uslug-po-videonablyudeniyu-dlya-internet-provaydera-goodline-biznes",
    summary: "Краткое описание проекта, бла-бла-бла, оно должно быть не слишком кратким и не слишком длинным",
    image: `${PROJECT_IMG_URL}/landing-uslug-po-videonablyudeniyu-dlya-internet-provaydera-goodline-biznes/main.webp`,
    creationTimeText: "Создано за 10 дней",
    collaborators: [
      teamMemberWithRole("konstantin-graphic-designer", "Руководитель")
    ],
    tags: [
      {
        slug: "ux-ui",
        text: "UX/UI",
        priority: 1
      }
    ]
  },
  {
    name: "Оформления для соц-сетей интернет-провайдера Goodline бизнес",
    date: "06.03.2024",
    slug: "oformleniya-dlya-soc-setej-internet-provajdera-goodline-biznes",
    summary: "Краткое описание проекта, бла-бла-бла, оно должно быть не слишком кратким и не слишком длинным",
    image: `${PROJECT_IMG_URL}/oformleniya-dlya-soc-setej-internet-provajdera-goodline-biznes/main.webp`,
    creationTimeText: "Создано за 10 дней",
    collaborators: [
      teamMemberWithRole("konstantin-graphic-designer", "Руководитель")
    ],
    tags: [
      {
        slug: "vektornaya-graphika",
        text: "Векторная графика",
        priority: 1
      }
    ]
  },
  {
    name: "Фирменные пакеты для интернет-провайдера Goodline бизнес",
    date: "06.03.2024",
    slug: "firmennye-pakety-dlya-internet-provaydera-goodline-biznes",
    summary: "Краткое описание проекта, бла-бла-бла, оно должно быть не слишком кратким и не слишком длинным",
    image: `${PROJECT_IMG_URL}/firmennye-pakety-dlya-internet-provaydera-goodline-biznes/main.webp`,
    creationTimeText: "Создано за 10 дней",
    collaborators: [
      teamMemberWithRole("konstantin-graphic-designer", "Руководитель")
    ],
    tags: [
      {
        slug: "vektornaya-graphika",
        text: "Векторная графика",
        priority: 1
      }
    ]
  },
  {
    name: "Логотип научно-исследовательской эстафеты «По следам Чихачёва»",
    date: "28.03.2021",
    slug: "logotip-nauchno-issledovatelьskoj-estafety-po-sledam-chihachyova",
    summary: "Краткое описание проекта, бла-бла-бла, оно должно быть не слишком кратким и не слишком длинным",
    image: `${PROJECT_IMG_URL}/logotip-nauchno-issledovatelьskoj-estafety-po-sledam-chihachyova/main.webp`,
    creationTimeText: "Создано за 10 дней",
    collaborators: [
      teamMemberWithRole("konstantin-graphic-designer", "Руководитель")
    ],
    tags: [
      {
        slug: "logotypes",
        text: "Логотипы",
        priority: 1
      }
    ]
  },
  {
    name: "Сувенир-иллюстрация карта Кузбасса для Visit Kuzbass",
    date: "12.06.2022",
    slug: "suvenir-illyustraciya-karta-kuzbassa-dlya-visit-kuzbass",
    summary: "Краткое описание проекта, бла-бла-бла, оно должно быть не слишком кратким и не слишком длинным",
    image: `${PROJECT_IMG_URL}/suvenir-illyustraciya-karta-kuzbassa-dlya-visit-kuzbass/main.webp`,
    creationTimeText: "Создано за 10 дней",
    collaborators: [
      teamMemberWithRole("konstantin-graphic-designer", "Руководитель")
    ],
    tags: [
      {
        slug: "vektornaya-graphika",
        text: "Векторная графика",
        priority: 1
      }
    ]
  },
  {
    name: "Фирменное Б-ролл видео для стилиста по бровям",
    date: "12.06.2022",
    slug: "firmennoe-b-roll-video-dlya-stilista-po-brovyam",
    summary: "Краткое описание проекта, бла-бла-бла, оно должно быть не слишком кратким и не слишком длинным",
    image: `${PROJECT_IMG_URL}/firmennoe-b-roll-video-dlya-stilista-po-brovyam/main.webp`,
    creationTimeText: "Создано за 10 дней",
    collaborators: [
      teamMemberWithRole("konstantin-graphic-designer", "Руководитель")
    ],
    tags: [
      {
        slug: "3D",
        text: "3D",
        priority: 1
      },
      {
        slug: "video",
        text: "Видео",
        priority: 2
      },
      {
        slug: "beauty-medicine",
        text: "Бьюти и медицина",
        priority: 1
      }
    ]
  }
] as const satisfies readonly ProjectElement[];

export const projects = projectsArray.reduce((acc, project) => {
  acc[project.slug] = project;
  return acc;
}, {} as Record<ProjectSlug, Project>);
