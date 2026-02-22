import { TEAM_IMG_URL } from '@core/config/paths';

interface Socials {
  href: string;
  name: string;
}

interface TeamElement {
  description: string;
  fullsizeImage: string;
  images: string[];
  gif?: string;
  name: string;
  position: string;
  slug: string;
  socials: Socials[];
}

export type TeamMember = TeamElement;

export type TeamMemberSlug = (typeof teamArray)[number]['slug'];

const teamArray = [
  {
    slug: 'konstantin-graphic-designer',
    name: 'Константин',
    position: 'Граф дизайнер',
    images: [`${TEAM_IMG_URL}/konstantin.png`, `${TEAM_IMG_URL}/egor.png`],
    fullsizeImage: `${TEAM_IMG_URL}/full-size/konstantin.png`,
    description:
      'Работает в индустрии коммуникаций с 2003 года и успел погрузиться практически во все ее сферы: ATL, BTL, Media, PR, Event. С 2006 года — в брендинге. Ведет собственный проект о рекламе в Центральной Азии — AdAsia, выступает сопродюсером фестиваля Red Jolbors Fest. Неоднократный победитель креативных фестивалей различного уровня, включая Cannes Lion',
    socials: [
      {
        name: 'vk',
        href: 'https://vk.com/konstantin_1',
      },
      {
        name: 'telegram',
        href: 'https://t.me/konstantin_1',
      },
    ],
  },
  {
    slug: 'egor-3d-specialist',
    name: 'Егор',
    position: '3d специалист',
    images: [`${TEAM_IMG_URL}/egor.png`],
    fullsizeImage: `${TEAM_IMG_URL}/full-size/egor.png`,
    description:
      'Работает в индустрии коммуникаций с 2003 года и успел погрузиться практически во все ее сферы: ATL, BTL, Media, PR, Event. С 2006 года — в брендинге. Ведет собственный проект о рекламе в Центральной Азии — AdAsia, выступает сопродюсером фестиваля Red Jolbors Fest. Неоднократный победитель креативных фестивалей различного уровня, включая Cannes Lion',
    socials: [
      {
        name: 'vk',
        href: 'https://vk.com/konstantin_1',
      },
      { name: 'whatsapp', href: 'https://t.me/konstantin_1' },
    ],
  },
  {
    slug: 'polina-web-designer',
    name: 'Полина',
    position: 'Веб-дизайнер',
    images: [`${TEAM_IMG_URL}/wooman.png`],
    fullsizeImage: `${TEAM_IMG_URL}/full-size/polina.png`,
    description:
      'Работает в индустрии коммуникаций с 2003 года и успел погрузиться практически во все ее сферы: ATL, BTL, Media, PR, Event. С 2006 года — в брендинге. Ведет собственный проект о рекламе в Центральной Азии — AdAsia, выступает сопродюсером фестиваля Red Jolbors Fest. Неоднократный победитель креативных фестивалей различного уровня, включая Cannes Lion',
    socials: [
      {
        name: 'vk',
        href: 'https://vk.com/konstantin_1',
      },
      { name: 'whatsapp', href: 'https://t.me/konstantin_1' },
    ],
  },
  {
    slug: 'egor-photographer',
    name: 'Егор',
    position: 'Фотограф',
    images: [`${TEAM_IMG_URL}/egor.png`],
    fullsizeImage: `${TEAM_IMG_URL}/full-size/polina.png`,
    description:
      'Работает в индустрии коммуникаций с 2003 года и успел погрузиться практически во все ее сферы: ATL, BTL, Media, PR, Event. С 2006 года — в брендинге. Ведет собственный проект о рекламе в Центральной Азии — AdAsia, выступает сопродюсером фестиваля Red Jolbors Fest. Неоднократный победитель креативных фестивалей различного уровня, включая Cannes Lion',
    socials: [
      {
        name: 'vk',
        href: 'https://vk.com/konstantin_1',
      },
      { name: 'whatsapp', href: ' http s ://t.me/konstantin_1' },
    ],
  },
  {
    slug: 'polina-customer-support',
    name: 'Полина',
    position: 'Поддержка',
    images: [`${TEAM_IMG_URL}/wooman.png`],
    fullsizeImage: `${TEAM_IMG_URL}/full-size/polina.png`,
    description:
      'Работает в индустрии коммуникаций с 2003 года и успел погрузиться практически во все ее сферы: ATL, BTL, Media, PR, Event. С 2006 года — в брендинге. Ведет собственный проект о рекламе в Центральной Азии — AdAsia, выступает сопродюсером фестиваля Red Jolbors Fest. Неоднократный победитель креативных фестивалей различного уровня, включая Cannes Lion',
    socials: [
      {
        name: 'vk',
        href: 'https://vk.com/konstantin_1',
      },
      { name: 'whatsapp', href: 'https://t.me/konstantin_1' },
    ],
  },
] as const satisfies readonly TeamElement[];

export const team = teamArray.reduce(
  (acc, member) => {
    acc[member.slug] = member;
    return acc;
  },
  {} as Record<TeamMemberSlug, TeamMember>,
);
